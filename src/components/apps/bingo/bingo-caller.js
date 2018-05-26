
export default class BingoCaller extends EventEmitter {
    constructor(props) {
        super(props);
        this.state = this.init();
        this.emit("change");
    }

    init(){

        var data = [];
        var length = 75; // user defined length

        for(var i = 1; i <= length; i++) {
            data.push(i);
        }

        data = data.sort(function() {
            return .5 - Math.random();
        });

        return {
            sound: false,
            remaining: data,
            balls: [],
            balls_grouped: {
                B: [],
                I: [],
                N: [],
                G: [],
                O: [],
            },
            balls_group:  [].fill.call({ length: 75 }, 0),
            started: false,
            rate: 5000,
            autoplay: false,
        };
    }

    restart(){
        this.state = this.init();
        this.emit("change");
    }

    speech(word){
        var synth = window.speechSynthesis;
        var utterThis = new SpeechSynthesisUtterance(word);
        synth.speak(utterThis);
    }

    disableSound(){
        this.state.sound = !this.state.sound;
        this.emit("change");
    }

    adjustRate(dir){

        if( dir ){

            if(dir['up']){
                this.state.rate = this.state.rate + 1000;
            }

            if(dir['down']){
                this.state.rate = this.state.rate - 1000;
            }

            this.emit("change");
        }
    }

    add(){

        this.state.started = true;

        if( this.state.remaining.length > 0 ){

            var ball = this.state.remaining.shift();
            var letter = this._checkletter(ball);

            if( this.state.sound ){
                this.speech(letter+ball);
            }

            this.state.balls.push(ball);
            this.state.balls_grouped[letter].push(ball);
            this.state.balls_group[ball] = 1;

            this.emit("change");
        }
    }

    isCalled(number){

        if( number != null && this.state.balls_group[number] ){
            return true;
        }

        return false;
    }

    toggleAutoPlay(){
        console.log( "autoplay");
        this.state.autoplay = !this.state.autoplay;
        this.emit("change");
    }
    getGroupedCalls(){
        return this.state.balls_grouped;
    }

    get(){
        return this.state.balls;
    }

    _checkletter(n){
        var letter;
        if( n <= 75 ){
            letter = "O";
        }
        if( n <= 60 ){
            letter = "G";
        }
        if( n <= 45 ){
            letter = "N";
        }
        if( n <= 30 ){
            letter = "I";
        }
        if( n <= 15 ){
            letter = "B";
        }
        return letter;
    }

}

//usage
//const bingoCaller  = new BingoCaller;


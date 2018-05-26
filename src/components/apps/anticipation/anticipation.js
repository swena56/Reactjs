import React from "react";
import data from './data.js';

export default class Anticipation extends React.Component {
    constructor(){
        super();

        this.state = this.initialState();
        this.checkGuess = this.checkGuess.bind(this);
    }

    initialState() {
        var random_index = Math.floor(Math.random() * data.valid.length-1) + 1;
        var draw_item = data.valid[random_index];
        return {
            name: draw_item.name,
            points: draw_item.points,
            not_draw: [],
            draw: [],
            pause: false,
            delay: 10,
            guess: "",
            strikes: 0,
            invalid: false,
            success: false,
            done: false,
            failed: false,
        };
    }
    componentDidMount() {
        this.setState({not_draw: this.calcWaypoints(this.state.points)});
        this.forceUpdate();
        this.draw();
    }

    checkGuess(event) {
        var input = event.currentTarget.value;

        if( input ){
            this.setState({guess:input, pause: true});

            var n = this.state.name.startsWith(input);
            if( n ){
                if( this.state.name === input ){
                    this.setState({success: true});
                    //let new_state = this.initialState();
                    //console.log(new_state);
                    //this.state = new_state;
                    //this.forceUpdate();
                    //this.setState(new_state);
                }
            } else {

                this.setState({invalid:true});
                setTimeout(function() {

                    this.setState({guess: "", invalid:false, pause: false});
                    var strikes = this.state.strikes++;

                }.bind(this), 1000);


            }

        } else {
            this.setState({guess:input, pause: false});
        }
    }

    draw(){

        var refreshId = setInterval(() => {
                    this.drawNewPoint();

                    if( this.state.not_draw.length <= 0 ){
                        clearInterval(refreshId);
                    }
                    }, this.state.delay);

    }
    drawNewPoint(){

        if( this.state.pause == false ){
            var p = this.state.not_draw.pop();
            var draw = this.state.draw;
            draw.push(p);
            this.setState({draw:draw});
            //this.forceUpdate();
        }
    }

    calcWaypoints(vertices) {
        let size = 50;
        var waypoints = [];
        for (var i = 1; i < vertices.length; i++) {
            var pt0 = vertices[i - 1];
            var pt1 = vertices[i];
            var dx = pt1.x - pt0.x;
            var dy = pt1.y - pt0.y;
            for (var j = 0; j < size; j++) {
                var x = pt0.x + dx * j / size;
                var y = pt0.y + dy * j / size;
                waypoints.push({
                    x: x,
                    y: y
                });
            }
        }
        return (waypoints);
    }

    render() {
        return (
            <div className="container border">

                <h1>Anticipation</h1>

                <input autoFocus onChange={this.checkGuess} value={this.state.guess} type="text"
                       className={"form-control " + (this.state.invalid ? 'animated infinite shake' : '' )}
                       aria-describedby="emailHelp"
                       placeholder="Make a guess"/>

                { (this.state.pause ) ? (<span className="badge badge-info">Paused</span>) : null  }

                { (this.state.success ) ? (<span className="badge badge-success">Success</span>) : null  }
                <div>Strikes: {this.state.strikes}</div>
                <svg width={"100%"} height={"500px"} xmlns="http://www.w3.org/2000/svg">

                    {
                        this.state.draw.map(( value,i ) => {

                        return (
                            <circle key={i} cx={value.x} cy={value.y} r="1"/>
                            );
                        })
                    }

                </svg>

            </div>
        );
    }


}
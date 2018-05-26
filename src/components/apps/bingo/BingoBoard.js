import React from "react";

export default class BingoBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: [],
            marks: [],
            calls: [],
            autoplay:false,
            bingo: false,
        };

        this.checkBingo = this.checkBingo.bind(this);
        this.updateMarks = this.updateMarks.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount(){
        var board = [];
        board.push( _.sample([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],5) );
        board.push( _.sample([16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],5) );
        board.push( _.sample([31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],5) );
        board.push( _.sample([46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],5) );
        board.push( _.sample([61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],5) );

        var transposed = board[0].map(function (col, c) {
            // For each column, iterate all rows
            return board.map(function (row, r) {
                return board[r][c];
            });
        });

        transposed[2][2] = "X";

        var empty_marks = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
        ];

        this.setState({board:transposed, marks: empty_marks });

        //uni directional data flow from store
        var that = this;

        if( bingoCaller ){
            bingoCaller.on("change", () => {

                if( this.state.bingo == false ){
                    this.setState({
                        calls: bingoCaller.get(),
                        autoplay: bingoCaller.state.autoplay,
                    });

                    that.updateMarks();
                }
            });
        }

    }

    clickHandler(event){
        var pos = event.target.id.split("_");

        var x = pos[0],
            y = pos[1];

        var marks = this.state.marks;


        //marks[x][y] = ( marks[x][y] >= 1 ) ? 0 : 1;
        if( bingoCaller && bingoCaller.isCalled(event.target.innerHTML) ){
            marks[x][y] = 1;
        }


        this.setState({marks:marks});

        //this.updateMarks(event.target.innerHTML);
        this.updateMarks();


    }

    updateMarks(){

        var marks = this.state.marks;

        if( this.state.autoplay == true){

            for (var a = 0; a < this.state.board.length; a++) {

                for (var b = 0; b < this.state.board[a].length; b++) {

                    //console.log(this.state.autoplay,this.state.board[a][b]);
                    if(  _.contains(this.state.calls,this.state.board[a][b]) ){

                        marks[a][b] = 1;
                    }
                }
            }
        }

        this.setState({marks:marks});

        this.checkBingo();
    }

    checkBingo(){

        var marks = this.state.marks;

        var transposed = marks[0].map(function (col, c) {
            // For each column, iterate all rows
            return marks.map(function (row, r) {
                return marks[r][c];
            });
        });

        var diagonals = [
            [ marks[0][0], marks[1][1], marks[2][2], marks[3][3], marks[4][4] ],
            [ marks[0][4], marks[1][3], marks[2][2], marks[3][1], marks[4][0] ],
        ];

        var lines = [

            //diagonals
            [ marks[0][0], marks[1][1], marks[2][2], marks[3][3], marks[4][4] ],
            [ marks[0][4], marks[1][3], marks[2][2], marks[3][1], marks[4][0] ],

            //horizonals
            marks[0],
            marks[1],
            marks[2],
            marks[3],
            marks[4],

            //vertical
            [ marks[0][0], marks[1][0], marks[2][0], marks[3][0], marks[4][0] ],
            [ marks[0][1], marks[1][1], marks[2][1], marks[3][1], marks[4][1] ],
            [ marks[0][2], marks[1][2], marks[2][2], marks[3][2], marks[4][2] ],
            [ marks[0][3], marks[1][3], marks[2][3], marks[3][3], marks[4][3] ],
            [ marks[0][4], marks[1][4], marks[2][4], marks[3][4], marks[4][4] ]
        ];

        var  bingo = false;
        for (var i = 0; i < lines.length; i++) {
            if( !!lines[i].reduce(function(a, b){ return ( a === b) ? a : NaN; })){

                //if( this.state.autoplay )

                switch(i) {
                    case 0: marks[0][0] = 2; marks[1][1] = 2; marks[2][2] = 2; marks[3][3] = 2; marks[4][4] = 2; break;
                    case 1: marks[0][4] = 2; marks[1][3] = 2; marks[2][2] = 2; marks[3][1] = 2; marks[4][0] = 2; break;
                    case 2: marks[0] = [2,2,2,2,2]; break;
                    case 3: marks[1] = [2,2,2,2,2]; break;
                    case 4: marks[2] = [2,2,2,2,2]; break;
                    case 5: marks[3] = [2,2,2,2,2]; break;
                    case 6: marks[4] = [2,2,2,2,2]; break;
                    case 7: marks[0][0]=2; marks[1][0]=2; marks[2][0]=2; marks[3][0]=2; marks[4][0]=2; break;
                    case 8: marks[0][1]=2; marks[1][1]=2; marks[2][1]=2; marks[3][1]=2; marks[4][1]=2; break;
                    case 9: marks[0][2]=2; marks[1][2]=2; marks[2][2]=2; marks[3][2]=2; marks[4][2]=2; break;
                    case 10: marks[0][3]=2; marks[1][3]=2; marks[2][3]=2; marks[3][3]=2; marks[4][3]=2; break;
                    case 11: marks[0][4]=2; marks[1][4]=2; marks[2][4]=2; marks[3][4]=2; marks[4][4]=2; break;
                }

                bingo = true;
            }
        }
        //console.log( marks );
        this.setState({bingo: bingo, marks:marks});


        return bingo;
        if(
            !!marks[0].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||
            !!marks[1].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||
            !!marks[2].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||
            !!marks[3].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||
            !!marks[4].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||

            !!transposed[0].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||
            !!transposed[1].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||
            !!transposed[2].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||
            !!transposed[3].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||
            !!transposed[4].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||

            !!diagonals[0].reduce(function(a, b){ return (a === b) ? a : NaN; }) ||
            !!diagonals[1].reduce(function(a, b){ return (a === b) ? a : NaN; })
        ){

            //this.setState({marks:marks});

            return true;
        }

        return false;
    }

    render(){

        var animation = ["bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","jackInTheBox","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp" ];

        return <div id="bingoCard" className={"border " + ( this.state.bingo ? " hasBingo border-success" : "" ) }>
            <div className="table-responsive border">

                <table className="table" >
                    <thead>
                    <tr>
                        <th id="B">B</th>
                        <th id="I">I</th>
                        <th id="N">N</th>
                        <th id="G">G</th>
                        <th id="O">O</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.board.map(( col,x ) => {

                            return (
                                <tr>
                                    {
                                        col.map(( data,y ) => {


                                            var dab_style = "";

                                            if( this.state.marks[x][y] == 2 ){

                                                dab_style = "dabBingo animated tada";

                                            } else if( this.state.marks[x][y] == 1 ){

                                                dab_style = "dab animated tada";

                                            }

                                            return (
                                                <td id={x+"_"+y} value={"dab"} onClick={this.clickHandler} className={dab_style} >{data}</td>
                                            );
                                        })
                                    }

                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    }
}

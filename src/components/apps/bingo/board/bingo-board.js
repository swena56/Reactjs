import React, { Component } from 'react';
import './bingo-style.css';
import { connect } from 'react-redux';

class BingoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.markDab = this.markDab.bind(this);
    }

    render() {
        console.log( this.props.board, this.props.marks);
         var cells_rendered = 0;
        return (
            <div id="bingoCard" className={"border " + ( this.props.bingo ? " hasBingo border-success" : "" ) }>
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
                            this.props.board.map(( col,x ) => {

                                return (
                                    <tr>
                                        {
                                            col.map(( data,y ) => {


                                                var dab_style = "";
                                                if( this.props.marks[x][y] == 2 ){

                                                    dab_style = "dabBingo animated tada";

                                                }
                                                if( this.props.marks[x][y] == 1 ){

                                                    dab_style = "dab animated tada";

                                                }
                                                cells_rendered = cells_rendered + 1;
                                                return (
                                                    <td key={"cell"+cells_rendered} id={x+"_"+y} onClick={this.markDab} className={dab_style} >{data}</td>
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
        )
    }

    markDab(event) {
        var str = event.currentTarget.id;
        this.props.mark(str);
        this.forceUpdate();
    }
}

function mapStateToProps(state){

    return {
        board: state.board,
        marks: state.marks,
        calls: state.calls,
        autoplay: state.autoplay,
        bingo: state.bingo,
    }
}

function mapDispatcherToProps(dispatch){
    return {
        mark: (pos) => { dispatch({type:"MARK",pos: pos}); },
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(BingoBoard);

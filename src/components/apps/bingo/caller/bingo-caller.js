import React from 'react';
import {connect} from "react-redux";

class BingoCaller extends React.Component{
    constructor(props){
        super(props);

        this.start = this.start.bind(this);
        this.addBall = this.addBall.bind(this);
        this.loop = this.loop.bind(this);
        this.restart = this.restart.bind(this);
    }


    start(){
        this.addBall();
    }

    restart(){

    }

    addBall(){

        this.props.fetchBall();
        this.loop();
    }

    loop(){

        setTimeout(function() {
            this.addBall();
        }.bind(this), this.props.rate  );
    }

    render(){

        return  <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2>Bingo Caller</h2>
                    <div className="container">

                        <div className="row">
                            <div className="col">
                                <small>Sound:</small>
                                <input type="checkbox"  className="checkbox-warning-filled"
                                       checked={""+(this.props.sound ? "checked" : "") }/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <small>AutoPlay:</small>
                                <input type="checkbox" checked={""+(this.props.autoplay ? "checked" : "") } />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="input-group number-spinner">
										<span className="input-group-btn data-dwn">
											<button className="btn btn-default btn-info" data-dir="down" onClick={()=>bingoCaller.adjustRate({down:1})}>-</button>
										</span>
                                    <input type="text" className="form-control text-center" value={this.props.rate/1000}/>
                                    <span className="input-group-btn data-up">
											<button className="btn btn-default btn-info" data-dir="up">+</button>
										</span>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col">

                            </div>
                        </div>

                        <div className="row">
                            <div className="col">


                                {
                                    (
                                        this.props.started
                                            ? (<button hidden className="btn btn-primary"onClick={this.restart}> restart </button> )
                                            : (<button className="btn btn-primary"onClick={this.start}> Start </button> )
                                    )

                                }

                            </div>
                        </div>
                        <br/>

                    </div>


                </div>
                <div className="col-md-9">
                    <table className="table">

                        <tr> <span className="small"> <tr id="B">B:</tr></span> {
                            this.props.calls['B'].map(( ball, i ) => {
                                return ( <span className="small"><tr id="B">{(i>0)?",":null}{ball}</tr></span>);
                            })
                        }
                        </tr>

                        <tr> <span className="small"> <tr id="I">I:</tr></span> {
                            this.props.calls['I'].map(( ball, i ) => {
                                return ( <span className="small"><tr id="I">{(i>0)?",":null}{ball}</tr> </span>);
                            })
                        }
                        </tr>

                        <tr> <span className="small"> <tr id="N">N:</tr></span> {
                            this.props.calls['N'].map(( ball, i ) => {
                                return ( <span className="small"><tr id="N">{(i>0)?",":null}{ball}</tr> </span>);
                            })
                        }
                        </tr>

                        <tr> <span className="small"> <tr id="G">G:</tr></span> {
                            this.props.calls['G'].map(( ball, i ) => {
                                return ( <span className="small"><tr id="G">{(i>0)?",":null}{ball}</tr> </span>);
                            })
                        }
                        </tr>

                        <tr> <span className="small"> <tr id="O">O:</tr></span> {
                            this.props.calls['O'].map(( ball, i ) => {
                                return ( <span className="small"><tr id="O">{(i>0)?",":null}{ball}</tr> </span>);
                            })
                        }
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    }
}


function mapStateToProps(state){

    return {
        calls: state.calls,
        autoplay: state.autoplay,
        sound: state.sound,
        rate: state.rate,
        started: state.started,
    }
}

function mapDispatcherToProps(dispatch){
    return {
        fetchBall: () => { dispatch({type:"NEW_BALL"}); },
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(BingoCaller);

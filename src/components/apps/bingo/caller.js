import React from 'react';

export default class Caller extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            calls:  {
                B: [],
                I: [],
                N: [],
                G: [],
                O: [],
            },
            sound: bingoCaller.state.sound,
            rate:bingoCaller.state.rate,
            autoplay:bingoCaller.state.autoplay,
            started: bingoCaller.state.started,
        };

        this.start = this.start.bind(this);
        this.addBall = this.addBall.bind(this);
        this.loop = this.loop.bind(this);
        this.restart = this.restart.bind(this);

        bingoCaller.on("change", () => {
            this.setState({
                calls: bingoCaller.getGroupedCalls(),
                sound: bingoCaller.state.sound,
                autoplay: bingoCaller.state.autoplay,
                started: bingoCaller.state.started,
                rate: bingoCaller.state.rate,
            });
        });
    }

    start(){
        this.addBall();
    }

    restart(){
        bingoCaller.restart();
    }

    addBall(){

        bingoCaller.add();
        this.loop();
    }

    loop(){

        setTimeout(function() {
            this.addBall();
        }.bind(this), this.state.rate  );
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
                                <input type="checkbox" onChange={()=>bingoCaller.disableSound()} className="checkbox-warning-filled"
                                       checked={""+(this.state.sound ? "checked" : "") }/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <small>AutoPlay:</small>
                                <input type="checkbox" checked={""+(this.state.autoplay ? "checked" : "") } onChange={()=>bingoCaller.toggleAutoPlay()}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="input-group number-spinner">
										<span className="input-group-btn data-dwn">
											<button className="btn btn-default btn-info" data-dir="down" onClick={()=>bingoCaller.adjustRate({down:1})}>-</button>
										</span>
                                    <input type="text" className="form-control text-center" value={this.state.rate/1000}/>
                                    <span className="input-group-btn data-up">
											<button className="btn btn-default btn-info" data-dir="up" onClick={()=>bingoCaller.adjustRate({up:1})}>+</button>
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
                                        this.state.started
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
                            this.state.calls['B'].map(( ball, i ) => {
                                return ( <span className="small"><tr id="B">{(i>0)?",":null}{ball}</tr></span>);
                            })
                        }
                        </tr>

                        <tr> <span className="small"> <tr id="I">I:</tr></span> {
                            this.state.calls['I'].map(( ball, i ) => {
                                return ( <span className="small"><tr id="I">{(i>0)?",":null}{ball}</tr> </span>);
                            })
                        }
                        </tr>

                        <tr> <span className="small"> <tr id="N">N:</tr></span> {
                            this.state.calls['N'].map(( ball, i ) => {
                                return ( <span className="small"><tr id="N">{(i>0)?",":null}{ball}</tr> </span>);
                            })
                        }
                        </tr>

                        <tr> <span className="small"> <tr id="G">G:</tr></span> {
                            this.state.calls['G'].map(( ball, i ) => {
                                return ( <span className="small"><tr id="G">{(i>0)?",":null}{ball}</tr> </span>);
                            })
                        }
                        </tr>

                        <tr> <span className="small"> <tr id="O">O:</tr></span> {
                            this.state.calls['O'].map(( ball, i ) => {
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
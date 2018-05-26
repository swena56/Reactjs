import React from 'react';

export default class BingoBoardsGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num_cards: 3,
            started: bingoCaller.state.started,
        };

        this.addCard = this.addCard.bind(this);
        this.removeCard = this.removeCard.bind(this);

        var that = this;

        bingoCaller.on("change", () => {
            this.setState({
                started: bingoCaller.state.started,
            });
        });
    }

    addCard(){

        if( ! bingoCaller.state.started ){
            this.setState({num_cards: this.state.num_cards +1});
        }

    }

    removeCard(){

        if(  ! bingoCaller.state.started &&  this.state.num_cards > 1 ){
            this.setState({num_cards: this.state.num_cards - 1});
        }
    }

    render(){

        return <div className="container">

            <br/>
            <div className="container">

                <Caller />

                <div className="row">

                    <br/>


                    <div className="col" align="left">
                        <div className="container">

                            <div className="row">
                                <div className="col">
                                    Boards ({this.state.num_cards})
                                </div>
                                <div className="col">

                                    {
                                        (
                                            this.state.started ?
                                                (<button className="btn btn-primary" disabled onClick={this.addCard}>+</button>)
                                                : (<button className="btn btn-primary" onClick={this.addCard}>+</button>)
                                        )
                                    }

                                    <span>:</span>

                                    {
                                        (
                                            this.state.started ?
                                                (<button className="btn btn-primary" disabled onClick={this.removeCard}>-</button>)
                                                : (<button className="btn btn-primary" onClick={this.removeCard}>-</button>)
                                        )
                                    }
                                </div>

                                <div className="col">

                                </div>

                                <div className="col"></div>
                            </div>

                        </div>
                    </div>


                    <div className="container">
                        <div className="flex-container" align="center">

                            {
                                [...Array(this.state.num_cards)].map((  ) => {

                                    if( this.state.num_cards == 1 ){

                                    }
                                    return (
                                        <Board  />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <br/>
        </div>
    }
}
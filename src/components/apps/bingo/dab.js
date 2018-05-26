import React from "react";

export default class Dab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: (this.props.data == "X" ? true : false),
            called: false,
        };

        this.clickHandler = this.clickHandler.bind(this);
    }


    componentDidMount() {

        if( bingoCaller != null ) {

            bingoCaller.on("change", () => {
                this.setState({
                    called: bingoCaller.isCalled(this.props.data),
                });

            });
        }
    }

    clickHandler(){
        console.log("Clicked");
        this.setState({clicked: !this.state.clicked});
    }

    render(){

        //_.contains(,data)
        if( this.state.called ){
            return <td onClick={this.clickHandler} className={"dab animated tada dab"}> {this.props.data} </td>;
        }

        return <td onClick={this.clickHandler} className={"" + ( this.state.clicked ? "dab animated tada " : "" ) }> {this.props.data} </td>;
        return <div></div>;
    }

}
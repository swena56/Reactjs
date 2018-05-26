import React from 'react';
export default class Dice extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var number = Math.floor(Math.random() * 6) + 1;
        if( this.props.number && this.props.number >= 1 && this.props.number <= 6 ){
            number = this.props.number;
        }

        let style = {color:this.props.color};

        switch (number){
            case 1: return (<i style={style} className="fas fa-dice-one fa-7x"></i>); break;
            case 2: return (<i style={style} className="fas fa-dice-two fa-7x"></i>); break;
            case 3: return (<i style={style} className="fas fa-dice-three fa-7x"></i>); break;
            case 4: return (<i style={style} className="fas fa-dice-four fa-7x"></i>); break;
            case 5: return (<i style={style} className="fas fa-dice-five fa-7x"></i>); break;
            case 6: return (<i style={style} className="fas fa-dice-six fa-7x"></i>); break;
        }

        return (
            <div className="wrap">
                <div className="cube">
                    <div className="one">
                        <span className="ball"></span>
                    </div>
                    <div className="six">
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                    </div>
                    <div className="two">
                        <span className="ball"></span>
                        <span className="ball"></span>
                    </div>
                    <div className="five">
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                    </div>
                    <div className="three">
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                    </div>
                    <div className="four">
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                        <span className="ball"></span>
                    </div>
                </div>
            </div>
        );
    }
}



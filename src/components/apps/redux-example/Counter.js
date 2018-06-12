import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container border">
                <h1>Counter</h1>
                Clicked: {this.props.count} times
                <button onClick={this.props.onIncrement}>
                    +
                </button>
                <button onClick={this.props.onDecrement}>
                    -
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}

function mapDispatcherToProps(dispatch){
    return {
        onIncrement: () => { dispatch({type:"INCREMENT"}); },
        onDecrement: () => { dispatch({type:"DECREMENT"}); },
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(Counter)

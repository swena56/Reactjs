import React, { Component } from 'react';

import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",

        };

        this.inputChange = this.inputChange.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    inputChange(event){
        event.preventDefault();
        console.log( event.currentTarget.value);
        this.setState({input:event.currentTarget.value});
    }

    addNew(event){
        event.preventDefault();
        if( this.state.input ){
            this.props.add(this.state.input);

            //clear field
            this.setState({input:""});
        }


    }
    render() {

        return (
            <div className="container border">
                <h1>To do List</h1>

                <form role="form">
                    <div className="input-group">
                        <input className="form-control" type="text" onChange={this.inputChange} value={this.state.input} />
                        <button className="btn btn-primary" onClick={this.addNew}>Add</button>
                    </div>
                </form>

                <ul>
                 {
                     this.props.items.map((item,i) => (
                         <li key={i} >
                             {i+1}) {item}
                         </li>
                     ))
                 }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){

    return {
        items: state.items
    }
}

function mapDispatcherToProps(dispatch){
    return {
        add: (item) => { dispatch({type:"ADD",name: item}); },
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(TodoList)

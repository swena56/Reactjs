import {createStore} from 'redux';

const initialState ={
    items: [],
};

const reducer = (state = initialState,action )=>{
    console.log( "Todo List Reducer is running, ", state);
    switch(action.type){
        case "ADD":
            var item = action.name;
            console.log("ADD item",item);
            var i = state.items;
            i.push(item);
            return Object.assign({},state,{items: i});
        default:
            return state;
    }
    return state;
}

export default createStore(reducer);

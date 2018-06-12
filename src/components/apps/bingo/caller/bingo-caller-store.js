import {createStore} from 'redux';


var data = [];
var length = 75; // user defined length

for(var i = 1; i <= length; i++) {
    data.push(i);
}

data = data.sort(function() {
    return .5 - Math.random();
});


const initialState = {
    calls:  {
        B: [],
        I: [],
        N: [],
        G: [],
        O: [],
    },
    remaining: data,
    balls_group:  [].fill.call({ length: 75 }, 0),
    sound: false,
    rate:3000,
    autoplay:false,
    started: false,
};

const reducer = (state = initialState,action )=>{
    console.log( "Bingo Reducer is running, ", state);
    switch(action.type){
        case "INIT":
            return Object.assign({},state,{});
        case "NEW_BALL":
            console.log( "New ball",state );
            return Object.assign({},state,{});
        default:
            return state;
    }
    return state;
}

export default createStore(reducer);

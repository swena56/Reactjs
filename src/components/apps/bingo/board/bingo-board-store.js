import {createStore} from 'redux';

var board = [];
board.push( _.sample([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],5) );
board.push( _.sample([16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],5) );
board.push( _.sample([31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],5) );
board.push( _.sample([46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],5) );
board.push( _.sample([61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],5) );

var transposed = board[0].map(function (col, c) {
    // For each column, iterate all rows
    return board.map(function (row, r) {
        return board[r][c];
    });
});

transposed[2][2] = "X";

var empty_marks = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
];

const initialState = {
    board: transposed,
    marks: empty_marks,
    calls: [],
    autoplay:false,
    bingo: false,
};

const reducer = (state = initialState,action )=>{
    console.log( "Bingo Reducer is running, ", state);
    switch(action.type){
        case "INIT":
            return Object.assign({},state,{});
        case "MARK":
            var mark_pos = action.pos;
            console.log("Bingo Mark",action.pos);
            var arr =  mark_pos.split("_");
            var x = arr[0],
                y = arr[1];
            console.log(x,y);
            var marks  = state.marks;


            if( marks[x][y] == 2 ){return;}

            if( marks[x][y] == 0 ){
                marks[x][y] = 1;
            } else {
                marks[x][y] = 0;
            }

            console.log( marks );

            return Object.assign({},state,{marks:marks});
        default:
            return state;
    }
    return state;
}

export default createStore(reducer);

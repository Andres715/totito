let cell = document.querySelectorAll('.cell');
var player = 0;
let element2 = false;

let cell0 = document.getElementById('0');
let cell1 = document.getElementById('1');
let cell2 = document.getElementById('2');
let cell3 = document.getElementById('3');
let cell4 = document.getElementById('4');
let cell5 = document.getElementById('5');
let cell6 = document.getElementById('6');
let cell7 = document.getElementById('7');
let cell8 = document.getElementById('8');

cell0.addEventListener('click', () => {write_play(cell0);});
cell1.addEventListener('click', () => {write_play(cell1);});
cell2.addEventListener('click', () => {write_play(cell2);});
cell3.addEventListener('click', () => {write_play(cell3);});
cell4.addEventListener('click', () => {write_play(cell4);});
cell5.addEventListener('click', () => {write_play(cell5);});
cell6.addEventListener('click', () => {write_play(cell6);});
cell7.addEventListener('click', () => {write_play(cell7);});
cell8.addEventListener('click', () => {write_play(cell8);});

function write_play(element){
    let text = element.textContent;
    if(player == 0 && text.length == 0){
        element.innerHTML = "X";
        player = 1;
        return 'X';
    }

    if(player == 1 && text.length == 0){
        element.innerHTML = "O";
        player = 0;
        return 'O';
    }
}

function validate(elements){
    elements.forEach(element => {
        
    });
}

function options_win(){
    var opt1 = [[1, 1, 1],
                [0, 0, 0],
                [0, 0, 0]];

    var opt2 = [[0, 0, 0],
                [1, 1, 1],
                [0, 0, 0]];

    var opt3 = [[0, 0, 0],
                [0, 0, 0],
                [1, 1, 1]];

    var opt4 = [[1, 0, 0],
                [1, 0, 0],
                [1, 0, 0]];

    var opt5 = [[0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]];

    var opt6 = [[0, 0, 1],
                [0, 0, 1],
                [0, 0, 1]];

    var opt7 = [[1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]];

    var opt8 = [[0, 0, 1],
                [0, 1, 0],
                [1, 0, 0]];
}

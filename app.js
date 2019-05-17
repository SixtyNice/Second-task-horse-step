'use strict'

//Choose button and adding event
const btn = document.querySelector(".fieldset__button");
btn.addEventListener("click", horseSteps);


const cell = []; // the empty array which will be contain the name of cell
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]; // letters for creating cell
const number = [1, 2, 3, 4, 5, 6, 7, 8]; // numbersfor creating cell
//fill the arry with cells
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        cell.push(letters[i] + number[j]);
    }

}
// array of chess board
const chess = [];
//Filling board for get array of arrays --> 
//[ [A1..A8],
// [B1...B8],
// [C1...],...]
for (let i = 0; i < Math.ceil(cell.length / 8); i++) {
    chess[i] = cell.slice((i * 8), (i * 8) + 8);
}



//The logic of the horse's steps
function horseSteps() {
    let pos = document.querySelector("input").value.toUpperCase(); //get input value
    if (!deepSearch(chess, pos)) { // check if cell is exist
        alert("Возможно вы ввели неправильную позицию ячейки");
        return;
    } else {
        let length = 8;
        let posibleSteps = " ";
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length; y++) {
                //find necessary cell
                if (chess[x][y] == pos) {
                    //Check steps and adding in the variable
                    if (x - 1 >= 0 && y - 2 >= 0) {
                        posibleSteps += chess[x - 1][y - 2] + " ";
                    }
                    if (x + 1 < 8 && y - 2 >= 0) {
                        posibleSteps += chess[x + 1][y - 2] + " ";
                    }
                    if (x + 2 < 8 && y - 1 >= 0) {
                        posibleSteps += chess[x + 2][y - 1] + " ";
                    }
                    if (x + 2 < 8 && y + 1 < 8) {
                        posibleSteps += chess[x + 2][y + 1] + " ";
                    }
                    if (x + 1 < 8 && y + 2 < 8) {
                        posibleSteps += chess[x + 1][y + 2] + " ";
                    }
                    if (x - 1 >= 0 && y + 2 < 8) {
                        posibleSteps += chess[x - 1][y + 2] + " ";
                    }
                    if (x - 2 >= 0 && y - 1 >= 0) {
                        posibleSteps += chess[x - 2][y - 1] + " ";
                    }
                    if (x - 2 >= 0 && y + 1 < 8) {
                        posibleSteps += chess[x - 2][y + 1] + " ";
                    }
                }
            }
        }

        alert(`Возможные варианты хода:${posibleSteps}`);
    }
}
// Deep search for check cell
function deepSearch(array, item) {
    var len = array.length;
    for (var i = 0; i < len; i++) {
        if (array[i] instanceof Array) {
            if (deepSearch(array[i], item)) {
                return true;
            }
        } else {
            if (array[i] == item) {
                return true;
            }
        }
    }
    return false;
}
'use strict'

const cell = []; // пусто массив, который будет содержать в себе названия клеток
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]; // Буквы для формарования клеток
const number = [1, 2, 3, 4, 5, 6, 7, 8]; // номера клеток соотвественно 
//заполняем массив клетками
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        cell.push(letters[i] + number[j]);
    }

}
// Массив шахматной доски
const chess = [];
//Заполняем шахматную доску, чтобы получился массив массивов --> 
//[ [A1..A8],
// [B1...B8],
// [C1...],...]
for (let i = 0; i < Math.ceil(cell.length / 8); i++) {
    chess[i] = cell.slice((i * 8), (i * 8) + 8);
}

const btn = document.querySelector(".fieldset__button");
btn.addEventListener("click", horseSteps);
//Логика шагов коня 
function horseSteps() {
    let pos = document.querySelector("input").value.toUpperCase();
    if (!deepSearch(chess, pos)) {
        alert("Возможно вы ввели неправильную позицию ячейки");
        return;
    } else {
        let length = 8;
        let posibleSteps = " ";
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length; y++) {
                //находит заданную позицию на шахматной доске
                if (chess[x][y] == pos) {
                    //Проверяем возможные ходы в различные направления
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
//Поиск в глубину для проверки присутсвтия введенной позиции
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
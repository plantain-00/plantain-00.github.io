/**
 * Created by yaoyao on 15/1/24.
 */
/// <reference path="jquery.d.ts" />
var board = [];
var score = 0;
var documentWidth = window.screen.availWidth;
var gridContainerWidth = 0.92 * documentWidth;
var cellSideLength = 0.18 * documentWidth;
var cellSpace = 0.04 * documentWidth;
var start;
$(document).ready(function () {
    if (documentWidth > 500) {
        gridContainerWidth = 500;
        cellSpace = 20;
        cellSideLength = 100;
    }
    $("#grid-container").css("width", gridContainerWidth - 2 * cellSpace).css("height", gridContainerWidth - 2 * cellSpace).css("padding", cellSpace).css("border-radius", 0.02 * gridContainerWidth);
    $(".grid-cell").css("width", cellSideLength).css("height", cellSideLength).css("border-radius", 0.02 * gridContainerWidth);
    newGame();
});
$(document).keydown(function (e) {
    switch (e.keyCode) {
        case 37:
            e.preventDefault();
            if (canMoveLeft()) {
                moveLeft();
                updateView();
            }
            break;
        case 38:
            e.preventDefault();
            if (canMoveUp()) {
                moveUp();
                updateView();
            }
            break;
        case 39:
            e.preventDefault();
            if (canMoveRight()) {
                moveRight();
                updateView();
            }
            break;
        case 40:
            e.preventDefault();
            if (canMoveDown()) {
                moveDown();
                updateView();
            }
            break;
    }
});
document.addEventListener("touchstart", function (e) {
    start = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
    };
});
document.addEventListener("touchend", function (e) {
    var delta = {
        x: e.changedTouches[0].pageX - start.x,
        y: e.changedTouches[0].pageY - start.y
    };
    if (Math.abs(delta.x) < 0.3 * documentWidth && Math.abs(delta.y) < 0.3 * documentWidth) {
        return;
    }
    if (Math.abs(delta.x) >= Math.abs(delta.y)) {
        if (delta.x > 0) {
            if (canMoveRight()) {
                moveRight();
                updateView();
            }
        }
        else {
            if (canMoveLeft()) {
                moveLeft();
                updateView();
            }
        }
    }
    else {
        if (delta.y > 0) {
            if (canMoveDown()) {
                moveDown();
                updateView();
            }
        }
        else {
            if (canMoveUp()) {
                moveUp();
                updateView();
            }
        }
    }
});
document.addEventListener("touchmove", function (e) {
    e.preventDefault();
});
function ifGameIsOver() {
    var spaceArray = getSpaceArray();
    if (spaceArray.length == 0 && !canMove()) {
        alert("game over!");
    }
}
function canMove() {
    return canMoveDown() || canMoveLeft() || canMoveRight() || canMoveUp();
}
function canMoveLeft() {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i][j - 1] == 0 || board[i][j] == board[i][j - 1]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function updateView() {
    setTimeout("updateBoardView(); ", 200);
    setTimeout("generateOneNumber(); ", 210);
    setTimeout("ifGameIsOver(); ", 300);
    updateScore();
}
function moveLeft() {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && hasNoBlockHorizontally(i, k, j)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if (board[i][k] == board[i][j] && hasNoBlockHorizontally(i, k, j)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] *= 2;
                        board[i][j] = 0;
                        score += board[i][k];
                    }
                }
            }
        }
    }
}
function canMoveRight() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] != 0) {
                if (board[i][j + 1] == 0 || board[i][j] == board[i][j + 1]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function moveRight() {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    if (board[i][k] == 0 && hasNoBlockHorizontally(i, j, k)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if (board[i][k] == board[i][j] && hasNoBlockHorizontally(i, j, k)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] *= 2;
                        board[i][j] = 0;
                        score += board[i][k];
                    }
                }
            }
        }
    }
}
function canMoveUp() {
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i - 1][j] == 0 || board[i][j] == board[i - 1][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function moveUp() {
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    if (board[k][j] == 0 && hasNoBlockVertically(j, k, i)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if (board[k][j] == board[i][j] && hasNoBlockVertically(j, k, i)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] *= 2;
                        board[i][j] = 0;
                        score += board[k][j];
                    }
                }
            }
        }
    }
}
function canMoveDown() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i + 1][j] == 0 || board[i][j] == board[i + 1][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function moveDown() {
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > i; k--) {
                    if (board[k][j] == 0 && hasNoBlockVertically(j, i, k)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if (board[k][j] == board[i][j] && hasNoBlockVertically(j, i, k)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] *= 2;
                        board[i][j] = 0;
                        score += board[k][j];
                    }
                }
            }
        }
    }
}
function showMoveAnimation(row1, column1, row2, column2) {
    var numberCell = getNumberCell(row1, column1);
    numberCell.animate({
        top: getPosTop(row2),
        left: getPosLeft(column2)
    }, 200);
}
function updateScore() {
    $("#score").text(score);
}
function hasNoBlockHorizontally(row, column1, column2) {
    for (var i = column1 + 1; i < column2; i++) {
        if (board[row][i] != 0) {
            return false;
        }
    }
    return true;
}
function hasNoBlockVertically(column, row1, row2) {
    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][column] != 0) {
            return false;
        }
    }
    return true;
}
function newGame() {
    init();
    generateOneNumber();
    generateOneNumber();
}
function init() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top", getPosTop(i));
            gridCell.css("left", getPosLeft(j));
        }
    }
    for (var i = 0; i < 4; i++) {
        board[i] = [];
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
        }
    }
    updateBoardView();
    score = 0;
    updateScore();
}
function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append("<div class='number-cell' id='" + getNumberCellId(i, j) + "'></div>");
            var theNumberCell = getNumberCell(i, j);
            if (board[i][j] == 0) {
                theNumberCell.css("width", "0").css("height", "0").css("top", getPosTop(i) + cellSideLength / 2).css("left", getPosLeft(j) + cellSideLength / 2);
            }
            else {
                theNumberCell.css("width", cellSideLength + "px").css("height", cellSideLength + "px").css("top", getPosTop(i)).css("left", getPosLeft(j)).css("background-color", getNumberBackgroundColor(board[i][j])).css("color", getNumberColor(board[i][j])).text(board[i][j]);
            }
        }
    }
    $(".number-cell").css("line-height", cellSideLength + "px").css("font-size", 0.45 * cellSideLength + "px");
}
function generateOneNumber() {
    var spaceArray = getSpaceArray();
    if (spaceArray.length == 0) {
        return false;
    }
    var spaceIndex = Math.floor(Math.random() * spaceArray.length);
    var space = spaceArray[spaceIndex];
    var number = Math.random() < 0.5 ? 2 : 4;
    board[space.x][space.y] = number;
    showNumberWithAnimation(space.x, space.y, number);
    return true;
}
function getPosTop(i) {
    return cellSpace + i * (cellSpace + cellSideLength);
}
function getPosLeft(j) {
    return cellSpace + j * (cellSpace + cellSideLength);
}
function getNumberBackgroundColor(num) {
    switch (num) {
        case 2:
            return "#EEE4DA";
            break;
        case 4:
            return "#EDE0C8";
            break;
        case 8:
            return "#F2B179";
            break;
        case 16:
            return "#F59563";
            break;
        case 32:
            return "#F67C5F";
            break;
        case 64:
            return "#F65E3B";
            break;
        case 128:
            return "#EDCF72";
            break;
        case 256:
            return "#EDCC61";
            break;
        case 512:
            return "#9C0";
            break;
        case 1024:
            return "#33B5E5";
            break;
        case 2048:
            return "#09C";
        case 4096:
            return "#A6C";
            break;
        case 8192:
            return "93C";
            break;
        default:
            return "black";
            break;
    }
}
function getNumberColor(num) {
    if (num <= 4) {
        return "#776E65";
    }
    return "white";
}
function getSpaceArray() {
    var result = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                result.push({
                    x: i,
                    y: j
                });
            }
        }
    }
    return result;
}
function showNumberWithAnimation(x, y, num) {
    var numberCell = getNumberCell(x, y);
    numberCell.css("background-color", getNumberBackgroundColor(num));
    numberCell.css("color", getNumberColor(num));
    numberCell.text(num);
    numberCell.animate({
        width: cellSideLength + "px",
        height: cellSideLength + "px",
        top: getPosTop(x),
        left: getPosLeft(y)
    }, 50);
}
function getNumberCell(x, y) {
    return $("#" + getNumberCellId(x, y));
}
function getNumberCellId(x, y) {
    return "number-cell-" + x + "-" + y;
}
//# sourceMappingURL=2048.js.map
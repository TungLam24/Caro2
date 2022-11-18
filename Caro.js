let arr = []
for (let i = 0; i < 5; i++) {
    arr[i] = []
    for (let j = 0; j < 5; j++) {
        arr[i][j] = ("(.)")
    }
}

let board = ""
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        board += (arr[i][j] + " ")
    }
    board += "<br>"
}
document.getElementById("board").innerHTML = board
let last = "x"
let x_arr = []
let o_arr = []
function change() {
    board = ""
    let x = prompt("Enter the position of x")
    let y = prompt("Enter the position of y")
    if (arr[x][y] != "(.)") {
        alert("This position has been chosen already")
    } else {
        if (last == "x") {
            arr[x][y] = "o"
            last = "o"
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    board += (arr[i][j] + " ")
                }
                board += "<br>"
            }
            document.getElementById("board").innerHTML = board
        } else {
            arr[x][y] = "x"
            last = "x"
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    board += (arr[i][j] + " ")
                }
                board += "<br>"
            }
            document.getElementById("board").innerHTML = board
        }
        console.log(arr);
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                console.log(arr[i][j], arr[i][j + 1], arr[i][j - 1]);
                if (arr[i][j] == arr[i + 1][j + 1] && arr[i + 1][j + 1] == arr[i - 1][j - 1] && arr[i][j] == "x") {
                    alert("X win")
                } else if (arr[i][j] == arr[i][j + 1] && arr[i][j + 1] == arr[i][j - 1] && arr[i][j] == "x") {
                    alert("X win")
                } else if (arr[i][j] == arr[i + 1][j] && arr[i + 1][j] == arr[i - 1][j] && arr[i][j] == "x") {
                    alert("X win")
                } else if (arr[i][j] == arr[i + 1][j - 1] && arr[i + 1][j - 1] == arr[i - 1][j + 1] && arr[i][j] == "x") {
                    alert("X win")
                }
            }
        }
        for (let i = 1; i < 4; i++) {
            if (arr[0][i] == arr[0][i + 1] && arr[0][i + 1] == arr[0][i - 1] && arr[0][i] == "x") {
                alert("X win")
            } else if (arr[4][i] == arr[4][i + 1] && arr[4][i + 1] == arr[4][i - 1] && arr[4][i] == "x") {
                alert("X win")
            } else if (arr[i][0] == arr[i + 1][0] && arr[i][0] == arr[i - 1][0] && arr[i][0] == "x") {
                alert("X win")
            } else if (arr[i][4] == arr[i + 1][4] && arr[i][4] == arr[i - 1][4] && arr[i][4] == "x") {
                alert("X win")
            }
        }
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                console.log(arr[i][j], arr[i][j + 1], arr[i][j - 1]);
                if (arr[i][j] == arr[i + 1][j + 1] && arr[i + 1][j + 1] == arr[i - 1][j - 1] && arr[i][j] == "o") {
                    alert("O win")
                } else if (arr[i][j] == arr[i][j + 1] && arr[i][j + 1] == arr[i][j - 1] && arr[i][j] == "o") {
                    alert("O win")
                } else if (arr[i][j] == arr[i + 1][j] && arr[i + 1][j] == arr[i - 1][j] && arr[i][j] == "o") {
                    alert("O win")
                } else if (arr[i][j] == arr[i + 1][j - 1] && arr[i + 1][j - 1] == arr[i - 1][j + 1] && arr[i][j] == "o") {
                    alert("O win")
                }
            }
            for (let i = 1; i < 4; i++) {
                if (arr[0][i] == arr[0][i + 1] && arr[0][i + 1] == arr[0][i - 1] && arr[0][i] == "o") {
                    alert("O win")
                } else if (arr[4][i] == arr[4][i + 1] && arr[4][i + 1] == arr[4][i - 1] && arr[4][i] == "o") {
                    alert("O win")
                } else if (arr[i][0] == arr[i + 1][0] && arr[i][0] == arr[i - 1][0] && arr[i][0] == "o") {
                    alert("O win")
                } else if (arr[i][4] == arr[i + 1][4] && arr[i][4] == arr[i - 1][4] && arr[i][4] == "o") {
                    alert("O win")
                }
            }
        }
    }
}
"use strict"

function genBoard() {
    var t = document.createElement("table");

    for (let i = 0; i < 8; i++) {
        var tr = document.createElement("tr");
        t.appendChild(tr);
        for (let j = 0; j < 8; j++) {
            {
                var td = document.createElement("td");
                var div = document.createElement("div");
                div.style.width = 100;
                div.style.height = 100;
                div.innerHTML = j;

                if ((i * 8 + j) % 2 == 0) {
                    div.style.color = 0;
                }
                else {
                    div.style.color = 25555;
                }
                td.appendChild(div);
                tr.appendChild(td);
            }
        }
    }
    document.body.appendChild(t);
}
Window.onload = genBoard;

genBoard();
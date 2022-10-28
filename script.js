function mm() {
    let meter = document.getElementById("meter").value;


    let answer = 25.4 * meter;

    document.getElementById("screen").innerHTML = "= " + answer;
}

function cm() {
    let meter = document.getElementById("meter").value;


    let answer = 2.54 * meter;

    document.getElementById("screen").innerHTML = "= " + answer;
}

function m() {
    let meter = document.getElementById("meter").value;


    let answer = 0.0254 * meter;

    document.getElementById("screen").innerHTML = "= " + answer;
}
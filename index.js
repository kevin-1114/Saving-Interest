let oAmnt;
let time;
let profit;

function main() {
    oAmnt = parseFloat(document.getElementById("oAmnt").value);
    time = parseFloat(document.getElementById("time").value);
    profit = parseFloat(document.getElementById("profit").value);

    if (oAmnt && time && profit != "") {
        document.getElementById("result").innerText = "The profit is: " + "$" + Math.round(oAmnt * time * (profit / 100))
    }
    else {
        document.getElementById("result").innerText = "Please fill out the form..."
    }
}

document.getElementById("use").addEventListener("click", main)
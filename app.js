function plas() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    const persent = (num1 / num2) * 100

    document.getElementById("muaaz").value = persent
    console.log(document.getElementById("muaaz").type);
    document.getElementById("result").innerHTML = Math.floor(persent)
    if (persent >= 80) {
        document.getElementById("result").innerHTML = "A grad"
    }
    else if (persent >= 60) {
        document.getElementById("result").innerHTML = "B grad"
    }
    else if (persent >= 50) {
        document.getElementById("result").innerHTML = "c grad"
    }
    else {
        document.getElementById("result").innerHTML = "fail"
    }
}
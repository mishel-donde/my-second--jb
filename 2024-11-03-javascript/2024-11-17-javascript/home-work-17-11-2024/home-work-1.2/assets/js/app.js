function average() {
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    let num3 = parseInt(document.getElementById("input3").value);

    let average = num1 + num2 + num3/3;

    alert(`the sum is ${average}`)
}



function sum(){
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    let num3 = parseInt(document.getElementById("input3").value);

    let sum = num1 + num2 + num3;

    alert(`the sum is ${sum}`)
}
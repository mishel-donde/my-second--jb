function button() {
    const pow =3;
   let numberInput= document.getElementById("numberInput").value;
   const newNumber = Math.pow(numberInput,pow);

   alert(`the number you choose is ${numberInput} power ${pow} is =${newNumber}`)
   numberInput.style.backgroundColor = "lightblue"; 

}
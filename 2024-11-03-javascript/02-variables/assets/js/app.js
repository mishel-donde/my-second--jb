// naming conventions 
// lets sat i need a variable to hold value for "family name"
// family_name (all lower case, _between words, used in python,php,sql)
//familyName(each word starts with capital letter)
//JavaScript uses this for variable names:
//familyName (each word except the first starts with a capital letter) 


//historic way of using variables
var companyName ='KSP';

//starting 2015, using of var is wrong
// dont use var

//we can use let to declare a variable
let aVariableThatMyWantToChange;
// and then assign (assign=השמה)
aVariableThatMyWantToChange=1;
// however we declared and assign in the same command
aVariableThatMyWantToChange=3;
//however we declared the "let" variable / we can always change it;
aVariableThatMyWantToChange+=3;

//sometimes i went to protect a variable from modifications
const aVariableThatNeverChange=10;

document.write(companyName);
//using \n in document.write wont work for us
//document.write("\n");
document.write("<br>")
document.write(companyName);

alert(companyName + "\n" + companyName);
console.log(companyName + "\n" + companyName);

// ksp is a great company, everybody likes ksp, ksp have the best products
document.write("ksp is a great company, everybody likes ksp, ksp have the best products");
document.write( "<br>" + companyName + " ksp is a great company, everybody likes"+companyName+ "ksp, ksp have the best products");
document.write("i can also use these גרש to specify strings");
alert(`i can also 
    use back tick`);
document.write (`${companyName}is a great company, everybody likes ${companyName},${companyName} have the best products`)

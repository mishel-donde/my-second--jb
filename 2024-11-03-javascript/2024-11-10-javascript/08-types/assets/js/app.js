const myAge = 22;
const yourAge = "22";

//always use strict comparison
if(myAge === yourAge) {
    console.log('myAge and yourAge equal')

}else {
    console.log('myAge and yourAge are NOT equal')
}
const number = 0;
const bool = false
//always use strict comparison
if(myAge === bool) {
    console.log('myAge and bool equal')

}else {
    console.log('myAge and bool are NOT equal')
}

//don't ever use weak comparison
if(myAge == bool) {
    console.log('myAge and bool equal')

}else {
    console.log('myAge and bool are NOT equal')
}




const phoneNumber = prompt(`enter a phone number`)

let isPhoneNumber = true;    //משתנה בוליאני 


if(phoneNumber.length !==10){
 isPhoneNumber = false;
}else if(phoneNumber.substring ('05') ){
    isPhoneNumber = false
} else {
    for(const char of phoneNumber){
        if(isNaN(+char)) {
            isPhoneNumber = false
            break
        }
    }
}
                                         

// isNan :not a number תוצאה של הסבה מחזורת במספר 
// isNaN(+phoneNumber) 
document.write(`${phoneNumber} is ${isPhoneNumber  ? '' : 'not'} a phone number `)
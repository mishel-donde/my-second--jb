 // this is an operator with 1 operand
  const grade= +prompt (` enter a grade`)

  // this is an operator with 2 operands (the most popular)
  const sum = 1+1

  let isPass;
  if (grade >= 60 ){
    message ='pass'
  } else {
    isPass =false;
    message = 'fail'
  }

  document.write (message)

  // ternary operator - ternary means שלושה  and this the only operator
  // that works on 3 operands

  message = grade >= 60 ? 'pass' : 'fail'

//can use as many ternary operators at once please dont
//message = grade >= 60 ? 'pass' :(grade > 0 ? 'fail' : invalid)

  document.write(message)

 
  


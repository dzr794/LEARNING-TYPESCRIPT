namespace Validations{
  export const validateTxt = (text:string):boolean => {
    return (text.length > 3)? true : false;
  }

  export const validateDate = (myDate:Date):boolean => {
    return ( isNaN(myDate.valueOf()) )
  }
}

console.log(Validations);
console.log(Validations.validateTxt('fer'));
console.log(Validations.validateTxt('fernaflo'));

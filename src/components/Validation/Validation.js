
 // Regex patterns
//  const patterns = {
//     studentName: /^[a-zA-Z\s]{3,}$/,          
//     email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
//     phone: /^\+?[1-9]\d{1,14}$/       
//   };

 function Validation(formValues){

 const errors = {};

    const name_validation = /^[a-zA-Z\s]{3,}$/;
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 
    if(formValues.studentName === ""){
        errors.studentName= "Name is required"
    }else if(!name_validation.test(formValues.studentName)){
        errors.studentName="must be more than 3 words"
    }

    if(formValues.gender===""){
        errors.gender= "gender must be required"
    }

    if(formValues.email ===""){
        errors.email= "email is required"
    } else if(!email_pattern.test(formValues.email)){
        errors.email= "email must be in xyz123@gmail.com"
    }

    if(formValues.adharNo===""){
        errors.adharNo= "Adahar No is required"
    }
    if(formValues.tc===""){
        errors.tc= "TC NO is required"
    }
    if(formValues.studentHeight===""){
        errors.studentHeight= "Student Height Require"
    }
    if(formValues.studentWeight===""){
        errors.studentWeight= "Student Weight Require"
    }
    
    return errors
}

export default Validation;
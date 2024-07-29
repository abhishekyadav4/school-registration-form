
 // Regex patterns
//  const patterns = {
//     studentName: /^[a-zA-Z\s]{3,}$/,          
//     email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
//     phone: /^\+?[1-9]\d{1,14}$/       
//   };

 function Validation(formValues){

 const errors = {};
 let isValid = true;

    const name_validation = /^[a-zA-Z\s]{3,}$/;
    // const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const digit_pattern = /^\d+$/;

    if(formValues.admNo === ""){
        errors.admNo = "Adm no needed";
        isValid = false;
    }else if(!digit_pattern.test(formValues.admNo)){
        errors.admNo= "Only No. is allowed"
    }
  

    if(formValues.studentName ===""){
        errors.studentName= "Name is required";
        isValid = false;
    }else if(!name_validation.test(formValues.studentName)){
        errors.studentName="must be more than 3 words";
        isValid = false;
    }

    // if(formValues.gender===""){
    //     errors.gender= "gender must be required";
    //     isValid = false;
    // }

    // if(formValues.email ===""){
    //     errors.email= "email is required";
    //     isValid = false;
    // } else if(!email_pattern.test(formValues.email)){
    //     errors.email= "email must be in xyz123@gmail.com";
    //     isValid = false;
    // }

    if(formValues.adharNo===""){
        errors.adharNo= "Adahar No is required";
        isValid = false;
    }
    if(formValues.tc===""){
        errors.tc= "TC NO is required";
        isValid = false;
    }
    if(formValues.studentHeight===""){
        errors.studentHeight= "Student Height Require";
        isValid = false;
    }
    if(formValues.studentWeight===""){
        errors.studentWeight= "Student Weight Require";
        isValid = false;
    }
    
    if(formValues.fatherName === ""){
        errors.fatherName= "Father name is required";
        isValid = false;
    }else if(!name_validation.test(formValues.fatherName)){
        errors.fatherName="must be more than 3 words";
        isValid = false;
    }

    if(formValues.fCoccupation===""){
        errors.fCoccupation= "Father Occupation Required";
        isValid = false;
    }
    if(formValues.fAnnualIncome===""){
        errors.fAnnualIncome= "Father Annual Income Required";
        isValid = false;
    }else if(!digit_pattern.test(formValues.fAnnualIncome)){
        errors.fAnnualIncome= "Only Numbers Allowed";
        isValid = false;
    }

    if(formValues.motherName===""){
        errors.motherName= "Mother name Required";
        isValid = false;
    }

    if(formValues.mOccupation===""){
        errors.mOccupation= "Mother Occupation Required";
        isValid = false;
    }

    if(formValues.mAnnualIncome===""){
        errors.mAnnualIncome= "Mother Annual Income Required";
        isValid = false;
    }else if(!digit_pattern.test(formValues.mAnnualIncome)){
        errors.mAnnualIncome= "Only Nubmer is Allowed";
        isValid = false;
    }

    if(formValues.religion===""){
        errors.religion= "Religion Required";
        isValid = false;
    }
    if(formValues.caste===""){
        errors.caste= "Caste Required";
        isValid = false;
    }
    if(formValues.cwsn===""){
        errors.cwsn= "CWSN Required";
        isValid = false;
    }
    if(formValues.cwsnType===""){
        errors.cwsnType= "Type Required";
        isValid = false;
    }
    if(formValues.guardianName===""){
        errors.guardianName= "Guard Name Required";
        isValid = false;
    }

    if(formValues.guardianRelation===""){
        errors.guardianRelation= "Guard Relation Required";
        isValid = false;
    }

    
    if(formValues.bankName===""){
        errors.bankName= "Bank Name Required";
        isValid = false;
    }

    if(formValues.acNo===""){
        errors.acNo= "A/C Required";
        isValid = false;
    }else if(!digit_pattern.test(formValues.acNo)){
        errors.acNo = "Number is Used";
        isValid = false;
    };

    if(formValues.ifsc===""){
        errors.ifsc= "IFSC code Required";
        isValid = false;
    }else if(!digit_pattern.test(formValues.ifsc)){
        errors.ifsc = "Number is Used";
        isValid = false;
    };

    if(formValues.micrCode===""){
        errors.micrCode= "MICR Code Required";
        isValid = false;
    }else if(!digit_pattern.test(formValues.micrCode)){
        errors.micrCode = "Number is Used";
        isValid = false;
    }

    if(formValues.branchName===""){
        errors.branchName= "Branch Name Required";
        isValid = false;
    }

    if(formValues.branchCode===""){
        errors.branchCode= "Branch code Required";
        isValid = false;
    }else if(!digit_pattern.test(formValues.branchCode)){
        errors.branchCode = "Number is Used";
        isValid = false;
    }

    if(formValues.bloodGroup===""){
        errors.bloodGroup= "Blood Group Required";
        isValid = false;
    }

    if(formValues.nationality===""){
        errors.nationality= "Nationality Required";
        isValid = false;
    }


    return {errors, isValid}
}

export  {Validation};
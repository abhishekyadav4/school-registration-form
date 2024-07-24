

import React, { useState } from 'react'

function Register() {
  const intialValues = {
    studentName: '',
    gender: '',
    adhar: '',
    tc: '',
    studentHeight: '',
    studentWeight: '',
    fatherName: '',
    fOccupation: '',
    fAnnualIncome: '',
    motherName: '',
    mOccupation: '',
    religion: '',
    caste: '',
    cwsn: '',
    cwsnType: '',
    guardianName: '',
    bankName: '',
    accNo: '',
    ifscCode: '',
    micrCode: '',
    branchName: '',
    branchCode: '',
    bloodGroup: '',
    nationality: '',
    idMark: '',
    bpl: '',
    address: '',
    post: '',
    ps: '',
    block: '',
    dist: '',
    pinCode: '',
    contactNo: '',
    admissionClass: '',
    firtAdmission: '',
    declaration: '',
    signOfStudent: '',
    signOfGaurdian: '',
    signOfHeadMaster: '',
    formNo: '',
    dateTwo: '',
    receivedAppNo: '',
    admissionNo: '',
    dateThree: '',
    class: '',
    nameTwo: '',
    fatherNameTwo: '',
    dobTwo: '',
    receivedBy: '',
    signAuthority: '',
  }
  const [getForm, setForm] = useState(intialValues);

  const handleChange = (e) => {

    const { name, value } = e.target;
    console.log(name, value)
    setForm({ ...getForm, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { studentName, gender, adhar,
      tc,
      studentHeight,
      studentWeight,
      fatherName,
      fOccupation,
      fAnnualIncome,
      motherName,
      mOccupation,
      religion,
      caste,
      cwsn,
      cwsnType,
      guardianName,
      bankName,
      accNo,
      ifscCode,
      micrCode,
      branchName,
      branchCode,
      bloodGroup,
      nationality,
      idMark,
      bpl,
      address,
      post,
      ps,
      block,
      dist,
      pinCode,
      contactNo,
      admissionClass,
      firtAdmission,
      declaration,
      signOfStudent,
      signOfGaurdian,
      signOfHeadMaster,
      formNo,
      dateTwo,
      receivedAppNo,
      admissionNo,
      dateThree,
      studentClass,
      nameTwo,
      fatherNameTwo,
      dobTwo,
      receivedBy,
      signAuthority
    } = getForm
    console.log(studentName, gender, adhar,
      tc,
      studentHeight,
      studentWeight,
      fatherName,
      fOccupation,
      fAnnualIncome,
      motherName,
      mOccupation,
      religion,
      caste,
      cwsn,
      cwsnType,
      guardianName,
      bankName,
      accNo,
      ifscCode,
      micrCode,
      branchName,
      branchCode,
      bloodGroup,
      nationality,
      idMark,
      bpl,
      address,
      post,
      ps,
      block,
      dist,
      pinCode,
      contactNo,
      admissionClass,
      firtAdmission,
      declaration,
      signOfStudent,
      signOfGaurdian,
      signOfHeadMaster,
      formNo,
      dateTwo,
      receivedAppNo,
      admissionNo,
      dateThree,
      studentClass,
      nameTwo,
      fatherNameTwo,
      dobTwo,
      receivedBy,
      signAuthority
    )
  }
  return (
    <>


      <div className="App">
        <nav>
          <div className='mainHead'>
            <h1>application form for admission</h1>
            <h4>(index no : h1-061)</h4>
            <h1>burdwan sri ramashis hindi high school (h.s)</h1>
            <h4 id='sh'>(govt. sponssored)</h4>
            <h5>g.t.road, mehedi bagan, post - bardhaman, dist - purba bardhaman, pin 713101</h5>
            <hr></hr>
          </div>
          <div className='right-box'>
            <div className='right-txt'>
              <p>Adm No :</p>
            </div>
            <div className='right-txt'>
              <p>Date :</p>
            </div>
          </div>
        </nav>

        <section>
          <div className='photo'>
            <h4>photo</h4>
          </div>
        </section>


        <section>
          <div className='mainBody'>
            <form onSubmit={handleSubmit}>

              <ol>

                <li >
                  <div className='formData'>
                    <div className='form-label'>  <label htmlFor='studentName'>Name of the student (In Block Letters)</label></div>
                    <div className='form-Input'>   <input type='text' name='studentName'
                      onChange={handleChange} value={getForm.studentName} style={{ textTransform: "uppercase" }}
                    />
                    </div>
                  </div>
                </li>

                <li >
                  <div className='formData'>
                    <div className='form-label common-label'>  <label htmlFor='gender'>Gender :</label></div>
                    <div className=' common-input' >   <input type='text' name='gender'
                      onChange={handleChange} value={getForm.gender} /></div>
                    {/* second column  */}
                    <div className='form-label common-label'>  <label htmlFor='adhar'>Adhar no. :</label></div>
                    <div className=' common-input' >   <input type='text' name='adhar'
                      onChange={handleChange} value={getForm.adhar}
                    /></div>
                  </div>
                </li>
                <li >
                  <div className='formData'>
                    <div className='form-label common-label'>  <label htmlFor='dateOne'>Date Of Birth :</label></div>
                    <div className=' common-input' >   <input type='date' name='dateOne'
                      onChange={handleChange} value={getForm.dateOne} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='tc'>STUDENT ID/TC NO. :</label></div>
                    <div className=' common-input' >   <input type='text' name='tc'
                      onChange={handleChange} value={getForm.tc} /></div>
                  </div>
                </li>

                <li >
                  <div className='formData'>
                    <div className='form-label common-label'>  <label htmlFor='studentHeight'>Student Height (in cm) :</label></div>
                    <div className=' common-input' >   <input type='text' name='studentHeight'
                      onChange={handleChange} value={getForm.studentHeight} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='studentWeight'>Student Weight (in kg) :</label></div>
                    <div className=' common-input' >   <input type='text' name='studentWeight'
                      onChange={handleChange} value={getForm.studentWeight} /></div>
                  </div>
                </li>
                {/* Father name  */}
                <li >
                  <div className='formData'>
                    <div className='form-label'>  <label htmlFor='fatherName'>A Father's Name (In Block Letters) :</label></div>
                    <div className='form-Input'>   <input type='text' name='fatherName' style={{ textTransform: "uppercase" }}
                      onChange={handleChange} value={getForm.fatherName} /></div>
                  </div>

                  <div className='formData fc'>
                    <div className='form-label common-label'>  <label htmlFor='fOccupation'> B Occupation :</label></div>
                    <div className=' common-input' >   <input type='text' name='fOccupation'
                      onChange={handleChange} value={getForm.fOccupation} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='fAnnualIncome'> Annual Income :</label></div>
                    <div className=' common-input' >   <input type='text' name='fAnnualIncome'
                      onChange={handleChange} value={getForm.fAnnualIncome} /></div>
                  </div>
                </li>

                {/* Mother name  */}

                <li >
                  <div className='formData'>
                    <div className='form-label'>  <label htmlFor='motherName'>A Mother's Name (In Block Letters) :</label></div>
                    <div className='form-Input'>   <input type='text' name='motherName' style={{ textTransform: "uppercase" }}
                      onChange={handleChange} value={getForm.motherName} /></div>
                  </div>

                  <div className='formData fc'>
                    <div className='form-label common-label'>  <label htmlFor='mOccupation'> B Occupation :</label></div>
                    <div className=' common-input' >   <input type='text' name='mOccupation'
                      onChange={handleChange} value={getForm.mOccupation} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='mAnnualIncome'> Annual Income :</label></div>
                    <div className=' common-input' >   <input type='text' name='mAnnualIncome'
                      onChange={handleChange} value={getForm.mAnnualIncome} /></div>
                  </div>
                </li>



                <li >
                  <div className='formData'>
                    <div className='form-label common-label'>  <label htmlFor='religion'>RELIGION:</label></div>
                    <div className=' common-input' >   <input type='text' name='religion'
                      onChange={handleChange} value={getForm.religion} /></div>
                    {/* second column  */}
                    <div className='form-label common-label caste'>  <label htmlFor='caste'>Caste: Gen/SC/ST/OBC,(Tick) Sub Caste  :</label></div>
                    <div className=' common-input' >   <input type='text' name='caste'
                      onChange={handleChange} value={getForm.caste} /></div>
                  </div>
                </li>

                <li >
                  <div className='formData'>
                    <div className='form-label common-label'>  <label htmlFor='cwsn'>Whether CWSN:</label></div>
                    <div className=' common-input' >   <input type='text' name='cwsn'
                      onChange={handleChange} value={getForm.cwsn} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='cwsnType'>Type :</label></div>
                    <div className=' common-input' >   <input type='text' name='cwsnType'
                      onChange={handleChange} value={getForm.cwsnType} /></div>
                  </div>
                </li>

                <li >
                  <div className='formData'>
                    <div className='form-label common-label'>  <label htmlFor='guardianName'>Guardian's Name:</label></div>
                    <div className=' common-input' >   <input type='text' name='guardianName'
                      onChange={handleChange} value={getForm.guardianName} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='guadianRelation'>Relation With Guardian :</label></div>
                    <div className=' common-input' >   <input type='text' name='guadianRelation'
                      onChange={handleChange} value={getForm.guadianRelation} /></div>
                  </div>
                </li>

                {/* bank details  */}

                <li >
                  <div className='formData'>
                    <div className='form-label common-label'>  <label htmlFor='bankName'>Bank Name:</label></div>
                    <div className=' common-input' >   <input type='text' name='bankName'
                      onChange={handleChange} value={getForm.bankName} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='accNo'>A/C NO. :</label></div>
                    <div className=' common-input' >   <input type='text' name='accNo'
                      onChange={handleChange} value={getForm.accNO} /></div>
                  </div>
                  {/* second row  */}
                  <div className='formData fc'>
                    <div className='form-label common-label'>  <label htmlFor='ifscCode'>IFSC Code:</label></div>
                    <div className=' common-input' >   <input type='text' name='ifscCode'
                      onChange={handleChange} value={getForm.ifscCode} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='micrCode'>MICR Code :</label></div>
                    <div className=' common-input' >   <input type='text' name='micrCode'
                      onChange={handleChange} value={getForm.micrCode} /></div>
                  </div>
                  {/* third row   */}

                  <div className='formData fc'>
                    <div className='form-label common-label'>  <label htmlFor='branchName'>Branch Name:</label></div>
                    <div className=' common-input' >   <input type='text' name='branchName'
                      onChange={handleChange} value={getForm.branchName} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='branchCode'>Branch Code :</label></div>
                    <div className=' common-input' >   <input type='text' name='branchCode'
                      onChange={handleChange} value={getForm.branchCode} /></div>
                  </div>

                  {/* fourth row  */}


                  <div className='formData fc'>
                    <div className='form-label common-label'>  <label htmlFor='bloodGroup'>Blood Group:</label></div>
                    <div className=' common-input' >   <input type='text' name='bloodGroup'
                      onChange={handleChange} value={getForm.bloodGroup} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='nationality'>Nationality :</label></div>
                    <div className=' common-input' >   <input type='text' name='nationality'
                      onChange={handleChange} value={getForm.nationality} /></div>
                  </div>
                </li>

                <li >
                  <div className='formData'>
                    <div className='form-label common-label'>  <label htmlFor='idMark'>Identification Mark:</label></div>
                    <div className=' common-input' >   <input type='text' name='idMark'
                      onChange={handleChange} value={getForm.idMark} /></div>
                    {/* second column  */}
                    <div className='form-label common-label bpl'>  <label htmlFor='bpl'>BPL YES/NO (If Yes Mention Card No.)  :</label></div>
                    <div className=' common-input bpl'  >   <input type='text' name='bpl'
                      onChange={handleChange} value={getForm.bpl} /></div>
                  </div>
                </li>


                <p className='p-txt'>

                  N.B.: Only Father of the student or in case of Father being dead, the Mother of the student will be the legal Guardian and he / she should put his / her signature on the admission register at the time of admission. In case of Father and Mother both being dead any other nearest relative of the student may be the Guardian or proper declaration in respect of above.
                </p>

                {/* address  */}

                <li >
                  <div className='formData'>
                    <div className='form-label'>  <label htmlFor='address'>	Present Address : Village / Town  :</label></div>
                    <div className='form-Input'>   <input type='text' name='address'
                      onChange={handleChange} value={getForm.address} /></div>
                  </div>

                  <div className='formData fc'>
                    <div className='form-label common-label'>  <label htmlFor='post'>  Post :</label></div>
                    <div className=' common-input' >   <input type='text' name='post'
                      onChange={handleChange} value={getForm.post} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='ps'> P.S :</label></div>
                    <div className=' common-input' >   <input type='text' name='ps'
                      onChange={handleChange} value={getForm.ps} /></div>
                    {/* third column  */}
                    <div className='form-label common-label '>  <label htmlFor='block'> Block :</label></div>
                    <div className=' common-input' >   <input type='text' name='block'
                      onChange={handleChange} value={getForm.block} /></div>
                  </div>
                  {/* second row  */}
                  <div className='formData fc'>
                    <div className='form-label common-label'>  <label htmlFor='dist'>  Dist :</label></div>
                    <div className=' common-input' >   <input type='text' name='dist'
                      onChange={handleChange} value={getForm.dist} /></div>
                    {/* second column  */}
                    <div className='form-label common-label '>  <label htmlFor='pinCode'> Pin Code :</label></div>
                    <div className=' common-input' >   <input type='text' name='pinCode'
                      onChange={handleChange} value={getForm.pinCode} /></div>
                    {/* third column  */}
                    <div className='form-label common-label '>  <label htmlFor='contactNo'> Contact No. :</label></div>
                    <div className=' common-input' >   <input type='text' name='contactNo'
                      onChange={handleChange} value={getForm.contactNo} /></div>
                  </div>
                </li>

                <li >
                  <div className='formData'>
                    <div className='form-label common-label bpl'>  <label htmlFor='admissionClass'>Class in which is admission sought :</label></div>
                    <div className=' common-input' >   <input type='text' name='admissionClass'
                      onChange={handleChange} value={getForm.admissionClass} /></div>
                    {/* second column  */}
                    <div className='form-label common-label bpl '>  <label htmlFor='firtAdmission'>Whether first admission or not:</label></div>
                    <div className=' common-input '  >   <input type='text' name='firtAdmission'
                      onChange={handleChange} value={getForm.firtAdmission} /></div>
                  </div>
                </li>
              </ol>

              <p className='p-txt'> DECLARATION : I <span ><input type='text' name='declaration'
                onChange={handleChange} value={getForm.declaration} /></span>. may be declare that the particulars given by  me are true and correct. I further declare that I shall abide by the rules and regulations as well as discipline of the School strictly without being prejudiced.</p>



              <div className='formData fc signature'>
                <div className='common-sign'>
                  <div className='sign-input ' >   <input type='text' name='signOfStudent'
                    onChange={handleChange} value={getForm.signOfStudent} /></div>
                  <div className='sign-label'>  <label htmlFor='signOfStudent'>Signature of the Student</label></div>
                </div>
                {/* second column  */}
                <div className='common-sign'>
                  <div className=' sign-input' >   <input type='text' name='signOfGaurdian'
                    onChange={handleChange} value={getForm.signOfGaurdian} /></div>
                  <div className='sign-label '>  <label htmlFor='signOfGaurdian'>Signature of Parents or Gaurdians </label></div>
                </div>
                {/* third column  */}
                <div className='common-sign' >

                  <div className=' sign-input' >   <input type='text' name='signOfHeadMaster'
                    onChange={handleChange} value={getForm.signOfHeadMaster} /></div>
                  <div className=' sign-label'>  <label htmlFor='signOfHeadMaster'> Signature of Head Master</label></div>
                </div>
              </div>

              <hr className='btm'></hr>

              {/* form footer  */}

              <div className='footer'style={{fontWeight:"bold"}}>
                <div className='footer-section'>
                  <label htmlFor='formNo'>Form No :</label>
                  <input type='text' name='formNo'
                    onChange={handleChange} value={getForm.formNo}
                  />
                </div>
                {/* second column  */}
                <div className=' footer-section'>
                  <label htmlFor='dateTwo'>Date:</label>
                  <input type='date' name='dateTwo'
                    onChange={handleChange} value={getForm.dateTwo} />
                </div>
              </div>

              {/* footer second */}

              <div className='footerSecond' style={{fontWeight:"bold"}}>

                <div >
                  <label htmlFor='receivedAppNo'>Received application Form No  :</label>
                  <input type='text' name='receivedAppNo'
                    onChange={handleChange} value={getForm.receivedAppNo}
                  />
                </div>
                {/* second column  */}
                <div >
                  <label htmlFor='admissionNo'>Admission No:</label>
                  <input type='text' name='admissionNo'
                    onChange={handleChange} value={getForm.admissionNo} />
                </div>
                <div >
                  <label htmlFor='dateThree'>Date:</label>
                  <input type='date' name='dateThree'
                    onChange={handleChange} value={getForm.dateThree} />
                </div>
                <div >
                  <label htmlFor='studentClass'>Class:</label>
                  <input type='text' name='studentClass'
                    onChange={handleChange} value={getForm.studentClass} />
                </div>
              </div>


              <div className='nfd'>
             

                <div >
                  <label htmlFor='nameTwo'>Name  :</label>
                  <input type='text' name='nameTwo'
                    onChange={handleChange} value={getForm.nameTwo} />
                </div>

                <div >
                  <label htmlFor='fatherNameTwo'>Father's Name:</label>
                  <input type='text' name='fatherNameTwo'
                    onChange={handleChange} value={getForm.fatherNameTwo} />
                </div>
                <div >
                  <label htmlFor='dobTwo'>DOB:</label>
                  <input type='date' name='dobTwo'
                    onChange={handleChange} value={getForm.dobTwo} />
                </div>

              </div>


              <div className='confirmation' >
                <div className='common-footer'>
                  <input type='text' name='receivedBy'
                    onChange={handleChange} value={getForm.receivedBy} />
                  <label htmlFor='receivedBy'>Received By</label>

                </div>
                {/* second column  */}
                <div className='common-footer'>
                  <input type='text' name='signAuthority'
                    onChange={handleChange} value={getForm.signAuthority} />
                  <label htmlFor='signAuthority'>Signature of the  School Authority</label>

                </div>
              </div>

              <div className='btn'>
                <button >submit</button>
              </div>
            </form>
          </div>
        </section>

      </div>





    </>
  )
}

export default Register
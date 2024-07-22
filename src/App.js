
import './App.css';

function App() {
  return (
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
          <form >

            <ol>

              <li >
                <div className='formData'>
                  <div className='form-label'>  <label htmlFor='studentName'>Name of the student (In Block Letters)</label></div>
                  <div className='form-Input'>   <input type='text' name='studentName' /></div>
                </div>
              </li>

              <li >
                <div className='formData'>
                  <div className='form-label common-label'>  <label htmlFor='gender'>Gender :</label></div>
                  <div className=' common-input' >   <input type='text' name='gender' /></div>
                  {/* second column  */}
                  <div className='form-label common-label'>  <label htmlFor='adhar'>Adhar no. :</label></div>
                  <div className=' common-input' >   <input type='text' name='adhar' /></div>
                </div>
              </li>
              <li >
                <div className='formData'>
                  <div className='form-label common-label'>  <label htmlFor='date'>Date Of Birth :</label></div>
                  <div className=' common-input' >   <input type='date' name='date' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='tc'>STUDENT ID/TC NO. :</label></div>
                  <div className=' common-input' >   <input type='text' name='tc' /></div>
                </div>
              </li>

              <li >
                <div className='formData'>
                  <div className='form-label common-label'>  <label htmlFor='studentHeight'>Student Height (in cm) :</label></div>
                  <div className=' common-input' >   <input type='text' name='studentHeight' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='studentWeight'>Student Weight (in kg) :</label></div>
                  <div className=' common-input' >   <input type='text' name='studentWeight' /></div>
                </div>
              </li>
              {/* Father name  */}
              <li >
                <div className='formData'>
                  <div className='form-label'>  <label htmlFor='fatherName'>A Father's Name (In Block Letters) :</label></div>
                  <div className='form-Input'>   <input type='text' name='fatherName' /></div>
                </div>

                <div className='formData fc'>
                  <div className='form-label common-label'>  <label htmlFor='fOccupation'> B Occupation :</label></div>
                  <div className=' common-input' >   <input type='text' name='fOccupation' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='fAnnualIncome'> Annual Income :</label></div>
                  <div className=' common-input' >   <input type='text' name='fAnnualIncome' /></div>
                </div>
              </li>

              {/* Mother name  */}

              <li >
                <div className='formData'>
                  <div className='form-label'>  <label htmlFor='motherName'>A Mother's Name (In Block Letters) :</label></div>
                  <div className='form-Input'>   <input type='text' name='motherName' /></div>
                </div>

                <div className='formData fc'>
                  <div className='form-label common-label'>  <label htmlFor='mOccupation'> B Occupation :</label></div>
                  <div className=' common-input' >   <input type='text' name='mOccupation' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='mAnnualIncome'> Annual Income :</label></div>
                  <div className=' common-input' >   <input type='text' name='mAnnualIncome' /></div>
                </div>
              </li>



              <li >
                <div className='formData'>
                  <div className='form-label common-label'>  <label htmlFor='religion'>RELIGION:</label></div>
                  <div className=' common-input' >   <input type='text' name='religion' /></div>
                  {/* second column  */}
                  <div className='form-label common-label caste'>  <label htmlFor='caste'>Caste: Gen/SC/ST/OBC,(Tick) Sub Caste  :</label></div>
                  <div className=' common-input' >   <input type='text' name='caste' /></div>
                </div>
              </li>

              <li >
                <div className='formData'>
                  <div className='form-label common-label'>  <label htmlFor='cwsn'>Whether CWSN:</label></div>
                  <div className=' common-input' >   <input type='text' name='cwsn' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='cwsnType'>Type :</label></div>
                  <div className=' common-input' >   <input type='text' name='cwsnType' /></div>
                </div>
              </li>

              <li >
                <div className='formData'>
                  <div className='form-label common-label'>  <label htmlFor='guardianName'>Guardian's Name:</label></div>
                  <div className=' common-input' >   <input type='text' name='guardianName' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='guadianRelation'>Relation With Guardian :</label></div>
                  <div className=' common-input' >   <input type='text' name='guadianRelation' /></div>
                </div>
              </li>

              {/* bank details  */}

              <li >
                <div className='formData'>
                  <div className='form-label common-label'>  <label htmlFor='bankName'>Bank Name:</label></div>
                  <div className=' common-input' >   <input type='text' name='bankName' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='accNO'>A/C NO. :</label></div>
                  <div className=' common-input' >   <input type='text' name='accNO' /></div>
                </div>
                {/* second row  */}
                <div className='formData fc'>
                  <div className='form-label common-label'>  <label htmlFor='ifscCode'>IFSC Code:</label></div>
                  <div className=' common-input' >   <input type='text' name='ifscCode' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='micrCode'>MICR Code :</label></div>
                  <div className=' common-input' >   <input type='text' name='micrCode' /></div>
                </div>
                {/* third row   */}

                <div className='formData fc'>
                  <div className='form-label common-label'>  <label htmlFor='branchName'>Branch Name:</label></div>
                  <div className=' common-input' >   <input type='text' name='branchName' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='branchCode'>Branch Code :</label></div>
                  <div className=' common-input' >   <input type='text' name='branchCode' /></div>
                </div>

                {/* fourth row  */}


                <div className='formData fc'>
                  <div className='form-label common-label'>  <label htmlFor='bloodGroup'>Blood Group:</label></div>
                  <div className=' common-input' >   <input type='text' name='bloodGroup' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='nationality'>Nationality :</label></div>
                  <div className=' common-input' >   <input type='text' name='nationality' /></div>
                </div>
              </li>

              <li >
                <div className='formData'>
                  <div className='form-label common-label'>  <label htmlFor='idMark'>Identification Mark:</label></div>
                  <div className=' common-input' >   <input type='text' name='idMark' /></div>
                  {/* second column  */}
                  <div className='form-label common-label bpl'>  <label htmlFor='bpl'>BPL YES/NO (If Yes Mention Card No.)  :</label></div>
                  <div className=' common-input bpl'  >   <input type='text' name='bpl' /></div>
                </div>
              </li>


              <p className='p-txt'>

                N.B.: Only Father of the student or in case of Father being dead, the Mother of the student will be the legal Guardian and he / she should put his / her signature on the admission register at the time of admission. In case of Father and Mother both being dead any other nearest relative of the student may be the Guardian or proper declaration in respect of above.
              </p>

              {/* address  */}

              <li >
                <div className='formData'>
                  <div className='form-label'>  <label htmlFor='address'>	Present Address : Village / Town  :</label></div>
                  <div className='form-Input'>   <input type='text' name='address' /></div>
                </div>

                <div className='formData fc'>
                  <div className='form-label common-label'>  <label htmlFor='post'>  Post :</label></div>
                  <div className=' common-input' >   <input type='text' name='post' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='ps'> P.S :</label></div>
                  <div className=' common-input' >   <input type='text' name='ps' /></div>
                  {/* third column  */}
                  <div className='form-label common-label '>  <label htmlFor='block'> Block :</label></div>
                  <div className=' common-input' >   <input type='text' name='block' /></div>
                </div>
                {/* second row  */}
                <div className='formData fc'>
                  <div className='form-label common-label'>  <label htmlFor='dist'>  Dist :</label></div>
                  <div className=' common-input' >   <input type='text' name='dist' /></div>
                  {/* second column  */}
                  <div className='form-label common-label '>  <label htmlFor='pinCode'> Pin Code :</label></div>
                  <div className=' common-input' >   <input type='text' name='pinCode' /></div>
                  {/* third column  */}
                  <div className='form-label common-label '>  <label htmlFor='contactNo'> Contact No. :</label></div>
                  <div className=' common-input' >   <input type='text' name='contactNo' /></div>
                </div>
              </li>

              <li >
                <div className='formData'>
                  <div className='form-label common-label bpl'>  <label htmlFor='admissionClass'>Class in which is admission sought :</label></div>
                  <div className=' common-input' >   <input type='text' name='admissionClass' /></div>
                  {/* second column  */}
                  <div className='form-label common-label bpl '>  <label htmlFor='firtAdmission'>Whether first admission or not:</label></div>
                  <div className=' common-input '  >   <input type='text' name='firtAdmission' /></div>
                </div>
              </li>
            </ol>

            <p className='p-txt'> DECLARATION : I <span><input type='text' name='declaration' /></span>. may be declare that the particulars given by  me are true and correct. I further declare that I shall abide by the rules and regulations as well as discipline of the School strictly without being prejudiced.</p>



            <div className='formData fc signature'>
              <div className='common-sign'>
                <div className='sign-input ' >   <input type='text' name='post' /></div>
                <div className='sign-label'>  <label htmlFor='post'>Signature of the Student</label></div>
              </div>
              {/* second column  */}
              <div className='common-sign'>
                <div className=' sign-input' >   <input type='text' name='ps' /></div>
                <div className='sign-label '>  <label htmlFor='ps'>Signature of Parents or Gaurdians </label></div>
              </div>
              {/* third column  */}
              <div className='common-sign' >

                <div className=' sign-input' >   <input type='text' name='block' /></div>
                <div className=' sign-label'>  <label htmlFor='block'> Signature of Head Master</label></div>
              </div>
            </div>

            <hr className='btm'></hr>

            {/* form footer  */}

            <div className='footer'>
              <div className='footer-section'>
                <label htmlFor='formNo'>Form No :</label>
                <input type='text' name='formNo' />
              </div>
              {/* second column  */}
              <div className=' footer-section'>
                <label htmlFor='date'>Date:</label>
                <input type='date' name='date' />
              </div>
            </div>

            {/* footer second */}

            <div className='footerSecond'>

              <div >
                <label htmlFor='receivedAppNo'>Received application Form No  :</label>
                <input type='text' name='receivedAppNo' />
              </div>
              {/* second column  */}
              <div >
                <label htmlFor='admissionNO'>Admission No:</label>
                <input type='text' name='admissionNO' />
              </div>
              <div >
                <label htmlFor='dateThree'>Date:</label>
                <input type='date' name='dateThree' />
              </div>
              <div >
                <label htmlFor='class'>Class:</label>
                <input type='text' name='class' />
              </div>
            </div>
            <div className='fs'>

              <div >
                <label htmlFor='formNo'>Name  :</label>
                <input type='text' name='formNo' />
              </div>
           
              <div >
                <label htmlFor='fatherNameTwo'>Father's Name:</label>
                <input type='text' name='fatherNameTwo' />
              </div>
              <div >
                <label htmlFor='dobTwo'>DOB:</label>
                <input type='date' name='dobTwo' />
              </div>
              
            </div>


            <div className='footer'>
              <div className=''>
              <input type='text' name='receivedBy' />
                <label htmlFor='receivedBy'>Received By :</label>
              
              </div>
              {/* second column  */}
              <div className=''>
              <input type='text' name='signAuthority' />
                <label htmlFor='signAuthority'>Signature of the  School Authority :</label>
                
              </div>
            </div>


          </form>
        </div>
      </section>
    
    </div>
  );
}

export default App;

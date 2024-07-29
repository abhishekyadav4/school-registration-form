
import React, { useState } from 'react'
import { Validation } from '../Validation/Validation';

function StudentReg() {

    const intialValues = {
        admNo: '',
        admDate: '',
        studentName: '',
        gender: '',
        adharNo: '',
        dobOne: '',
        tc: '',
        studentHeight: '',
        studentWeight: '',
        fatherName: '',
        fCoccupation: '',
        fAnnualIncome: '',
        motherName: '',
        mOccupation: '',
        mAnnualIncome: '',
        religion: '',
        caste: '',
        cwsn: '',
        cwsnType: '',
        guardianName: '',
        guardianRelation: '',
        bankName: '',
        acNo: '',
        ifsc: '',
        micrCode: '',
        branchName: '',
        branchCode: '',
        bloodGroup: '',
        nationality: '',
    }
    const [formValues, setFormValues] = useState(intialValues);

    const [errors, setErrors] = useState({});
    const [isFormValid, setisFormValid] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormValues({
            ...formValues,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        //validation
        const { errors, isValid } = Validation(formValues);

        if (isValid) {
            console.log("form submitted", formValues);

            setErrors({});
        } else {
            setErrors(errors);
            setisFormValid(false)
        }
    }
    return (
        <>
            <div className='container'>


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
                            <label>
                                Adm No:
                                <input type='text' name="admNo" value={formValues.admNo} onChange={handleChange} />
                                <p className='err'>
                                    {errors.admNo && <span>{errors.admNo}</span>}
                                </p>
                            </label>
                        </div>
                        <div className='right-txtdate'>
                            <label className='right-date'>
                                Date:
                                <input type='date' name="admDate" value={formValues.admDate} onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                </nav>

                <section>
                    <div className='photo'>
                        <p>photo</p>
                    </div>
                </section>

                <div className='form-main'>

                    <form onSubmit={handleSubmit}>
                        <ol>

                            <li>
                                <div className='fomInfo'>

                                    <div className='formLabelName'>
                                        <label htmlFor='studentName'>Name of the student (In Block Letter) :  </label>
                                    </div>
                                    <div className='nameInput'>
                                        <input type='text' name='studentName'
                                            value={formValues.studentName}
                                            onChange={handleChange} />
                                        <p className='errors'>
                                            {errors.studentName && <span>{errors.studentName}</span>}
                                        </p>
                                    </div>


                                </div>
                            </li>
                            {/* line 2  */}
                            <li>
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='studentName'>Gender :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='gender'
                                                value={formValues.gender}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.gender && <span>{errors.gender}</span>}
                                            </p>
                                        </div>

                                        {/* <label htmlFor="gender">Gender:</label>

                                        <select id="gender" onChange={handleChange}>
                                            <option >Select</option>
                                            <option name='male' value={formValues.male}  >Male</option>
                                            <option name='female' value={formValues.female}>Female</option>
                                            <option name='others' value={formValues.others}>Female</option>

                                        </select>  */}
                                    </div>
                                    {/* adhar  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='adharNo'>ADHAR NO :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='adharNo'
                                                value={formValues.adharNo}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.adharNo && <span>{errors.adharNo}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* line 3  */}
                            <li>
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='dob'>DOB :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='date' placeholder='dobOne' name='dobOne'
                                                value={formValues.dobOne}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.dobOne && <span>{errors.dobOne}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* adhar  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='tc'>STUDENT ID / TC NO :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='tc'
                                                value={formValues.tc}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.tc && <span>{errors.tc}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* line 4  */}
                            <li>
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='studentHeight'>Student Heights(in cms)*  :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='studentHeight'
                                                value={formValues.studentHeight}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.studentHeight && <span>{errors.studentHeight}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* adhar  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='studentWeight'>Student Weight(in Kgs)*  :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='studentWeight'
                                                value={formValues.studentWeight}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.studentWeight && <span>{errors.studentWeight}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            {/* line 5  */}
                            <li>
                                <div className='fomInfo'>

                                    <div className='formLabelName'>
                                        <label htmlFor='fatherName'>A Father’s Name (In Block Letter)  :   </label>
                                    </div>
                                    <div className='nameInput'>
                                        <input type='text' name='fatherName'
                                            value={formValues.fatherName}
                                            onChange={handleChange} />
                                        <p className='errors'>
                                            {errors.fatherName && <span>{errors.fatherName}</span>}
                                        </p>
                                    </div>
                                </div>

                                {/* Occupation  */}
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='fCoccupation'>B Occupation  :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='fCoccupation'
                                                value={formValues.fCoccupation}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.fCoccupation && <span>{errors.fCoccupation}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* annual income  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='fAnnualIncome'>Annual Income  :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='fAnnualIncome'
                                                value={formValues.fAnnualIncome}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.fAnnualIncome && <span>{errors.fAnnualIncome}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* line 6  */}

                            <li>
                                <div className='fomInfo'>

                                    <div className='formLabelName'>
                                        <label htmlFor='motherName'>A Mother’s Name. (In Block Letter) :    </label>
                                    </div>
                                    <div className='nameInput'>
                                        <input type='text' name='motherName'
                                            value={formValues.motherName}
                                            onChange={handleChange} />
                                        <p className='errors'>
                                            {errors.motherName && <span>{errors.motherName}</span>}
                                        </p>
                                    </div>
                                </div>
                                {/* mOccupation */}

                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='mOccupation'>B Occupation  :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='mOccupation'
                                                value={formValues.mOccupation}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.mOccupation && <span>{errors.mOccupation}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* annual income  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='mAnnualIncome'>Annual Income  :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='mAnnualIncome'
                                                value={formValues.mAnnualIncome}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.mAnnualIncome && <span>{errors.mAnnualIncome}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* line 7 */}
                            <li>
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='religion'>RELIGION :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='date' name='religion'
                                                value={formValues.religion}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.religion && <span>{errors.religion}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* catse  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='caste'>Caste : Gen / SC / ST /OBC,(Tick) Sub Caste   </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='caste'
                                                value={formValues.caste}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.caste && <span>{errors.caste}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            {/* line 8  */}
                            <li>
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='cwsn'>Whether CWSN :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='cwsn'
                                                value={formValues.cwsn}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.cwsn && <span>{errors.cwsn}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* catse  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='cwsnType'>Type </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='cwsnType'
                                                value={formValues.cwsnType}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.cwsnType && <span>{errors.cwsnType}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* line 10  */}
                            <li>
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='guardianName'>Guardian’s Name :   </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='guardianName'
                                                value={formValues.guardianName}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.guardianName && <span>{errors.guardianName}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* relation with guardian  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='guardianRelation'>Relation With Guardian:</label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='guardianRelation'
                                                value={formValues.guardianRelation}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.guardianRelation && <span>{errors.guardianRelation}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* line 11  */}
                            <li>
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='bankName'>Bank Name :   </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='bankName'
                                                value={formValues.bankName}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.bankName && <span>{errors.bankName}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* acc no  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='acNo'>A/C No:</label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='acNo'
                                                value={formValues.acNo}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.acNo && <span>{errors.acNo}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* ifsc and micr code  */}
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='ifsc'>IFSC Code :   </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='ifsc'
                                                value={formValues.ifsc}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.ifsc && <span>{errors.ifsc}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* acc no  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='micrCode'>MICR Code : </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='micrCode'
                                                value={formValues.micrCode}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.micrCode && <span>{errors.micrCode}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                {/* branch name and code  */}
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='branchName'>Branch Name :   </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='branchName'
                                                value={formValues.branchName}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.branchName && <span>{errors.branchName}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* acc no  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='branchCode'>Branch Code : </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='branchCode'
                                                value={formValues.branchCode}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.branchCode && <span>{errors.branchCode}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* blood group  */}
                                <div className='fomInfoTwo'>
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='bloodGroup'>Blood Group :   </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='bloodGroup'
                                                value={formValues.bloodGroup}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.bloodGroup && <span>{errors.bloodGroup}</span>}
                                            </p>
                                        </div>

                                    </div>
                                    {/* acc no  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='nationality'>Nationality : </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' name='nationality'
                                                value={formValues.nationality}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.nationality && <span>{errors.nationality}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </li>

                            <button>submit</button>
                        </ol>
                    </form >

                </div>
                {!isFormValid && <p style={{ color: 'red' }}>Please fix the errors above.</p>}
            </div>
        </>

    )
}

export default StudentReg
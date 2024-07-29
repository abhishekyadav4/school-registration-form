
import React, { useState } from 'react'
import Validation from '../Validation/Validation';

function StudentReg() {

    const intialValues = {
        studentName: '',
        gender: '',
        adharNo:'',
        email: '',
        dobOne:'',
        tc:'',
        studentHeight:'',
        studentWeight:'',
    }
    const [formValues, setFormValues] = useState(intialValues);

    const [errors, setErrors] = useState({})
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
        setErrors(Validation(formValues))
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
                            <p>Adm No :</p>
                        </div>
                        <div className='right-txt'>
                            <p>Date :</p>
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

                                    <div className='formLabel'>
                                        <label htmlFor='studentName'>Name of the student (In Block Letter) :  </label>
                                    </div>
                                    <div className='nameInput'>
                                        <input type='text' placeholder='name' name='studentName'
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
                                        {/* <div className='formLabel'>
                                            <label htmlFor='studentName'>Gender :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' placeholder='gender' name='gender'
                                                value={formValues.gender}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.gender && <span>{errors.gender}</span>}
                                            </p>
                                        </div> */}

                                        <label for="cars">Gender:</label>

                                        <select id="cars">
                                            <option >Select</option>
                                            <option name= 'man'  >Male</option>
                                            <option  name ='female'>Female</option>
                                            <option value="others">Female</option>
                                            
                                        </select>
                                    </div>
                                    {/* adhar  */}
                                    <div className='common'>
                                        <div className='formLabel'>
                                            <label htmlFor='adharNo'>ADHAR NO :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text' placeholder='adharNo' name='adharNo'
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
                                            <label htmlFor='tc'>STUDENT ID / TC NO :  :  </label>
                                        </div>
                                        <div className='formInput '>
                                            <input type='text'  name='tc'
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
                                            <input type='text'  name='studentHeight'
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
                                            <input type='text'  name='studentWeight'
                                                value={formValues.studentWeight}
                                                onChange={handleChange} />
                                            <p className='errors'>
                                                {errors.studentWeight && <span>{errors.studentWeight}</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>




                            <button>submit</button>




                        </ol>
                    </form >

                </div>

            </div>
        </>

    )
}

export default StudentReg
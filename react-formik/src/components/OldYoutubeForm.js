import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

//Managing the form state
const initialValues = {
    name: '',
    email: '',
    channel: ''
}

//Handling form submission
const onSubmit = values => {
    console.log(" Form Data", values);
}

//Form Validation 
const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})

function OldYoutubeForm() {

    const formik = useFormik({  
        initialValues,
        onSubmit,
        validationSchema,
        // validate
    });

    // console.log("Visited Field", formik.touched);
    // console.log("Formik error", formik.error);
    // console.log("Formik values", formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        // value={formik.values.name}
                        // onBlur={formik.handleBlur}//helper method  
                        // onChange={formik.handleChange} 
                        {...formik.getFieldProps('name')}
                        autoComplete="off"
                    />
                    { formik.touched.name && formik.errors.name ? (
                        <div className='error'>{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        // value={formik.values.email} 
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                        {...formik.getFieldProps('email')} 
                        autoComplete="off"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input 
                        type='text' 
                        id='channel' 
                        name='channel' 
                        // value={formik.values.channel} 
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                        {...formik.getFieldProps('channel')} 
                        autoComplete="off"
                    />
                    { formik.touched.channel && formik.errors.channel ? (
                        <div className='error'>{formik.errors.channel}</div>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default OldYoutubeForm

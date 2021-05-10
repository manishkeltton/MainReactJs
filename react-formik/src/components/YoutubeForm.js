import React from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

//Managing the form state
const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
}

//Handling form submission
const onSubmit = values => {
    console.log(" Form Data", values);
}

//Form Validation 
// const validate = values => {
    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    // errors.name = 'This field is required'
//     let errors = {}
    
//     if(!values.name){
//         errors.name = 'Required'
//     }

//     if (!values.email){
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email format';
//     }

//     if (!values.channel){
//         errors.channel = 'Required'
//     }

//     return errors
// } 

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})

function YoutubeForm() {

    // const formik = useFormik({  
    //     initialValues,
    //     onSubmit,
    //     validationSchema,
        // validate
    // });

    // console.log("Visited Field", formik.touched);
    // console.log("Formik error", formik.error);
    // console.log("Formik values", formik.values)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field 
                        type='text' 
                        id='name' 
                        name='name' 
                        // value={formik.values.name}
                        // onBlur={formik.handleBlur}//helper method  
                        // onChange={formik.handleChange} 
                        autoComplete="off"
                    />
                    <ErrorMessage name='name' component={TextError} />
                    {/* { formik.touched.name && formik.errors.name ? (
                        <div className='error'>{formik.errors.name}</div>
                    ) : null} */}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field 
                        type='email' 
                        id='email' 
                        name='email' 
                        // value={formik.values.email} 
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange} 
                        autoComplete="off"
                    />
                    <ErrorMessage name='email' component={TextError} />
                    {/* {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null} */}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field 
                        type='text' 
                        id='channel' 
                        name='channel' 
                        // value={formik.values.channel} 
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange} 
                        autoComplete="off"
                    />
                    <ErrorMessage name='channel' component={TextError} />
                    {/* { formik.touched.channel && formik.errors.channel ? (
                        <div className='error'>{formik.errors.channel}</div>
                    ) : null} */}
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field as='textarea' id='comments' name='comments' />
                    <ErrorMessage name='comments' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    {/* implementation of the field component with render props pattern */}
                    <Field name='address' >
                        {
                            (props) => {
                                const { field, form, meta } = props
                                console.log('Render props', props)
                                return (
                                    <div>
                                        <input type='text' id='address' {...field} />
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                    <ErrorMessage name='address' component={TextError} />

                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm

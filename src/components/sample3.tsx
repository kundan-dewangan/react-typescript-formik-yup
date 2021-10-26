//introduce to boilerplate code
// insted of useFormik use  Formik and make simple
// insted of simple form we are use Formik Form component throught Formik
// Add Field component from formik and replace input to Field
//remove helper component getFieldProps method

//import ErrorMessage from formik and replace block of code througth <ErrorMessage/> component and add props name to specific field name
//here important to add neme key.

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


export default function Sample2() {

    const initialValues = {
        fullName: '',
        email: '',
        mobile: '',
    }
    const onSubmit = (value: any) => {
        console.log("Submit Value::", value)
    }

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Required"),
        email: Yup.string().email("invalid email").required('required'),
        mobile: Yup.number().required('required')
    })

    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 rounded">
                    <h1 className="text-center">Sample Three</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <div className="form-group mb-4">
                                <label htmlFor="fullName">Full Name</label>
                                <Field
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="form-control"
                                    placeholder="Enter the full name"
                                />
                                <ErrorMessage name='fullName' />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter the email address"
                                />
                                <ErrorMessage name='email' />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="mobile">Mobile</label>
                                <Field
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Enter the mobile number"
                                />
                               <ErrorMessage name='mobile' />
                            </div>
                            <div className="form-group mb-4 text-center">
                                <button type="submit" className="btn btn-sm  btn-info text-center w-25">Submit</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

//Nested Object
// for nested object we need to create object and write input name object name with data name; 
//add array value using index number 

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


export default function Sample2() {

    const initialValues = {
        fullName: '',
        email: '',
        mobile: '',
        address: '',
        comments: '',
        social: {
            linkedIn: '',
            github: '',
        },
        phoneNumber: ["",""]

    }
    const onSubmit = (value: any) => {
        console.log("Submit Value::", value)
    }

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Required"),
        email: Yup.string().email("invalid email").required('required'),
        mobile: Yup.number().required('required'),
        address: Yup.string().required("Required"),
        comments: Yup.string().required("Required"),
    })

    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 rounded">
                    <h1 className="text-center">Sample Five</h1>
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
                                <ErrorMessage name='fullName' component='div' />
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
                                <ErrorMessage name='email'>
                                    {(errMsg:any) => <div className="text-danger">{errMsg}</div>}
                                </ErrorMessage>
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
                            <div className="form-group mb-4">
                                <label htmlFor="address">Address</label>
                                <Field
                                    as="textarea"
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="form-control"
                                    placeholder="Enter the address"
                                />
                                <ErrorMessage name='address' />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="comments">Comments</label>
                                <Field name="comments" >
                                    {(props: any) => {
                                        const { field, form, meta } = props;
                                        return (
                                            <div>
                                                <input type="text" id="comments" className="form-control" placeholder="Enter the comments" {...field} />
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }}
                                </Field>
                                {/* <ErrorMessage name='comments' /> */}
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="linkedIn">LinkedIn Link</label>
                                <Field
                                    type="text"
                                    id="linkedIn"
                                    name="social.linkedIn"
                                    className="form-control"
                                    placeholder="Enter the linkedIn link"
                                />
                                <ErrorMessage name='linkedIn' />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="github">Github Link</label>
                                <Field
                                    type="text"
                                    id="github"
                                    name="social.github"
                                    className="form-control"
                                    placeholder="Enter the github link"
                                />
                                <ErrorMessage name='github' />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="primaryNo">Primary Number</label>
                                <Field
                                    type="text"
                                    id="primaryNo"
                                    name="phoneNumber[0]"
                                    className="form-control"
                                    placeholder="Enter the primary number"
                                />
                                <ErrorMessage name='primaryNo' />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="secondaryNo">Secondary Number</label>
                                <Field
                                    type="text"
                                    id="secondaryNo"
                                    name="phoneNumber[1]"
                                    className="form-control"
                                    placeholder="Enter the secondary number"
                                />
                                <ErrorMessage name='secondaryNo' />
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

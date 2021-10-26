//fieldArray component
//here need to import fieldArray from formik.
//dynamic add or delete array and get value.

//introduce FastField  compoennt
//FastField optimise the page load 
//Use FastField insted of Field component.


import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup'


export default function Sample2() {

    const initialValues = {
        fullName: '',
        comments: '',
        social: {
            linkedIn: '',
            github: '',
        },
        phoneNumber: ["", ""],
        skill: ['']

    }
    const onSubmit = (value: any) => {
        console.log("Submit Value::", value)
    }

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Required"),
        comments: Yup.string().required("Required"),
    })

    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 rounded">
                    <h1 className="text-center">Sample Six</h1>
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
                                <label htmlFor="comments">Comments</label>
                                <FastField name="comments" >
                                    {(props: any) => {
                                        console.log("field render")
                                        const { field, form, meta } = props;
                                        return (
                                            <div>
                                                <input type="text" id="comments" className="form-control" placeholder="Enter the comments" {...field} />
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }}
                                </FastField>
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

                            <div className="form-group mb-4">
                                <label>List of skill</label>
                                <FieldArray name="skill">
                                    {(fieldArrayProps) => {
                                        const { push, remove, form } = fieldArrayProps;
                                        const { values } = form;
                                        const { skill } = values;
                                        return <div>{
                                            skill.map((item:any, index:any) => (
                                                <div className="d-flex justify-content-space-arround mb-4" key={index}>
                                                    <Field
                                                        type="text"
                                                        name={`skill[${index}]`}
                                                        className="form-control"
                                                        placeholder="Enter the skill"
                                                    />
                                                   <button type="button" className="btn btn-primary btn-sm mx-1 " onClick={()=>push('')}> + </button>
                                                   {index > 0 && <button type="button" className="btn btn-danger btn-sm ml-2" onClick={()=>remove(index)}> - </button>}
                                                </div>
                                            ))
                                        }</div>
                                    }}
                                </FieldArray>
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

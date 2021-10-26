import React from 'react'
import { useFormik } from 'formik';


export default function Sample1() {

    const initialValues = {
        fullName: '',
        email: '',
        mobile: '',
    }
    const onSubmit = (value:any) => {
        console.log("Submit Value::", value)
    }

    const validate =  (values:any) => {
        let errors: any = {}
        if (!values.fullName) {
            errors.fullName = "Full name is required"
        }
        if (!values.email) {
            errors.email = "Email is required"
        } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
            errors.email = "Invalid email address"
        }
        if (!values.mobile) {
            errors.mobile = "Mobile number is required"
        }

        return errors;
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })

    // console.log("formik Value::", formik.values)
    // console.log("formik Error::", formik.errors)
    // console.log("visited Error::", formik.touched)
    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 rounded">
                    <h1 className="text-center">Sample One</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group mb-4">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="form-control"
                                placeholder="Enter the full name"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.fullName && formik.errors.fullName && <div className="text-danger">{formik.errors.fullName}</div>}
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter the email address"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email &&formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                className="form-control"
                                placeholder="Enter the mobile number"
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.mobile && formik.errors.mobile ? <div className="text-danger">{formik.errors.mobile}</div> : null}
                        </div>
                        <div className="form-group mb-4 text-center">
                        <button type="submit" className="btn btn-sm  btn-info text-center w-25">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

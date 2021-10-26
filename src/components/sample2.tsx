// here indroduce Yup method
// best way to write (we can replace all in this in one mehod  ) : {...formik.getFieldProps('fullName')}
//         name="mobile"
//         value={formik.values.mobile}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}



import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'


export default function Sample2() {

    const initialValues = {
        fullName: '',
        email: '',
        mobile: '',
    }
    const onSubmit = (value:any) => {
        console.log("Submit Value::", value)
    }

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Required"),
        email: Yup.string().email("invalid email").required('required'),
        mobile: Yup.number().required('required')
    })


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    
    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 rounded">
                    <h1 className="text-center">Sample Two</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group mb-4">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                className="form-control"
                                placeholder="Enter the full name"
                                {...formik.getFieldProps('fullName')}
                            />
                            {formik.touched.fullName && formik.errors.fullName && <div className="text-danger">{formik.errors.fullName}</div>}
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                className="form-control"
                                placeholder="Enter the email address"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email &&formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                type="text"
                                id="mobile"
                                className="form-control"
                                placeholder="Enter the mobile number"
                                {...formik.getFieldProps('mobile')}
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

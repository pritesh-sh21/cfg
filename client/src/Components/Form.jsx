import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const validationSchema = Yup.object().shape({
    childName: Yup.string().required('Child Name is required'),
    age: Yup.number().required('Age is required').positive('Age must be a positive number'),
    dob: Yup.date().required('DOB is required'),
    gender: Yup.string().required('Gender is required'),
    disability: Yup.string().required('Disability is required'),
    severity: Yup.string().required('Severity is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    aadharCardNo: Yup.string().required('Aadhar Card No is required'),
    schoolName: Yup.string().required('School Name is required'),
    familyMembers: Yup.string().required('Family Members is required'),
    identification: Yup.string().required('Identification is required'),
});

const Form = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            childName: '',
            age: '',
            dob: '',
            gender: '',
            disability: '',
            severity: '',
            contactNumber: '',
            aadharCardNo: '',
            schoolName: '',
            familyMembers: '',
            identification: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Process the form data or send it to an API endpoint
            console.log(values);
            setFormSubmitted(true);
            formik.resetForm();
        },
    });

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Child's Personal Information</h5>
                            {formSubmitted ? (
                                <div className="alert alert-success" role="alert">
                                    Form submitted successfully!
                                </div>
                            ) : null}
                            <form onSubmit={formik.handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">Child Name:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.childName && formik.errors.childName ? 'is-invalid' : ''}`}
                                        name="childName"
                                        value={formik.values.childName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.childName && formik.errors.childName ? (
                                        <div className="invalid-feedback">{formik.errors.childName}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Age:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.age && formik.errors.age ? 'is-invalid' : ''}`}
                                        name="age"
                                        value={formik.values.age}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.age && formik.errors.age ? (
                                        <div className="invalid-feedback">{formik.errors.age}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">DOB:</label>
                                    <input
                                        type="date"
                                        className={`form-control ${formik.touched.dob && formik.errors.dob ? 'is-invalid' : ''}`}
                                        name="dob"
                                        value={formik.values.dob}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.dob && formik.errors.dob ? (
                                        <div className="invalid-feedback">{formik.errors.dob}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Gender:    </label>
                                    <div className="form-check-inline">
                                        <input
                                            type="radio"
                                            className={`form-check-input ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
                                            name="gender"
                                            value="male"
                                            checked={formik.values.gender === 'male'}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input
                                            type="radio"
                                            className={`form-check-input ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
                                            name="gender"
                                            value="female"
                                            checked={formik.values.gender === 'female'}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input
                                            type="radio"
                                            className={`form-check-input ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
                                            name="gender"
                                            value="other"
                                            checked={formik.values.gender === 'other'}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <label className="form-check-label">Other</label>
                                    </div>
                                    {formik.touched.gender && formik.errors.gender && (
                                        <div className="invalid-feedback">{formik.errors.gender}</div>
                                    )}
                                </div>



                                <div className="mb-3">
                                    <label className="form-label">Disability:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.disability && formik.errors.disability ? 'is-invalid' : ''}`}
                                        name="disability"
                                        value={formik.values.disability}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.disability && formik.errors.disability ? (
                                        <div className="invalid-feedback">{formik.errors.disability}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Severity:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.severity && formik.errors.severity ? 'is-invalid' : ''}`}
                                        name="severity"
                                        value={formik.values.severity}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.severity && formik.errors.severity ? (
                                        <div className="invalid-feedback">{formik.errors.severity}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Contact Number:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.contactNumber && formik.errors.contactNumber ? 'is-invalid' : ''}`}
                                        name="contactNumber"
                                        value={formik.values.contactNumber}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.contactNumber && formik.errors.contactNumber ? (
                                        <div className="invalid-feedback">{formik.errors.contactNumber}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Aadhar Card No:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.aadharCardNo && formik.errors.aadharCardNo ? 'is-invalid' : ''}`}
                                        name="aadharCardNo"
                                        value={formik.values.aadharCardNo}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.aadharCardNo && formik.errors.aadharCardNo ? (
                                        <div className="invalid-feedback">{formik.errors.aadharCardNo}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">School Name:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.schoolName && formik.errors.schoolName ? 'is-invalid' : ''}`}
                                        name="schoolName"
                                        value={formik.values.schoolName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.schoolName && formik.errors.schoolName ? (
                                        <div className="invalid-feedback">{formik.errors.schoolName}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Family Members:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.familyMembers && formik.errors.familyMembers ? 'is-invalid' : ''}`}
                                        name="familyMembers"
                                        value={formik.values.familyMembers}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.familyMembers && formik.errors.familyMembers ? (
                                        <div className="invalid-feedback">{formik.errors.familyMembers}</div>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Identification:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.identification && formik.errors.identification ? 'is-invalid' : ''}`}
                                        name="identification"
                                        value={formik.values.identification}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.identification && formik.errors.identification ? (
                                        <div className="invalid-feedback">{formik.errors.identification}</div>
                                    ) : null}
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;




import { useFormik } from "formik"
import { formData } from "../../data/formData"
import InputForm from "../InputForm";
import { formValidation } from "../../data/formValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { savePersonalData } from "../../store/formDataSlice";


const PersonalDetail = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: formData,
        validationSchema: formValidation,
        onSubmit: (values, action) => {
            if(values){
                dispatch(savePersonalData(values));
            }
            action.resetForm();
            navigate("/cardDetails");
        }
    });


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-white bg-opacity-75">
            <form className="px-8 pt-6 pb-8 m-10 max-w-md lg:max-w-full p-6 bg-transparent rounded-md shadow-2xl" onSubmit={handleSubmit}>
                
                <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2 text-center">Personal Details</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <InputForm type={"text"} id={"firstName"} onBlur={handleBlur} onChange={handleChange} placeholder={"Ankit"} value={values.firstName} key={"firstName"} label={"First Name"} />
                            {errors.firstName && touched.firstName ? (<p className="text-red-500 mt-3">{errors.firstName}</p>) : null}
                        </div>
                        <div>
                            <InputForm type={"text"} id={"middleName"} onBlur={handleBlur} onChange={handleChange} placeholder={"Kumar"} value={values.middleName} key={"middleName"} label={"Middle Name"} />
                            {errors.middleName && touched.middleName ? (<p className="text-red-500 mt-3">{errors.middleName}</p>) : null}
                        </div>
                        <div>
                            <InputForm type={"text"} id={"lastName"} onBlur={handleBlur} onChange={handleChange} placeholder={"Das"} value={values.lastName} key={"lastName"} label={"Last Name"} />
                            {errors.lastName && touched.lastName ? (<p className="text-red-500 mt-3">{errors.lastName}</p>) : null}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">Address</h2>
                    <InputForm type={"text"} id={"address"} onBlur={handleBlur} onChange={handleChange} placeholder={"123 Main St"} value={values.address} key={"address"} label={"Address"} />
                    {errors.address && touched.address ? (<p className="text-red-500 mt-3">{errors.address}</p>) : null}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                    <div>
                        <InputForm type={"text"} id={"pincode"} onBlur={handleBlur} onChange={handleChange} placeholder={"123456"} value={values.pincode} key={"pincode"} label={"Pincode"} />
                        {errors.pincode && touched.pincode ? (<p className="text-red-500 mt-3">{errors.pincode}</p>) : null}
                    </div>
                    <div>
                        <InputForm type={"text"} id={"state"} onBlur={handleBlur} onChange={handleChange} placeholder={"Odisha"} value={values.state} key={"state"} label={"State"} />
                        {errors.state && touched.state ? (<p className="text-red-500 mt-3">{errors.state}</p>) : null}
                    </div>
                    <div>
                        <InputForm type={"text"} id={"country"} onBlur={handleBlur} onChange={handleChange} placeholder={"India"} value={values.country} key={"country"} label={"Country"} />
                        {errors.country && touched.country ? (<p className="text-red-500 mt-3">{errors.country}</p>) : null}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div>
                        <InputForm type={"email"} id={"email"} onBlur={handleBlur} onChange={handleChange} placeholder={"john.doe@example.com"} value={values.email} key={"email"} label={"Email Address"} />
                        {errors.email && touched.email ? (<p className="text-red-500 mt-3">{errors.email}</p>) : null}
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                        <div className="flex space-x-2">
                            <input type="text" name="countryCode" className="shadow appearance-none border rounded w-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={values.countryCode} readOnly />
                            <input type="tel" autoComplete="off" id="phoneNumber" name="phoneNumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="9673456789" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.phoneNumber && touched.phoneNumber ? (<p className="text-red-500 mt-3 ml-16">{errors.phoneNumber}</p>) : null}
                    </div>
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">Family Details</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <InputForm type={"text"} id={"fatherName"} onBlur={handleBlur} onChange={handleChange} placeholder={"John Doe Sr."} value={values.fatherName} key={"fatherName"} label={"Father's Name"} />
                            {errors.fatherName && touched.fatherName ? (<p className="text-red-500 mt-3">{errors.fatherName}</p>) : null}
                        </div>
                        <div>
                            <InputForm type={"text"} id={"motherName"} onBlur={handleBlur} onChange={handleChange} placeholder={"Jane Doe"} value={values.motherName} key={"motherName"} label={"Mother's Name"} />
                            {errors.motherName && touched.motherName ? (<p className="text-red-500 mt-3">{errors.motherName}</p>) : null}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <InputForm type={"text"} id={"occupation"} onBlur={handleBlur} onChange={handleChange} placeholder={"Software Engineer"} value={values.occupation} key={"occupation"} label={"Occupation"} />
                    {errors.occupation && touched.occupation ? (<p className="text-red-500 mt-3">{errors.occupation}</p>) : null}
                </div>

                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-white text-black py-2 px-4 rounded-full shadow-2xl hover:bg-gray-950 hover:text-white transition-all duration-500 ease-in-out">Continue</button>
                </div>
            </form>
        </div>

    )
}

export default PersonalDetail
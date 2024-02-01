import { useFormik } from 'formik';
import { creditCardFormData } from '../../data/formData';
import { creditCardValidation } from '../../data/formValidation';
import InputForm from '../InputForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveCreditCardData } from '../../store/formDataSlice';

const CreditCardDetails = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: creditCardFormData,
        validationSchema: creditCardValidation,
        onSubmit: (values, action) => {
            if(values){
                dispatch(saveCreditCardData(values));
            }
            action.resetForm();
            navigate("/showDetails");
        }
    });

    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-white bg-opacity-75">
            <div className="p-8 max-w-md w-full bg-transparent rounded-md shadow-2xl m-14">
                <h2 className="text-2xl font-semibold mb-6 text-center">Credit Card Details</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputForm type={"text"} id={"cardNumber"} onBlur={handleBlur} onChange={handleChange} placeholder={"1234 5678 9012 3456"} value={values.cardNumber} key={"cardNumber"} label={"Card Number"} />
                        {errors.cardNumber && touched.cardNumber ? (<p className="text-red-500 mt-3">{errors.cardNumber}</p>) : null}
                    </div>

                    <div className="mb-4 flex">
                        <div className="w-1/2 mr-2">
                            <InputForm type={"text"} id={"expiryDate"} onBlur={handleBlur} onChange={handleChange} placeholder={"MM/YY"} value={values.expiryDate} key={"expiryDate"} label={"Expiry Date"} />
                            {errors.expiryDate && touched.expiryDate ? (<p className="text-red-500 mt-3">{errors.expiryDate}</p>) : null}
                        </div>
                        <div className="w-1/2 ml-2">
                            <InputForm type={"text"} id={"cvv"} onBlur={handleBlur} onChange={handleChange} placeholder={"123"} value={values.cvv} key={"cvv"} label={"CVV"} />
                            {errors.cvv && touched.cvv ? (<p className="text-red-500 mt-3">{errors.cvv}</p>) : null}
                        </div>
                    </div>

                    <div className="mb-4">
                        <InputForm type={"text"} id={"cardHolderName"} onBlur={handleBlur} onChange={handleChange} placeholder={"John Doe"} value={values.cardHolderName} key={"cardHolderName"} label={"Card Holder Name"} />
                        {errors.cardHolderName && touched.cardHolderName ? (<p className="text-red-500 mt-3">{errors.cardHolderName}</p>) : null}
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="bg-white text-black py-2 px-4 rounded-full shadow-2xl hover:bg-gray-950 hover:text-white transition-all duration-500 ease-in-out">Continue</button>       
                    </div>
                </form>     
            </div>       
        </div>
    )
}

export default CreditCardDetails
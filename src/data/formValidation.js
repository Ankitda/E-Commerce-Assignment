import * as Yup from "yup"

export const formValidation = Yup.object({
    firstName: Yup.string().min(3).max(12).matches(/^[a-zA-Z\s]+$/, 'Invalid Input').required("First Name is Required"),
    middleName: Yup.string().min(3).max(12).matches(/^[a-zA-Z\s]+$/, 'Invalid Input'),
    lastName: Yup.string().min(3).max(12).matches(/^[a-zA-Z\s]+$/, 'Invalid Input').required("Last Name is Required"),
    address: Yup.string().required("Address is Required"),
    pincode: Yup.string().matches(/^\d{6}$/, 'Invalid postal code').required('Pincode is required'),
    state: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid Input').required("State is Required"),
    country: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid Input').required("Country is Required"),
    email: Yup.string().email().required("Email is Invalid"),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required("Phone Number is Required"),
    fatherName: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid Input').required("Father Name is Required"),
    motherName: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid Input').required("Mother Name is Required"),
    occupation: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid Input').min(10).max(30).required("Occupation is Required")
})

export const creditCardValidation = Yup.object({

    cardNumber: Yup.string().matches(/^[0-9]{13,19}$/, 'Invalid credit card number').required("Enter the Number"),

    expiryDate: Yup.string().matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date format')
        .test('is-future-date', 'Expiry date must be in the future', value => {
            if (!value) {
                return false; // Invalid if the value is empty
            }

            const [month, year] = value.split('/');
            const expiryDate = new Date(`20${year}`, month - 1); // Assuming years are in the format 'YY'

            // Compare with the current date
            return expiryDate > new Date();
        }),
    cvv : Yup.string().matches(/^\d{3,4}$/, 'Invalid CVV format').required("CVV Number Required"),
    cardHolderName : Yup.string().min(6).max(40).matches(/^[a-zA-Z\s]+$/, 'Invalid Input').required("Card Holder Name is Required")

})
import { personalDataInputFields, creditDataInputFields } from '../data/formData'
import { useSelector } from 'react-redux'
import { selectCreditCardData, selectPersonalData } from '../store/formDataSlice'
import { Link } from 'react-router-dom'

const Information = () => {

    const dataOfCredit = useSelector(selectCreditCardData);
    const dataOfPerson = useSelector(selectPersonalData);

    const capitalize = (inputStr) => {
        return inputStr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-white bg-opacity-75">
            <div className="container mx-auto p-8 max-w-5xl bg-transparent rounded-md shadow-2xl mt-8 mb-8">

                <div className="bg-gradient-to-r from-gray-300 to-white bg-opacity-75 rounded-t p-4 mb-4 text-black text-center">
                    <h1 className="text-3xl font-bold">Form Data</h1>
                    <p className="text-sm">Thank you for your submission!</p>
                </div>

                <div className="mb-4">
                    {
                        personalDataInputFields.map((field, index) => (
                            <div key={index} className='p-4'>
                                <strong className="text-pretty p-2">{capitalize(field)} : <span className="text-gray-800" id="firstName">{dataOfPerson[field]}</span>
                                </strong>
                                <hr />
                            </div>
                        ))
                    }
                    {
                        creditDataInputFields.map((field, index) => (
                            <div key={index} className='p-4'>
                                <strong className="text-pretty p-2">{capitalize(field)} : <span className="text-gray-800" id="firstName">{dataOfCredit[field]}</span>
                                </strong>
                                <hr />
                            </div>
                        ))
                    }
                </div>

                <div className="flex align-middle justify-center">
                    <Link to={"/contact"}>
                        <button className='p-2 bg-gray-500 rounded-full w-20'>Back</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Information
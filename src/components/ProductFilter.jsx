import { useEffect, useState } from 'react'
import ProductDisplay from './ProductDisplay'
import { useFormik } from 'formik';
import { categoryFilter } from '../data/filterData';
import { initialValues } from '../data/filterData';
import { brandFilter } from '../data/filterData';
import { priceFilter } from '../data/filterData';
import useFetch from './useFetch';
import ProductLoader from './ProductLoader';

const ProductFilter = () => {

    const url = 'https://dummyjson.com/products';

    const [isActive, setIsActive] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [productData, setProductData] = useState([]);
    const { data, loading } = useFetch(url);

    useEffect(() => {
        setProductData(data);
    }, [data, isActive]);

    const toggle = () => {
        setIsActive((prevValue) => !prevValue);
        setIsReset(false);
    }

    const filterProducts = (value) => {
        let isCategoryType = false;
        let isBrandType = false;

        categoryFilter.map((item) => {
            if (item === value) {
                isCategoryType = true;
                isBrandType = false;
            }
        })

        brandFilter.map((item) => {
            if (item === value) {
                isBrandType = true;
                isCategoryType = false;
            }
        })

        if (isCategoryType) {
            const result = productData.filter((product) => (
                product.category === value
            ))
            setIsReset(true);
            return result;


        } else if (isBrandType) {
            const result = productData.filter((item) => (
                item.brand === value
            ))
            setIsReset(true);
            return result;

        } else if (value === "lowPrice") {
            const sortedProducts = [...productData].sort((a, b) => {
                return a.price - b.price;
            });
            return sortedProducts;

        } else if (value === "highPrice") {
            const sortedProducts = [...productData].sort((a, b) => {
                return b.price - a.price;
            });
            return sortedProducts;
        }
    }

    const { handleChange, handleBlur, values, handleSubmit } = useFormik({
        initialValues,
        onSubmit: (values) => {
            if (values.selectedOption) {
                setProductData(filterProducts(values.selectedOption));
            }
        },
    });

    return (
        <div className="container mx-auto p-8 flex flex-wrap font-sans">
          
            <form className="w-full md:w-1/4 pr-8" onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
              
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Product Category</h3>
                    <ul className="space-y-2">
                        {categoryFilter.map((option) => (
                            <div key={option}>
                                <label className='block mb-1'>
                                    <input
                                        type="radio"
                                        name="selectedOption"
                                        className='mr-4'
                                        value={option}
                                        checked={values.selectedOption === option}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {` ${option}`}
                                </label>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Sort By</h3>
                    <ul className="space-y-2">
                        {priceFilter.map((option) => (
                            <div key={option}>
                                <label className='block mb-1'>
                                    <input
                                        type="radio"
                                        name="selectedOption"
                                        className='mr-4'
                                        value={option}
                                        checked={values.selectedOption === option}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {` ${option}`}
                                </label>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Brands</h3>
                    <ul className="space-y-2">
                        {brandFilter.map((option) => (
                            <div key={option}>
                                <label className='block mb-1'>
                                    <input
                                        type="radio"
                                        name="selectedOption"
                                        className='mr-4'
                                        value={option}
                                        checked={values.selectedOption === option}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {` ${option}`}
                                </label>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <div className='flex justify-center items-center'>
                        <button type='submit' className='w-20 h-10 rounded-full bg-gray-300 shadow-2xl border-2 mt-5 font-serif font-medium hover:bg-black hover:text-white transition-all duration-500'>Filter</button>
                    </div>
                </div>
            </form>


          
            <div className="w-full md:w-3/4">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-semibold mb-4">Product List</h2>
                    <button onClick={toggle} className='w-20 h-10 rounded-full bg-gray-300 shadow-2xl border-2 font-serif font-medium hover:bg-black hover:text-white transition-all duration-500'>Reset</button>
                </div>
                {loading ? <ProductLoader /> : <ProductDisplay data={productData} isReset={isReset} /> }
            </div>
        </div>
    )
}

export default ProductFilter
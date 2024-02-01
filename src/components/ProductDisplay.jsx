import React from 'react'

const ProductDisplay = ({ data, isReset }) => {
    return (
        <div className="container mx-auto p-8 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data && data.map((product) => (
                    <div className="bg-white p-4 shadow-md" key={product.id}>
                        <img src={product.images[0]} alt="Product 1" style={{ maxHeight: "80px" }} className="mb-4 rounded-lg" />
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-700 mb-2">{product.brand}</p>
                        <p className="text-gray-700 mb-2">{product.category}</p>
                        <p className="text-green-600 font-semibold">Rs {product.price}</p>
                    </div>
                ))}
            </div>
            { isReset && <p className='flex justify-center mt-5 font-sans font-semibold text-xl'>Click the 'Reset' button to filter the items again.</p>}
        </div>
    )
}

export default ProductDisplay
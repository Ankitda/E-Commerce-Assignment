const ProductLoader = () => {
    const noOfOccur = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];
    return (
        <div className="container mx-auto p-8 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {noOfOccur.map((item) => (
                    <div key={item} className="w-52 h-60 bg-gradient-to-r from-gray-300 to-black rounded-md overflow-hidden">
                        <div className="w-full h-full bg-white animate-pulse"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductLoader
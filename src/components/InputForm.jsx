const InputForm = ({ type, id, placeholder, value, onChange, onBlur, label }) => {
    return (
        <>
            <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input
                type={type}
                autoComplete="off"
                id={id}
                name={id}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </>
    )
}

export default InputForm
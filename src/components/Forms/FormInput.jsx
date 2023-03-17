export default function FormInput({ id, name, label, type, placeholder, className = '', onChangeHandler }) {

    function handleChange(event) {
        event.preventDefault();
        onChangeHandler(event);
    }

    return (
        <div className={className + ' inline-flex flex-col gap-y-2 w-full'}>
            <label htmlFor={name} className='font-medium text-sm'>{label}</label>
            <input
                className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-codemart-300 text-sm"
                id={id} name={name} type={type} placeholder={placeholder} onChange={handleChange}
            />
        </div>
    )
}
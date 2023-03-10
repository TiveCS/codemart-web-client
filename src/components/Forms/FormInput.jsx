export default function FormInput({ id, name, label, type, placeholder, onChangeHandler }) {

    function handleChange(event) {
        event.preventDefault();
        onChangeHandler(event);
    }

    return (
        <div className='inline-flex flex-col gap-y-2'>
            <label htmlFor={name} className='font-medium'>{label}</label>
            <input id={id} name={name} type={type} placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}
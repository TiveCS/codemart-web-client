export default function FormInput({ id, name, label, type, placeholder, onChangeHandler }) {
    function handleChange(event) {
        event.preventDefault();
        onChangeHandler(event.target.value);
    }

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={id} name={name} type={type} placeholder={placeholder} onChange={handleChange} />
        </div>
    );
}

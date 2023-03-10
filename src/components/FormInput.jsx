export default function FormInput({ label, value, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <input value={value} onChange={onChange} />
        </div>
    );
}

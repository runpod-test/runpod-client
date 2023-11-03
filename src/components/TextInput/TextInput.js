import './TextInput.css'

function TextInput({type, name, placeholder, value, onChange}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder={placeholder}
    />
  );
}

export default TextInput;

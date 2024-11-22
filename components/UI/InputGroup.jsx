import Input from "./Input";

export default function InputGroup({ label, placeholder, name, type, value, onChange }) {
  return (
    <div className="form__input-container">
      <label className="form__label dark">{label}</label>
      <Input
        placeholder={placeholder}
        name={name}
        type={type}
        className={"form__input"}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

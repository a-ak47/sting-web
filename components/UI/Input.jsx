import "@/assets/styles/input.scss";

export default function Input({ placeholder, type, className, value, onChange, name }) {
  return (
    <input 
      className={`input ${className}`}
      placeholder={placeholder} 
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  )
}
import styles from "./Input.module.css";

export default function Input({
  isRegister,
  isName,
  type,
  name,
  placeholder,
  handleChange,
  formErrors,
  required = true,
}) {
  return (
    <>
      <input
        required={required}
        className={isRegister ? styles.inputReg : styles.inputLogin}
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {!isName && formErrors[name] && (
        <p className={styles.error}>{formErrors[name]}</p>
      )}
    </>
  );
}

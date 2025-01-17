import styles from "./AuthForm.module.css";
import greetingKids from "../../assets/greeting-kids.png";
import groupHug from "../../assets/group-hug.png";
import {
  isEmail,
  isPasswordValid,
  passwordsMatch,
} from "../../util/validation";
import { useState } from "react";

export default function AuthForm({ isKidRole = false, isRegister }) {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
    passwordRe: "",
    guidelinesCheck: false,
  });
  let content;

  function validate(name, value) {
    let error = "";
    switch (name) {
      case "name":
        if (!isKidRole) {
          if (value.length < 2) {
            error = "Name must be at least 2 characters.";
          }
        }
        break;
      case "username":
        if (value.length < 2) {
          // check user name uniqueness
          error = "Username must be at least 2 characters.";
        }
        // check all usernames from db, if none found - ok
        break;
      case "email":
        if (!isEmail(value)) error = "Please enter a valid email address.";
        break;
      case "password":
        if (!isPasswordValid(value, 8))
          error = "Password must be at least 8 characters.";
        break;
      case "passwordRe":
        if (!passwordsMatch(value, formData.password))
          error = "Passwords do not match.";
        break;
      case "guidelinesCheck":
        if (!value) error = "You must agree to the community guidelines.";
        break;
      default:
        break;
    }
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    validate(name, fieldValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = Object.values(formErrors).filter((error) => error);
    if (errors.length > 0) {
      alert("Please fix the errors before submitting.");
      return;
    }
    console.log("Form submitted successfully!", formData);
  }

  if (isKidRole && isRegister) {
    content = (
      <>
        <div className={styles.inputBox}>
          <input
            required
            className={styles.inputReg}
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Enter your unique username..."
          />
          {formErrors.username && (
            <p className={styles.error}>{formErrors.username}</p>
          )}
        </div>
        <div className={styles.inputBox}>
          <input
            required
            className={styles.inputReg}
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email..."
          />
          {formErrors.email && (
            <p className={styles.error}>{formErrors.email}</p>
          )}
        </div>
        <div className={styles.nameBox}>
          <div className={styles.nameInputBox}>
            <input
              className={styles.inputReg}
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name..."
            />
            <div className={styles.infoBox}>
              <span className={styles.tooltip}>
                Your name will only be visible to you on your profile page. No
                one else can see it. 😉
              </span>
              <span className={styles.question}>?</span>
            </div>
          </div>
          <p>
            (Optional){" "}
            {formErrors.name && (
              <span className={styles.error}>{formErrors.name}</span>
            )}
          </p>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.passBox}>
            <input
              required
              className={styles.inputReg}
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password..."
            />
            <div className={styles.infoBox}>
              <span className={styles.tooltip}>
                To keep your account super safe, pick a password that's at least
                8 characters long. 🔒😊
              </span>
              <span className={styles.question}>?</span>
            </div>
          </div>
          {formErrors.password && (
            <p className={styles.error}>{formErrors.password}</p>
          )}
        </div>
        <div className={styles.inputBox}>
          <div className={styles.passBox}>
            <input
              required
              className={styles.inputReg}
              type="password"
              name="passwordRe"
              onChange={handleChange}
              placeholder="Re-enter your password..."
            />
            <div className={styles.infoBox}>
              <span className={styles.tooltip}>
                Just making sure you're not a sneaky robot. 🤖
              </span>
              <span className={styles.question}>?</span>
            </div>
          </div>
          {formErrors.passwordRe && (
            <p className={styles.error}>{formErrors.passwordRe}</p>
          )}
        </div>
      </>
    );
  } else if (!isKidRole && isRegister) {
    content = (
      <>
        <div className={styles.inputBox}>
          <input
            required
            className={styles.inputReg}
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name..."
          />
          {formErrors.name && <p className={styles.error}>{formErrors.name}</p>}
        </div>
        <div className={styles.inputBox}>
          <input
            required
            className={styles.inputReg}
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email..."
          />
          {formErrors.email && (
            <p className={styles.error}>{formErrors.email}</p>
          )}
        </div>
        <div className={styles.inputBox}>
          <div className={styles.passBox}>
            <input
              required
              className={styles.inputReg}
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password..."
            />
            <div className={styles.infoBox}>
              <span className={styles.tooltip}>
                To keep your account safe, pick a password that's at least 8
                characters long.
              </span>
              <span className={styles.question}>?</span>
            </div>
          </div>
          {formErrors.password && (
            <p className={styles.error}>{formErrors.password}</p>
          )}
        </div>
        <div className={styles.inputBox}>
          <div className={styles.passBox}>
            <input
              required
              className={styles.inputReg}
              type="password"
              name="passwordRe"
              onChange={handleChange}
              placeholder="Re-enter your password..."
            />
            <div className={styles.infoBox}>
              <span className={styles.tooltip}>
                Just making sure you're not a robot.
              </span>
              <span className={styles.question}>?</span>
            </div>
          </div>
          {formErrors.passwordRe && (
            <p className={styles.error}>{formErrors.passwordRe}</p>
          )}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div className={styles.inputBox}>
          <input
            required
            className={styles.inputLogin}
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email..."
          />
          {formErrors.email && (
            <p className={styles.error}>{formErrors.email}</p>
          )}
        </div>
        <div className={styles.inputBox}>
          <input
            required
            className={styles.inputLogin}
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password..."
          />
          {formErrors.password && (
            <p className={styles.error}>{formErrors.password}</p>
          )}
        </div>
        <button className={styles.btnLogin}>Let me in!</button>
      </>
    );
  }

  return (
    <form className={styles.contentGrid} onSubmit={handleSubmit}>
      <div
        className={
          isRegister ? styles.formRegisterInputs : styles.formLoginInputs
        }
      >
        {content}
      </div>
      <img
        className={isRegister ? styles.greetingKids : styles.groupHug}
        src={isRegister ? greetingKids : groupHug}
        alt={
          isRegister
            ? "A boy and a girl cheerfully waving at the user."
            : "Two boys and one girl hugged and smiling and looking at the user."
        }
      />
      {isRegister && (
        <>
          <div className={styles.guidelinesBox}>
            <div className={styles.guidelinesCheckBox}>
              <input type="checkbox" name="guidelinesCheck" />
              <label>
                I {isKidRole ? "pinky" : ""} promise to follow the{" "}
                <a href="/">community guidelines</a>
                {isKidRole ? " and be awesome!" : "."}
              </label>
            </div>
            <p>
              {isKidRole
                ? `(Your secrets are safe with us! We're like ninjas for your privacy
              - swift, silent and super secure.)`
                : ""}
            </p>
          </div>
          <button className={styles.btnReg}>
            {isKidRole ? "Let's Do This!" : "Let's Begin!"}
          </button>
        </>
      )}
    </form>
  );
}

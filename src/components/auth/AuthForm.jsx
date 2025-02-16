import styles from "./AuthForm.module.css";
import greetingKids from "../../assets/greeting-kids.png";
import groupHug from "../../assets/group-hug.png";
import {
  isEmail,
  isPasswordValid,
  passwordsMatch,
} from "../../util/validation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendUserData, authActions } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

export default function AuthForm({ isKidRole = false, isRegister }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
    passwordRe: "",
    guidelinesCheck: false,
    role: 0,
  });
  let content;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

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

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = Object.values(formErrors).some((error) => error);
    if (errors.length > 0) {
      alert("Please fix the errors before submitting.");
      return;
    }
    if (!isKidRole) {
      setFormData((curr) => {
        return {
          ...curr,
          role: 1,
        };
      });
    }
    const result = await dispatch(sendUserData(formData, isRegister));
    if (!result.error) {
      if (result.access_token) {
        sessionStorage.setItem("token", result.access_token);
        sessionStorage.setItem("role", result.role);
      } else {
        // display error message... ask gpt if this case is even possible
      }
      dispatch(authActions.authenticate());
      navigate("/dashboard", { replace: true });
    } else {
      console.error("Login failed:", result.error); // to change!!
      //display a user-friendly error message in the UI (e.g., "Invalid credentials").
      // Show a Loading State
      //If the API takes time, add a loading state to prevent multiple submissions.
    }
  }

  if (isRegister) {
    content = (
      <>
        {isKidRole && (
          <div className={styles.inputBox}>
            <Input
              isRegister
              isName={false}
              type="text"
              name="username"
              placeholder="Enter your unique username..."
              handleChange={handleChange}
              formErrors={formErrors}
            />
          </div>
        )}
        <div className={styles.nameBox}>
          <div className={styles.nameInputBox}>
            <Input
              isRegister
              isName={true}
              type="text"
              name="name"
              placeholder="Enter your name..."
              handleChange={handleChange}
              formErrors={formErrors}
              required={isKidRole ? false : true}
            />
            {isKidRole && (
              <div className={styles.infoBox}>
                <span className={styles.tooltip}>
                  Your name will only be visible to you on your profile page. No
                  one else can see it. 😉
                </span>
                <span className={styles.question}>?</span>
              </div>
            )}
          </div>
          <p>
            {isKidRole ? "(Optional) " : undefined}
            {formErrors.name && (
              <span className={styles.error}>{formErrors.name}</span>
            )}
          </p>
        </div>
        <div className={styles.inputBox}>
          <Input
            isRegister
            isName={false}
            type="email"
            name="email"
            placeholder="Enter your email..."
            handleChange={handleChange}
            formErrors={formErrors}
          />
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
                {isKidRole
                  ? "To keep your account super safe, pick a password that's at least 8 characters long. 🔒😊"
                  : "To keep your account safe, pick a password that's at least 8 characters long."}
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
                {isKidRole
                  ? "Just making sure you're not a sneaky robot. 🤖"
                  : "Making sure you're not a robot."}
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
        <Input
          isRegister
          isName={false}
          type="email"
          name="email"
          placeholder="Enter your email..."
          handleChange={handleChange}
          formErrors={formErrors}
        />
        <Input
          isRegister
          isName={false}
          type="password"
          name="password"
          placeholder="Enter your password..."
          handleChange={handleChange}
          formErrors={formErrors}
        />
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

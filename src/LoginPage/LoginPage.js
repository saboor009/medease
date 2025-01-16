import React, { useState } from "react";
import "./LoginPage.css";
import doctorImage from "../icons/docotor4.png";
const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Account created successfully!");
      // Perform form submission logic here
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Side with Image */}
        <div className="image-section">
          <img src={doctorImage} alt="Doctor" className="doctor-image-1" />
          <div className="progress-indicators">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button className="register-button">Register as Lab ↗</button>
          <button className="register-button">Register as Doctor ↗</button>
        </div>

        {/* Right Side with Form */}
        <div className="form-section">
          <h2>Create an account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                className="input-field"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <small className="error">{errors.firstName}</small>
              )}

              <input
                type="text"
                placeholder="Last Name"
                className="input-field"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <small className="error">{errors.lastName}</small>
              )}
            </div>

            <input
              type="email"
              placeholder="Email"
              className="input-field"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className="error">{errors.email}</small>}

            <input
              type="tel"
              placeholder="Phone No."
              className="input-field"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <small className="error">{errors.phone}</small>}

            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="input-field"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.password && (
              <small className="error">{errors.password}</small>
            )}

            <div className="terms-container">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the <a href="/">Terms & Conditions</a>
              </label>
            </div>
            <button className="create-account-button" type="submit">
              Create account
            </button>
          </form>

          <div className="or-divider">
            <hr /> <span>OR</span> <hr />
          </div>

          <div className="social-buttons">
            <button className="google-button">Google</button>
            <button className="facebook-button">Facebook</button>
          </div>

          <div className="alreadyaccount">
            <h4>Already have an account?</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

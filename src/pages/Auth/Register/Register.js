import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import LoginBg from "assets/images/loginBg.jpg";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, firestore } from "config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "context/AuthContext";

const initialUserState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const { dispatch } = useContext(AuthContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [userDetails, setUserDetails] = useState();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails((s) => ({ ...s, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const signConfig = {
      url: "http://localhost:3000/auth/register-complete",
      handleCodeInApp: true,
    };

    let { firstName, lastName, email, password } = userDetails;
    setIsProcessing(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        let user = userCredential.user;
        const idTokenResult = await user.getIdTokenResult();

        addDocument(user, firstName, lastName, idTokenResult);

        window.toastify(
          "Your Account Has Been Created and you now will be redirecting to dashboard",
          "success"
        );

        // signIn(email, password);
      })
      .catch((err) => {
        console.error(err);
        setIsProcessing(false);
      });

    /*sendEmailVerification(auth.currentUser).then(() => {
      window.localStorage.setItem("emailForSignIn", email);
      window.toastify(
        "Verification Link has been sent to your email. Please verify and complete Registeration",
        "success"
      );
      setUserDetails(initialUserState);
      auth.signOut();
      setIsProcessing(false);
    }); */
  };

  const addDocument = async (user, firstName, lastName, idTokenResult) => {
    try {
      await setDoc(doc(firestore, "users", user.uid), {
        firstName,
        lastName,
        uid: user.uid,
      });
      dispatch({
        type: "LOGIN",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
    } catch (err) {
      console.error(err);
    }
    setIsProcessing(false);
  };

  return (
    <>
      <div
        className="loginPage py-100"
        style={{
          backgroundImage: `url(${LoginBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
              <div className="form-wrapper py-5 my-5">
                <h3>Sign Up</h3>
                <p className="my-4">Create your account to get full access</p>
                <form
                  className="row g-3 needs-validation"
                  noValidate
                  onSubmit={handleRegister}
                >
                  <div className="row p-0 mx-auto">
                    <div className="col-md-6">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        name="firstName"
                        onChange={handleChange}
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="validationCustom08"
                        className="form-label"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom08"
                        name="lastName"
                        onChange={handleChange}
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="validationCustom02" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="validationCustom02"
                      onChange={handleChange}
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="validationCustom03" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="validationCustom03"
                      onChange={handleChange}
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="validationCustom04" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      id="validationCustom04"
                      onChange={handleChange}
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <p className="alreadyAccount me-auto">
                        Already have an account?{" "}
                        <Link to="/auth/login">Login</Link> here
                      </p>
                      <button
                        className="btn btn-primary global_btn w-auto p-4 rounded-0"
                        type="submit"
                        disabled={isProcessing}
                      >
                        {!isProcessing ? (
                          "Submit form"
                        ) : (
                          <>
                            <div className="spinner-grow spinner-grow sm"></div>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

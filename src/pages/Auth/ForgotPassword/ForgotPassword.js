import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import LoginBg from "assets/images/loginBg.jpg";
import Logo from "assets/images/logo.jpg";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "config/firebase";
import { AuthContext } from "context/AuthContext";

export default function ForgotPassword() {
  let navigate = useNavigate();
  const [resetEmail, setResetEmail] = useState("");
  let emailField = useRef();
  const { dispatch } = useContext(AuthContext);
  const [loadings, setLoadings] = useState([]);
  const actionCodeSettings = {
    url: process.env.REACT_APP_FIREBASE_RESET_PASSWORD_URL,
    handleCodeInApp: true,
  };
  console.log(actionCodeSettings);
  const onFinish = async (values) => {
    let { email } = values;

    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[0] = true;
      return newLoadings;
    });
    await sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then((userCred) => {
        console.log(emailField.current);
        setResetEmail("");
        emailField.current.resetFields();
        window.toastify("Check your email for password reset link", "success");
      })
      .catch((eror) => {
        window.toastify(eror, "error");
        console.log(eror);
      })
      .finally(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[0] = false;
          return newLoadings;
        });
      });
    // await confirmPasswordReset("qammarzaman30@gmail.com", code);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div
        className="loginPage"
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
            <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2">
              <div className="form-wrapper py-5 my-5">
                <Link
                  to="/"
                  className="d-flex justify-content-center w-75 m-auto mb-3"
                >
                  <img src={Logo} alt="logo" className="img-fluid w-25 " />{" "}
                </Link>
                <h3>Forgot Password</h3>
                <p className="my-4">Enter email to get password reset link</p>

                <Form
                  name="name_login"
                  layout="vertical"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  ref={emailField}
                >
                  <Form.Item
                    name="email"
                    label="Username Or Email Address"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setResetEmail(e.target.value);
                      }}
                      placeholder="Username / Email Address"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      shape="round"
                      size="large"
                      block
                      danger
                      loading={loadings[0]}
                      disabled={!resetEmail || loadings[0]}
                    >
                      Send Reset Link
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

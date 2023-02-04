import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import LoginBg from "assets/images/loginBg.jpg";
import Logo from "assets/images/logo.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase";
import { AuthContext } from "context/AuthContext";

export default function Login() {
  let navigate = useNavigate();
  // const [loginCredentials, setLoginCredentials] = useState(initialState);
  const { dispatch } = useContext(AuthContext);
  const [loadings, setLoadings] = useState([]);
  const onFinish = (values) => {
    let { email, password } = values;

    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[0] = true;
      return newLoadings;
    });

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let user = userCredential;
        dispatch({
          type: "LOGIN",
        });
        navigate("/dashboard");
      })
      .catch((eror) => {
        console.log(eror);
      })
      .finally(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[0] = false;
          return newLoadings;
        });
      });
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
                <h3>Login</h3>
                <p className="my-4">Enter Login details to get access</p>

                <Form
                  name="name_login"
                  layout="vertical"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
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
                    <Input placeholder="Username / Email Address" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input type="password" placeholder="Enter Password" />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Keep Me Logged In</Checkbox>
                    </Form.Item>

                    <Link
                      className="login-form-forgot ms-auto"
                      to="/auth/forgot-password"
                    >
                      Forgot password
                    </Link>
                  </Form.Item>

                  <Form.Item>
                    Do you have an account? &nbsp;
                    <Link className="" to="/auth/register">
                      Sign Up
                    </Link>
                    &nbsp;Here
                    <Button
                      type="link"
                      htmlType="submit"
                      className="login-form-button global_btn btn btn-primary rounded-0 p-4 ms-auto w-auto"
                      loading={loadings[0]}
                      disabled={loadings[0]}
                    >
                      Log in
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

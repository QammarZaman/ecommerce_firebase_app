import React, { useContext, useState } from "react";
import { ShoppingCartOutlined, SettingOutlined } from "@ant-design/icons";
import { Input, Space, Button, Dropdown, Badge, Avatar } from "antd";
import Logo from "assets/images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "config/firebase";
import { BiLogOut } from "react-icons/bi";

const { Search } = Input;
const onSearch = (value) => console.log(value);

export default function Navbar() {
  const { authentication, dispatch } = useContext(AuthContext);
  const { isAuthenticated } = authentication;
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const items = [
    {
      key: "1",
      icon: <SettingOutlined />,
      label: <Link to="dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <BiLogOut />,
      label: <Link onClick={handleLogout}>Logout</Link>,
    },
  ];

  return (
    <>
      <nav className="siteNavbar navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-0 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Page
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
            </form> */}
          </div>
          <div className="d-flex align-items-center ms-auto">
            <Space direction="vertical">
              <Search
                placeholder="Search Products"
                onSearch={onSearch}
                className="searchField"
              />
            </Space>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  justify-content-center align-items-center">
              <li className="nav-item mx-3">
                {!isAuthenticated ? (
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/auth/login"
                  >
                    Login/Register
                  </Link>
                ) : (
                  <>
                    <Dropdown
                      menu={{
                        items,
                      }}
                    >
                      <Button className="btn global_btn w-100 px-3">
                        My Account
                      </Button>
                    </Dropdown>
                  </>
                )}
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link p-0" to="/">
                  <Badge count={0} showZero>
                    <ShoppingCartOutlined style={{ fontSize: "25px" }} />
                  </Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

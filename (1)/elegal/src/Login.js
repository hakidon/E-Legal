// Login.js
import React from 'react';

// Import image files
import deskappLogo from './vendors/images/deskapp-logo.svg';
import loginPageImg from './vendors/images/login-page-img.png';

const Login = () => {
    return (
        <div>
            <head>
                <meta charset="utf-8" />
                <title>e-Legal</title>

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="vendors/images/apple-touch-icon.png"
                />
 

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
        
            </head>
            <body className="login-page">
                <div className="login-header box-shadow">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="brand-logo">
                            <a href="login.html">
                                <img src={deskappLogo} alt="" />
                            </a>
                        </div>
                        <div className="login-menu">
                            <ul>
                                <li>
                                    <a href="register.html">Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-7">
                                <img src={loginPageImg} alt="" />
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="login-box bg-white box-shadow border-radius-10">
                                    <div className="login-title">
                                        <h2 className="text-center text-primary">Login To e-Legal</h2>
                                    </div>
                                    <form>
                                        <div className="input-group custom">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Username"
                                            />
                                            <div className="input-group-append custom">
                                                <span className="input-group-text">
                                                    <i className="icon-copy dw dw-user1"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="input-group custom">
                                            <input
                                                type="password"
                                                className="form-control form-control-lg"
                                                placeholder="**********"
                                            />
                                            <div className="input-group-append custom">
                                                <span className="input-group-text">
                                                    <i className="dw dw-padlock1"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="input-group mb-0">
                                                    {/* <input className="btn btn-primary btn-lg btn-block" type="submit" value="Sign In"> */}
                                                    <a
                                                        className="btn btn-primary btn-lg btn-block"
                                                        href="index.html"
                                                    >
                                                        Sign In
                                                    </a>
                                                </div>
                                                <div
                                                    className="font-16 weight-600 pt-10 pb-10 text-center"
                                                    data-color="#707373"
                                                >
                                                    OR
                                                </div>
                                                <div className="input-group mb-0">
                                                    <a
                                                        className="btn btn-outline-primary btn-lg btn-block"
                                                        href="register.html"
                                                    >
                                                        Register
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* 
                <script src="vendors/scripts/core.js"></script>
                <script src="vendors/scripts/script.min.js"></script>
                <script src="vendors/scripts/process.js"></script>
                <script src="vendors/scripts/layout-settings.js"></script> */}
            </body>
        </div>
    );
}

export default Login;

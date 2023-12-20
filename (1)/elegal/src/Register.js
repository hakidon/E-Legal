import React from 'react';
import myJavaScriptFile from './vendors/scripts/core.js';
import myJavaScriptFile2 from './vendors/scripts/steps-setting.js';
import myJavaScriptFile3 from './vendors/scripts/steps-setting.js';

const Register = () => {
    return (
        <html>
            <head>
            <title>e-Legal</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                    crossorigin="anonymous"
                />
            </head>
            <body className="login-page">
                <div className="login-header box-shadow">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="brand-logo">
                            <a href="login.html">
                                <img src="vendors/images/deskapp-logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="login-menu">
                            <ul>
                                <li><a href="login.html">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-7">
                                <img src="vendors/images/register-page-img.png" alt="" />
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="register-box bg-white box-shadow border-radius-10">
                                    <div className="wizard-content">
                                        <form
                                            id="registrationForm"
                                            className="tab-wizard2 wizard-circle wizard"
                                        >
                                            <h5>Register account</h5>
                                            <section>
                                                <div className="form-wrap max-width-600 mx-auto">
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">
                                                            Email Address*
                                                        </label>
                                                        <div className="col-sm-8">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="emailInput"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">
                                                            Username*
                                                        </label>
                                                        <div className="col-sm-8">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">
                                                            Password*
                                                        </label>
                                                        <div className="col-sm-8">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">
                                                            Confirm Password*
                                                        </label>
                                                        <div className="col-sm-8">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    id="success-modal-btn"
                    hidden
                    data-toggle="modal"
                    data-target="#success-modal"
                    data-backdrop="static"
                >
                    Launch modal
                </button>
                <div
                    className="modal fade"
                    id="success-modal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-dialog-centered max-width-400"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-body text-center font-18">
                                <h3 className="mb-20">Form Submitted!</h3>
                                <div className="mb-30 text-center">
                                    <img src="vendors/images/success.png" alt="" />
                                </div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod
                            </div>
                            <div className="modal-footer justify-content-center">
                                <a href="login.html" className="btn btn-primary">
                                    Done
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <script src="./vendors/scripts/core.js"></script>
                <script src="./src/plugins/jquery-steps/jquery.steps.js"></script> */}
                {/* <script src="./vendors/scripts/steps-setting.js"></script> */}
            </body>
        </html>
    );
};

export default Register;

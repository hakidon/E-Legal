import logo from './logo.svg';
import './App.css';

var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        {/* Basic Page Info */}
        <meta charSet="utf-8" />
        <title>DeskApp - Bootstrap Admin Dashboard HTML Template</title>
        {/* Site favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="vendors/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="vendors/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="vendors/images/favicon-16x16.png" />
        {/* Mobile Specific Metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        {/* Google Font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* CSS */}
        <link rel="stylesheet" type="text/css" href="vendors/styles/core.css" />
        <link rel="stylesheet" type="text/css" href="vendors/styles/icon-font.min.css" />
        <link rel="stylesheet" type="text/css" href="src/plugins/datatables/css/dataTables.bootstrap4.min.css" />
        <link rel="stylesheet" type="text/css" href="src/plugins/datatables/css/responsive.bootstrap4.min.css" />
        <link rel="stylesheet" type="text/css" href="vendors/styles/style.css" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        {/* Google Tag Manager */}
        {/* End Google Tag Manager */}
        <div className="pre-loader">
          <div className="pre-loader-box">
            <div className="loader-logo">
              <img src="vendors/images/deskapp-logo.svg" alt="" />
            </div>
            <div className="loader-progress" id="progress_div">
              <div className="bar" id="bar1" />
            </div>
            <div className="percent" id="percent1">0%</div>
            <div className="loading-text">Loading...</div>
          </div>
        </div>
        <div className="header">
          <div className="header-left">
            <div className="menu-icon bi bi-list" />
            <div className="search-toggle-icon bi bi-search" data-toggle="header_search" />
            <div className="header-search">
              <form>
                <div className="form-group mb-0">
                  <i className="dw dw-search2 search-icon" />
                  <input type="text" className="form-control search-input" placeholder="Search Here" />
                  <div className="dropdown">
                    <a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
                      <i className="ion-arrow-down-c" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">From</label>
                        <div className="col-sm-12 col-md-10">
                          <input className="form-control form-control-sm form-control-line" type="text" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">To</label>
                        <div className="col-sm-12 col-md-10">
                          <input className="form-control form-control-sm form-control-line" type="text" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Subject</label>
                        <div className="col-sm-12 col-md-10">
                          <input className="form-control form-control-sm form-control-line" type="text" />
                        </div>
                      </div>
                      <div className="text-right">
                        <button className="btn btn-primary">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="header-right">
            <div className="dashboard-setting user-notification">
              <div className="dropdown">
                <a className="dropdown-toggle no-arrow" href="javascript:;" data-toggle="right-sidebar">
                  <i className="dw dw-settings2" />
                </a>
              </div>
            </div>
            <div className="user-notification">
              <div className="dropdown">
                <a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
                  <i className="icon-copy dw dw-notification" />
                  <span className="badge notification-active" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="notification-list mx-h-350 customscroll">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="vendors/images/img.jpg" alt="" />
                          <h3>John Doe</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="vendors/images/photo1.jpg" alt="" />
                          <h3>Lea R. Frith</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="vendors/images/photo2.jpg" alt="" />
                          <h3>Erik L. Richards</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="vendors/images/photo3.jpg" alt="" />
                          <h3>John Doe</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="vendors/images/photo4.jpg" alt="" />
                          <h3>Renee I. Hansen</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="vendors/images/img.jpg" alt="" />
                          <h3>Vicki M. Coleman</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-info-dropdown">
              <div className="dropdown">
                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                  <span className="user-icon">
                    <img src="vendors/images/photo1.jpg" alt="" />
                  </span>
                  <span className="user-name">Ross C. Lopez</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                  <a className="dropdown-item" href="profile.html"><i className="dw dw-user1" /> Profile</a>
                  <a className="dropdown-item" href="profile.html"><i className="dw dw-settings2" /> Setting</a>
                  <a className="dropdown-item" href="faq.html"><i className="dw dw-help" /> Help</a>
                  <a className="dropdown-item" href="login.html"><i className="dw dw-logout" /> Log Out</a>
                </div>
              </div>
            </div>
            <div className="github-link">
              <a href="https://github.com/dropways/deskapp" target="_blank"><img src="vendors/images/github.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="sidebar-title">
            <h3 className="weight-600 font-16 text-blue">
              Layout Settings
              <span className="btn-block font-weight-400 font-12">User Interface Settings</span>
            </h3>
            <div className="close-sidebar" data-toggle="right-sidebar-close">
              <i className="icon-copy ion-close-round" />
            </div>
          </div>
          <div className="right-sidebar-body customscroll">
            <div className="right-sidebar-body-content">
              <h4 className="weight-600 font-18 pb-10">Header Background</h4>
              <div className="sidebar-btn-group pb-30 mb-10">
                <a href="javascript:void(0);" className="btn btn-outline-primary header-white active">White</a>
                <a href="javascript:void(0);" className="btn btn-outline-primary header-dark">Dark</a>
              </div>
              <h4 className="weight-600 font-18 pb-10">Sidebar Background</h4>
              <div className="sidebar-btn-group pb-30 mb-10">
                <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-light">White</a>
                <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-dark active">Dark</a>
              </div>
              <h4 className="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>
              <div className="sidebar-radio-group pb-10 mb-10">
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sidebaricon-1" name="menu-dropdown-icon" className="custom-control-input" defaultValue="icon-style-1" defaultChecked />
                  <label className="custom-control-label" htmlFor="sidebaricon-1"><i className="fa fa-angle-down" /></label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sidebaricon-2" name="menu-dropdown-icon" className="custom-control-input" defaultValue="icon-style-2" />
                  <label className="custom-control-label" htmlFor="sidebaricon-2"><i className="ion-plus-round" /></label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sidebaricon-3" name="menu-dropdown-icon" className="custom-control-input" defaultValue="icon-style-3" />
                  <label className="custom-control-label" htmlFor="sidebaricon-3"><i className="fa fa-angle-double-right" /></label>
                </div>
              </div>
              <h4 className="weight-600 font-18 pb-10">Menu List Icon</h4>
              <div className="sidebar-radio-group pb-30 mb-10">
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sidebariconlist-1" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-1" defaultChecked />
                  <label className="custom-control-label" htmlFor="sidebariconlist-1"><i className="ion-minus-round" /></label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sidebariconlist-2" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-2" />
                  <label className="custom-control-label" htmlFor="sidebariconlist-2"><i className="fa fa-circle-o" aria-hidden="true" /></label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sidebariconlist-3" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-3" />
                  <label className="custom-control-label" htmlFor="sidebariconlist-3"><i className="dw dw-check" /></label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sidebariconlist-4" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-4" defaultChecked />
                  <label className="custom-control-label" htmlFor="sidebariconlist-4"><i className="icon-copy dw dw-next-2" /></label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sidebariconlist-5" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-5" />
                  <label className="custom-control-label" htmlFor="sidebariconlist-5"><i className="dw dw-fast-forward-1" /></label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sidebariconlist-6" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-6" />
                  <label className="custom-control-label" htmlFor="sidebariconlist-6"><i className="dw dw-next" /></label>
                </div>
              </div>
              <div className="reset-options pt-30 text-center">
                <button className="btn btn-danger" id="reset-settings">
                  Reset Settings
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="left-side-bar">
          <div className="brand-logo">
            <a href="index.html">
              <img src="vendors/images/deskapp-logo.svg" alt="" className="dark-logo" />
              <img src="vendors/images/deskapp-logo-white.svg" alt="" className="light-logo" />
            </a>
            <div className="close-sidebar" data-toggle="left-sidebar-close">
              <i className="ion-close-round" />
            </div>
          </div>
          <div className="menu-block customscroll">
            <div className="sidebar-menu">
              <ul id="accordion-menu">
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-house" /><span className="mtext">Home</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="index.html">Dashboard style 1</a></li>
                    <li><a href="index2.html">Dashboard style 2</a></li>
                    <li><a href="index3.html">Dashboard style 3</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-textarea-resize" /><span className="mtext">Forms</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="form-basic.html">Form Basic</a></li>
                    <li>
                      <a href="advanced-components.html">Advanced Components</a>
                    </li>
                    <li><a href="form-wizard.html">Form Wizard</a></li>
                    <li><a href="html5-editor.html">HTML5 Editor</a></li>
                    <li><a href="form-pickers.html">Form Pickers</a></li>
                    <li><a href="image-cropper.html">Image Cropper</a></li>
                    <li><a href="image-dropzone.html">Image Dropzone</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-table" /><span className="mtext">Tables</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="basic-table.html">Basic Tables</a></li>
                    <li><a href="datatable.html">DataTables</a></li>
                  </ul>
                </li>
                <li>
                  <a href="calendar.html" className="dropdown-toggle no-arrow">
                    <span className="micon bi bi-calendar4-week" /><span className="mtext">Calendar</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-archive" /><span className="mtext"> UI Elements </span>
                  </a>
                  <ul className="submenu">
                    <li><a href="ui-buttons.html">Buttons</a></li>
                    <li><a href="ui-cards.html">Cards</a></li>
                    <li><a href="ui-cards-hover.html">Cards Hover</a></li>
                    <li><a href="ui-modals.html">Modals</a></li>
                    <li><a href="ui-tabs.html">Tabs</a></li>
                    <li>
                      <a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a>
                    </li>
                    <li><a href="ui-sweet-alert.html">Sweet Alert</a></li>
                    <li><a href="ui-notification.html">Notification</a></li>
                    <li><a href="ui-timeline.html">Timeline</a></li>
                    <li><a href="ui-progressbar.html">Progressbar</a></li>
                    <li><a href="ui-typography.html">Typography</a></li>
                    <li><a href="ui-list-group.html">List group</a></li>
                    <li><a href="ui-range-slider.html">Range slider</a></li>
                    <li><a href="ui-carousel.html">Carousel</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-command" /><span className="mtext">Icons</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="bootstrap-icon.html">Bootstrap Icons</a></li>
                    <li><a href="font-awesome.html">FontAwesome Icons</a></li>
                    <li><a href="foundation.html">Foundation Icons</a></li>
                    <li><a href="ionicons.html">Ionicons Icons</a></li>
                    <li><a href="themify.html">Themify Icons</a></li>
                    <li><a href="custom-icon.html">Custom Icons</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-pie-chart" /><span className="mtext">Charts</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="highchart.html">Highchart</a></li>
                    <li><a href="knob-chart.html">jQuery Knob</a></li>
                    <li><a href="jvectormap.html">jvectormap</a></li>
                    <li><a href="apexcharts.html">Apexcharts</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-file-earmark-text" /><span className="mtext">Additional Pages</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="video-player.html">Video Player</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="forgot-password.html">Forgot Password</a></li>
                    <li><a href="reset-password.html">Reset Password</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-bug" /><span className="mtext">Error Pages</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="400.html">400</a></li>
                    <li><a href="403.html">403</a></li>
                    <li><a href="404.html">404</a></li>
                    <li><a href="500.html">500</a></li>
                    <li><a href="503.html">503</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-back" /><span className="mtext">Extra Pages</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="blank.html">Blank</a></li>
                    <li><a href="contact-directory.html">Contact Directory</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="blog-detail.html">Blog Detail</a></li>
                    <li><a href="product.html">Product</a></li>
                    <li><a href="product-detail.html">Product Detail</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="pricing-table.html">Pricing Tables</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-hdd-stack" /><span className="mtext">Multi Level Menu</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="javascript:;">Level 1</a></li>
                    <li><a href="javascript:;">Level 1</a></li>
                    <li><a href="javascript:;">Level 1</a></li>
                    <li className="dropdown">
                      <a href="javascript:;" className="dropdown-toggle">
                        <span className="micon fa fa-plug" /><span className="mtext">Level 2</span>
                      </a>
                      <ul className="submenu child">
                        <li><a href="javascript:;">Level 2</a></li>
                        <li><a href="javascript:;">Level 2</a></li>
                      </ul>
                    </li>
                    <li><a href="javascript:;">Level 1</a></li>
                    <li><a href="javascript:;">Level 1</a></li>
                    <li><a href="javascript:;">Level 1</a></li>
                  </ul>
                </li>
                <li>
                  <a href="sitemap.html" className="dropdown-toggle no-arrow">
                    <span className="micon bi bi-diagram-3" /><span className="mtext">Sitemap</span>
                  </a>
                </li>
                <li>
                  <a href="chat.html" className="dropdown-toggle no-arrow">
                    <span className="micon bi bi-chat-right-dots" /><span className="mtext">Chat</span>
                  </a>
                </li>
                <li>
                  <a href="invoice.html" className="dropdown-toggle no-arrow">
                    <span className="micon bi bi-receipt-cutoff" /><span className="mtext">Invoice</span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <div className="sidebar-small-cap">Extra</div>
                </li>
                <li>
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon bi bi-file-pdf" /><span className="mtext">Documentation</span>
                  </a>
                  <ul className="submenu">
                    <li><a href="introduction.html">Introduction</a></li>
                    <li><a href="getting-started.html">Getting Started</a></li>
                    <li><a href="color-settings.html">Color Settings</a></li>
                    <li>
                      <a href="third-party-plugins.html">Third Party Plugins</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://dropways.github.io/deskapp-free-single-page-website-template/" target="_blank" className="dropdown-toggle no-arrow">
                    <span className="micon bi bi-layout-text-window-reverse" />
                    <span className="mtext">Landing Page
                      <img src="vendors/images/coming-soon.png" alt="" width={25} /></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu-overlay" />
        <div className="main-container">
          <div className="pd-ltr-20 xs-pd-20-10">
            <div className="min-height-200px">
              <div className="page-header">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="title">
                      <h4>DataTable</h4>
                    </div>
                    <nav aria-label="breadcrumb" role="navigation">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          DataTable
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="col-md-6 col-sm-12 text-right">
                    <div className="dropdown">
                      <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                        January 2018
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Export List</a>
                        <a className="dropdown-item" href="#">Policies</a>
                        <a className="dropdown-item" href="#">View Assets</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Simple Datatable start */}
              <div className="card-box mb-30">
                <div className="pd-20">
                  <h4 className="text-blue h4">Data Table Simple</h4>
                  <p className="mb-0">
                    you can find more options
                    <a className="text-primary" href="https://datatables.net/" target="_blank">Click Here</a>
                  </p>
                </div>
                <div className="pb-20">
                  <table className="data-table table stripe hover nowrap">
                    <thead>
                      <tr>
                        <th className="table-plus datatable-nosort">Name</th>
                        <th>Age</th>
                        <th>Office</th>
                        <th>Address</th>
                        <th>Start Date</th>
                        <th className="datatable-nosort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-plus">Gloria F. Mead</td>
                        <td>25</td>
                        <td>Sagittarius</td>
                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>20</td>
                        <td>Gemini</td>
                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>25</td>
                        <td>Gemini</td>
                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>20</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>18</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>
                          <div className="dropdown">
                            <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                              <i className="dw dw-more" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                              <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                              <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Simple Datatable End */}
              {/* multiple select row Datatable start */}
              <div className="card-box mb-30">
                <div className="pd-20">
                  <h4 className="text-blue h4">Data Table with multiple select row</h4>
                </div>
                <div className="pb-20">
                  <table className="data-table table hover multiple-select-row nowrap">
                    <thead>
                      <tr>
                        <th className="table-plus datatable-nosort">Name</th>
                        <th>Age</th>
                        <th>Office</th>
                        <th>Address</th>
                        <th>Start Date</th>
                        <th>Salart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-plus">Gloria F. Mead</td>
                        <td>25</td>
                        <td>Sagittarius</td>
                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>20</td>
                        <td>Gemini</td>
                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>25</td>
                        <td>Gemini</td>
                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>20</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>18</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* multiple select row Datatable End */}
              {/* Checkbox select Datatable start */}
              <div className="card-box mb-30">
                <div className="pd-20">
                  <h4 className="text-blue h4">Data Table with Checckbox select</h4>
                </div>
                <div className="pb-20">
                  <table className="checkbox-datatable table nowrap">
                    <thead>
                      <tr>
                        <th>
                          <div className="dt-checkbox">
                            <input type="checkbox" name="select_all" defaultValue={1} id="example-select-all" />
                            <span className="dt-checkbox-label" />
                          </div>
                        </th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td />
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Tokyo</td>
                        <td>2008/11/28</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Angelica Ramos</td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>London</td>
                        <td>2009/10/09</td>
                        <td>$1,200,000</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Bradley Greer</td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>2012/10/13</td>
                        <td>$132,000</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Brenden Wagner</td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>2011/06/07</td>
                        <td>$206,850</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Caesar Vance</td>
                        <td>Pre-Sales Support</td>
                        <td>New York</td>
                        <td>2011/12/12</td>
                        <td>$106,450</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>2012/03/29</td>
                        <td>$433,060</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Dai Rios</td>
                        <td>Personnel Lead</td>
                        <td>Edinburgh</td>
                        <td>2012/09/26</td>
                        <td>$217,500</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Doris Wilder</td>
                        <td>Sales Assistant</td>
                        <td>Sidney</td>
                        <td>2010/09/20</td>
                        <td>$85,600</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Fiona Green</td>
                        <td>Chief Operating Officer (COO)</td>
                        <td>San Francisco</td>
                        <td>2010/03/11</td>
                        <td>$850,000</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Gavin Cortez</td>
                        <td>Team Leader</td>
                        <td>San Francisco</td>
                        <td>2008/10/26</td>
                        <td>$235,500</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Herrod Chandler</td>
                        <td>Sales Assistant</td>
                        <td>San Francisco</td>
                        <td>2012/08/06</td>
                        <td>$137,500</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Hope Fuentes</td>
                        <td>Secretary</td>
                        <td>San Francisco</td>
                        <td>2010/02/12</td>
                        <td>$109,850</td>
                      </tr>
                      <tr>
                        <td />
                        <td>Jena Gaines</td>
                        <td>Office Manager</td>
                        <td>London</td>
                        <td>2008/12/19</td>
                        <td>$90,560</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Checkbox select Datatable End */}
              {/* Export Datatable start */}
              <div className="card-box mb-30">
                <div className="pd-20">
                  <h4 className="text-blue h4">Data Table with Export Buttons</h4>
                </div>
                <div className="pb-20">
                  <table className="table hover multiple-select-row data-table-export nowrap">
                    <thead>
                      <tr>
                        <th className="table-plus datatable-nosort">Name</th>
                        <th>Age</th>
                        <th>Office</th>
                        <th>Address</th>
                        <th>Start Date</th>
                        <th>Salart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-plus">Gloria F. Mead</td>
                        <td>25</td>
                        <td>Sagittarius</td>
                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>20</td>
                        <td>Gemini</td>
                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>25</td>
                        <td>Gemini</td>
                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>20</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>18</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Sagittarius</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td className="table-plus">Andrea J. Cagle</td>
                        <td>30</td>
                        <td>Gemini</td>
                        <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                        <td>29-03-2018</td>
                        <td>$162,700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Export Datatable End */}
            </div>
            <div className="footer-wrap pd-20 mb-20 card-box">
              DeskApp - Bootstrap 4 Admin Template By
              <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
            </div>
          </div>
        </div>
        {/* welcome modal start */}
        <div className="welcome-modal">
          <button className="welcome-modal-close">
            <i className="bi bi-x-lg" />
          </button>
          <iframe className="w-100 border-0" src="https://embed.lottiefiles.com/animation/31548" />
          <div className="text-center">
            <h3 className="h5 weight-500 text-center mb-2">
              Open source
              <span role="img" aria-label="gratitude">❤️</span>
            </h3>
            <div className="pb-2">
              <a className="github-button" href="https://github.com/dropways/deskapp" data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star dropways/deskapp dashboard on GitHub">Star</a>
              <a className="github-button" href="https://github.com/dropways/deskapp/fork" data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork dropways/deskapp dashboard on GitHub">Fork</a>
            </div>
          </div>
          <div className="text-center mb-1">
            <div>
              <a href="https://github.com/dropways/deskapp" target="_blank" className="btn btn-light btn-block btn-sm">
                <span className="text-danger weight-600">STAR US</span>
                <span className="weight-600">ON GITHUB</span>
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
          <a href="https://github.com/dropways/deskapp" target="_blank" className="btn btn-success btn-sm mb-0 mb-md-3 w-100">
            DOWNLOAD
            <i className="fa fa-download" />
          </a>
          <p className="font-14 text-center mb-1 d-none d-md-block">
            Available in the following technologies:
          </p>
          <div className="d-none d-md-flex justify-content-center h1 mb-0 text-danger">
            <i className="fa fa-html5" />
          </div>
        </div>
        <button className="welcome-modal-btn">
          <i className="fa fa-download" /> Download
        </button>
        {/* welcome modal end */}
        {/* js */}
        {/* buttons for Export datatable */}
        {/* Datatable Setting js */}
        {/* Google Tag Manager (noscript) */}
        <noscript>&lt;iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NXZMQSS"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
          &gt;&lt;/iframe
          &gt;</noscript>
        {/* End Google Tag Manager (noscript) */}
      </div>
    );
  }
});

export default App;

<!DOCTYPE html>
<html>
	<head>
		<!-- Basic Page Info -->
		<meta charset="utf-8" />
		<title>List of Tasks</title>

		<!-- Site favicon -->
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="vendors/images/apple-touch-icon.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="vendors/images/favicon-32x32.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="vendors/images/favicon-16x16.png"
		/>

		<!-- Mobile Specific Metas -->
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1"
		/>

		<!-- Google Font -->
		<link
			href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
			rel="stylesheet"
		/>
		<!-- CSS -->
		<link rel="stylesheet" type="text/css" href="vendors/styles/core.css" />
		<link
			rel="stylesheet"
			type="text/css"
			href="vendors/styles/icon-font.min.css"
		/>
		<link
			rel="stylesheet"
			type="text/css"
			href="src/plugins/datatables/css/dataTables.bootstrap4.min.css"
		/>
		<link
			rel="stylesheet"
			type="text/css"
			href="src/plugins/datatables/css/responsive.bootstrap4.min.css"
		/>
		<link rel="stylesheet" type="text/css" href="vendors/styles/style.css" />

		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script
			async
			src="https://www.googletagmanager.com/gtag/js?id=G-GBZ3SGGX85"
		></script>
		<script
			async
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2973766580778258"
			crossorigin="anonymous"
		></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag("js", new Date());

			gtag("config", "G-GBZ3SGGX85");
		</script>
		<!-- Google Tag Manager -->
		<script>
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != "dataLayer" ? "&l=" + l : "";
				j.async = true;
				j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, "script", "dataLayer", "GTM-NXZMQSS");
		</script>
		<!-- End Google Tag Manager -->
	</head>
	<body>
        <!-- page loader
        later enable back -->
		<!-- <div class="pre-loader">
			<div class="pre-loader-box">
				<div class="loader-logo">
					<img src="vendors/images/deskapp-logo.svg" alt="" />
				</div>
				<div class="loader-progress" id="progress_div">
					<div class="bar" id="bar1"></div>
				</div>
				<div class="percent" id="percent1">0%</div>
				<div class="loading-text">Loading...</div>
			</div>
		</div> -->

		<!-- Header -->
		<div class="header">

			<div class="header-left">
				<div class="menu-icon bi bi-list"></div>			
			</div>

			<!-- Settings & Notifications -->
			<div class="header-right">
				<div class="user-notification">
					<div class="dropdown">

						<a class="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
							<i class="icon-copy dw dw-notification"></i>
							<span class="badge notification-active"></span>
						</a>
						
						<div class="dropdown-menu dropdown-menu-right">
							<div class="notification-list mx-h-350 customscroll">
								<ul>
									<li>
										<a href="#">
										<!-- <img src="vendors/images/img.jpg" alt="" /> -->
											<h3>UPDATE</h3>
											<p>Date of court hearing updated</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					
					</div>
				</div>
				
				<!-- User Dropdown-->
				<div class="user-info-dropdown">
					<div>

						<a	class="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
							<span class="user-icon">
								<img src="vendors/images/photo4.jpg" alt="" />
							</span>
							
							<span class="user-name">Admin</span>
						</a>
						
						<div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
							<a class="dropdown-item" href="profile.html"><i class="dw dw-user1"></i> Profile</a>	
							<a class="dropdown-item" href="login.html"><i class="dw dw-logout"></i> Log Out</a>
						</div>

					</div>
				</div>
			</div>

			</div>

			<!-- Sidebar -->
			<div class="right-sidebar">
			<div class="right-sidebar-body customscroll">
				<div class="right-sidebar-body-content">
					<h4 class="weight-600 font-18 pb-10">Sidebar Background</h4>
					<div class="sidebar-btn-group pb-30 mb-10">
						
						<!-- this effects the sidebar bg colour-->
						<a	href="javascript:void(0);" class="btn btn-outline-primary sidebar-light active">
							White
						</a>

					</div>
				</div>
			</div>
			</div>

			<div class="left-side-bar">

			<div class="brand-logo">
				<a href=""><img src="vendors/images/logo2.png" alt=""/></a>
				
				<div class="close-sidebar" data-toggle="left-sidebar-close">
					<i class="ion-close-round"></i>
				</div>
			</div>

			<div class="menu-block customscroll">
				<div class="sidebar-menu">
					<ul id="accordion-menu">
						
						<!-- Manage Staff -->
						<li>
							<a href="" class="dropdown-toggle no-arrow">
								<span class="micon bi bi-people-fill"></span>
								<span class="mtext">Staffs</span>
							</a>
						</li>
						
						<!-- Cases -->
						<li>
							<a href="" class="dropdown-toggle no-arrow">
								<span class="micon bi bi-briefcase-fill"></span>
								<span class="mtext">Cases</span>
							</a>
						</li>
						
						<!-- Report -->
						<li>
							<a href="calendar.html" class="dropdown-toggle no-arrow">
								<span class="micon bi bi-file-earmark-fill"></span>
								<span class="mtext">Report</span>
							</a>
						</li>
						
						<!-- Calendar -->
						<li>
							<a href="calendar.html" class="dropdown-toggle no-arrow">
								<span class="micon bi bi-calendar-check-fill"></span>
								<span class="mtext">Calendar</span>
							</a>
						</li>
					
					</ul>
				</div>
			</div>
			</div>

		<div class="mobile-menu-overlay"></div>

		<div class="main-container">
			<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
					<div class="page-header">
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<div class="title">
									<h4>Case 143</h4>
								</div>
								<nav aria-label="breadcrumb" role="navigation">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="index.html">Home</a>
										</li>
										<li class="breadcrumb-item active" aria-current="page">
											List of Cases
										</li>
										<li class="breadcrumb-item active" aria-current="page">
											Case 143
										</li>
									</ol>
								</nav>
							</div>
							
						</div>
					</div>
					
					<!-- Checkbox select Datatable start -->
					<div class="card-box mb-30">
						<div class="pd-20">
							<h4 class="text-blue h4">List of Tasks</h4>
							
							<!-- Large modal -->
							<div class="col-md-4 col-sm-12 mb-30">
									<div class="modal fade bs-example-modal-lg" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="addTaskModalLabel" aria-hidden="true">
										<div class="modal-dialog modal-lg modal-dialog-centered">
											<div class="modal-content">
												<div class="modal-header">
													<h4 class="modal-title" id="myLargeModalLabel">
														Add Task
													</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
														aria-hidden="true"
													>
														×
													</button>
												</div>
												<div class="modal-body">
													<form>
														<div class="form-group row">
															<label class="col-sm-12 col-md-2 col-form-label">Description</label>
															<div class="col-sm-12 col-md-10">
																<input
																	class="form-control"
																	type="text"
																	placeholder="Task Description"
																/>
															</div>
														</div>
														<div class="form-group row">
															<label class="col-sm-12 col-md-2 col-form-label">Due Date</label>
															<div class="col-sm-12 col-md-10">
																<input
																	class="form-control date-picker"
																	placeholder="Select Date"
																	type="text"
																/>
															</div>
														</div>
													</form>
												</div>
												<div class="modal-footer">
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Cancel
													</button>
													<button type="button" class="btn btn-primary">
														Submit
													</button>
												</div>
											</div>
										</div>
									</div>
							</div>

							<!-- Add Task button -->
							<div class="text-right">
								<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addTaskModal">Add Task</button>
							</div>
						</div>

						<div class="col-md-4 col-sm-12 mb-30">
							<div class="modal fade bs-example-modal-lg" id="editTaskModal" tabindex="-1" role="dialog" aria-labelledby="editTaskModalLabel" aria-hidden="true">
								<div class="modal-dialog modal-lg modal-dialog-centered">
									<div class="modal-content">
										<div class="modal-header">
											<h4 class="modal-title" id="myLargeModalLabel">
												Edit Task
											</h4>
											<button
												type="button"
												class="close"
												data-dismiss="modal"
												aria-hidden="true"
											>
												×
											</button>
										</div>
										<div class="modal-body">
											<form>
												<div class="form-group row">
													<label class="col-sm-12 col-md-2 col-form-label">Description</label>
													<div class="col-sm-12 col-md-10">
														<input
															class="form-control"
															type="text"
															placeholder="Task Description"
														/>
													</div>
												</div>
												<div class="form-group row">
													<label class="col-sm-12 col-md-2 col-form-label">Due Date</label>
													<div class="col-sm-12 col-md-10">
														<input
															class="form-control date-picker"
															placeholder="Select Date"
															type="text"
														/>
													</div>
												</div>
											</form>
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-secondary"
												data-dismiss="modal"
											>
												Cancel
											</button>
											<button type="button" class="btn btn-primary">
												Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Confirmation modal -->
						<div class="col-md-4 col-sm-12 mb-30">
							<div class="modal fade bs-example-modal-lg" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteTaskModalLabel" aria-hidden="true">
								<div class="modal-dialog modal-lg modal-dialog-centered">
									<div class="modal-content">
										<div class="modal-header">
											<h4 class="modal-title" id="myLargeModalLabel">
												Delete Task
											</h4>
										</div>
										<div class="modal-body">
											Are you sure you want to delete the task?
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-secondary"
												data-dismiss="modal"
											>
												Cancel
											</button>
											<button type="button" class="btn btn-danger">
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="pb-20">
							<table class="checkbox-datatable table nowrap">
								<thead>
									<tr>
										<th></th>
										<th>ID</th>
										<th>Description</th>
										<th>Added date</th>
										<th>Due date</th>
                                        <th>Action</th>
									</tr>
								</thead>

								<tbody>
									@foreach($tasks as $row)
									<tr>
										<td>
                                            <div class="dt-checkbox">
                                                <input
                                                    type="checkbox"
                                                    name="row_checkbox"
                                                    value="1"
                                                    class="row-checkbox"
                                                />
                                                <span class="dt-checkbox-label"></span>
                                            </div>
                                        </td>
										<td>{{ $row->taskID }}</td>
										<td>{{ $row->taskDescription }}</td>
										<td>{{ $row->taskAddedDate }}</td>
										<td>{{ $row->taskDueDate }}</td>
                                        <td>
											<div class="dropdown">
												<a
													class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
													href="#"
													role="button"
													data-toggle="dropdown"
												>
													<i class="dw dw-more"></i>
												</a>
												<div
													class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
												>
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#editTaskModal"
														><i class="dw dw-edit2"></i> Edit</a
													>
													
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#deleteModal"
														><i class="dw dw-delete-3"></i> Delete</a
													>
												</div>
											</div>
										</td>
									</tr>
									@endforeach
								</tbody>
							</table>
						</div>
					</div>
					<!-- Checkbox select Datatable End -->
				</div>
				
			</div>
		</div>
		
		<!-- js -->
		<script src="vendors/scripts/core.js"></script>
		<script src="vendors/scripts/script.min.js"></script>
		<script src="vendors/scripts/process.js"></script>
		<script src="vendors/scripts/layout-settings.js"></script>
		<script src="src/plugins/datatables/js/jquery.dataTables.min.js"></script>
		<script src="src/plugins/datatables/js/dataTables.bootstrap4.min.js"></script>
		<script src="src/plugins/datatables/js/dataTables.responsive.min.js"></script>
		<script src="src/plugins/datatables/js/responsive.bootstrap4.min.js"></script>
		<!-- buttons for Export datatable -->
		<script src="src/plugins/datatables/js/dataTables.buttons.min.js"></script>
		<script src="src/plugins/datatables/js/buttons.bootstrap4.min.js"></script>
		<script src="src/plugins/datatables/js/buttons.print.min.js"></script>
		<script src="src/plugins/datatables/js/buttons.html5.min.js"></script>
		<script src="src/plugins/datatables/js/buttons.flash.min.js"></script>
		<script src="src/plugins/datatables/js/pdfmake.min.js"></script>
		<script src="src/plugins/datatables/js/vfs_fonts.js"></script>
		<!-- Datatable Setting js -->
		<script src="vendors/scripts/datatable-setting.js"></script>
		<!-- Google Tag Manager (noscript) -->
		<noscript
			><iframe
				src="https://www.googletagmanager.com/ns.html?id=GTM-NXZMQSS"
				height="0"
				width="0"
				style="display: none; visibility: hidden"
			></iframe
		></noscript>
		<!-- End Google Tag Manager (noscript) -->
	</body>
</html>

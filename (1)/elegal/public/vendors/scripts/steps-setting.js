$(".tab-wizard").steps({
	headerTag: "h5",
	bodyTag: "section",
	transitionEffect: "fade",
	titleTemplate: '<span class="step">#index#</span> #title#',
	labels: {
		finish: "Submit"
	},
	onStepChanged: function (event, currentIndex, priorIndex) {
		$('.steps .current').prevAll().addClass('disabled');
	},
	onFinished: function (event, currentIndex) {
		$('#success-modal').modal('show');
	}
});

$(".tab-wizard2").steps({
	headerTag: "h5",
	bodyTag: "section",
	transitionEffect: "fade",
    titleTemplate: '<span class="step"><i class="fas fa-key"></i></span> <span class="info">#title#</span>',
	labels: {
		finish: "Submit",
		next: "Next",
		previous: "Previous",
	},
	onStepChanged: function(event, currentIndex, priorIndex) {
		$('.steps .current').prevAll().addClass('disabled');
	},
	onFinished: function(event, currentIndex) {
		event.preventDefault(); 
		submitRegistrationForm();
	},
});

function submitRegistrationForm() {
    // Serialize the form data
    var formData = $('#registrationForm').serialize();

    // Make an AJAX request to submit the form data
    $.ajax({
        url: $('#registrationForm').attr('action'),
        method: 'POST',
        data: formData,
        success: function (response) {
            // Check if the response indicates success
            if (response.success) {
                // Remove any existing error messages
                clearErrorMessages();
                let state = { currentIndex: 0 }; // Replace with your actual state object
				let currentStep = $(".steps li").eq(state.currentIndex);
				currentStep.addClass("done").removeClass("error");
                $('#success-modal').modal('show');
            } else {
                // Handle the case where registration failed
                if (response.errors) {
                    // Display validation errors in the form
                    displayValidationErrors(response.errors);
                } else {
                    // Display a generic error message
                    displayGenericErrorMessage();
                }
            }
        },
        error: function (xhr, status, error) {
            // Handle the case where there was an AJAX error
            console.error('AJAX Error:', status, error);

            // Display a generic error message in the form
            displayGenericErrorMessage();
        }
    });
}

function clearErrorMessages() {
    // Remove any existing error messages
    $('.alert-danger').remove();
}

function displayValidationErrors(errors) {
    // Clear previous error messages
    $('.alert-danger').remove();

    // Display validation errors in the form
    var errorHtml = '<div class="alert alert-danger"><ul>';
    $.each(errors, function (field, error) {
        errorHtml += '<li>' + error[0] + '</li>';
    });
    errorHtml += '</ul></div>';
    $('.wizard-content').prepend(errorHtml);
}

function displayGenericErrorMessage() {
    // Clear previous error messages
    $('.alert-danger').remove();

    // Display a generic error message in the form
    var errorHtml = '<div class="alert alert-danger">Registration failed. Please check the form and try again.</div>';
    $('.wizard-content').prepend(errorHtml);
}
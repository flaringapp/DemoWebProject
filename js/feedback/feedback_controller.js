const _feedbackForm = document.getElementById("feedback_form");

const _feedbackName = document.getElementById("feedback_input_name");
const _feedbackSurname = document.getElementById("feedback_input_surname");
const _feedbackEmail = document.getElementById("feedback_input_email");
const _feedbackGender = document.getElementById("feedback_input_gender");
const _feedbackSatisfiedYes = document.getElementById("feedback_input_satisfied_yes");
const _feedbackSatisfiedNo = document.getElementById("feedback_input_satisfied_no");
const _feedbackComment = document.getElementById("feedback_input_comment");
const _feedbackReceiveNews = document.getElementById("feedback_receive_news");

const inputFeedbackId = "input_feedback";
const sendFeedbackButtonId = "button_send_feedback";

$(document).ready(() => {
    $("#feedback_form").on("submit", (e) => {
        e.preventDefault();
        onFeedbackSubmit();
    })
});

$(".feedback_form_submit").hover(
    (e) => {
        $(e.target).css('background', '#FF6D00');
    },
    (e) => {
        $(e.target).css('background', '#FFAB40');
    }
);

function onFeedbackSubmit() {
    let name = _feedbackName.value;
    if (name.trim().length === 0) {
        showMessage("Please enter your name");
        return;
    }

    let surname = _feedbackSurname.value;
    if (surname.trim().length === 0) {
        showMessage("Please enter your surname");
        return;
    }

    let email = _feedbackEmail.value;
    if (email.trim().length === 0) {
        showMessage("Please enter your email");
        return;
    }

    let gender = _feedbackGender.value;
    if (gender === 0) {
        showMessage("Please select gender");
        return;
    }

    if (!_feedbackSatisfiedNo.checked && !_feedbackSatisfiedYes.checked) {
        showMessage("Please tell us if you are satisfied");
        return;
    }

    sendFeedbackData();
}

function sendFeedbackData() {
    let form = $("#feedback_form");
    let url = form.attr('action');
    console.log(url);
    $.ajax({
        url: url,
        type: form.attr('method'),
        data: form.serialize(),
        success: (data) => {
            displayMessage(data["message"]);
        },
    });
}

function displayMessage(message) {
    $(".feedback_container").append("<h1 id='thanks'>" + message + "</h1>");

    let el = $("#thanks").last();
    el.css('color', 'white');
    el.css('text-align', 'center');
}

function showMessage(message) {
    window.alert(message);
}

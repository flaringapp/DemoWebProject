const _feedbackForm = document.getElementById("feedback_form");

const _feedbackName = document.getElementById("feedback_input_name");
const _feedbackSurname = document.getElementById("feedback_input_surname");
const _feedbackEmail = document.getElementById("feedback_input_email");
const _feedbackGender = document.getElementById("feedback_input_gender");
const _feedbackSatisfiedYes = document.getElementById("feedback_input_satisfied_yes");
const _feedbackSatisfiedNo = document.getElementById("feedback_input_satisfied_no");
const _feedbackComment = document.getElementById("feedback_input_comment");
const _feedbackReceiveNews = document.getElementById("feedback_receive_news");

const inputFeedbackId = "input_feedback"
const sendFeedbackButtonId = "button_send_feedback"

let isInputShown = false

function onFeedbackClicked() {
    _feedbackForm.style.maxHeight = "100%"

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
}

function onFeedbackSubmit() {
    var name = _feedbackName.value;
    if (name.trim().length == 0) {
        showMessage("Please enter your name");
        return;
    }

    var surname = _feedbackSurname.value;
    if (surname.trim().length == 0) {
        showMessage("Please enter your surname");
        return;
    }

    var email = _feedbackEmail.value;
    if (email.trim().length == 0) {
        showMessage("Please enter your email");
        return;
    }

    var gender = _feedbackGender.value;
    if (gender == 0) {
        showMessage("Please select gender");
        return;
    }

    if (!_feedbackSatisfiedNo.checked && !_feedbackSatisfiedYes.checked) {
        showMessage("Please tell us if you are satisfied");
        return;
    }
    var isSatisfied = _feedbackSatisfiedYes.checked;

    var comment = _feedbackComment.value;
    var receiveNews = _feedbackReceiveNews.checked;
}

function sendFeedbackData() {
    var params = {
        name: _feedbackName.value,
        surname: _feedbackSurname.value,
        email: _feedbackEmail.value,
        gender: _feedbackGender.value,
        satisfied: _feedbackSatisfiedYes.checked,
        receive_news: _feedbackReceiveNews.checked,
        comment: _feedbackComment.value
    };


    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    showMessage(query);
}

function showMessage(message) {
    window.alert(message);
}
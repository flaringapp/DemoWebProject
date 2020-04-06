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

$(".feedback_form_submit").hover(
  (e) => {
    $(e.target).css('background', '#FF6D00');
  },
  (e) => {
    $(e.target).css('background', '#FFAB40');
  }
);

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
  let json = createJson();

  $.post("http://httpbin.org/post", json)
    .done((data) => {
      displayThanks();
    });
}

function createJson() {
  var json = {};
  json["name"] = _feedbackName.value;
  json["surname"] = _feedbackSurname.value;
  json["email"] = _feedbackEmail.value;
  json["gender"] = _feedbackGender.value;
  json["satisfied"] = _feedbackSatisfiedYes.checked;
  json["receive_news"] = _feedbackReceiveNews.checked;
  json["comment"] = _feedbackComment.value;
  return json;
}

function displayThanks() {
  $(".feedback_container").append("<h1 id='thanks'>Thanks!</h1>");

  let el = $("#thanks").last();
  el.css('color', 'white');
  el.css('text-align', 'center');
}

function showMessage(message) {
  window.alert(message);
}

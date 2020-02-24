const _inputFeedbackCell = document.getElementById("feedback_input_container");
const _sendFeedbackCell = document.getElementById("feedback_send_container");

const inputFeedbackId = "input_feedback"
const sendFeedbackButtonId = "button_send_feedback"

let isInputShown = false

function onSendFeedbackClicked() {
    if (isInputShown) return;

    isInputShown = true;

    var _inputFeedback = document.createElement('TEXTAREA');
    _inputFeedback.style.width = "300px";
    _inputFeedback.rows = 5;
    _inputFeedback.style.background = "#212121";
    _inputFeedback.style.borderRadius = "6px";
    _inputFeedback.style.borderColor = "darkorange";
    _inputFeedback.style.resize = 'none';
    _inputFeedback.style.padding = "10px";
    _inputFeedback.style.color = "white";
    _inputFeedback.style.fontSize = "12px";

    _inputFeedbackCell.appendChild(_inputFeedback);

    var _buttonSendFeedback = document.createElement('button');
    _buttonSendFeedback.innerText = "Send feedback";
    _buttonSendFeedback.style.padding = "10px 15px";
    _buttonSendFeedback.style.background = "darkorange";
    _buttonSendFeedback.style.border = 'none';
    _buttonSendFeedback.style.borderRadius = "5px";
    _buttonSendFeedback.style.color = "white";
    _buttonSendFeedback.style.fontSize = "15px";
    _buttonSendFeedback.onclick = function() {
        onSendFeedbackButtonClicked(_inputFeedback.value);
    };

    _sendFeedbackCell.appendChild(_buttonSendFeedback);

 	window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

function onSendFeedbackButtonClicked(input) {
    window.open(`mailto:flaringapp@gmail.com?subject=Feedback&body=${input}`, "_self");
}
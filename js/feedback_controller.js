const _feedbackForm = document.getElementById("feedback_form");

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

function onSendFeedbackButtonClicked(input) {
    window.open(`mailto:flaringapp@gmail.com?subject=Feedback&body=${input}`, "_self");
}
const _formSetStudentMarks = $("#form_set_student_marks");
const _formViewStudentMarks = $("#form_view_student_marks");

const _inputSetStudentMarksSurname = $("#input_set_marks_student_surname");
const _inputSetStudentMarksMarks = $("#input_set_marks_student_marks");
const _inputViewStudentMarksSurname = $("#input_view_marks_student_surname");

const SPACE = " ";

hideAllForms();

$(document).ready(() => {
    $("#button_set_students_marks").on('click', () => {
        hideAllForms();
        _formSetStudentMarks.show();
    });

    $("#button_view_students_marks").on('click', () => {
        hideAllForms();
        _formViewStudentMarks.show();
    });

    _formSetStudentMarks.on('submit', (e) => {
        e.preventDefault();
        onSetStudentMarksSubmit();
    });

    _formViewStudentMarks.on('submit', (e) => {
        e.preventDefault();
        onViewStudentMarksSubmit();
    });
});

function hideAllForms() {
    _formViewStudentMarks.hide();
    _formSetStudentMarks.hide();
}

function onSetStudentMarksSubmit() {
    let surname = _inputSetStudentMarksSurname.val();
    let marksInput = _inputSetStudentMarksMarks.val();

    for (var i = 0; i < marksInput.length; i++) {
        let symbol = marksInput[i];
        console.log(symbol);
        if (symbol !== ' ' && (symbol < '0' || symbol > '9')) {
            window.alert("Please enter marks using only digits and spaces!");
            return;
        }
    }

    let marks = marksInput.split(SPACE)
        .map(item => $.trim(item))
        .filter(item => item.length !== 0);

    setStudentsMarks(surname, marks)
}

function onViewStudentMarksSubmit() {
    let surname = _inputViewStudentMarksSurname.val();

    getStudentsMarks(surname);
}

function setStudentsMarks(surname, marks) {
    let json = {
        "student": surname,
        "marks": marks
    };

    let form = $('#form_set_student_marks');
    let url = form.attr('action');

    $.ajax({
        url: url,
        type: form.attr('method'),
        data: JSON.stringify(json),
        success: (data) => {
            window.alert(JSON.parse(data)["message"]);
        }
    });
}

function getStudentsMarks(surname) {
    let json = {
        "student": surname
    };

    let form = $('#form_view_student_marks');
    let url = form.attr('action');

    $.ajax({
        url: url,
        type: form.attr('method'),
        data: json,
        success: (data) => {
            onGetStudentsMarks(JSON.parse(data));
        }
    });
}

function onGetStudentsMarks(marks) {
    window.alert(marks);
}
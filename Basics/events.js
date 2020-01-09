function showDate() {
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function clearDate() {
    var time = document.getElementById('time');
    time.innerHTML = ' ';
}

function changeBackground(n) {
    var heading = document.getElementById('heading');
    heading.style.color = n.value;
}

function validateForm() {
    var firstName = document.forms["myForm"]["firstName"].value;

    if (firstName == null || firstName == "") {
        alert("First name is required");
        return false;
    }

    if (firstName.length < 3) {
        alert("First name must be atleast three chars");
        return false;
    }
}
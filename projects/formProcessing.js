document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const first = document.getElementById('firstName').value.trim();
    const last = document.getElementById('lastName').value.trim();
    const genderOptions = document.getElementsByName('class');
    const password = document.getElementById('password').value.trim();
    const updates = document.getElementById('uptodate')?.checked;
    const TAC = document.getElementById('check')?.checked;
    const state = document.getElementById('state').value;

    
    let selectGender = null;
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            selectGender = genderOptions[i].value;
            break;
        }
    }

   
    let sent = true;
    if (first === "") {
        alert("First name is required");
        sent = false;
    }
    if (password === "") {
        alert("Password is required");
        sent = false;
    }
    if (password.length < 15) {
        alert("Password must be at least 15 characters long");
        sent = false;
    }
    if (!selectGender) {
        alert("Select a gender");
        sent = false;
    }
    if (!TAC) {
        alert("You must agree to the terms and conditions");
        sent = false;
    }

    
    if (!sent) return;

   
    const formData = {
        firstName: first,
        lastName: last,
        gender: selectGender,
        password: password,
        state: state,
        updates: updates || false, 
    };

    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "formProcessing.json", true); 
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form');
        }
    };

    xhr.send(JSON.stringify(formData)); 

    
    console.log(formData);
});

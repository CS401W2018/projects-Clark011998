document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const first = document.getElementById('fname').value.trim();
    const last = document.getElementById('lname').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const streetAd = document.getElementById('streetAd').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const state = document.getElementById('state').value;
    const date = document.getElementById('date').value;
    const genderOptions = document.getElementsByName('gender');
    const TAC = document.getElementById('agree')?.checked;

    
    let selectedGender = null;
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            selectedGender = genderOptions[i].value;
            break;
        }
    }

    
    let valid = true;
    if (first === "") {
        alert("First name is required.");
        valid = false;
    }
    if (age === "" || age < 18 || age > 100) {
        alert("Age is required and must be between 18 and 100.");
        valid = false;
    }
    if (email === "") {
        alert("Email is required.");
        valid = false;
    }
    if (streetAd === "") {
        alert("Street address is required.");
        valid = false;
    }
    if (!selectedGender) {
        alert("Gender selection is required.");
        valid = false;
    }
    if (!TAC) {
        alert("You must agree to the terms and conditions.");
        valid = false;
    }

    
    if (!valid) return;

    
    const formData = {
        firstName: first,
        lastName: last,
        age: age,
        gender: selectedGender,
        email: email,
        streetAddress: streetAd,
        phone: phone,
        state: state,
        date: date,
    };

    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "formFinal.json", true); 
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            document.getElementById('myForm').style.display = 'none';
            document.getElementById('message').style.display = 'block';
           
        } else if (xhr.readyState === 4) {
            alert('Error submitting the form.');
        }
    };

    xhr.send(JSON.stringify(formData));

    
    console.log(formData);
});

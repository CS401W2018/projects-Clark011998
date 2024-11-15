document.getElementById('myForm').addEventListener('submit' , function(event){
    event.preventDefault();
    const first = document.getElementById('firstName').value;
    const last = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    if (!firstName || !lastName){
         alert('You must be 18 years or older to submit this form.');
         return;
    }

    const formData = {
         firstName: firstName,
         lastName: lastName,
         password: document.getElementById('password').value,
         state: document.getElementById('state').value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
         if (xhr.readyState === 4 && xhr.status === 200){
              const response = JSON.parse(xhr.response);
              document.getElementById('message').innerHtml = response.message;
              document.getElementById('myForm').innerHTML = "";
              //alert('Form submitted successfully.');
         }   else if (xhr.readyState === 4) {
              alert ('Error submitting form.');
         }
         
    };







    xhr.send(JSON.stringify(formData));

    alert("I should happen last, right?")


    console.log(formData);
    
});
function submitForm() {
    event.preventDefault();
  console.log("Form submitted");
    var name_id = document.getElementById('name').value;
    var phone_id = document.getElementById('phone').value;
    var email_id = document.getElementById('email').value;
    var subject_id = document.getElementById('subject').value;
    var msg_id = document.getElementById('message').value;
    
    var message = `data from ibfm\n\nName: ${name_id}\nEmail: ${email_id}\nPhone: ${phone_id}\nSubject: ${subject_id}\nMessage:\n${msg_id}`;
    // Check if the form is valid
    if (name_id !== '' && email_id !== '' && msg_id !== '' && phone_id !== '' && subject_id !== '') {
        // how to make a button inactive

        const submitBtn = document.querySelector("#submit");
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        // Create the payload object
        var payload = {
            subject: subject_id,
            message: message
        };
        
        // Create an XMLHTTPRequest object
        var xhr = new XMLHttpRequest();

        // Define the request method and URL
        xhr.open('POST', 'https://685e5e36e802b899737ac27c--ibfm.netlify.app/.netlify/functions/sendMail', true); // Update the URL to your function

        // Set the request header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Set up the callback function to handle the response
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Handle the successful response
                    showAlert("Your message has been sent successfully!", "success");
                    document.getElementById("mail_form").reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send";
            
                    } else {
                    // Handle error
                    showAlert("Something went wrong. Please try again later.", "error");
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send";
                  }
            }
        };

        // Send the POST request with the JSON payload
        xhr.send(JSON.stringify(payload));
  
        
    }
    else{
        alert("Please fill all the fields")
    }
}
function showAlert(message, type) {
  const alertBox = document.getElementById("form-alert");
  alertBox.textContent = message;
  alertBox.className = type === "success" ? "success" : "error";
  alertBox.id = "form-alert"; // maintain ID
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 4000);
}
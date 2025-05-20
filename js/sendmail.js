function submitForm() {
    event.preventDefault();
  console.log("Form submitted");
    var name_id = document.getElementById('name').value;
    var phone_id = document.getElementById('phone').value;
    var email_id = document.getElementById('email').value;
    var subject_id = document.getElementById('subject').value;
    var msg_id = document.getElementById('message').value;
    
    var message = `email=${email_id}\nname=${name_id}\nmessage=${msg_id}\n phone=${phone_id}\nsubject=${subject_id}`;
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
        console.log(payload)
        setTimeout(() => {
      // Simulate a successful response
      const success = false; // or false to test error

      if (success) {
        showAlert("Your message has been sent successfully!", "success");
        document.getElementById("mail_form").reset();
      } else {
        showAlert("Something went wrong. Please try again later.", "error");
      }

      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = "Send";

    }, 1500);
        

        // Create an XMLHTTPRequest object
        // var xhr = new XMLHttpRequest();

        // // Define the request method and URL
        // xhr.open('POST', 'https://benevolent-brigadeiros-fb8761.netlify.app/.netlify/functions/sendMail', true); // Update the URL to your function

        // // Set the request header
        // xhr.setRequestHeader('Content-Type', 'application/json');

        // // Set up the callback function to handle the response
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4) {
        //         if (xhr.status === 200) {
        //             // Handle the successful response
        //             console.log(xhr.responseText);
        //             document.querySelector(".u-btn-submit").style.display = "none";
        //             document.getElementById("suc_msg").style.display = "block";
        //             document.getElementById("mail_form").reset(); // Change this to reset()
        //         } else {
        //             // Handle error
        //             console.error('Error: ' + xhr.status);
        //             document.querySelector(".u-btn-submit").style.display = "none";
        //             document.getElementById("err_msg").style.display = "block";
        //             document.getElementById("mail_form").reset(); // Change this to reset()
        //         }
        //     }
        // };

        // // Send the POST request with the JSON payload
        // xhr.send(JSON.stringify(payload));
        
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
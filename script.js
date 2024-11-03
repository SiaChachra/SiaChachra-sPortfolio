document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };

    fetch("http://127.0.0.1:3000/submit-contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("feedback").textContent = data.message;
    })
    .catch(error => {
        document.getElementById("feedback").textContent = "Error submitting form.";
    });
});

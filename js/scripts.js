

// JavaScript for handling the patient form submission

document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;

    // Store patient data (This is just a placeholder, in reality, you'd send this to a backend)
    console.log("Patient Registered:", { name, age, gender, contact, address });

    // Clear form
    document.getElementById('patientForm').reset();

    alert("Patient Registered Successfully!");
});

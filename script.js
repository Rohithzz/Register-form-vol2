function printData() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    const data = `Full Name: ${fullName}\nDate of Birth: ${dob}\nPhone Number: ${phoneNumber}\nGender: ${gender}\nAdditional Message: ${message}`;

    const element = document.createElement('a');
    const file = new Blob([data], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'registration_data.txt';
    document.body.appendChild(element);
    element.click();
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // Display the data on the same page
    document.getElementById('fullNameDisplay').textContent = `Full Name: ${fullName}`;
    document.getElementById('dobDisplay').textContent = `Date of Birth: ${dob}`;
    document.getElementById('phoneNumberDisplay').textContent = `Phone Number: ${phoneNumber}`;
    document.getElementById('genderDisplay').textContent = `Gender: ${gender}`;
    document.getElementById('messageDisplay').textContent = `Additional Message: ${message}`;

    document.getElementById('displayArea').style.display = 'block';
});
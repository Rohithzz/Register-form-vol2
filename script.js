function printData() {
    const fullName = document.getElementById('fullName').value;
    const usn = document.getElementById('usn').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    const data = `Full Name: ${fullName}\nUSN: ${usn}\nEmail: ${email}\nDate of Birth: ${dob}\nPhone Number: ${phoneNumber}\nGender: ${gender}\nAdditional Message: ${message}`;

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
    const usn = document.getElementById('usn').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // dispaly functining guru
    document.getElementById('fullNameDisplay').textContent = `Full Name: ${fullName}`;
    document.getElementById('usnDisplay').textContent = `USN: ${usn}`;
    document.getElementById('emailDisplay').textContent = `Email: ${email}`;
    document.getElementById('dobDisplay').textContent = `Date of Birth: ${dob}`;
    document.getElementById('phoneNumberDisplay').textContent = `Phone Number: ${phoneNumber}`;
    document.getElementById('genderDisplay').textContent = `Gender: ${gender}`;
    document.getElementById('messageDisplay').textContent = `Additional Message: ${message}`;

    document.getElementById('displayArea').style.display = 'block';
});

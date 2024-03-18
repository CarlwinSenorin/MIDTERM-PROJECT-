function calculateAge() {
    var today = new Date();
    var birthDate = new Date(document.getElementById("birthdate").value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById("age").value = age;
}

// Calculate age initially
calculateAge();
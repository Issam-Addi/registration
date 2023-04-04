
let arrData = [];
// if (localStorage.arrData != null) {
//     arrData = JSON.parse(localStorage.arrData);
//     render();
// }


let userName;
let userPassword;
let userEmail;
let userNumber;



let DataCollected = document.getElementById("registration-form");
DataCollected.addEventListener("submit", function (event) {
    event.preventDefault();
    userName = event.target.username.value;
    userPassword = event.target.password.value;
    userEmail = event.target.email.value;
    userNumber = event.target.phone.value;

    // validate username
    function validateName() {
        const usernameRegex = /\s/;
        if (usernameRegex.test(userName)) {
            alert(`Username cannot contain spaces`);
            return false;
        }
        if (arrData.includes(userName)) {
            alert("Username already exists. welcome " + userName);
            return false;
        }
        return true;
    }


    // validate password
    function validatePassword() {
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!passwordRegex.test(userPassword)) {
            alert(`Password must be at least 8 characters long and contain at least 1 number, 1 uppercase letter, and 1 special character`);
            return false;
        }
        return true;
    }

    // validate email
    function validateEmail() {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(userEmail)) {
            alert(`Invalid email format`);
            return false;
        }
        return true;
    }

    // validate phone
    function validateNumber() {
        const phoneRegex = /^07\d{8}$/;
        if (!phoneRegex.test(userNumber)) {
            alert(`Phone number must start with 07 and contain 10 digits`);
            return false;
        }
        return true;
    }

    console.log(userName, userPassword, userEmail, userNumber);
    if (validateName() && validatePassword() && validateEmail() && validateNumber()) {
        let student = new Person(userName, userPassword, userEmail, userNumber);
        arrData.push(student);
        console.log(student);
        localStorage.setItem('arrData', JSON.stringify(arrData));
    }
    DataCollected.reset();
});


function Person(userName, userPassword, userEmail, userNumber) {
    this.userName = userName;
    this.userPassword = userPassword;
    this.userEmail = userEmail;
    this.userNumber = userNumber;
}




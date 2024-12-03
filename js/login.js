let Emailuser = document.getElementById('Email');
let inputPassword = document.getElementById('inputPass'); 
let userLoginin = document.getElementById('login');
let userSignup = document.getElementById('com'); 

let usersData = localStorage.getItem('container') ? JSON.parse(localStorage.getItem('container')) : [];
 


userLoginin.addEventListener('click', function (e) {
    let loginUser = {
        email: Emailuser.value,
        password: inputPassword.value,
    };

    if (loginUser.email === "" || loginUser.password === "") {
        document.querySelector('.warning').classList.remove('d-none')
        return;
    }

    let user = usersData.find(
        (user) => user.email === loginUser.email && user.password === loginUser.password
    );

    if (user) {
        window.location.href = "./home.html"; 
    } else {
        document.querySelector('.message').classList.remove('d-none')
    }
});

userSignup.addEventListener('click', function () {
    window.location.href = "./signUp.html";
});

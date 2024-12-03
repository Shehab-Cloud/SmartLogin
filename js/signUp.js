

// سحب الحقول
let inputUSerName = document.getElementById('userName');
let inputUSerEmail = document.getElementById('userEmail');
let inputUSerPassword = document.getElementById('userPassword');
let inputUSersignUp = document.getElementById('signUp');
let linkSignin = document.getElementById('signin');

// تخزين الحقول في الرف 
let dataUser = [];

// استرجاع البيانات من localStorage إذا كانت موجودة
if (localStorage.getItem("container") !== null) {
    dataUser = JSON.parse(localStorage.getItem("container"));
}

// التحقق من البريد الإلكتروني
function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// التحقق من الاسم
function validateName(name) {
    let regex = /^[A-Za-z][a-zA-Z]{0,14}$/;
    return regex.test(name);
}

// التحقق من الرقم السري
function validatePassword(password) {
    return password.length <= 20; 
}

function isEmailRegistered(email) {
    return dataUser.some(user => user.email === email);
}

inputUSersignUp.addEventListener('click', function (e) {
    let user = {
        name: inputUSerName.value, 
        email: inputUSerEmail.value,
        password: inputUSerPassword.value,
    };

    // التحقق من الحقول الفارغة
    if (user.neme === "" || user.email === "" || user.password === "") {
        document.querySelector('.message').classList.remove('d-none');
        return;
    } else {
        document.querySelector('.message').classList.add('d-none');
    }

    // التحقق من صحة البريد الإلكتروني
    if (!validateEmail(user.email)) {
        document.querySelector('.Invalid').classList.remove('d-none');
        return;
    } else {
        document.querySelector('.Invalid').classList.add('d-none');
    }

    // التحقق من وجود البريد الإلكتروني مسبقًا
    if (isEmailRegistered(user.email)) {
        document.querySelector('.emailMessage').classList.remove('d-none')
        return;
    }

    // التحقق من صحة الاسم
    if (!validateName(user.neme)) {
        document.querySelector('.nameMessage').classList.remove('d-none')
        return;
    }

    // التحقق من صحة الرقم السري
    if (!validatePassword(user.password)) {
        document.querySelector('.passwordMessage').classList.remove('d-none')
        return;
    }

    // إضافة المستخدم إلى البيانات المخزنة
    dataUser.push(user);

    // تخزين البيانات في localStorage
    localStorage.setItem('container', JSON.stringify(dataUser));

    // مسح النموذج بعد التسجيل
    clearform();

    document.querySelector('.true').classList.remove('d-none');
});

// دالة لمسح الحقول بعد التسجيل
function clearform() {
    inputUSerName.value = "";
    inputUSerEmail.value = "";
    inputUSerPassword.value = "";
}

linkSignin.addEventListener('click', function () {
    window.location.href = "./index.html";
});

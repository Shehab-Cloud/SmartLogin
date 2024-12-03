


document.addEventListener('DOMContentLoaded', function () {
    var username = document.getElementById("nameUser");

    var containerData = localStorage.getItem("container");

    if (containerData) {
        var userData = JSON.parse(containerData); 
        var userName = userData.length > 0 ? userData[userData.length - 1].name : null;        
        
        if (userName) {
            username.textContent = `Welcome, ${userName}`;
        } else {
            username.textContent = "Welcome, Guest";
        }
    } else {
        if (username) {
            username.textContent = "Welcome, Guest";
        }
    }
});

// تسجيل الخروج
let logOut = document.getElementById('out');
if (logOut) {
    logOut.addEventListener('click', function () {
        // مسح بيانات المستخدم من localStorage
        window.location.href = "./index.html";  // إعادة التوجيه إلى صفحة التسجيل
    });
}

// display current time.
// after click on input field => chocolate color.

// IIFE ().
(function () {
    // Async code.
    setInterval(() => {
        const time = document.querySelector("#time");
        const currentTime = new Date();
        time.style.color = '#fff'
        time.innerHTML = currentTime.toLocaleTimeString();
    }, 1000);
})();


// for input field.

(function() {
    const uname = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

uname.addEventListener('click', () => {
    uname.style.color = '#fff';
    uname.style.boxShadow = "1px 1px 1px 1px chocolate";
    uname.style.borderRadius = "5px"
});

email.addEventListener('click', () => {
    email.style.color = '#fff';
    email.style.boxShadow = "1px 1px 1px 1px chocolate";
    email.style.borderRadius = "5px"

});

password.addEventListener('click', () => {
    password.style.color = '#fff';
    password.style.boxShadow = "1px 1px 1px 1px chocolate";
    password.style.borderRadius = "5px"

});
})()
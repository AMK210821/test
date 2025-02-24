document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents page reload

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (!email || !password) {
        errorMessage.innerText = "Please fill in all fields.";
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            errorMessage.innerText = error.message;
        });
});

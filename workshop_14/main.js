const loginForm = document.querySelector("#login-form");
const user = JSON.parse(localStorage.getItem("user"));

// loginForm.innerHTML = ""
// loginForm.style.display = "none";

async function refreshToken(token) {
    const response = await fetch('https://dummyjson.com/auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            refreshToken: token,
        })
    });
    const data = await response.json();
    user.accessToken = data.accessToken;
    user.refreshToken = data.refreshToken;
    localStorage.setItem("user", JSON.stringify(user));
}

async function authenticate(token) {
    const response = await fetch(
        'https://dummyjson.com/auth/me', 
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    );
    const data = await response.json();
    console.log(response);
    if (!response.ok) {
        refreshToken(user.refreshToken);
        return;
    }
    
    document.body.innerHTML = `Welcome ${data.firstName} ${data.lastName}`;
}

async function login(username, password) {
    const response = await fetch(
        "https://dummyjson.com/auth/login",
        {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 1,
            }),
        }
    );
    console.log(response);
    if (!response.ok) {
        loginForm.username.style = `border: 1px solid red`;
        loginForm.password.style = `border: 1px solid red`;
        return;
    }
    const data = await response.json();

    localStorage.setItem("user", JSON.stringify(data));

    document.body.innerHTML = `Welcome ${data.firstName} ${data.lastName}`;
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event);

    console.log(loginForm.username.value);
    console.log(loginForm.password.value);
    login(loginForm.username.value, loginForm.password.value);
});


console.log(user);
if (user) {
    authenticate(user.accessToken);
}
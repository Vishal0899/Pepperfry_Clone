document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});

const form = document.getElementById("reg-form");
form.addEventListener("submit", registerUser);

//const loginUser = document.getElementById("login-form");
//loginUser.addEventListener("submit", loginForm);

async function loginForm() {
    //event.preventDefault();
    const email = document.getElementById("emailcheck").value;
    const password = document.getElementById("passwordcheck").value;

    const result = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        })
    }).then(res => res.json());
    if(result.status==='ok') {
        console.log("Got the token:", result.data);
        alert("Login successful");
        window.location.href="html.html";
    }
    else{
        alert("Login failed, UserName password incorrect", result.error);
    }
}


function loginFun() {
    let box1 = document.querySelector(".pop-box1");
    box1.innerHTML = "";
    let box2 = document.querySelector(".pop-box2");
    box2.innerHTML = "";
    //let regForm = document.getElementById("reg-form");
    //regForm.style.display = "none";
    //let loginShow = document.getElementById("login-form");
    //loginShow.style.display = "block";

    let img = document.createElement("img");
    img.src = "https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg";


    box2.innerHTML = `
    <from id="login-form">
        <div class="user-id user-data">
          <input type="email" id="emailcheck" required=""/>
          <label>Email ID/Mobile Number</label>
        </div>
        <div class="user-id user-data">
          <input type="password" name="" id="passwordcheck" required=""/>
          <label>Password</label>
        </div>
        <input type="submit" id="login-btn" value="Login" onclick="loginForm()">
    </from>
        <p id="forgot"><a href="#">Forgot Password?</a>
        </p>
        <hr>
        <p id="signup">New to Pepperfry? Register Here Login</p>
        <hr>
        <div class="social">
          <div>OR Continue with</div>
          <div><img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt=""></div>
          <div><img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt=""></div>
        </div>
    `;
    box1.append(img);
}
//function loginForm2(){
//alert("Login successful")
//}


async function registerUser(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const mobile = document.querySelector("#number").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const result = await fetch('api/register', { 
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ 
            name,
            mobile,
            email,
            password,
        })
    }).then(res=>res.json());
    if(result.status === 'ok'){
        alert("registration successful");
        loginFun();
    }
    else{
        alert(result.error);
    }
}
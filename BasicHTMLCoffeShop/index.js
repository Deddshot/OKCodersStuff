const signIn = document.getElementById("sign-in");

const submitInfo = document.getElementById("login-button");

signIn.addEventListener("click", openLogIn);

submitInfo.addEventListener("click", closeLogIn);

function openLogIn(){
    document.getElementById("dimmer").style.display = "flex";
    document.getElementById("login-form").style.display = "flex";
}

function closeLogIn(){
    const name = (document.getElementById("username").value);
    let initials = (name[0] + name.charAt(name.search(" ") + 1));
    signIn.textContent = initials;
    document.getElementById("dimmer").style.display = "none";
    document.getElementById("login-form").style.display = "none";
}

const button1 = document.getElementById("hot-drink1");

button1.addEventListener("click", test);

function test() {
    console.log("aaa");
}

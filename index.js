const obj = window.localStorage.getItem('value');
document.querySelector("#in").onclick = () => {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    if (JSON.parse(obj).name == "" && JSON.parse(obj).email == "" && JSON.parse(obj).pass == "") {
        alert("Please create a account");
    } else if (name.value != JSON.parse(obj).name) {
        name.style.borderColor = "red";
        alert("Enter Correct Name");
    } else if (email.value != JSON.parse(obj).email) {
        email.style.borderColor = "red";
        alert("Enter Correct Email");
    } else if (pass.value != JSON.parse(obj).pass) {
        pass.style.borderColor = "red";
        alert("Enter Correct Password");
    } else if (pass.value === JSON.parse(obj).pass && name.value === JSON.parse(obj).name && email.value === JSON.parse(obj).email) {
        window.location.href = "./final.html";
        pass.style.borderColor = "black";
        email.style.borderColor = "black";
        name.style.borderColor = "black";
    }
}
const obj={
    name:"",
    email:"",
    pass:"",
    cpass:""
}
document.querySelector("#sign").onclick=()=>{
    const name1=document.querySelector("#name1");
    const email1=document.querySelector("#email1");
    const pass1=document.querySelector("#pass1");
    const cpass1=document.querySelector("#cpass");
    if(pass1.value!=cpass1.value){
        pass1.style.borderColor="red";
        alert("Enter correct password");
    }else if(pass1.value===cpass1.value){
        obj.name=name1.value;
        obj.email=email1.value;
        obj.pass=pass1.value;
        obj.cpass=cpass1.value;
        window.localStorage.setItem("value",JSON.stringify(obj));
        window.location.href="./index.html";
    }
}
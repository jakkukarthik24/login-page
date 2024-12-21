const password=document.getElementById("password");
const toggleIcon=document.getElementById("toggleIcon");
const password2=document.getElementById("password2");
const toggleIcon2=document.getElementById("toggleIcon2");
const submit=document.getElementsByClassName("submit1");

toggleIcon.addEventListener('click',()=>{
    const type=password.getAttribute("type")==="password"?"text":"password";
    password.setAttribute("type",type);
    toggleIcon.classList.toggle("bi-eye");
})
toggleIcon2.addEventListener('click',()=>{
    const type=password2.getAttribute("type")==="password"?"text":"password";
    password2.setAttribute("type",type);
    toggleIcon2.classList.toggle("bi-eye");
})
function checkPasswords(){
    if(password.value===password2.value && password.value!=""){
        submit.disabled=false;
        password2.style.borderColor="green";
    }
    else{
        submit.disabled=true;
        password2.style.borderColor="red";
    }
}
password.addEventListener('input',checkPasswords);
password2.addEventListener('input',checkPasswords);
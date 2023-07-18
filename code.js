const origpass = document.querySelector('input[name="password"]');
const confirmpass = document.querySelector('input[name="dpassword"]');

origpass.addEventListener("blur",()=>{
    if(confirmpass.value!==origpass.value&&confirmpass.value!=""){
        origpass.classList.add("invalid");
        confirmpass.classList.add("invalid");
    } else {
        origpass.classList.remove("invalid");
        confirmpass.classList.remove("invalid");
    }
})

confirmpass.addEventListener("blur",()=>{
    if(confirmpass.value!==origpass.value){
        origpass.classList.add("invalid");
        confirmpass.classList.add("invalid");
    } else {
        origpass.classList.remove("invalid");
        confirmpass.classList.remove("invalid");
    }
})

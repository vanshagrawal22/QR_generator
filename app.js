let text = document.querySelector(".qrtext");
let qrImg = document.querySelector("#qrImg");
const submit = document.querySelector("#submit");
let div = document.querySelector(".image");

submit.addEventListener('click',()=>{
    if(text.value.length>0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
        div.classList.add("show-img");
    }else{
        text.classList.add("error");
        setTimeout(()=>{
            text.classList.remove("error");
        },1000)
    }
})



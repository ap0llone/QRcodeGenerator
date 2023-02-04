const inputNode = document.querySelector('#js-input');
const imgBoxNode = document.querySelector('#js-img-box');
const qrImageNode = document.querySelector('#js-qr-image');


function generateQR(){
    if(inputNode.value.length > 0){
        qrImageNode.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputNode.value;
        imgBoxNode.classList.add('show-img');
    }else{
        inputNode.classList.add('error');
        setTimeout(() => {
            inputNode.classList.remove('error');
        },1000);
    };
};
function generateQr(){
    var text = document.getElementById("textValue")
    var QrImg=document.getElementById("QrDisplay")
    QrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value
}
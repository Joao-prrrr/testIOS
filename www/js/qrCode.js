const qrReaderBtn = document.getElementById('openQrCodeReader');
// const qrCode = document.getElementById('qrCode');

qrReaderBtn.addEventListener('click', () => {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            let text = result.text;
            createQRCode(text);
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : true, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            disableAnimations : true, // iOS
            disableSuccessBeep: false // iOS and Android
        }
     );
});

function createQRCode(text) {
    var qrcode = new QRCode("qrCode", {
        text: text,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.L
    });
}
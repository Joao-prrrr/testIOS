# Qr code and Contact for iOS

## First of all

Create a new project with the following command:

```bash
cordova create myApp com.example.app app
cordova platform add ios
``` 

## QR code

We must install cordova plugin for QR code scanner.

```bash
cordova plugin add @starley/barcodescanner-sdk31
```

In a button we can call the QR code scanner. And we can take the text of the QR code.

```javascript
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
```

This is the function to create a QR code.

```javascript
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
```

## Contact

We must install cordova plugin for QR code scanner.

```bash
cordova plugin add cordova-plugin-add-swift-support --save
```

You must add the following line to the config.xml file.

```xml
<edit-config file="*-Info.plist" mode="merge" target="NSContactsUsageDescription">
    <string>your text</string>
</edit-config>
```

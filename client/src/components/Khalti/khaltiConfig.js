import myKey from "./khaltiKey";

let config = {
    // replace this key with yours
    "publicKey": myKey.publicTestKey,
    "productIdentity": "2058972",
    "productName": "Gym Fitness",
    "productUrl": "sameer don ko url",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};
export default config
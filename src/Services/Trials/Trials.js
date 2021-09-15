export const Trial = ()=>{


    navigator.vibrate([200,30,200])

    navigator.geolocation.getCurrentPosition(success, error, options);
    console.log(`nitz navigator.userAgent1: ${JSON.stringify(navigator.clipboard)}`)
    console.log(`nitz navigator.userAgent2: ${JSON.stringify(navigator.credentials)}`)
    console.log(`nitz navigator.userAgent3: ${JSON.stringify(navigator.userAgent)}`)
    console.log(`nitz navigator.userAgent4: ${JSON.stringify(navigator.vendor)}`)
    console.log(`nitz navigator.userAgent5: ${JSON.stringify(navigator.serviceWorker)}`)
    console.log(`nitz navigator.userAgent6: ${JSON.stringify(navigator.hardwareConcurrency)}`)

    const ua = navigator.userAgent
    const device = {
        iPad: /iPad/.test(ua),
        iPhone: /iPhone/.test(ua),
        Android4: /Android 4/.test(ua)
    }
    console.log(`nitz device: ${JSON.stringify(device)}`)


    return JSON.stringify({
        'userAgent' : navigator.userAgent,
        'navigator.clipboard' : navigator.clipboard,
        'navigator.credentials':navigator.credentials,
        'navigator.vendor':navigator.vendor,
        'navigator.serviceWorker':navigator.serviceWorker ,
        'navigator.hardwareConcurrency':navigator.hardwareConcurrency
    })
}


function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}
var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
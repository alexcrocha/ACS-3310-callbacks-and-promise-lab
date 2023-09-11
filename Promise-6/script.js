
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function onsuccess(pos) {
  const { latitude, longitude, accuracy } = pos.coords;
  console.log('Your current position is:');
  console.log(`Latitude : ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log(`More or less ${accuracy} meters.`);
}

function onerror(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Challenge: Make this work:

function getGeolocation(options) {
  return new Promise( (resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  } )
}

// Like this:

getGeolocation(options)
  .then(pos => { onsuccess(pos) })
  .catch(err => { onerror(err) })

// Check it in action by opening the index.html file in your browser and opening the console.

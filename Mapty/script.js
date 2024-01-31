'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords
        console.log(`https://www.google.com/maps/place/@${latitude},${longitude}`);
        console.log(position);

        const coords = [latitude, longitude]

        map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // handling click on map
        map.on('click', function (mapE) {
            mapEvent = mapE;
            form.classList.remove('hidden')
            inputDistance.focus()

            // console.log(mapEvent);


        })
    }, function () {
        alert('could not get you location')
    })
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
// clear input fields

inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''

    // display marker
    const {lat, lng} = mapEvent.latlng

    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(L.popup(
            {
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup',
            }))
        .setPopupContent('Workout')
        .openPopup();
})

inputType.addEventListener('change', function(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')

    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})
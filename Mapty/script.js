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

class Workout {
    date = new Date();
    id = (new Date() + '').slice(-10)
    constructor(coords, distance, duration){

        // this.date = ...
        // this.id = ...

        this.coords = coords;
        this.distance = distance; //km
        this.duration = duration; //min
    }
}



class App {

    // setting private properties
    #map;
    #mapEvent;

    constructor() {
        this._getPosition()

        form.addEventListener('submit', this._newWorkout.bind(this))

        inputType.addEventListener('change', this._toogleElevationField)
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('could not get you location')
            })
        }
    }

    _loadMap(position) {

        const { latitude } = position.coords;
        const { longitude } = position.coords
        console.log(`https://www.google.com/maps/place/@${latitude},${longitude}`);
        console.log(position);

        const coords = [latitude, longitude]

        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // handling click on map
        this.#map.on('click', this._showForm.bind(this))

    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden')
        inputDistance.focus()

    }

    _toogleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')

        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }

    _newWorkout(e) {
        e.preventDefault()
        // clear input fields

        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''

        // display marker
        const { lat, lng } = this.#mapEvent.latlng

        L.marker([lat, lng])
            .addTo(this.#map)
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
    }
}

const app = new App()



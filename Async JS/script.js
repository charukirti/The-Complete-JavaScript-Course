'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function (country) {

//     const request = new XMLHttpRequest()
//     request.open('GET', `https://restcountries.com/v2/name/${country}`)
//     request.send()

//     request.addEventListener('load', function () {
//         // console.log(this.responseText);

//         const [data] = JSON.parse(this.responseText)
//         console.log(data);


//     })

// }


// getCountryData('bharat')

// const getCountryAndNeighbour = function (country) {

//   // AJAX call country (1)
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v2/name/${country}`)
//   request.send()

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText)
//     console.log(data);

//     // render country (1)
//     renderCountry(data)

//     // neighbour country (2)
//     const neighbour = data.borders?.[0]

//     // AJAX call 2
//     const requestTwo = new XMLHttpRequest()
//     requestTwo.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
//     requestTwo.send()

//     requestTwo.addEventListener('load', function() {
//       const data2 = JSON.parse(this.responseText); // Access data directly
//       console.log(data2);

//       renderCountry(data2, 'neighbour')
//     });

//   })

// }

// getCountryAndNeighbour('bharat')

// setTimeout(()=>{
//   console.log('1 second passed');

//   setTimeout(()=>{
//     console.log('2 seconds passed');
//   }, 2000)
// }, 1000)


/*
* ################## Learning about promises ################### */

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// const request = new XMLHttpRequest()
// request.open('GET', `https://restcountries.com/v2/name/${country}`)
// request.send()


// const request = fetch('https://restcountries.com/v2/name/bharat')

// console.log(request);


const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then((response => response.json()))
  .then((data) => {
    console.log(data);
    renderCountry(data[0])

    const neighbour = data[0].borders?.[0]

    return fetch(`https://restcountries.com/v2/name/${neighbour}`)
  })
  .then(response => response.json())
  .then(data => renderCountry(data[0], 'neighbour'))
  .catch(err => console.log(`${err} 😭`))
}



btn.addEventListener('click', function(){
  
  getCountryData('Bharat')
})
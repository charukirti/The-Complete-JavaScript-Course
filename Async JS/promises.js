const request = fetch('https://restcountries.com/v2/name/bharat')

// console.log(request);


// Promises

/* Placeholder for the future result of an asynchronous operation */

const getCountryData = (country) =>{
    fetch(`https://restcountries.com/v2/name/${country}`).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);

        // chaining promises
        const neighbour = data.borders?.[0]
        return fetch(`https://restcountries.com/v2/name/${neighbour}`)
    }) 
    .then((response) => response.json())
    .then(data => console.log(data))
}

getCountryData('Bharat')


// Fetching pokemon api

const fetchPokemon = () =>{
    return fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(respnse => respnse.json())
        .then(data => {
            // aalelya data sobat kahi tari kar
            console.log(data);
        })
        .catch(error => {
            // handle the error
            console.log(error);
        })
}

fetchPokemon()

// another api calling

const fetchGithubUser = ()=>{
    return fetch('https://api.github.com/users/charukirti')
    .then(request => request.json())
    .then(data => {
        console.log(data.login);
    })
}

fetchGithubUser()
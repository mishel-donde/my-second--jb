"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateHTML = joke => joke.value
    // {
    //     const { value } = joke
    //     const newHTML = value
    //     return newHTML
    // }

    const renderHTML = newHTML => document.getElementById('joke').innerHTML = newHTML


    const displayChuckNorrisJoke = async () => {
        try {

            // get data
            const joke = await getData('https://api.chucknorris.io/jokes/random')

            // generate html
            const newHTML = generateHTML(joke)

            // render html
            renderHTML(newHTML)
            
        } catch (e) {
            console.warn(e)
        }

    }

    document.getElementById('button').addEventListener('click', () => {
        setInterval(displayChuckNorrisJoke, 5000)
    })

})()
/////////////////////////////////////////////////////////////////////////////////////////
//דרך של צאט 

"use strict";

(() => {
    const getData = (url) => fetch(url).then(response => response.json());

    const renderJoke = (joke) => {
        const jokeCell = document.getElementById('joke-text');
        jokeCell.textContent = joke.value; // Update the joke text
    };

    const startJokes = async () => {
        try {
            const joke = await getData('https://api.chucknorris.io/jokes/random');
            renderJoke(joke);
        } catch (e) {
            console.warn(e);
            document.getElementById('joke-text').textContent = "Failed to fetch a joke!";
        }
    };

    let jokeInterval;

    document.getElementById('button').addEventListener('click', () => {
        if (jokeInterval) clearInterval(jokeInterval); // Clear existing interval if any
        startJokes(); // Fetch the first joke immediately
        jokeInterval = setInterval(startJokes, 5000); // Fetch new jokes every 5 seconds
    });
})();
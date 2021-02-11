const fetch = require('node-fetch')
const cherio = require('cheerio')

// const $ = cheerio.load('<h2 class="title">Hello world</h2>');

// $('h2.title').text('Hello there!');
// $('h2').addClass('welcome');
// $.html();

fetch('https://espn.com')
.then(response =>{
    return response.text()
}).then(html => {
    console.log(html)
    const $ = cherio.load(html)
    
}) 
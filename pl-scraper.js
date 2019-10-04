// pl-scraper.js

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.asfi.gob.bo/index.php/transparencia/auditoria-interna.html';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const statsTable = $('.item-page > div > table > tbody > tr');
    const topPremierLeagueScorers = [];

    statsTable.each(function () {
      const dato = $(this).find('a').text();

      topPremierLeagueScorers.push({
        dato
      });
    });

    console.log(topPremierLeagueScorers);
  })
  .catch(console.error);
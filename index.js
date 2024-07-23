const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://ugandacoffee.go.ug/'

axios(url)
    .then(response => {
         const $ = cheerio.load(response.data)
         const html = response.data
         const CoffeeMarketPrices = []
         $('div.col-sm-6.col-md-3').each((index, element) => {
             const coffeeName = $(element).find('h4').text().trim()
             const coffeePrice = $(element).find('h5').text().trim
             CoffeeMarketPrices.push({ coffeeName, coffeePrice })
             console.log(`Coffee: ${coffeeName}, Price: ${coffeePrice}`)
             })
             console.log('-------------------------------------')
             console.log('Top 5 Cheapest Coffee Beans:')
             CoffeeMarketPrices.sort((a, b) => parseFloat(a.coffeePrice) - parseFloat(b.coffeePrice)).slice(0, 5).forEach(price => {
                 console.log(`Coffee: ${price.coffeeName}, Price: ${price.coffeePrice}`)
             })
             console.log('-------------------------------------')
             console.log('Top 5 Most Expensive Coffee Beans:')
             CoffeeMarketPrices.sort((a, b) => parseFloat(b.coffeePrice) - parseFloat(a.coffeePrice)).slice(0, 5).forEach(price => {
                 console.log(`Coffee: ${price.coffeeName}, Price: ${price.coffeePrice}`)
             })
             console.log('-------------------------------------')
             console.log('Total Number of Coffee Beans:', CoffeeMarketPrices.length)
             console.log('-------------------------------------')
             })
             .catch(error => {
                 console.error('Error:', error)
             })
             app.listen(PORT, () => {
                 console.log(`Server listening at http://localhost:${PORT}`)
             })
             

    
    
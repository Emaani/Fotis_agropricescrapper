const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://ugandacoffee.go.ug/market-report'


async function scrapeCoffeeMarketReport() {
    try {
       
        const {data} = await axios.get(url)
        const $ = cheerio.load(data)
        
        const coffeeData = []
        
        try {

        

        $('table.daily-coffee-market-prices').each((index, element) => {
            const coffee = {
                region: $(element).find('td:nth-child(1)').text().trim(),
                type: $(element).find('td:nth-child(2)').text().trim(),
                quantity: $(element).find('td:nth-child(3)').text().trim(),
                price: $(element).find('td:nth-child(4)').text().trim(),
                volume: $(element).find('td:nth-child(5)').text().trim(),
                imports: $(element).find('td:nth-child(6)').text().trim(),
                exports: $(element).find('td:nth-child(7)').text().trim(),
            }
            coffeeData.push({

                type,
                price,
                date,
    
                })
            })
            
            console.log(coffeeData)
        
        
         } catch (error) {
        console.error('Error fetching the coffee market report:', error)
    }


scrapeCoffeeMarketReport()

 

    } catch (error) {
        console.error('Error fetching the Uganda Coffee Market:', error)
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    scrapeCoffeeMarketReport()
})

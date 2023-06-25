// to start Project open terminal and type : npm start
const port_no = 8080 // Port Number where Project is running
const db_name = 'db_astrology' // Database Name

// const open = require('./node_modules/open') // To open Project
const express = require('express')
const mongoose = require('mongoose')
const url = `mongodb://0.0.0.0:27017/${db_name}`
const cors = require('cors')
const app = express()

mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
})
 
const con = mongoose.connection  
con.on('open', () => {
    console.log(`${db_name} - Database connected`)
})
app.use(cors())
app.use(express.json())

// Basic_Panchag
const r_basic_panchag_Router = require('./routes/r_basicpanchag')
app.use('/r_basicpanchag', r_basic_panchag_Router)

// Astro Details
const r_astroRouter = require('./routes/r_astro')
app.use('/r_astro', r_astroRouter)

// Chaughadiya Muhurta
const r_chaughadiyaRouter = require('./routes/r_chaughadiya_muhurta')
app.use('/r_chaughadiya_muhurta', r_chaughadiyaRouter)

// Western Horoscope
const r_horoscopeRouter = require('./routes/r_western_horoscope')
app.use('/r_western_horoscope', r_horoscopeRouter)

// Numero Table
const r_numtableRouter = require('./routes/r_numtable')
app.use('/r_numtable', r_numtableRouter)

// Planet
const r_planetRouter = require('./routes/r_planet')
app.use('/r_planet', r_planetRouter)

// Manglik Report
const r_manglikRouter = require('./routes/r_manglik_report')
app.use('/r_manglik_report', r_manglikRouter)

// Numero Place Vastu
// const r_numvastuRouter = require('./routes/r_numvastu')
// app.use('/r_numvastu', r_numvastuRouter)

// Display Port Number
app.listen(port_no, () => {
    console.log(`Server running on port : ${port_no}`)
    // open('/Astrology/Assets/num_table.html');
})
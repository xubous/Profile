const express = require ( "express" )
const cors = require ( "cors" )
const app = express ( )
const port = 4567
let existing = [ ]

app.use ( express.json ( ) )
app.use ( cors ( ) )

app.post ( "/submit", ( req, res ) => {
    const data = req.body

    existing.push ( data )

    console.log ( `Dados existentes -> ${existing}` )

    res.send ( "Dados recebidos e armazenados" )
} )

app.listen ( port, ( ) => {
    console.log ( port )
} )
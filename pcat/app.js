import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('hadi bakalım!')
})

const port = 3000
app.listen(port, () => {
    console.log("Sunucu başlatıldı: " + port)
})
import express from 'express'

const app = express()
const port = 4000

app.use(express.json())

app.use('/', express.static('public'))

app.use('/api', (req,res) => {
    res.status(200).json({
        message: "API fatec funcionando",
        version: "1.0,.0"

    })
})

app.use('/favicon.ico', express.static('public/images/computador.png'))

app.use((req, res)=>{
    res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            msg: `a rota ${req.originalUrl} nao existe na API`,
            param: 'invalid rote'
    }]
    })
}
)

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`);
})

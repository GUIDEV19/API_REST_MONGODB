import app from './src/app.js'

const port = process.env.PORT || 3000;


//informando em qual porta ele ira trabalhar "escutar"
app.listen(port, () =>{
    console.log(`server escutando em http://localhost:${port}`)
})
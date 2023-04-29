// const express = require('express')
// const port = 3500
// const app = express()

// app.get('/products', (req, res) => {

//     //validate data
//     //query bd
//     //process data
//     //other action on data

//     res.send('Lista de Productos')
// })

// app.post('/products', (req, res) => {
//     res.send('creando productos')
// })

// app.put('/products', (req, res) => {
//     res.send('Actualizando Productos')
// })

// app.delete('/products', (req, res)=> {
//     res.send('Eliminando Productos')
// })

// app.patch('/products', (req, res) => {
//     res.send('Actualizando una parte del producto')
// })

// app.listen(port)
// console.log(`Server on port ${port}`)


///////////////////////////////////////////////////////////////////////////////////////


// const express = require('express')
// const port = 3500
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/myfile', (req, res) =>{
//     res.sendFile('./arquitectura.png', {
//         root: __dirname
//     })
// })

// app.get('/user', (req, res) => {
//     res.json({ nombre: "Samir",
//                apellido: "Alanya",
//                edad: 19,
//                points: [1, 2, 3],
//                adress: {
//                 ciudad: "Lima - Perú",
//                 distrito: "San Miguel",
//                 calle: "Av. Brigida Silva"
//                } 
//             })
// })

// app.get('/isAlive', (req, res) => {
//     res.sendStatus(204)
// })

// app.listen(port)    
// console.log(`Server on port ${port}`)



///////////////////////////////////////////////////////////////////////////////////////


// const express = require('express')

// const port = 3500

// const app = express()

// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))

// app.post('/user', (req, res) => {
//     res.send('Nuevo usuario creado')
//     console.log('Nuevo usuario creado')
// })

// app.listen(port)
// console.log(`Server on port ${port}`)


///////////////////////////////////////////////////////////////////////////////////////

const express = require('express')

const port = 3500

const app = express()

app.get('/hello/:username', (req, res) => {
    //console.log(req.params)
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res) => {
    if(req.params.username.toUpperCase() == "SAMIR"){
        return res.sendFile('./arquitectura.jpg',{
            root: __dirname
        })
    }

    res.send('El usuario no tiene acceso...!!!!!')
})

app.get('/name/:name/age/:age', (req, res) =>{
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años!!!!`)
})


app.listen(port)
console.log(`Server on port ${port}`)

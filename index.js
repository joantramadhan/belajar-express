// const express = require ('express');
// const app = express();
// const port = 3000;

// //import routes
// const moviesRouter = require('./routes/moives');

// //middleware untuk pharsing json
// app.use(express.json());

// app.use('/api/movies', moviesRouter);
// //route sederhana
// app.get('/', (req,res) => {
//     res.send('hello world dari express')
// });

// //menjalankan server
// app.listen(port, () => {
//  console.log(`server belajar di http://localhost:${port}`);
 
// })

const express = require('express');

const app = express();
const port = 3000;


// Middleware untuk parsing JSON
app.use(express.json());


// Import route latihan
const latihanRouter = require('./routes/latihan');


// Gunakan route latihan
app.use('/', latihanRouter);


// Route sederhana
app.get('/', (req, res) => {
    res.send('Hello World dari Express');
});


// Menjalankan server
app.listen(port, () => {
    console.log(`Server belajar di http://localhost:${port}`);
});
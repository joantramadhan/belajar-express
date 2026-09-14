const express = require ('express');
const app = express();
const port = 3000;

//middleware untuk pharsing json
app.use(express.json());

//route sederhana
app.get('/', (req,res) => {
    res.send('hello world dari express')
});

//menjalankan server
app.listen(port, () => {
 console.log(`server belajar di http://localhost:${port}`);
 
})
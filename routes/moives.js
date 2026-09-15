const express = require('express');
const router = express.Router();

//data dummy
let movies = [
    {id : 1, title : 'inception', year : 2010},
    {id : 2, title : 'interstellar', year : 2020},
]

// read all
router.get('/', (req,res) => {
    res.json(movies);
});

// read by id
router.get('/:id', (req,res) =>{
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).json({massage: 'movie not found'});
    res.json(movie);
});

//create
router.post ('/', (req,res) =>{
    const newMovie= {
        id : movies.length + 1,
        title : req.body.title,
        year : req.body.year
    };
    movies.push(newMovie)
    res.status(201).json(newMovie);
});

//edit /update
router.put('/', (req,res) =>{
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).json({massage: 'movie not found'});

    //else
    movie.title = req.body.title || movie.title;
    movie.year = req.body.year || movie.year;
    res.json(movies);
});

//delete
router.delete('/', (req,res) => {
    movies = movies.filter(m => m.id !== parseInt(req.params.id));
    res.status(204).end();
});

module.exports = router


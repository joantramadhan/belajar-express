const express = require('express');
const router = express.Router();


// ========================================
// SOAL 1
// GET /lingkaran-tabung/:jariJari/:tinggi
// ========================================

router.get('/lingkaran-tabung/:jariJari/:tinggi', (req, res) => {

    const jariJari = parseFloat(req.params.jariJari);
    const tinggi = parseFloat(req.params.tinggi);

    // Rumus
    const luasAlas = Math.PI * jariJari * jariJari;
    const kelilingAlas = 2 * Math.PI * jariJari;
    const volumeTabung = luasAlas * tinggi;

    res.send(`
        Jari-jari: ${jariJari}<br>
        Tinggi: ${tinggi}<br>
        Volume tabung: ${volumeTabung.toFixed(2)}<br>
        Luas alas tabung: ${luasAlas.toFixed(2)}<br>
        Keliling alas tabung: ${kelilingAlas.toFixed(2)}
    `);
});


// ========================================
// DATA ORANG
// ========================================

let dataOrang = [
    {
        id: 1,
        name: "John",
        umur: 30,
        pekerjaan: "Penulis",
        jenisKelamin: "L"
    },
    {
        id: 4,
        name: "Benzema",
        umur: 34,
        pekerjaan: "Pemain Bola",
        jenisKelamin: "L"
    },
    {
        id: 5,
        name: "Sarah",
        umur: 27,
        pekerjaan: "Model",
        jenisKelamin: "P"
    },
    {
        id: 9,
        name: "Shohei Ohtani",
        umur: 28,
        pekerjaan: "Pemain Baseball",
        jenisKelamin: "L"
    },
    {
        id: 11,
        name: "Maria Sharapova",
        umur: 35,
        pekerjaan: "Petenis",
        jenisKelamin: "P"
    }
];


// ========================================
// SOAL 2
// GET /data-orang?umur=30&gender=L
// ========================================

router.get('/data-orang', (req, res) => {

    const umur = req.query.umur;
    const gender = req.query.gender;

    let hasil = dataOrang;

    // Filter berdasarkan umur
    if (umur) {
        hasil = hasil.filter(orang => orang.umur >= parseInt(umur));
    }

    // Filter berdasarkan gender
    if (gender) {
        hasil = hasil.filter(
            orang => orang.jenisKelamin.toUpperCase() === gender.toUpperCase()
        );
    }

    // Membuat output sesuai contoh soal
    let output = hasil.map((orang, index) => {
        return `${index + 1}. ${orang.name} - Pekerjaan: ${orang.pekerjaan} - Umur: ${orang.umur} Tahun`;
    });

    res.send(output.join('<br>'));
});


// ========================================
// SOAL 3
// GET /data-orang/:id
// ========================================

router.get('/data-orang/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const orang = dataOrang.find(
        orang => orang.id === id
    );

    // Jika data tidak ditemukan
    if (!orang) {
        return res.status(404).send('Maaf data tidak ditemukan');
    }

    // Jika data ditemukan
    res.send(
        `Pak ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`
    );
});


module.exports = router;
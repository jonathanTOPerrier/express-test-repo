const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

app.get('/api/folk', (req, res) => {

    res.json({
        'mennesker': [
            {
                'fornavn': 'Jonathan Theodor',
                'efternavn': 'Ousted Perrier',
                'Uddannelse': 'Webintegrator',
                'Liv ret': 'Boller i Karry'
            },
            {
                'fornavn': 'David',
                'efternavn': 'Hjort',
                'Uddannelse': 'webintegrator/uddannet fotograf',
                'Liv ret': 'Kylling wok med ris'
            }

        ],
        'dyr': {
            'Kat': 'Cleo',
            'Hund': 'fido',
            'Fisk': 'alfredo',
            'kanin': 'Lillefix',
            'Pindssvin': 'stiksak'
        }
    });

});

app.get('/api/skole', (req, res) => {
    res.json({
        'Marie Mørk': 'Min Første skole... Virkelig dårlig',
        'FG': 'Mit Gymnasie, det var fint nok',
        'AFUK': 'Mega nice!!! :D produktionsskole',
        'VUC NS': 'Det var mega tørt og kedeligt'
    });
});

app.use(express.static('public'));

app.listen(1337, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:1337');
});
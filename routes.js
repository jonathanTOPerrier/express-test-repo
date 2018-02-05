module.exports = (app) => {
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
            'VUC NS': 'Det var mega tørt og kedeligt',
            'Web int': 'Verdensfedeste uddannelse'
        });
    });

    app.get('/api/jobs', (req, res) => {
        res.json({

            'Feje dreng': 'Dette var mit første job i en børnehave',
            'Bogindbinder': 'Dette job var mit andet arbejde som jeg havde samtidig med det første',
            'Smykkesortere': 'Random kedeligt arbejde',
            'Arbejdede i en bager': 'Nedern chef der var alt for atoiter',
            'Arbejdsmand': 'Arbejdede som arbejdsmand for et kogt malerfirma',
            'Køkkenassistent': 'Super stressende 200 timer + om ugen'

        });
    });

    app.get('/api/test', (req, res) => {
        console.log(req.query);
        res.json({
            text: "Hello Worlds, et eller andet"
        });
    });

    app.get('/api/search/:id', (req, res) => {
        let mad = [
            { "name": "jens", "work": "cleaner" },
            { "name": "bob", "work": "chef" },
            { "name": "henrik", "work": "slave" },
            { "name": "bob", "work": "fisher" }
        ];

        let arr = [];

        mad.forEach(element => {
            if (element.name == req.params.id) {
                arr.push(element);
            }
        })
        if (arr.length == 0) {
            arr.push({ "fejl": "det du søgte efter fandtes ikke" });
        }
        res.json(arr);

    });

    app.post('/api/formular', (req, res) => {
        res.json({
            besked: "data blev modtaget",
            fornavn: req.body.fornavn,
            efternavn: req.body.efternavn
        });
    });

}
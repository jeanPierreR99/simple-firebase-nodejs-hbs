const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://node-firebase-68a15-default-rtdb.firebaseio.com/'
})

const db = admin.database();

router.get('/', (req, res) => {
    db.ref('clients').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('index', { clients: data });
    })
})

router.post('/new-client', (req, res) => {
    const user = {
        name: req.body.name,
        password: req.body.lastName
    }

    db.ref('clients').push(user);
    res.redirect('/');
})

router.get('/delete-client/:id', (req,res)=>{
    db.ref('clients/'+req.params.id).remove();
    res.redirect('/');
})
module.exports = router;
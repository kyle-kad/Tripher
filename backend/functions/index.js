const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

// Cloud Firestore
admin.initializeApp();
let database = admin.firestore();
let db = database.collection('users');
let dbFeatured = database.collection('featured');

// MIDDLEWARE
app.use(cors());

// ROUTES
// Get all users
app.get('/api/users', (req, res) => {
    var allUsers = [];

    db.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                allUsers.push({
                    "docID": doc.id,
                    "userData": doc.data()
                })
            })

            // send back json data
            res.send(allUsers);
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(500);
        })
    
})

app.get('/api/featured', (req, res) => {
    var allUsers = [];

    dbFeatured.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                allUsers.push({
                    "docID": doc.id,
                    "userData": doc.data()
                })
            })

            // send back json data
            res.send(allUsers);
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(500);
        })
})

// Get :id user
app.get('/api/:id', (req, res)=> {
    var wanted = req.params.id; 
    var moc = [];

    db.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                if(doc.id == wanted){
                    moc.push({
                        "docId": doc.id,
                        "userData": doc.data()
                    })
                }
            })
            res.send(moc);
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(500);
        })
})

// Add user
app.post('/api/add', (req, res) => {
    var data = req.body;
    var docName = data.Name;

    db.doc(docName).set(data)
        .catch(err => {
            res.sendStatus(500);
        })
        
    res.sendStatus(200);
})

// Update user
app.post('/api/update/:id', (req, res) => {
    var update = req.params.id;
    var data = req.body;

    db.doc(update).set(data)
        .catch(err => {
            res.sendStatus(500);
        })

    res.sendStatus(200);
})

// Delete user
app.delete('/api/delete/:id', (req, res) => {
    var del = req.params.id;

    db.doc(del).delete()
        .catch(err => {
            res.sendStatus(500);
        })

    res.sendStatus(200);
})


// Default export
exports.app = functions.https.onRequest(app);
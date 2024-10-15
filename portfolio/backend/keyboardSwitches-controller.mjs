// Controllers for the Keyboard Switch Collection

import 'dotenv/config';
import express from 'express';
import * as keyboardSwitches from './keyboardSwitches-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post('/keyboardSwitches', (req, res) => { 
    keyboardSwitches.createSwitch(
        req.body.switchName, 
        req.body.brand, 
        req.body.switchType,
        req.body.actuationForce,
        req.body.factoryLubed,
        req.body.dateAdded
    )
    .then(keyboardSwitch => {
        console.log(`"${keyboardSwitch.switchName}" was added to the collection.`);
        res.status(201).json(keyboardSwitch);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to complete switch operation: not all required fields were filled. Please ensure all fields are filled and try again.' });
    });
});

// RETRIEVE controller ****************************************************
app.get('/keyboardSwitches', (req, res) => {
    keyboardSwitches.retrieveSwitches()
        .then(keyboardSwitches => { 
            if (keyboardSwitches && keyboardSwitches.length > 0) {
                console.log(`All keyboard switches were retrieved from the collection.`);
                res.json(keyboardSwitches);
            } else {
                res.status(404).json({ Error: 'No keyboard switches were found in the collection.' });
            }  
        
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'An error occurred.Unable to retrieve keyboard switches.' });
        });
});

// RETRIEVE by ID controller
app.get('/keyboardSwitches/:_id', (req, res) => {
    keyboardSwitches.retrieveSwitchByID(req.params._id)
    .then(keyboardSwitch => { 
        if (keyboardSwitch !== null) {
            console.log(`"${keyboardSwitch.switchName}" was retrieved, based on its ID.`);
            res.json(keyboardSwitch);
        } else {
            res.status(404).json({ Error: 'The requested keyboard switch could not be found. Please check the switch ID and try again.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Invalid ID. Please check your input and try again.' });
    });
});

// UPDATE controller ************************************
app.put('/keyboardSwitches/:_id', (req, res) => {
    keyboardSwitches.updateSwitch(
        req.params._id, 
        req.body.switchName, 
        req.body.brand, 
        req.body.switchType,
        req.body.actuationForce,
        req.body.factoryLubed,
        req.body.dateAdded
    )
    .then(keyboardSwitch => {
        console.log(`"${keyboardSwitch.switchName}" was updated.`);
        res.json(keyboardSwitch);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Invalid request. The provided keyboard switch details are incorrect or incomplete. Please check your input and try again.' });
    });
});

// DELETE Controller ******************************
app.delete('/keyboardSwitches/:_id', (req, res) => {
    keyboardSwitches.deleteSwitchById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} keyboard switch was deleted.`);
                res.status(200).send({ Success: 'Deleting keyboard switch operation was successful.' });
            } else {
                res.status(404).json({ Error: 'The requested keyboard switch could not be found. Please check the switch ID and try again.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An unexpected error occurred while processing your request. Please try again later.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

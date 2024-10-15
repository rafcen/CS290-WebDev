// Models for the Keyboard Switch Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Success: Database connected successfully.');
    }
});

// SCHEMA: Define the collection's schema.
const keyboardSwitchesSchema = mongoose.Schema({
    switchName: { type: String, required: true },
    brand: { type: String, required: true },
    switchType: { type: String, required: true },
    actuationForce: { type: Number, required: true },
    factoryLubed: { type: Boolean, default: false },
    dateAdded: { 
        type: String, 
        required: true, 
        default: () => {
            const currDate = new Date();
            const month = String(currDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
            const day = String(currDate.getDate()).padStart(2, '0');
            const year = currDate.getFullYear();
            console.log(`${month}-${day}-${year}`);
            return `${month}-${day}-${year}`;
        }
    }
});


// Compile the model from the schema 
// by defining the collection name "keyboardSwitches".
const KeyboardSwitch = mongoose.model('keyboardSwitches', keyboardSwitchesSchema);

// CREATE model *****************************************
const createSwitch = async (switchName, brand, switchType, actuationForce, factoryLubed, dateAdded) => { // Added dateAdded parameter
    const keyboardSwitch = new KeyboardSwitch({ 
        switchName: switchName, 
        brand: brand, 
        switchType: switchType,
        actuationForce: actuationForce,
        factoryLubed: factoryLubed,
        dateAdded: dateAdded // Use the provided dateAdded value
    });
    return keyboardSwitch.save();
};

// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveSwitches = async () => {
    const query = KeyboardSwitch.find();
    return query.exec();
};

// RETRIEVE by ID
const retrieveSwitchByID = async (_id) => {
    const query = KeyboardSwitch.findById(_id);
    return query.exec();
};

// DELETE model based on _id  *****************************************
const deleteSwitchById = async (_id) => {
    const result = await KeyboardSwitch.deleteOne({_id: _id});
    return result.deletedCount;
};

// UPDATE model ***************************************************** 
const updateSwitch = async (_id, switchName, brand, switchType, actuationForce, factoryLubed, dateAdded) => { 
    await KeyboardSwitch.replaceOne({_id: _id}, { 
        switchName: switchName, 
        brand: brand, 
        switchType: switchType, 
        actuationForce: actuationForce, 
        factoryLubed: factoryLubed,
        dateAdded: dateAdded
    }); 
    return { 
        _id: _id, 
        switchName: switchName, 
        brand: brand, 
        switchType: switchType, 
        actuationForce: actuationForce, 
        factoryLubed: factoryLubed, 
        dateAdded: dateAdded
    }; 
};

// EXPORT the variables for use in the controller file.
export { createSwitch, retrieveSwitches, retrieveSwitchByID, updateSwitch, deleteSwitchById};

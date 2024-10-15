import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddKeyboardSwitchPageForm = () => {
    const [switchName, setSwitchName] = useState('');
    const [brand, setBrand] = useState('');
    const [switchType, setSwitchType] = useState('');
    const [actuationForce, setActuationForce] = useState('');
    const [factoryLubed, setFactoryLubed] = useState(false);
    const [dateAdded, setDateAdded] = useState('');


    const addKeyboardSwitch = async () => {
    try {
        const newKeyboardSwitch = {
            switchName,
            brand,
            switchType,
            actuationForce,
            factoryLubed,
            dateAdded,
        };
        const response = await fetch('/keyboardSwitches', {
            method: 'POST',
            body: JSON.stringify(newKeyboardSwitch),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            // Optionally, you can reload the list of keyboard switches here
            loadKeyboardSwitches();

            // You can choose not to redirect or redirect to a different route
            // redirect('/keyboardSwitchesPage');
        } else {
            // Handle error cases
            alert(`Failed to add keyboard switch: ${response.status}`);
        }
    } catch (error) {
        console.error('Error adding keyboard switch:', error);
    }
};


    return (
        <>
            <article className='addSwitch'>
                <h2>Add a new Keyboard Switch</h2>
                <p>This is a log to input different types of keyboard switches that you may want to try</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend>Which switch do you want to try?</legend>
                        <label htmlFor="switchName">Name of Switch</label>
                        <input
                            type="text"
                            placeholder="Switch Name"
                            value={switchName}
                            onChange={(e) => setSwitchName(e.target.value)}
                            id="switchName"
                        />
                        <label htmlFor="brand">Brand</label>
                        <input
                            type="text"
                            value={brand}
                            placeholder="Brand of the switch"
                            onChange={(e) => setBrand(e.target.value)}
                            id="brand"
                        />
                        <label htmlFor="switchType">Switch Type</label>
                        <select
                            name="switchType"
                            id="switchType"
                            value={switchType}
                            onChange={(e) => setSwitchType(e.target.value)}
                        >
                            <option value="">--Select--</option>
                            <option value="Linear">Linear</option>
                            <option value="Tactile">Tactile</option>
                            <option value="Clicky">Clicky</option>
                            <option value="Hall Effect">Hall Effect</option>
                        </select>
                        <label htmlFor="actuationForce">Actuation Force (g)</label>
                        <input
                            type="number"
                            placeholder="Actuation Force"
                            value={actuationForce}
                            onChange={(e) => setActuationForce(e.target.value)}
                            id="actuationForce"
                        />
                        <label htmlFor="factoryLubed">Factory Lubed</label>
                        <input
                            type="checkbox"
                            className='checkbox'
                            id="factoryLubed"
                            name="factoryLubed"
                            checked={factoryLubed}
                            onChange={(e) => setFactoryLubed(e.target.checked)}
                        />
                        <label htmlFor="dateAdded">Date Added</label>
                        <input
                            type="date"
                            value={keyboardSwitch.dateAdded ? new Date(keyboardSwitch.dateAdded).toISOString().slice(0, 10) : ''}
                            onChange={(e) => setDateAdded(e.target.value)}
                            id="dateAdded"
                        />
                        <button onClick={addKeyboardSwitch}>Add Keyboard Switch to List</button>
                    </fieldset>
                </form>
            </article>
        </>
    );
};

export default AddKeyboardSwitchPageForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditKeyboardSwitchPageForm = ({ movieToEdit }) => {
    const [id, setId] = useState(movieToEdit.id); // Set the ID state with movieToEdit.id
    const [switchName, setSwitchName] = useState(movieToEdit.switchName);
    const [brand, setBrand] = useState(movieToEdit.brand);
    const [switchType, setSwitchType] = useState(movieToEdit.switchType);
    const [actuationForce, setActuationForce] = useState(movieToEdit.actuationForce);
    const [factoryLubed, setFactoryLubed] = useState(movieToEdit.factoryLubed);
    const [dateAdded, setDateAdded] = useState(movieToEdit.dateAdded);

    const redirect = useNavigate();

    const editKeyboardSwitch = async () => {
        const response = await fetch(`/keyboardSwitches/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                switchName,
                brand,
                switchType,
                actuationForce,
                factoryLubed,
                dateAdded
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert('Keyboard switch updated successfully!');
        } else {
            const errMessage = await response.json();
            alert(`Error: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    };

    return (
        <>
        <article>
            <h2>Edit a keyboard switch</h2>
            <p>Collection of keyboard switches you may want to check out </p>
            <form onSubmit={e => {
                e.preventDefault();
                editKeyboardSwitch();
                }}>
                <fieldset>
                    <legend>Which keyboard switch are you adding?</legend>
                    <label htmlFor="switchName">Name of Switch</label>
                    <input
                        type="text"
                        placeholder="Switch Name"
                        value={switchName}
                        onChange={e => setSwitchName(e.target.value)} 
                        id="switchName" />

                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        value={brand}
                        placeholder="Brand of the switch"
                        onChange={e => setBrand(e.target.value)} 
                        id="brand" />

                    <label htmlFor="switchType">Switch Type</label>
                    <select name = "switchType" id="switchType" value={switchType} onChange={e => setSwitchType(e.target.value)}>
                    <option>--Select--</option>
                    <option value="Linear">Linear</option>
                    <option value="Tactile">Tactile</option>
                    <option value="Clicky">Clicky</option>
                    </select>

                    <label htmlFor="actuationForce">Actuation Force (g)</label>
                    <input
                        type="number"
                        placeholder="Actuation Force"
                        value={actuationForce}
                        onChange={e => setActuationForce(e.target.value)}
                        id="actuationForce" />
                    <label htmlFor="factoryLubed">Factory Lubed</label>
                    <input 
                        type="checkbox"
                        id="factoryLubed"
                        name="factoryLubed"
                        value={factoryLubed}
                        onChange={e => setFactoryLubed(e.target.checked)}
                    />
                    <label htmlFor="dateAdded">Date Added</label>
                    <input
                        type="date"
                        value={dateAdded}
                        onChange={e => setDateAdded(e.target.value)}
                        id="dateAdded" />

                    <label htmlFor="submit">
                    <button
                        onClick={editKeyboardSwitch}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditKeyboardSwitchPageForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdAddCircleOutline } from "react-icons/io";


const AddKeyboardSwitchPageTable = () => {
    const [id, setId] = useState(''); 
    const [switchName, setSwitchName] = useState('');
    const [brand, setBrand] = useState('');
    const [switchType, setSwitchType] = useState('');
    const [actuationForce, setActuationForce] = useState('');
    const [factoryLubed, setFactoryLubed] = useState(false);
    const [dateAdded, setDateAdded] = useState('');

    const navigate = useNavigate();

    const addKeyboardSwitch = async () => {
        try {
            const newKeyboardSwitch = {
                id,
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
                // Reset input fields
                setId('');
                setSwitchName('');
                setBrand('');
                setSwitchType('');
                setActuationForce('');
                setFactoryLubed(false);
                setDateAdded('');

                // Navigate to the keyboard switches page
                navigate('/keyboardSwitchesPage');
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
                <h2>Add a keyboard switch</h2>
                <p>Collection of Keyboard switches you may want to check out.</p>

                <table id="keyboardSwitches">
                    <caption>Which keyboard switches are you adding?</caption>
                    <thead>
                        <tr>
                            <th>Switch Name</th>
                            <th>Brand</th>
                            <th>Switch Type</th>
                            <th>Actuation Force (g)</th>
                            <th>Factory Lubed</th>
                            <th>Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="switchName"></label>
                                <input
                                    type="text"
                                    placeholder="Switch Name"
                                    value={switchName}
                                    onChange={(e) => setSwitchName(e.target.value)}
                                    id="switchName"
                                />
                            </td>
                            <td>
                                <label htmlFor="brand"></label>
                                <input
                                    type="text"
                                    value={brand}
                                    placeholder="Brand of the switch"
                                    onChange={(e) => setBrand(e.target.value)}
                                    id="brand"
                                />
                            </td>
                            <td>
                                <label htmlFor="switchType"></label>
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
                            </td>
                            <td>
                                <label htmlFor="actuationForce"></label>
                                <input
                                    type="number"
                                    placeholder="Actuation Force"
                                    value={actuationForce}
                                    onChange={(e) => setActuationForce(e.target.value)}
                                    id="actuationForce"
                                />
                            </td>
                            <td className='factoryLubed'>
                                <label htmlFor="factoryLubed"></label>
                                <input
                                    type="checkbox"
                                    id="factoryLubed"
                                    checked={factoryLubed}
                                    onChange={(e) => setFactoryLubed(e.target.checked)}
                                />
                            </td>
                            <td>
                                <label htmlFor="dateAdded"></label>
                                <input
                                    type="date"
                                    value={dateAdded}
                                    onChange={(e) => setDateAdded(e.target.value)}
                                    id="dateAdded"
                                />
                            </td>
                            <td>
                                <button onClick={addKeyboardSwitch}><IoMdAddCircleOutline /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};




export default AddKeyboardSwitchPageTable;

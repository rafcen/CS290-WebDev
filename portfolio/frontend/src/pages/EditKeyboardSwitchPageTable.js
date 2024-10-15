import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const EditKeyboardSwitch = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [keyboardSwitch, setKeyboardSwitch] = useState({
        switchName: '',
        brand: '',
        switchType: '',
        actuationForce: '',
        factoryLubed: false,
        dateAdded: ''
    });

    const fetchKeyboardSwitch = useCallback(async () => {
        try {
            const response = await fetch(`/keyboardSwitches/${id}`);
            const data = await response.json();
            setKeyboardSwitch(data);
        } catch (error) {
            console.error('Failed to fetch keyboard switch', error);
        }
    }, [id]);

    useEffect(() => {
        if (location.state && location.state.keyboardSwitch) {
            setKeyboardSwitch(location.state.keyboardSwitch);
        } else {
            fetchKeyboardSwitch();
        }
    }, [location.state, fetchKeyboardSwitch]);

    const editKeyboardSwitch = async () => {
        const response = await fetch(`/keyboardSwitches/${id}`, {
            method: 'PUT',
            body: JSON.stringify(keyboardSwitch),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            navigate('/keyboardSwitchesPage');
        } else {
            console.error('Failed to update keyboard switch');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setKeyboardSwitch((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <>
            <article>
                <h2>Edit a Keyboard Switch</h2>
                <p>Collection of keyboard switches you may want to check out.</p>
                <table id="keyboardSwitches">
                    <caption>Edit keyboard switch details:</caption>
                    <thead>
                        <tr>
                            <th>Switch Name</th>
                            <th>Brand</th>
                            <th>Switch Type</th>
                            <th>Actuation Force</th>
                            <th>Factory Lubed</th>
                            <th>Date Added</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    name="switchName"
                                    value={keyboardSwitch.switchName}
                                    onChange={handleChange}
                                    placeholder="Name of the switch"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="brand"
                                    value={keyboardSwitch.brand}
                                    onChange={handleChange}
                                    placeholder="Brand of the switch"
                                />
                            </td>
                            <td>
                                <select
                                    name="switchType"
                                    value={keyboardSwitch.switchType}
                                    onChange={handleChange}
                                >
                                    <option value="">--Select--</option>
                                    <option value="Linear">Linear</option>
                                    <option value="Tactile">Tactile</option>
                                    <option value="Clicky">Clicky</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="actuationForce"
                                    value={keyboardSwitch.actuationForce}
                                    onChange={handleChange}
                                    placeholder="Actuation Force (g)"
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    name="factoryLubed"
                                    checked={keyboardSwitch.factoryLubed}
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="date"
                                    name="dateAdded"
                                    value={keyboardSwitch.dateAdded}
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <button onClick={editKeyboardSwitch}>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default EditKeyboardSwitch;

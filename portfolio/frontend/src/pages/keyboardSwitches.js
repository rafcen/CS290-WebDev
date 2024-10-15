import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import KeyboardSwitch from '../components/KeyboardSwitch';

const KeyboardSwitches = () => {
    const [keyboardSwitches, setKeyboardSwitches] = useState([]);

    useEffect(() => {
        fetchKeyboardSwitches();
    }, []);

    const fetchKeyboardSwitches = async () => {
        try {
            const response = await fetch('/keyboardSwitches');
            if (!response.ok) {
                throw new Error('Server error');
            }
            const data = await response.json();
            setKeyboardSwitches(data);
        } catch (error) {
            console.error(error);
        }
    };

    const addKeyboardSwitch = async () => {
        try {
            const response = await fetch('/keyboardSwitches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(/* Your new keyboard switch data */),
            });
            if (!response.ok) {
                throw new Error('Failed to add keyboard switch');
            }
            // Assuming the server responds with the newly added keyboard switch data
            const newKeyboardSwitch = await response.json();
            // Update the state with the new keyboard switch
            setKeyboardSwitches(prevSwitches => [...prevSwitches, newKeyboardSwitch]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h2>Keyboard Switches</h2>
            <p>Collection of keyboard switches you may want to check out.</p>
            <Link to="/addKeyboardSwitch">Add a new keyboard switch</Link>
            <table id="keyboardSwitches">
                <caption>Keyboard switch details:</caption>
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
                    {keyboardSwitches.map(keyboardSwitch => (
                        <KeyboardSwitch key={keyboardSwitch.id} keyboardSwitch={keyboardSwitch} fetchKeyboardSwitches={fetchKeyboardSwitches} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default KeyboardSwitches;
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddKeyboardSwitchPageTable from './AddKeyboardSwitchPageTable';
import KeyboardSwitchList from '../components/KeyboardSwitchList';
import EditKeyboardSwitchPageTable from './EditKeyboardSwitchPageTable';

const KeyboardSwitchesPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [keyboardSwitches, setKeyboardSwitches] = useState([]);
    const [keyboardSwitchToEdit, setKeyboardSwitchToEdit] = useState(null);

    const loadKeyboardSwitches = useCallback(async () => {
        try {
            const response = await fetch('/keyboardSwitches');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setKeyboardSwitches(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Failed to load keyboard switches', error);
            setKeyboardSwitches([]); // Ensure it's an empty array on failure
        }
    }, []);

    useEffect(() => {
        loadKeyboardSwitches();
    }, [loadKeyboardSwitches, location]);

    const handleEdit = (keyboardSwitch) => {
        setKeyboardSwitchToEdit(keyboardSwitch);
        navigate(`/keyboardSwitchesPage/edit/${keyboardSwitch._id}`);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/keyboardSwitches/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setKeyboardSwitches(keyboardSwitches.filter(keyswitch => String(keyswitch._id) !== String(id)));
            } else {
                console.error('Failed to delete keyboard switch');
            }
        } catch (error) {
            console.error('Failed to delete keyboard switch', error);
        }
    };

    const updateKeyboardSwitch = (updatedSwitch) => {
        setKeyboardSwitches(
            keyboardSwitches.map((ks) => (ks._id === updatedSwitch._id ? updatedSwitch : ks))
        );
    };

    // Debug: Log the state to ensure keyboardSwitches is being set correctly
    console.log('KeyboardSwitchesPage state:', { keyboardSwitches, keyboardSwitchToEdit });

    return (
        <>
        <div className='keyboardSwitchPage'>
                <h2>List of Keyboard Switches</h2>
                <p>Collection of keyboard switches you may want to check out.</p>
                <AddKeyboardSwitchPageTable loadKeyboardSwitches={loadKeyboardSwitches} />
                {keyboardSwitchToEdit ? (
                    <EditKeyboardSwitchPageTable
                        keyboardSwitchToEdit={keyboardSwitchToEdit}
                        updateKeyboardSwitch={updateKeyboardSwitch}
                    />
                ) : (
                    <KeyboardSwitchList
                        keyboardSwitches={keyboardSwitches}
                        onEditKeyboardSwitch={handleEdit}
                        onDeleteKeyboardSwitch={handleDelete}
                    />
                )}
        </div>
        </>
    );
};

export default KeyboardSwitchesPage;

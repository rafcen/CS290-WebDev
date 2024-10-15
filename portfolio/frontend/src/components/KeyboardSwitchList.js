import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDelete, MdOutlineEdit  } from "react-icons/md";

const KeyboardSwitchList = ({ keyboardSwitches = [], onEditKeyboardSwitch, onDeleteKeyboardSwitch }) => {
    const navigate = useNavigate();

    // Debug: Log the props to ensure keyboardSwitches is an array
    console.log('KeyboardSwitchList props:', { keyboardSwitches, onEditKeyboardSwitch, onDeleteKeyboardSwitch });

    return (
        <table className='switchTable'>
            <thead>
                <tr>
                    <th>Edit</th>
                    <th>Switch Name</th>
                    <th>Brand</th>
                    <th>Switch Type</th>
                    <th>Actuation Force (g)</th>
                    <th>Factory Lubed</th>
                    <th>Date Added</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {keyboardSwitches.map((keyboardSwitch) => (
                    <tr key={keyboardSwitch._id}>
                        <td className='editbutton'>
                            <button onClick={() => {
                                onEditKeyboardSwitch(keyboardSwitch);
                                navigate(`/keyboardSwitchesPage/edit/${keyboardSwitch._id}`);
                            }}><MdOutlineEdit /></button>
                            </td>
                        <td>{keyboardSwitch.switchName}</td>
                        <td>{keyboardSwitch.brand}</td>
                        <td>{keyboardSwitch.switchType}</td>
                        <td>{keyboardSwitch.actuationForce}</td>
                        <td>{keyboardSwitch.factoryLubed ? 'Yes' : 'No'}</td>
                        <td>{keyboardSwitch.dateAdded}</td>
                        <td className='deleteButton'>
                            <button onClick={() => onDeleteKeyboardSwitch(keyboardSwitch._id)}>
                                <MdOutlineDelete />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default KeyboardSwitchList;

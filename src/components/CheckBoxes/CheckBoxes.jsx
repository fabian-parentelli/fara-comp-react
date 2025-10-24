import './checkBoxes.css';
import { useState } from 'react';

const CheckBoxes = ({ labels = [], selecteds = [], multiSelect = false, direction = 'row', setType, accentColor = '#1a73e8' }) => {

    const [selected, setSelected] = useState(selecteds);

    const handleCheckboxChange = (label) => {
        let newSelected;
        if (!multiSelect) newSelected = [label];
        else {
            newSelected = selected.some(item => item._id === label._id)
                ? selected.filter(sel => sel._id !== label._id)
                : [...selected, label];
        }
        setSelected(newSelected);
        setType(!multiSelect ? newSelected[0] : newSelected);
    };

    return (
        <div className='checkBoxes' style={{ flexDirection: direction }}>
            {labels && labels.map((label) => (
                <div className='checkBoxesDiv' key={label._id}>
                    <input
                        type="checkbox" checked={selected.some(item => item._id === label._id)}
                        onChange={() => handleCheckboxChange(label)}
                        style={{ accentColor }}
                    />
                    <p>{label.name}</p>
                </div>
            ))}
        </div>
    );
};

export { CheckBoxes };

// selecteds Siempre tiene que ser un array. No importa si es multiSelect o no.
// Labels es una array de objetos con 2 propiedades name y _id.
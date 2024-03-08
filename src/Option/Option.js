import './style.css'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'; // Import useState hook

const Option = ({ onYes, onNo }) => {
    const handleYes = () => {
        onYes('Yes'); // Call the onYes function with the argument 'Yes'
    };

    const handleNo = () => {
        onNo('No'); // Call the onNo function with the argument 'No'
    };

    return (
        <div className='OptionDiv'>
            <button style={{ background: 'green' }} onClick={handleYes}>
                <CheckIcon style={{ color: 'white' }} />
            </button>
            <button style={{ background: 'red' }} onClick={handleNo}>
                <CloseIcon style={{ color: 'white' }} />
            </button>
        </div>
    )
}

export default Option;

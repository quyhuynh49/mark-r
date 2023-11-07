import React from 'react'

function Dropdown() {
    return (
        <div>
            <label htmlFor="mySelect">Choose one:</label>
            <select className='w-full' id='mySelect' multiple multiselect-search="true">
                <option value="">value 1</option>
                <option value="">value 2</option>
                <option value="">value 3</option>
                <option value="">value 4</option>
                <option value="">value 5</option>
                <option value="">value 6</option>
            </select>
        </div>
    )
}

export default Dropdown

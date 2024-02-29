import React from 'react'

function Liste() {
    const numbers = [1, 2, 3, 4, 5]
    return (
        <ul>
            {numbers.map((number, index) => (
                    <li key={index}>{number} * 10 = {number * 10}</li>
            ))}
        </ul>
    )
}

export default Liste
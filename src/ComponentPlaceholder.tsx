import React from 'react'


export const ComponentPlaceholder = ({ placeholder = "" }) => {
    return (
        <div style={{ color: "black" }}>
            {placeholder}
        </div>
    )
}

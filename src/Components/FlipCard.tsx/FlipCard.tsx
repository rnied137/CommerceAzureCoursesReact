import { useState } from 'react';

import './FlipCard.css'

interface IProps {
    link: string,
    BackComponent: any,
}

export const FlipCard = (
    {
        link,
        BackComponent
    }:IProps
) => {

    const [flipped, setFlipped] = useState(false)

    const handleClick = () => {
        setFlipped(!flipped);

        console.warn("dupa")
    }

    const handleBack = () => {
        console.warn("sdasds")
        return handleClick();
    }

    return (
        <div className="perspective" >
            <div
                className={'flip-card-inner' + (flipped ? ' flipped' : '')}
                onClick={() => handleClick()}>
            <div className={'flip-card-front' + (!flipped ? ' full-height' : ' zero-height')}>
                    <a href="#">{link}</a>
                    {flipped.toString()}
                </div>
             <div className={'flip-card-back' + (flipped ? ' full-height' : ' zero-height')}>
                    {BackComponent}
                </div>
            </div>
        </div>
    )
}

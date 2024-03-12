import React from 'react'

const CardComponent = ({ beer }) => {

    return (
        <div className='card'>
            <div className='img-div'>
                <img src={beer.image_url} alt="beer" />
            </div>
            <div className='name-tagline'>
                <p><b>{beer.name}</b></p>
                <p id='tagline'><span><b>Tagline: </b></span>{beer.tagline}</p>
            </div>
            <div className='other-details'>
                <span><b>Alcohol:</b> {beer.abv}</span>
                <span><b>pH:</b> {beer.ph}</span>
            </div>
        </div>
    )
}

export default CardComponent
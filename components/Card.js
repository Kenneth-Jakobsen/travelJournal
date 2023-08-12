import React from 'react'

export default function Card(props){
    return (
        <div className='card'>
            <div className='card--image'>
                <img src={props.item.imageUrl}/>
            </div>
            <div className='card--text'>
                <div className='card--location--div'>
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    <p className='card--location'>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>View on google maps</a>
                </div>
                <div className='card--info'>
                    <h1 className="card--title">{props.item.title}</h1>
                    <h2 className="card--dates">{props.item.startDate} - {props.item.endDate}</h2>
                    <p className="card-description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}
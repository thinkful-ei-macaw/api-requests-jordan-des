import React from 'react';


const BookCard = (props) => {
    return (
       <div className="cards-container">
           <img src={props.image} alt=""/>
           <div className="desc">
               <h2>{props.title}</h2>
               <h3>Author:{props.author}</h3>
               <p>Published Date: {props.publishedDate === '0000' ? 'Not avail' : props.published(0,4) }</p>
           </div>
       </div>
    )
}

export default BookCard;
import React from 'react';
import uuid from 'react-uuid';

const ContactItems = (props) => {
    console.log('props',props.id)
    return ( 
        <article>
            <div className='imges'>
                <label htmlFor="">Picture</label>
                <img src={props.contactInformation.pictureUrl} alt=""/>
            </div>
            <div>
                <label htmlFor="">Name</label>
                <h3>{props.contactInformation.name}</h3>
            </div>
            <div>
                <label htmlFor="">Popularity</label>
                <h3>{props.contactInformation.popularity}</h3>
                <button onClick={() => props.deleteItem(props.contactInformation.popularity)}>Delete</button>
            </div>
            
        </article>
     );
}
 
export default ContactItems;
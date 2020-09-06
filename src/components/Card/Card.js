import React from 'react';
import Icons from '../Icon'

const Card = (props) => {

    return ( 
<div className="card">
        <div className="gif">
            <img src={props.image}/>
        </div>
<h4 className="title">{props.title}</h4>
<p className="description">{props.description}</p>
<div className="links">
        <Icons />
    </div>
</div>
     );
}
 
export default Card;
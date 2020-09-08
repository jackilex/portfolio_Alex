import React from 'react';
import Icons from '../Icon'

const Card = (props) => {


    return ( 
<div className="card">
        <div className="gif">
            <img src={props.image}/>
        </div>
<h3 className="title">{props.title}</h3>
<p className="description">{props.description}</p>
{props.topics && <h4 className="topics">Key-topics:{"  "}{props.topics}</h4>}
<div className="links">
        <Icons github={props.github} website={props.website}/>
    </div>
</div>
     );
}
 
export default Card;
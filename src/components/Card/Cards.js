import React from 'react';
import Card from './Card'
import Projects from "../../data/card.json"

const Cards = () => {
    return ( 
    <div className="cards">
    {Projects.map( project =>(
    <Card 
    key={project.id}
    title={project.title}
    image={project.gif}
    description={project.description}
     />
    ))}
    </div>
     );
}
 
export default Cards;
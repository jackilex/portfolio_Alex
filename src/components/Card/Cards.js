import React from 'react';
import Card from './Card'
import Projects from "../../data/card.json"
import ParticlesComp from "../Particles";


const Cards = () => {

    return ( 
        <React.Fragment>
    <div className="cards">
    {Projects.map( project =>(
    <Card 
    key={project.id}
    title={project.title}
    image={project.gif}
    description={project.description}
    github={project.github}
    website={project.website}
    topics={project.topic}
     />
    ))}
    </div>
    <ParticlesComp bg="#FFFFFF" color="#171a37"/>
    </React.Fragment>
     );
}
 
export default Cards;
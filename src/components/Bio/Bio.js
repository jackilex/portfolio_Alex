import React from 'react';


const Bio = () => {
    const pPhoto=require("../../assets/photo.jpg");
    const cloud1=require("../../assets/cloud-1.png");
    const cloud2=require("../../assets/cloud-2.png");
    const sun=require("../../assets/sun.png");
    const mount=require("../../assets/mountain.png");


    return (
      <div className="bio-head">
        <main id="main-container">
            <div className="bio-Info">
            <div  className="aside-container">
              <div className="photo">
                {/* <h2>Top</h2> */}
            <img src={pPhoto} class="" id="photo"  alt="..." />
              </div>
              <div className="paragraph">
              <p id="aboutMe">My name is Alex Saint Victor, iam a Juniror Developer<br /> with a background
              in the US Military and Construction Management. I have a passion and enjoy for coding!!
                </p>
              </div>
          </div>

          <div className="side-container">
            <img src={mount} class="mount art"  alt="..." />
            <img src={sun} class="sun art"  alt="..." />
            <img src={cloud1} class="cloud-1 art"  alt="..." />
            <img src={cloud2} class="cloud-2 art"  alt="..." />
            </div>
          </div>
        </main>
      </div> 
     );
}
 
export default Bio;
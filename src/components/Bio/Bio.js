import React from 'react';


const Bio = () => {
    // const pPhoto=require("../../assets/photo.jpg");
    // {process.env.PUBLIC_URL + '/myphoto.jpg'}
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
            <img src="https://i.ibb.co/7gGZZHW/myphoto.jpg" class="" id="photo"  alt="..." />
              </div>
              <div className="paragraph">
              <p id="aboutMe">My name is <span id="nameBio">Alex Saint Victor{" "}</span>,<br /> i am a certified <span id="cert">Full-stack Web Developer{" "}</span> with a background
              in the US Military and Construction Management. I have a passion for creating, <span id="programming">programming and designing Web applications.{" "}</span>
                </p>
              </div>
          </div>

          <div className="side-container">
            <img src="https://i.ibb.co/HXkjYQS/mountain.png" class="mount art"  alt="..." />
            <img src="https://i.ibb.co/jG09jT5/sun.png" class="sun art"  alt="..." />
            <img src="https://i.ibb.co/nL7z4BP/cloud-1.png" class="cloud-1 art"  alt="..." />
            <img src="https://i.ibb.co/zFbQ6pz/cloud-2.png" class="cloud-2 art"  alt="..." />
            </div>
          </div>
        </main>
      </div> 
     );
}
 
export default Bio;
import React from 'react';
import ParticlesComp from "../Particles";


const Bio = () => {
    // const pPhoto=require("../../assets/photo.jpg");
    // {process.env.PUBLIC_URL + '/myphoto.jpg'}
    const cloud1=require("../../assets/cloud-1.png");
    const cloud2=require("../../assets/cloud-2.png");
    const sun=require("../../assets/sun.png");
    const mount=require("../../assets/mountain.png");


    return (
      <React.Fragment>
      <div className="bio-head">
        <main id="main-container">
            <div className="bio-Info">
            <div  className="aside-container">
              <div className="photo">
                {/* <h2>Top</h2> */}
            <img src="https://drive.google.com/uc?export=view&id=169C8stG0-EFkdmX_NqLup6O5n1h_SDMG" class="" id="photo"  alt="profile" />
              </div>
              <div className="paragraph">
                  <p id="aboutMe"> <span id="nameBio">
                  My name is Alex Saint Victor{" "},<br /> I am a Full Stack Software Engineer and a US Marine Corps Veteran with a background in
                Construction Management. I have knowledge and skills in both Front End and Back End
               web development. I am Passionate about creating web applications to solve business
              challenges and streamline redundant processes. <span id="programming">programming and designing web applications.{" "}</span>
              </span>
              </p>
                {/* <div className="paragraph2">
                    <p>
                      <span id="nameBio"><span style={{ textDecoration: "underline" }}> SKILLS & TECHNOLOGIES:
                      </span> HTML5, CSS, JavaScript ES6+, React.js, Node.js, RESTful APIs, MySQL, MongoDB, Unit Testing, Integration testing, TDD Test</span>
                    </p>
                </div> */}
              </div>
          </div>

          <div className="side-container">
            {/* <img src="https://i.ibb.co/HXkjYQS/mountain.png" class="mount art"  alt="..." /> */}
            {/* <img src="https://i.ibb.co/jG09jT5/sun.png" class="sun art"  alt="..." /> */}
            {/* <img src="https://i.ibb.co/nL7z4BP/cloud-1.png" class="cloud-1 art"  alt="..." /> */}
            {/* <img src="https://i.ibb.co/zFbQ6pz/cloud-2.png" class="cloud-2 art"  alt="..." /> */}
            </div>
          </div>
        </main>
      </div> 
      <ParticlesComp color="#FFA500"/>
      </React.Fragment>

     );
}
 
export default Bio;
import React, { useState } from 'react';
import aboutSectionsArray from '../assets/aboutSectionsArray';

const About = () => {
  const [scrollValue, setScrollValue] = useState(-1);
  /*const [headingText, setHeadingText] = useState("What do we do?");
  const [animation, setAnimation] = useState("typing 3.5s steps(30, end), flash-cursor .8s step-end infinite;");
  const [headingStyle, setHeadingStyle] = useState({"animation": })*/
  let prevScroll = 0;

  const sectionScroll = () => {
      let currentScroll = document.getElementById("about-scroller").scrollTop / window.innerHeight;
      console.log(currentScroll);
      if(currentScroll === prevScroll)
        return;
      switch(currentScroll){
        case 0: setScrollValue(-1); break;
        case 0.95: setScrollValue(0); break;
        case 1.9: setScrollValue(1); break;
      }
      prevScroll = currentScroll;
  };

  return (
    <div className="page-div">
      <div className='headings-container'>
        <h1 className="heading" style={{"marginLeft": (scrollValue * -60 - 60) + "vw", "opacity": scrollValue === -1 ? '1' : '0'}}>How does it work?</h1>
        <h1 className="heading" style={{"marginLeft": (scrollValue * -60) + "vw", "opacity": scrollValue === 0 ? '1' : '0'}}>Why is it important?</h1>
        <h1 className="heading" style={{"marginLeft": (scrollValue * -60 + 60) + "vw", "opacity": scrollValue === 1 ? '1' : '0'}}>Where can you find us?</h1>
      </div>
      <div className="about-sections" id="about-scroller" onScroll={() => sectionScroll()}>
        <section className="description-section" /*style={{"marginBottom": scrollValue === -1 ? '0' : '3vh', "opacity": scrollValue === -1 ? '1' : '0'}}*/>{aboutSectionsArray[0]}</section>
        <section className="flex-break"></section>
        <section className="purpose-section" /*style={{"marginTop": scrollValue === -1 ? '0' : '3vh', "marginBottom": scrollValue === 1 ? '0' : '3vh', "opacity": scrollValue === 0 ? '1' : '0'}}*/>{aboutSectionsArray[1]}</section>
        <section className="flex-break"></section>
        <section className="contact-section" /*style={{"marginTop": scrollValue === 1 ? '0' : '3vh', "opacity": scrollValue === 1 ? '1' : '0'}}*/>
        <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Github</th>
            </tr>
            <tr>
              <td>Joshua Hevelow</td>
              <td>joshheve25@ncs.charter.k12.de.us</td>
              <td><a href='https://github.com/joshuahevelow'>joshuahevelow</a></td>
            </tr>
            <tr>
              <td>Pranit Gunjal</td>
              <td>prangunj23@ncs.charter.k12.de.us</td>
              <td><a href="https://github.com/prangunj23">prangunj23</a></td>
            </tr>
            <tr>
              <td>Olutoba Ojo</td>
              <td>olutojo23@ncs.charter.k12.de.us</td>
              <td><a href='https://github.com/olutobaojo'>olutobaojo</a></td>
            </tr>
          </table>
          <section className='flex-break'></section>
          <span className="github-message">This project can be found at <a href='https://github.com/prangunj23/CTRL-SHIFT-2023'>github.com/prangunj23/CTRL-SHIFT-2023</a></span>
        </section>
      </div>
    </div>
  );
}
export default About;
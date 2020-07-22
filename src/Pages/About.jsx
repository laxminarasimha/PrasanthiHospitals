import React from 'react';
import web from "../../src/Assets/img/heart2.png"
import CommonHeader from "../Components/CommonHeader";

const About = () =>{

return(
<React.Fragment>
<CommonHeader name="We’re committed to our vision of building a healthier nation"  subText="Looking after the local community since the 1980s" img={web} visit="/contact" btnName="Contact us"  ></CommonHeader>
</React.Fragment>
);
};

export default About;
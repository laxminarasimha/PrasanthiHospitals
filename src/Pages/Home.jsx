import React from 'react';
import web from "../../src/Assets/img/doctor1.png"
import CommonHeader from '../Components/CommonHeader'


const Home = () =>{
return(
<>
<CommonHeader   name="Prasanthi Hospitals" 
                mainText="Your safety is our priority"  
                subText="See the additional safety measures in place for your visit" 
                img={web} visit="/services" 
                btnName="Find Out More"  >
</CommonHeader>
</>
);
};

export default Home;
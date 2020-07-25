import React from "react";
import DoctorCard from "../Components/DoctorCard";
import DoctorData from "../Components/DoctorData";

const Doctors = () =>{
    return (
        <React.Fragment>
            <div className="my-5">
                <h1 className="text-center">Meet Our Doctors</h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
            <div className="col-10 mx-auto">                    
                    <div className="row gy-4">
                        {
                            DoctorData.map((val, ind) =>
                            {
                                return (
                                    <DoctorCard key={ind}
                                      imgsrc={val.imgsrc}
                                      title={val.title}
                                      degree={val.degree}
                                      speciality={val.speciality}
                                      link={val.link}
                                    />
                                );

                            })
                        }
                        
                    </div>
            </div>
            </div>
            </div>
        </React.Fragment>
    );
};

export default Doctors;
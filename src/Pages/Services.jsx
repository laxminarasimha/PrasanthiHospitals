import React from "react";
import ServiceCard from "../Components/ServiceCard";
import Sdata from "../Components/Sdata";

const Services = () =>{
    return (
        <React.Fragment>
            <div className="my-5">
                        <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
            <div className="col-10 mx-auto">                    
                    <div className="row gy-4">
                        {
                            Sdata.map((val, ind) =>
                            {
                                return (
                                    <ServiceCard key={ind}
                                      imgsrc={val.imgsrc}
                                      title={val.title}
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

export default Services;
import React, { useState } from 'react';
import ServiceCards from './ServiceCards';
import csd from "../../assets/csd.png";

function Development() {
  const [services, setServices] = useState([
    {
      title: "Custom Software Design",
      description: "We give custom solutions for the requirement of your software as per your business",
      longDescription: "",
      logo: csd
    },
    {
      title: "Custom App Development",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "",
      logo: csd
    },
    {
      title: "Custom Web Development",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "",
      logo: csd
    },
    {
      title: "API Development",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "",
      logo: csd
    },
    {
      title: "Enterprise Software Development",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "",
      logo: csd
    },
  ]);

  return (
    <ServiceCards services={services} />
  );
}

export default Development;

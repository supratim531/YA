import React, { useState } from 'react';
import ServiceCards from './ServiceCards';
import im from "../../assets/im.png";

function Marketing() {
  const [services, setServices] = useState([
    {
      title: "Instagram Marketing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: im
    },
    {
      title: "Facebook Marketing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: im
    },
    {
      title: "LinkedIn Marketing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: im
    },
    {
      title: "Marketing & Content Strategy Consultancy",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: im
    }
  ]);

  return (
    <ServiceCards services={services} />
  );
}

export default Marketing;

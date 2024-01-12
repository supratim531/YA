import React, { useState } from 'react';
import ServiceCards from './ServiceCards';

function Marketing() {
  const [services, setServices] = useState([
    {
      title: "Instagram Marketing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    },
    {
      title: "Facebook Marketing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    },
    {
      title: "LinkedIn Marketing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    },
    {
      title: "Marketing & Content Strategy Consultancy",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    }
  ]);

  return (
    <ServiceCards services={services} />
  );
}

export default Marketing;

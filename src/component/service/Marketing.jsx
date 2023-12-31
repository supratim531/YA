import React, { useState } from 'react';
import ServiceCards from './ServiceCards';

function Marketing() {
  const [services, setServices] = useState([
    {
      title: "Instagram Marketing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Facebook Marketing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "LinkedIn Marketing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Marketing & Content Strategy Consultancy",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    }
  ]);

  return (
    <ServiceCards services={services} />
  );
}

export default Marketing;

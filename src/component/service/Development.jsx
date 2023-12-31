import React, { useState } from 'react';
import ServiceCards from './ServiceCards';

function Development() {
  const [services, setServices] = useState([
    {
      title: "Custom Software Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Custom App Development",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Custom Web Development",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "API Development",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Enterprise Software Development",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
  ]);

  return (
    <ServiceCards services={services} />
  );
}

export default Development;

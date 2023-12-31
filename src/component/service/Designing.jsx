import React, { useState } from 'react';
import ServiceCards from './ServiceCards';

function Designing() {
  const [services, setServices] = useState([
    {
      title: "Social Media Poster Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Event Poster Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Front Cover Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Video & Image Editing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Writeups & Thumbnail Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    },
    {
      title: "Business Card Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore"
    }
  ]);

  return (
    <ServiceCards services={services} />
  );
}

export default Designing;

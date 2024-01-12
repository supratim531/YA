import React, { useState } from 'react';
import ServiceCards from './ServiceCards';

function Designing() {
  const [services, setServices] = useState([
    {
      title: "Social Media Poster Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    },
    {
      title: "Event Poster Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    },
    {
      title: "Front Cover Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    },
    {
      title: "Video & Image Editing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    },
    {
      title: "Writeups & Thumbnail Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    },
    {
      title: "Business Card Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: ""
    }
  ]);

  return (
    <ServiceCards services={services} />
  );
}

export default Designing;

import React, { useState } from 'react';
import ServiceCards from './ServiceCards';
import smpd from "../../assets/smpd.png";

function Designing() {
  const [services, setServices] = useState([
    {
      title: "Social Media Poster Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: smpd
    },
    {
      title: "Event Poster Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: smpd
    },
    {
      title: "Front Cover Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: smpd
    },
    {
      title: "Video & Image Editing",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: smpd
    },
    {
      title: "Writeups & Thumbnail Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: smpd
    },
    {
      title: "Business Card Design",
      description: "doloribus neque excepturi perferendis aspernatur, commodi inventore",
      longDescription: "This is long description",
      logo: smpd
    }
  ]);

  return (
    <ServiceCards services={services} />
  );
}

export default Designing;

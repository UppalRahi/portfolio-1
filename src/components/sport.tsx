'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Entrepreneurship = () => {
  const entrepreneurshipPhotos: PhotoItem[] = [
    {
      src: '/traway-team.jpg',
      alt: 'Traway team working on student travel platform',
      caption: 'Building Traway - our student travel service that generated ₹1.7M revenue',
    },
    {
      src: '/loud-kitchens.jpg',
      alt: 'Food donation initiative',
      caption: 'The Loud Kitchens - serving 500+ people through our food donation initiative',
    },
    {
      src: '/hackathon-win.jpg',
      alt: 'Winning internal hackathon',
      caption: 'Celebrating the internal hackathon win with blog automation MVP at GrowthJockey',
    },
    {
      src: '/data-dashboard.jpg',
      alt: 'Working on business intelligence dashboard',
      caption: 'Analyzing 4,500+ YC startups for business synergy insights at Varidus',
    }
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Entrepreneurship Journey
        </h2>
        <p className="mt-4 text-muted-foreground">
          From co-founding startups during college to building data-driven solutions at hackathons, 
          I've always been passionate about combining technical skills with business insight to create impact. 
          Here are some highlights from my entrepreneurial journey.
        </p>
      </div>
      <Photos photos={entrepreneurshipPhotos} />
    </div>
  );
};

export default Entrepreneurship;
"use client";

import { InfiniteMovingCards } from "./UI/infinite-moving-cards";
import Link from "next/link";

const DUMMY_PARTNERS = [
  {
    name: "Google",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    websiteUrl: "https://www.google.com",
  },
  {
    name: "Microsoft",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    websiteUrl: "https://www.microsoft.com",
  },
  {
    name: "Apple",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    websiteUrl: "https://www.apple.com",
  },
  {
    name: "Amazon",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    websiteUrl: "https://www.amazon.com",
  },
  {
    name: "Meta",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    websiteUrl: "https://www.facebook.com",
  },
  {
    name: "Netflix",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    websiteUrl: "https://www.netflix.com",
  },
  {
    name: "Adobe",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg",
    websiteUrl: "https://www.adobe.com",
  },
  {
    name: "Spotify",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    websiteUrl: "https://www.spotify.com",
  },
  {
    name: "Airbnb",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    websiteUrl: "https://www.airbnb.com",
  },
  {
    name: "Uber",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
    websiteUrl: "https://www.uber.com",
  },
  {
    name: "Tesla",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    websiteUrl: "https://www.tesla.com",
  },
  {
    name: "Slack",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    websiteUrl: "https://www.slack.com",
  },
];

const PartnersSection = () => {
  const partnerItems = DUMMY_PARTNERS.map((partner) => ({
    quote: (
      <Link 
        href={partner.websiteUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center h-full"
      >
        <img
          src={partner.logoUrl}
          alt={`${partner.name} Logo`}
          className="h-12 w-auto object-contain mb-2"
          loading="lazy"
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
          {partner.name}
        </span>
      </Link>
    ),
    name: partner.name,
    title: "Partner",
  }));

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Our Partners
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Trusted by leading organizations worldwide
        </p>
      </div>
      
      <div className="relative">
        <InfiniteMovingCards 
          items={partnerItems} 
          direction="right"
          speed="normal" 
          pauseOnHover 
          className="mx-auto"
        />
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-100 dark:from-gray-800 to-transparent z-30"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-100 dark:from-gray-800 to-transparent z-30"></div>
      </div>
    </section>
  );
};

export default PartnersSection;
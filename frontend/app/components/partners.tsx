"use client";

import { InfiniteMovingCards } from "./UI/infinite-moving-cards";
import Link from "next/link";
import { BackgroundGradient } from "./UI/background-gradient";

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
      <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900 h-full">
        <Link 
          href={partner.websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center h-full p-4"
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
      </BackgroundGradient>
    ),
    name: partner.name,
    title: "Partner",
  }));

  return (
    <section className="py-16 bg-black/70">
      {/* Title Section - Matching Sec2 style */}
      <div className="flex items-center justify-center mb-4">
        <div className="h-[3px] w-10 bg-orange-500 mr-3"></div>
        <span className="text-orange-500 font-mono uppercase tracking-widest text-sm text-center">
          Trusted Collaborations
        </span>
        <div className="h-[3px] w-10 bg-orange-500 ml-3"></div>
      </div>

      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
        Our Partners
      </h2>
      
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
        We're proud to collaborate with industry leaders and innovators who share our vision for advancing AI technology.
      </p>
      
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

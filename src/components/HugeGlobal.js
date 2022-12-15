import React from 'react';
import Globe from '../assets/ilustration/huge-global.png';
import Netflix from '../assets/logos/netflix.png';
import Reddit from '../assets/logos/reddit.png';
import Amazon from '../assets/logos/amazon.png';
import Discord from '../assets/logos/discord.png';
import Sportify from '../assets/logos/sportify.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const sponsor = [
  {
    id: 1,
    logos: Netflix,
    alt: 'Netflix',
  },
  {
    id: 2,
    logos: Reddit,
    alt: 'Reddit',
  },
  {
    id: 3,
    logos: Amazon,
    alt: 'Amazon',
  },
  {
    id: 4,
    logos: Discord,
    alt: 'Discord',
  },
  {
    id: 5,
    logos: Sportify,
    alt: 'Sportify',
  },
];

const HugeGlobal = () => {
  return (
    <>
      <section className="w-full h-auto bg-[#FFFF] pt-[84px] sm:overflow-x-hidden">
        <div className="flex flex-col justify-center items-center sm:px-4 sm:pt-6">
          <div className="w-[383.41px] h-[100px]">
            <h2 className="text-4xl text-center text-[#0B132A] font-medium">
              Huge Global Network of Fast VPN
            </h2>
          </div>

          <div className="w-[555px] h-[60px] mt-5 mb-[100px] sm:px-10 sm:w-auto">
            <p className="text-center text-base font-medium text-[#4F5665] sm:text-left sm:text-lg">
              See LaslesVPN everywhere to make it easier for you when you move locations.
            </p>
          </div>

          {/* Image Globe */}
          <LazyLoadImage
            src={Globe}
            alt="image-globe"
            placeholderSrc={Globe}
            className="w-[1060px] h-[537.77px] object-contain sm:w-auto"
          />
          {/* Wrapper Sponsor */}
          <div className="w-[1135.64px] h-[208.32] flex justify-around py-2 px-2 mt-[35.81px] mb-[50px] sm:hidden">
            {sponsor.map((val) => {
              return (
                <LazyLoadImage
                  key={val.id}
                  src={val.logos}
                  alt={val.alt}
                  placeholderSrc={val.logos}
                  className="w-[200px] h-[102.5px] object-contain"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HugeGlobal;

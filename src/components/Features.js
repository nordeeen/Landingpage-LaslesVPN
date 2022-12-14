import React from 'react';
import heroFeatures from '../assets/ilustration/second-hero.png';
import checkList from '../assets/icons/green-ceklis.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const checkDatas = [
  {
    id: 1,
    title: 'Powerfull online protection.',
    icon: checkList,
    alt: 'icon-checklist',
  },
  {
    id: 2,
    title: 'Internet without borders.',
    icon: checkList,
    alt: 'icon-checklist',
  },
  {
    id: 3,
    title: 'Supercharged VPN',
    icon: checkList,
    alt: 'icon-checklist',
  },
  {
    id: 4,
    title: 'No specific time limits.',
    icon: checkList,
    alt: 'icon-checklist',
  },
];

const textContent = [
  'We Provide Many Features You Can Use',
  'You can explore the features that we provide with fun and have their own functions each feature.',
];

const Features = () => {
  return (
    <>
      <section className="max-w-full h-auto pt-[95.83px] pb-[144.81px] bg-[#F6F6F6] sm:overflow-x-hidden">
        <div className="flex justify-around sm:h-[300px]">
          <LazyLoadImage
            src={heroFeatures}
            alt="hero-features"
            placeholderSrc={heroFeatures}
            className="w-[31.758rem] h-[25.919rem] object-contain"
          />
          <div className="pt-12">
            <div className="w-[383.41px] h-[100px] mb-5 sm:mb-1 sm:px-10">
              <h2 className="text-[2.188rem] leading-[50px] font-medium text-[#0B132A] sm:text-2xl sm:text-left">
                {textContent[0]}
              </h2>
            </div>
            <div className="w-[427.88px] h-[60px] mb-5 sm:px-10">
              <p className="text-base font-normal text-[#4F5665] sm:text-lg">{textContent[1]}</p>
            </div>
            <ul className="sm:items-center sm:flex-col sm:pt-6 sm:hidden">
              {checkDatas.map((item) => {
                return (
                  <li key={item.id} className="flex mb-[21px]">
                    <LazyLoadImage
                      src={item.icon}
                      alt={item.alt}
                      placeholderSrc={item.icon}
                      className="w-[24px] h-[24px] object-contain mr-3 sm:flex"
                    />
                    <p className="text-sm text-[#4F5665] font-normal sm:text-lg">{item.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

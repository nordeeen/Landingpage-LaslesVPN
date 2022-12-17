import React from 'react'
import Star from '../assets/icons/star.png';
import firstImg from "../assets/images/img-card-1.png";
import twoImg from "../assets/images/img-card-2.png";
import threeImg from "../assets/images/img-card-3.png";
import triDots from "../assets/icons/three-dots.png";
import arrowLeft from "../assets/icons/arrow-left.png";
import arrowRight from '../assets/icons/arrow-right.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const users = [
  {
    img: firstImg,
    icon: Star,
    name: 'Viezh Robert',
    location: 'Warsaw, Poland',
    title:
      '“Wow... I am very happy to use this VPN, it turned out to be more than  my expectations and so far there have been no problems. LaslesVPN always the best”.',
  },
  {
    img: twoImg,
    icon: Star,
    name: 'Yessica Christy',
    location: 'Shanxi, China',
    title: '“I like it because I like to travel far and still can connect with high speed.”',
  },
  {
    img: threeImg,
    icon: Star,
    name: 'Kim Young Jou',
    location: 'Seoul, South Korea',
    title:
      '“This is very unusual for my business that currently requires a virtual private network that has high security.”',
  },
];

const CardTestimonial = (props) => {
  return (
    <div
      id={props.id}
      className="bg-[#FFFF] w-auto h-[230px] rounded-[10px] border-2 border-[#F53838] py-[30px] px-[29px] mb-[60px] sm:w-[90%] sm:px-8 sm:overflow-x-hidden"
      style={props.isSelect ? { borderColor: '#F53838' } : { borderColor: '#DDDDDD' }}
    >
      <div className="w-auto h-auto flex rounded-t-[10px]">
        <LazyLoadImage
          src={props.img}
          alt={props.img}
          placeholderSrc={props.img}
          className="w-[48px] h-[50px] object-contain mr-5"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium text-[#0B132A]">{props.name}</h2>
          <p className="text-sm font-normal text-[#4F5665]">{props.location}</p>
        </div>
        <div className="flex flex-col ml-auto">
          <p>4.</p>
          <div className="w-[35px] h-[16px] flex justify-end">
            <LazyLoadImage
              src={props.icon}
              alt={props.icon}
              placeholderSrc={props.icon}
              className="w-[16px] h-[16px]"/>
          </div>
          <p>5</p>
        </div>
      </div>
      <div className="w-[329.02px] h-[100px] mt-4 sm:w-auto">
        <p className="text-base font-normal text-left sm:text-sm">{props.title}</p>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <>
      <section className="max-w-full h-auto bg-[#FFFF] pt-[50px]">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[433.34px] h-[100px] mb-5 sm:px-10">
            <h2 className="text-center text-4xl font-medium text-[#0B132A] sm:text-center sm:text-3xl">
              Trusted by Thousands of Happy Customer
            </h2>
          </div>
          <div className="w-[537.07px] h-[60px] mb-[60px] sm:w-auto sm:px-8">
            <p className="text-center text-base font-normal text-[#4F5665] sm:text-left sm:text-lg">
              These are the stories of our customers who have joined us with great pleasure when
              using this crazy feature.
            </p>
          </div>
        </div>
        {/* Wrapper Cards */}
        <div className="flex justify-center items-center gap-4 sm:gap-0 sm:flex sm:flex-col">
          {users.map((item, index) => {
            return (
              <CardTestimonial
                key={index}
                name={item.name}
                img={item.img}
                location={item.location}
                icon={item.icon}
                title={item.title}
                isSelect={index === 0}
              />
            );
          })}
        </div>
        <div className="bg-[#FFFF] flex justify-around items-center py-4 sm:hidden">
          <LazyLoadImage
            src={triDots}
            alt="icon-dots"
            placeholderSrc={triDots}
            className="w-[130px] h-[15px] object-contain"
          />
          <div className="flex space-x-4">
            {/* button oval left*/}
            <button
              type="submit"
              className="w-[40px] h-[40px] border-2 rounded-full border-[#F53838] pt-1">
              <LazyLoadImage
                src={arrowLeft}
                alt="icon-arrow-left"
                placeholderSrc={arrowLeft}
                className="w-[25px] h-[25px] object-contain block mx-auto"
              />
            </button>
            {/* button oval right*/}
            <button type="submit" className="w-[40px] h-[40px] rounded-full bg-[#F53838] pt-1">
              <LazyLoadImage
                src={arrowRight}
                alt="icon-arrow-right"
                placeholderSrc={arrowRight}
                className="w-[25px] h-[25px] object-contain block mx-auto"/>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}


export default Testimonials;
import React from 'react';
import User from 'assets/icons/user.png';
import Location from 'assets/icons/location.png';
import Server from 'assets/icons/server.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const cardDatas = [
  {
    id: 1,
    img: User,
    price: '90+',
    title: 'Users',
  },
  {
    id: 2,
    img: Location,
    price: '30+',
    title: 'Locations',
  },
  {
    id: 3,
    img: Server,
    price: '50+',
    title: 'Servers',
  },
];

const ContentAbout = () => {
  return (
    <>
      <section className="w-full h-auto bg-[#F6F6F6] flex justify-center pt-[103px]">
        <div className="w-[1140px] h-[200px] flex">
          {cardDatas.map((item) => {
            return (
              <div
                key={item.id}
                className="flex w-[380px] h-auto items-center justify-center rounded-[10px] bg-[#FFFF]"
                style={
                  item.id === 2
                    ? { borderRight: '2px solid', borderLeft: '2px solid', borderColor: '#D9D9D9' }
                    : { backgroundColor: 'white' }
                }>
                <LazyLoadImage
                  src={item.img}
                  alt={item.title}
                  placeholderSrc={item.img}
                  className="w-[55px] h-[55px] object-contain"/>
                <div className="w-[53px] h-[65px] text-center ml-4">
                  <p className="text-[25px] leading-[30px] font-bold text-[#0B132A">{item.price}</p>
                  <p className="text-[#4F5665] font-normal text-[20px] leading-[30px]">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ContentAbout;

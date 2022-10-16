import React from 'react';
import boxPrice from 'assets/ilustration/box.png';
import checkSucces from 'assets/icons/check.png';

const plans = [
  {
    id: 1,
    title: 'Free Plan',
    features: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
    ],
    price: 'Free',
  },
  {
    id: 2,
    title: 'Standard Plan',
    features: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
    ],
    price: '$9 / mo',
  },
  {
    id: 3,
    title: 'Premium Plan',
    features: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
      'Connect Anyware',
    ],
    price: '$12 / mo',
  },
];

const CardPlan = ({ title, price, features, isSelect }) => {
  return (
    <section
      className="flex mx-3 justify-around bg-white w-[330px] h-[760px] pt-[79.63px] px-[92.55px] rounded-[10px] border-2 border-black"
      style={isSelect ? { borderColor: '#F53838' } : { borderColor: '#DDDDDD' }}
    >
      <div className="flex flex-col justify-around items-center">
        <img src={boxPrice} alt="box-price" className="w-[144.9px] h-[165.37px] object-contain " />
        <ul>
          <p className="text-lg font-medium text-center text-[#0B132A] pb-8">{title}</p>
          {features.map((val, index) => {
            return (
              <div className="w-[180.36px] h-[30px]">
                <li key={index} className="flex">
                  <img
                    src={checkSucces}
                    alt="check"
                    className="w-[24px] h-[24px] object-contain mr-5"
                  />
                  <p className="text-sm font-normal text-[#4F5665]">{val}</p>
                </li>
              </div>
            );
          })}
        </ul>
        <div>
          <p className="text-[1.563rem] leading-[30px] text-center text-[#0B132A] mb-5">{price}</p>
          <button
            className="text-[#F53838] text-base font-bold w-[177.88px] h-[45px] rounded-full border-2 border-[#F53838] text-center"
            style={
              isSelect
                ? { backgroundColor: '#F53838', color: 'white' }
                : { backgroundColor: 'white' }
            }
          >
            Select
          </button>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <>
      <section className="w-full h-auto">
        <div className="flex flex-col justify-center items-center pt-[66.65px] pb-[66.65px]">
          <h2 className="text-center text-[2.188rem] leading-[50px] font-medium text-[##0B132A] mb-5">
            Choose Your Plan
          </h2>
          <div className="w-[555px] h-[60px]">
            <p className="text-center text-[1rem] leading-[30px] font-normal text-[#4F5665]">
              Let's choose the package that is best for you and explore it happily and cheerfully.
            </p>
          </div>
          <div className="flex justify-center items-center mt-[60px]">
            {/* Card */}
            {plans.map((val, index) => {
              // console.log(index + 1 === plans.length);
              return <CardPlan key={index} {...val} isSelect={index + 1 === plans.length} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

import React from 'react';
import logoFooter from 'assets/logos/logo-footer.png';
import iconFb from 'assets/icons/Facebook.png';
import iconIg from 'assets/icons/Instagram.png';
import iconTw from 'assets/icons/twitter.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const footerDatas = [
  {
    iconFooter: logoFooter,
    title: 'LaslesVPN is a private virtual network that has unique features and has high security.',
    firstIcon: iconFb,
    secondIcon: iconTw,
    threeIcon: iconIg,
  },
];

const products = [
    {
        id: 1,
        title: "Product",
        lists: [
            "Download",
            "Pricing",
            "Locations",
            "Server",
            "Countries",
            "Blog"
        ]
    }, 
    {
        id: 2,
        title: "Engage",
        lists: [
            "LaslesVPN?",
            "FAQ","Tutorials", 
            "About Us", "Privacy Policy", 
            "Terms of Service"
        ]
    },
    {
        id: 3,
        title: "Earn Money",
        lists: [
            "Affiliate",
            "Become Partner",
        ]
    }
]

const FooterPlans = ({iconFooter, title, firstIcon, secondIcon, threeIcon}) => {
    return (
      <div className="ml-9">
        <LazyLoadImage
          src={iconFooter}
          alt="logo-footer"
          placeholderSrc={iconFooter}
          className="w-[149px] h-[36px] object-cover"
        />
        <div className="w-[340px] h-[61px] my-5">
          <p className="text-base font-medium text-[##4F5665]">{title}</p>
        </div>
        <div className="w-auto h-[60px] flex justify-start items-center py-3 gap-6">
          <a href="#/" className="hover:-translate-y-2 transition-all duration-75">
            <LazyLoadImage
              src={firstIcon}
              alt="icon-facebook"
              placeholderSrc={firstIcon}
              className="w-[60px] h-[60px] object-contain"
            />
          </a>
          <a href="#/" className="hover:-translate-y-2 transition-all duration-75">
            <LazyLoadImage
              src={secondIcon}
              alt="icon-twitter"
              placeholderSrc={secondIcon}
              className="w-[60px] h-[60px] object-contain"
            />
          </a>
          <a href="#/" className="hover:-translate-y-2 transition-all duration-75">
            <LazyLoadImage
              src={threeIcon}
              alt="icon-instagram"
              placeholderSrc={threeIcon}
              className="w-[60px] h-[60px] object-contain"
            />
          </a>
        </div>
        <p className="text-lg text-[#AFB5C0] font-medium mt-3">&copy; 2022 LaslesVPN</p>
      </div>
    );
};

const FooterLists = ({title, lists}) => {
    return (
      <div className="px-4">
        <p
          className="text-[#0B132A] text-lg font-medium text-left mb-5">
          {title}
        </p>
        <ul className="flex flex-col">
          {lists.map((val, index) => {
            return (
              <li key={index} className="my-2">
                <a href="/#" className="text-base font-normal text-[#4F5665] hover:underline">
                  {val}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

const Footer = () => {
  return (
    <>
      <footer className="w-full h-auto bg-[#F6F6F6] mt-[80px] py-12 px-6">
        <div className="flex justify-between items-start px-4">
          <div>
            {footerDatas.map((val, index) => {
              return (
                <FooterPlans
                  key={index}
                  iconFooter={val.iconFooter}
                  title={val.title}
                  firstIcon={val.firstIcon}
                  secondIcon={val.secondIcon}
                  threeIcon={val.threeIcon}
                />
              );
            })}
          </div>

          <div>
            <div className="w-auto h-auto flex justify-between gap-10">
              {products.map((val, index) => {
                return <FooterLists key={index} {...val} />;
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
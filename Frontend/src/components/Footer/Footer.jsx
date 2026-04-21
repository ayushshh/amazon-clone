import React from 'react';
import amazonLogo from '../../assets/amazonLogo.png';
import india from '../../assets/india.png';
import LanguageIcon from '@mui/icons-material/Language';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const Footer = () => {
  const footerLinks = [
    {
      title: "Get to Know Us",
      links: ["About Amazon", "Careers", "Press Releases", "Amazon Science"]
    },
    {
      title: "Connect with Us",
      links: ["Facebook", "Twitter", "Instagram"]
    },
    {
      title: "Make Money with Us",
      links: ["Sell on Amazon", "Sell under Amazon Accelerator", "Protect and Build Your Brand", "Amazon Global Selling", "Supply to Amazon", "Become an Affiliate", "Fulfilment by Amazon", "Advertise Your Products", "Amazon Pay on Merchants"]
    },
    {
      title: "Let Us Help You",
      links: ["Your Account", "Returns Centre", "Recalls and Product Safety Alerts", "100% Purchase Protection", "Amazon App Download", "Help"]
    }
  ];

  const subLinks = [
    { title: "AbeBooks", desc: "Books, art & collectibles" },
    { title: "Amazon Web Services", desc: "Scalable Cloud Computing Services" },
    { title: "Audible", desc: "Download Audio Books" },
    { title: "IMDb", desc: "Movies, TV & Celebrities" },
    { title: "Shopbop", desc: "Designer Fashion Brands" },
    { title: "Amazon Business", desc: "Everything For Your Business" },
    { title: "Amazon Prime Music", desc: "100 million songs, ad-free. Over 15 million podcast episodes" }
  ];

  return (
    <footer className="text-white w-full">
      {/* 1. Back to Top Bar */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-[#37475a] hover:bg-[#485769] text-[13px] py-4 text-center cursor-pointer font-medium"
      >
        Back to top
      </div>

      {/* 2. Main Footer Links */}
      <div className="bg-[#232f3e] py-[50px] flex justify-center border-b border-[#3a4553]">
        <div className="flex justify-between w-[80%] max-w-[1000px] items-start">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h3 className="text-[16px] font-bold mb-1">{section.title}</h3>
              {section.links.map((link, i) => (
                <span key={i} className="text-[14px] text-[#ddd] hover:underline cursor-pointer">
                  {link}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Logo & Locale Section */}
      <div className="bg-[#232f3e] py-[30px] flex flex-col items-center gap-6">
        <div className="flex items-center gap-20">
          <img src={amazonLogo} alt="amazon" className="w-[76px] object-contain mt-2" />
          
          <div className="flex gap-2">
            {/* Language Selector */}
            <div className="flex items-center gap-2 border border-gray-500 rounded-[3px] px-3 py-1 cursor-pointer hover:border-white">
              <LanguageIcon sx={{ fontSize: '16px' }} />
              <span className="text-[13px] text-gray-300">English</span>
              <UnfoldMoreIcon sx={{ fontSize: '14px', color: 'gray' }} />
            </div>
            
            {/* Country Selector */}
            <div className="flex items-center gap-2 border border-gray-500 rounded-[3px] px-3 py-1 cursor-pointer hover:border-white">
              <img src={india} alt="India" className="w-4" />
              <span className="text-[13px] text-gray-300">India</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Services Grid */}
      <div className="bg-[#131a22] py-[40px] flex justify-center">
        <div className="grid grid-cols-4 gap-x-12 gap-y-6 w-[80%] max-w-[1000px]">
          {subLinks.map((sub, idx) => (
            <div key={idx} className="flex flex-col cursor-pointer group">
              <span className="text-[11px] font-bold group-hover:underline">{sub.title}</span>
              <span className="text-[10px] text-[#999] leading-tight">{sub.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Copyright Section */}
      <div className="bg-[#131a22] pb-10 flex flex-col items-center gap-1">
        <div className="flex gap-4 text-[12px] text-white">
          <span className="hover:underline cursor-pointer">Conditions of Use & Sale</span>
          <span className="hover:underline cursor-pointer">Privacy Notice</span>
          <span className="hover:underline cursor-pointer">Interest-Based Ads</span>
        </div>
        <span className="text-[12px] text-white mt-1">
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </footer>
  );
};

export default Footer;
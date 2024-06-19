import React from 'react';
import ProfileCard from './components/profileCard';
import './App.css';


const App = () => {

  const profiles = [

    {
      name: "Peter Ndegwa",
      age: 46,
      title: "CEO of Safaricom",
      Image: "https://businesstoday.co.ke/wp-content/uploads/2020/04/Peter-Ndegwa-Safaricom-CEO-2.jpg",
      bio: "Peter Ndegwa is the Chief Executive Officer (CEO) of Safaricom PLC, a leading communications company in Africa and pioneer of M-PESA, the world’s most developed mobile payment system. Peter joined Safaricom on April 1st, 2020. He is an experienced Board level, leader with a wealth of experience in General Management, Commercial and Business Strategy, Sales and Finance Operations, having spent over 25 years in various roles within the Financial Services and Fast-Moving Consumer Goods (FMCG) sectors in Africa and Europe. He holds an MBA from the London Business School and a Bachelor’s degree in Economics from the University of Nairobi. He is also a Certified Public Accountant and a member of the Institute of Certified Public Accountants of Kenya (ICPAK).",

     

    },
     {
      name:"matt turner",
      age: 46,
      title: "CEO of THH-LLC",
      Image: "https://i.ytimg.com/vi/FTYr_iO7w5c/maxresdefault.jpg",
      bio: "Matt Turner is the Chief Executive Officer of THH-LLC, a leading technology company in the United States. He is an experienced Board level, leader with a wealth of experience in General Management, Commercial and Business Strategy, Sales and Finance Operations, having spent over 25 years in various roles within the Financial Services and Fast-Moving Consumer Goods (FMCG) sectors in Africa and Europe. He holds an MBA from the London Business School and a Bachelor’s degree in Economics from the University of Nairobi. He is also a Certified Public Accountant and a member of the Institute of Certified Public Accountants of Kenya (ICPAK).",
      

     },
    {
      name: "Sundar Pichai",
      age: 49,
      title: "CEO of Alphabet Inc.",
      Image: "https://www.thefamouspeople.com/profiles/images/sundar-pichai-1.jpg",
      bio: "Sundar Pichai is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google LLC. Born in Madurai, India, Pichai earned his degree from the Indian Institute of Technology Kharagpur in metallurgical engineering. He holds an M.S. from Stanford University in material sciences and engineering, and an MBA from the Wharton School of the University of Pennsylvania.age: 49",
    },
    {
      name: "Mark Elliot Zuckerberg",
      age: 37,
      title: "CEO of Facebook",
      Image: "https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg",
      bio: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Meta Platforms, Inc. and serves as its chairman, chief executive officer, and controlling shareholder.",
    },
    {
      name: "Satya Narayana Nadella",
      age: 54,
      title: "CEO of Microsoft",
      Image: "https://thefanatic.net/wp-content/uploads/2023/10/Who-is-Satya-Nadella-biography-and-career.webp.webp",
      bio: "Satya Narayana Nadella is an Indian-American business executive. He is the chief executive officer of Microsoft, succeeding Steve Ballmer in 2014.",
    },
    {
      name: "Timothy Donald Cook",
      age: 60,
      title: "CEO of Apple",
      Image: "https://wallpaperaccess.com/full/4014183.jpg",
      bio: "Timothy Donald Cook is an American business executive who has been the chief executive officer of Apple Inc. since 2011.",
    },
    {
      name: "Jeffrey Preston Bezos",
      age: 57,
      title: "CEO of Amazon",
      Image: "http://whoswho.com/system/files/styles/landscape/private/landscape/jeff-bezos-2014-L.jpg?itok=TmN91Hi9",
      bio: "Jeffrey Preston Bezos is an American business magnate, media proprietor, and investor. He is the founder and executive chairman of Amazon, where he previously served as the president and CEO.",
    },
    {
      name: "Elon Reeve Musk",
      age: 50,
      title: "CEO of Tesla",
      Image: "https://img.jagranjosh.com/imported/images/E/GK/elon-musk-biography.jpg",
      bio: "Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early investor, CEO, and product architect of Tesla, Inc.",
    },
    {
      name: "Elon Reeve Musk FRS",
      age: 50,
      title: "CEO of X",
      Image: "https://img.jagranjosh.com/imported/images/E/GK/elon-musk-biography.jpg",
      bio: "Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early investor, CEO, and product architect of Tesla, Inc.",
    },
    {
      name: "Reid Garrett Hoffman CBE",
      age: 54,
      title: "CEO of LinkedIn",
      Image: "https://businessabc.net/_next/image?url=https:%2F%2Fztd-euwest2-prod-s3.s3.eu-west-2.amazonaws.com%2FReid_Hoffman_951343ebc5.jpg&w=384&q=75",
      bio: "Reid Garrett Hoffman CBE is an American internet entrepreneur, venture capitalist, and author. Hoffman was the co-founder and executive chairman of LinkedIn, a business-oriented social network used primarily for professional networking.",
    },
    {
      name: "Jack Dorsey",
      age: 45,
      title: "CEO of Twitter",
      Image: "https://www.thinkingheads.com/wp-content/uploads/2018/04/jack-dorsey-conferenciante-1.jpg",
      bio: "Jack Dorsey is an American technology entrepreneur and philanthropist who is a co-founder and the CEO of Twitter, a social media platform used by millions of people worldwide.",
    },
    {
      name: "Susan Diane Wojcicki",
      age: 53,
      title: "CEO of YouTube",
      Image: "https://uploads-ssl.webflow.com/62e89931273b5c21be76c486/6384cf9cae5bda0d6a35765d_637e463aed757817a87d09b3_Susan-Wojcicki-min.jpeg",
      bio: "Susan Diane Wojcicki is an American technology executive. She has been the CEO of YouTube since February 2014.",
    },
    {
      name: "Daniel Ek",
      age: 38,
      title: "CEO of Spotify",
      Image: "https://e0.365dm.com/21/06/2048x1152/skysports-daniel-ek-arsenal_5409898.jpg?20210609123859",
      bio: "Daniel Ek is a Swedish billionaire entrepreneur and technologist. Ek is known for being the co-founder and CEO of the music streaming service Spotify.",
    },
    {
      name: "Brian Chesky",
      age: 40,
      title: "CEO of Airbnb",
      Image: "https://imageio.forbes.com/specials-images/imageserve/5d8ac4ab22254b0008e16383/0x0.jpg?format=jpg&crop=2407,2409,x719,y857,safe&height=416&width=416&fit=bounds",
      bio: "Brian Chesky is an American billionaire entrepreneur, and industrial designer. He is the co-founder and CEO of the peer-to-peer lodging service Airbnb.",
    },
    {
      name: "John Joseph Donahoe II",
      age: 61,
      title: "CEO of eBay",
      Image: "https://i0.wp.com/celebritygraphy.com/wp-content/uploads/2023/03/800px-John_Donahoe_2013.jpg?resize=683%2C1024&ssl=1",
      bio: "John Joseph Donahoe II is an American businessman who is the president and CEO of Nike, Inc. He was formerly the president and CEO of ServiceNow, eBay, and Bain & Company.",
    },
    {
      name: "Daniel Zhang",
      age: 49,
      title: "CEO of Alibaba",
      Image: "https://th.bing.com/th/id/OIP.l4bRIX6v7Jd-5uxthF2TIAHaEh?rs=1&pid=ImgDetMain",
      bio: "Daniel Zhang is a Chinese technology executive. He is the current chairman and chief executive officer of Alibaba Group, a role he has held since 2019.",
    },
    {
      name: "Andrew Wilson",
      age: 47,
      title: "CEO of Electronic Arts",
      Image: "https://th.bing.com/th/id/R.9920cf79464b68d44812dc4e1ac7fbe2?rik=aytl6XQ%2b5WOYDA&pid=ImgRaw&r=0",
      bio: "Andrew Wilson is an Australian businessman who is the CEO of Electronic Arts, a video game company.",
    },
    {
      name: "Jensen Huang",
      age: 58,
      title: "CEO of Nvidia",
      Image: "https://www.sequoiacap.com/wp-content/uploads/sites/6/2021/12/jensen-huang-nvidia-ink-v2.jpg",
      bio: "Jensen Huang is a Taiwanese-American billionaire businessman and electrical engineer. He is the co-founder, president, and CEO of Nvidia, a multinational technology company.",
    },
    {
      name: "Brian Krzanich",
      age: 61,
      title: "CEO of Intel",
      Image: "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/brian-krzanich-3.jpg",
      bio: "Brian Matthew Krzanich is an American engineer and businessman who was the chief executive officer of Intel Corporation from May 2013 until June 2018.",
    },
    {
      name: "Ginni Rometty",
      age: 64,
      title: "CEO of IBM",
      Image: "https://i.insider.com/54d51a26ecad04510afbf74c?width=1200",
      bio: "Virginia Marie Rometty is an American business executive. She is the former chair, president, and CEO of IBM.",
    }
  ];
  return (
    <div className="App">
      <h1>CEO Profiles</h1>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} user={profile} />
        ))}
      </div>
    </div>
  );
};


export default App;


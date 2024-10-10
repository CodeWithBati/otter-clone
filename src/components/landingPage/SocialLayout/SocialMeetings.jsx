'use client'
import { useState } from 'react';
const SocialMeetings = () => {
      const [logos] = useState([
    {
      name: 'The Washington Post',
      imageUrl: 'https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa125338b58aeaac89878_logo-washington-post.svg',
    },
    {
      name: 'The Wall Street Journal',
      imageUrl: 'https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa125d922496598efa657_logo-twsj.svg',
    },
    {
      name: 'Forbes',
      imageUrl: 'https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa125dbbc6e2c8ed694a2_logo-forbes.svg',
    },
    {
      name: 'Mashable',
      imageUrl: 'https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa12518a9716dbda8293b_logo-fast-company.svg',
    },
    {
      name: 'TechCrunch',
      imageUrl: 'https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa125cbf4c2fd421cb84e_logo-mashable.svg',
    },
    {
      name: 'PC Mag',
      imageUrl: 'https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa1257af832a1b9a07a3f_logo-techcrunch.svg',
    },
    {
      name: 'Wired',
      imageUrl: 'https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa12508754eab01abbf8d_logo-pc.svg',
    },
    {
      name: 'Fast Company',
      imageUrl: 'https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa125b3bd55d00222c07a_logo-wired.svg',
    },
  ]);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-6xl flex items-center space-x-8">
        {/* Left Section - Meeting Box */}
        <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x.jpg" loading="eager" id="w-node-_3ad1c165-c15d-2fc7-ac68-8108de3c7952-ecfa1921" sizes="(max-width: 479px) 85vw, (max-width: 767px) 87vw, (max-width: 991px) 86vw, 47vw" alt="" srcset="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x-p-500.jpg 500w, https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x-p-800.jpg 800w, https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x-p-1080.jpg 1080w, https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x.jpg 1216w" className="feature__point-img"/>

        {/* Right Section - Description */}
        <div className="w-1/3">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-500" >Never miss a detail</span> with AI Meeting notes
          </h2>
          <p className="text-gray-600 mb-6">
            OtterPilot auto-joins Zoom, Google Meet, and Microsoft Teams meetings to automatically take notes, allowing everyone to participate freely. Follow along live on the web or on the iOS or Android app.
          </p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-6xl flex items-center space-x-8">
        {/* Left Section - Meeting Box */}
        <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca966951ad96cb18e14d72_homepage-condense%402x.jpg" loading="eager" id="w-node-_3ad1c165-c15d-2fc7-ac68-8108de3c7960-ecfa1921" sizes="(max-width: 479px) 85vw, (max-width: 767px) 87vw, (max-width: 991px) 86vw, 47vw" alt="" srcset="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca966951ad96cb18e14d72_homepage-condense%402x-p-500.jpg 500w, https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca966951ad96cb18e14d72_homepage-condense%402x-p-800.jpg 800w, https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca966951ad96cb18e14d72_homepage-condense%402x-p-1080.jpg 1080w, https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca966951ad96cb18e14d72_homepage-condense%402x.jpg 1216w" className="feature__point-img"/>
        {/* Right Section - Description */}
        <div className="w-1/3">
          <h2 className="text-4xl font-bold mb-4">
          Condense a 1 hour meeting into <span className="text-blue-500"> 30 seconds</span>
          </h2>
          <p className="text-gray-600 mb-6">
          Attended a 1 hour team meeting, but can’t remember a thing? Otter generates a 30-second summary, keeping everyone informed.
          </p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-6xl flex items-center space-x-8">
        {/* Left Section - Meeting Box */}
        <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x.jpg" loading="eager" id="w-node-_3ad1c165-c15d-2fc7-ac68-8108de3c7952-ecfa1921" sizes="(max-width: 479px) 85vw, (max-width: 767px) 87vw, (max-width: 991px) 86vw, 47vw" alt="" srcset="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x-p-500.jpg 500w, https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x-p-800.jpg 800w, https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x-p-1080.jpg 1080w, https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca96699a5d2238f2ed8496_homepage-never-miss-a-detail%402x.jpg 1216w" className="feature__point-img"/>

        {/* Right Section - Description */}
        <div className="w-1/3">
          <h2 className="text-4xl font-bold mb-4">
          Skip the tedious task of composing <span className="text-blue-500"> action item </span>emails
          </h2>
          <p className="text-gray-600 mb-6">
          Otter automatically captures and assigns action items from the meeting, with complete context of the discussion, keeping everyone aligned on next steps.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4  max-w-6xl">
        <h2 className="text-2xl font-light mb-12 text-gray-800 text-center ">
          As seen in
        </h2>
        <div className="flex flex-wrap justify-center gap-24">
          {logos.map((logo) => (
            <div key={logo.name} className="w-auto">
              <img
                src={logo.imageUrl}
                alt={logo.name}
                className="h-6"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SocialMeetings;

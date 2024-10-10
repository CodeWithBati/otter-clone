import React from 'react';
import SocialMeetings from './SocialMeetings';

const SocialLayout = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-10 rounded-2xl">
      {/* Header */}
      <div className="bg-gray-100 p-8 rounded-lg max-w-6xl w-full mt-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Introducing Meeting GenAI✨</h1>
        <p className="text-center mb-6 max-w-3xl mx-auto font-light text-lg">
          Never take meeting notes again. Get transcripts, automated summaries, action items, and chat with Otter to get answers from your meetings.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Start for Free
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="bg-gray-200 mt-8 p-5 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full">
        <div className="bg-gray-200 p-4 rounded-lg h-52 shadow-lg text-center cursor-pointer flex flex-col justify-center">
          <h2 className="font-bold text-2xl text-blue-500 mb-6">AI Meeting Assistant</h2>
          <p>Get automated meeting notes and summaries with action items using OtterPilot.</p>
        </div>
        <div className="flex flex-col justify-center bg-gray-200 p-4 rounded-lg shadow-lg text-center cursor-pointer">
          <h2 className="font-bold text-2xl mb-6">Otter AI Chat</h2>
          <p>Get answers and generate content like emails and status updates.</p>
        </div>
        <div className="flex flex-col justify-center bg-white p-4 rounded-lg shadow-lg text-center cursor-pointer">
          <h2 className="font-bold text-2xl mb-6">AI Channels</h2>
          <p>Combine live conversations with async updates.</p>
        </div>
      </div>

      {/* Video & Chat Section */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-lg max-w-6xl w-full">
        <div className="flex">
          {/* Main Chat and Video Section */}
          <main className="w-full pl-4 mx-auto">
            <div className="relative bg-gray-200 rounded-lg p-4 mb-4">
              {/* Video */}
              <video 
                id="5d8ce918-1374-9884-24b9-ac033f6858ed-video" 
                style={{
                  backgroundImage: `url("https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca439063af578816bf4724_2792_AI%20Meeting%20Assistant_1600%20x%20900_white%20bg_080224-poster-00001.jpg")`,
                  objectFit: "cover"
                }} 
                muted 
                playsInline 
                loop
                controls
              >
                <source 
                  src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca439063af578816bf4724_2792_AI%20Meeting%20Assistant_1600%20x%20900_white%20bg_080224-transcode.mp4" 
                  type="video/mp4" 
                />
                <source 
                  src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca439063af578816bf4724_2792_AI%20Meeting%20Assistant_1600%20x%20900_white%20bg_080224-transcode.webm" 
                  type="video/webm" 
                />
              </video>
            </div>
          </main>
        </div>
      </div>

      {/* Footer with Logos */}
      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-16">
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7bb12bd967300c25e950_Amazon.svg" 
            loading="lazy" 
            alt="Amazon Logo" 
            className="home__client-logo anim-1"
          />
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/6643ff8070ff4a555db377f9_grant-thorton.svg" 
            loading="lazy" 
            alt="Grant Thornton Logo" 
            className="home__client-logo anim-2 is-gt"
          />
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/61f1554b86ff2cd5e536307b_ibm-logo.svg" 
            loading="lazy" 
            alt="IBM Logo" 
            className="home__client-logo anim-1"
          />
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7befab663a9b615307aa_NBC.svg" 
            loading="lazy" 
            alt="NBC Logo" 
            className="home__client-logo anim-2"
          />
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7bb18129c7a788209ba9_Walgreens.svg" 
            loading="lazy" 
            alt="Walgreens Logo" 
            className="home__client-logo anim-1"
          />
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7bb1f604c692aa2850c8_UCLA.svg" 
            loading="lazy" 
            alt="UCLA Logo" 
            className="home__client-logo anim-1"
          />
        </div>
      </div>
    </div>
    <SocialMeetings />
   </>
  );
};

export default SocialLayout;

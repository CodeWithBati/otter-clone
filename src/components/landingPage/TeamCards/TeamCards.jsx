'use client'

import { useState } from 'react';

function TeamCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full bg-primary-500 flex justify-center items-center text-white text-2xl">
          {image}
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}



function App() {
  const [teams] = useState([
    {
      image:<img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa74d0f9ec061e3c515c5_hp-icon-01.svg" loading="lazy" alt="" class="hp-point_icon"/>,
      title: 'Sales Teams',
      description:
        'OtterPilot for Sales extracts Sales Insights, writes follow-up emails, and pushes call notes to Salesforce and Hubspot.',
    },
    {
      image:<img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa74d5f1d7197cc6a430a_hp-icon-02.svg" loading="lazy" alt="" class="hp-point_icon"/>,
      title: 'Business',
      description:
        'Otter empowers everyone to engage and be more productive in meetings with real-time automated notes, summaries, and action items.',
    },
    {
      image: <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa74d022a0721d6779695_hp-icon-03.svg" loading="lazy" alt="" class="hp-point_icon"/>,
      title: 'Marketing Teams',
      description:
        'Otter automatically assigns action items from all your cross-functional team meetings, helping everyone stay aligned.',
    },
    {
      image:<img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa74d4bcf08efdbc853b8_hp-icon-04.svg" loading="lazy" alt="" class="hp-point_icon"/>,
      title: 'Recruiting Teams',
      description:
        'Otter transcribes and summarizes interviews, reducing the time and effort required to evaluate candidates.',
    },
    {
      image: <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa74d4bcf08efdbc853b8_hp-icon-04.svg" loading="lazy" alt="" class="hp-point_icon"/>,
      title: 'Media',
      description:
        'Otter helps you tell the stories that matter through automated, real-time transcription.',
    },
    {
      image: <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65caa74c6348c3fd94912787_hp-icon-06.svg" loading="lazy" alt="" class="hp-point_icon"/>,
      title: 'Education',
      description:
        'Otter provides faculty and students with real-time captions and notes for in-person and virtual lectures, classes, or meetings.',
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Otter.ai: Your AI for Every Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <TeamCard key={team.title} {...team} />
        ))}
      </div>
    </div>
  );
}

export default App;

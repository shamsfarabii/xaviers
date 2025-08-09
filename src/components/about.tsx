import React from 'react';

interface TeamMember {
  name: string;
  skill: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Asad",
    skill: "video editor",
    image: '/T1.gif'
  },
  {
    name: "Tahasin",
    skill: "prochur matha",
    image: '/T2.gif'
  },
  {
    name: "Nafis",
    skill: "Ral ko Nahi darte",
    image: '/T3.gif'
  }
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="relative group">
      {/* Red border frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-[3px]">
        <div className="w-full h-full bg-team-card rounded-2xl"></div>
      </div>

      {/* Card content */}
      <div className="relative bg-team-card rounded-2xl p-6 h-[320px] overflow-hidden">

        {/* Film strip decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-film-accent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-film-accent opacity-30"></div>

        {/* Profile image */}
        <div className="relative z-10 flex flex-col items-center h-full">
          <div className="w-55 h-55 rounded-lg overflow-hidden mb-4 mt-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className='absolute bottom-16 left-5 text-white font-bold  font-instabread text-2xl'>
            <p>{member?.name}</p>
          </div>
          <div className='absolute bottom-11 left-5 text-white'>
            <p>{member?.skill}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="bg-background py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ABOUT US
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
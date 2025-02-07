'use client'

import { Timeline } from './timeline'

const experiences = [
  {
    date: '2025 - Present',
    title: 'Software Developer at Brain Insight Company',
    description: 'Currently working on software development projects, focusing on delivering high-quality solutions and improving team efficiency.',
    color: 'primary'
  },
  {
    date: '2023 - 2024',
    title: 'Intern in C#/.NET Framework',
    description: 'Gained hands-on experience in developing applications using C# and .NET Framework, enhancing problem-solving and coding skills.',
    color: 'blue'
  }
  
  // {
  //   date: '2017 - 2019',
  //   title: 'Frontend Developer at StartUp Labs',
  //   description: 'Developed user interfaces with React, implemented responsive designs, and collaborated with UX team.',
  //   color: 'green'
  // },
  // {
  //   date: '2016 - 2017',
  //   title: 'Junior Developer at Tech Innovators',
  //   description: 'Started my journey in web development, worked on various frontend projects.',
  //   color: 'purple'
  // },
  // {
  //   date: '2015 - 2016',
  //   title: 'Intern at Digital Crafters',
  //   description: 'Learned the fundamentals of web development and assisted in various projects.',
  //   color: 'orange'
  // }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/50 relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <Timeline items={experiences} />
      </div>
    </section>
  )
}


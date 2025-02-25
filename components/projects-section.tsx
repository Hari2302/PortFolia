'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , Autoplay } from 'swiper/modules';
import { PinContainer } from './ui/3d-pin'


const projects = [
  {
    title: 'BIT E-Commerce Website',
    description: 'A comprehensive e-commerce website with secure payment integration and product management, built using C#.NET, HTML, CSS, and JavaScript.',
    tech: ['C#.NET', 'HTML', 'CSS', 'JavaScript','SQL Server'],
    github: 'https://github.com/Hari2302/BIT-BACKEND-1',
    demo: '#',
    image: 'Gif/BI E-Comm.gif'
  },
  {
    title: 'Shopping Website',
    description: 'A fully functional shopping website with category and brand filters, built using PHP.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/yourusername/shopping-website',
    demo: '#',
    image: 'Gif/Shopping.gif'
  },
  {
    title: 'Conference Website',
    description: 'A Conference  developed using the PHP, featuring a modern UI and optimized performance.',
    tech: ['PHP', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/mymobile-store',
    demo: '#',
    image: 'Gif/Conference.gif'
  }
  ,
  {
    title: 'Tailor Website',
    description: 'A Tailor Website  developed using the Wordpress , featuring a modern UI and optimized performance.',
    tech: ['Wordpress', 'MySQL', ' CSS'],
    github: 'https://github.com/yourusername/mymobile-store',
    demo: '#',
    image: '/Gif/Tailor.gif'
  }
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-muted/50 relative z-20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <h5 className='text-lg font-bold mb-12 text-center text-slate-400'>Key Collaborative Projects & Contributions</h5>
        
        <Swiper
          modules={[ Autoplay,Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          suppressHydrationWarning={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title} className='py-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PinContainer
    
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {project.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            {project.description}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
                      {project.tech.map(tech => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ArrowUpRight className="w-10 h-10 text-primary" />
                      </div>
        </div>
      </PinContainer>
               
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
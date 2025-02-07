'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Globe, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

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
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-muted/50 relative z-20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden">
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
                </Link>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-muted-foreground"
                    >
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
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
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="group">
                      <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="group">
                      <Globe className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


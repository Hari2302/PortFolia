'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram } from 'lucide-react';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formState.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setLoading(true);
    setSuccessMessage('');
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormState({ name: '', email: '', message: '' });
  
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        setSuccessMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setSuccessMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section id="contact" className="py-20 px-4 relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" value={formState.name} onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))} className={errors.name ? 'border-destructive' : ''} />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" value={formState.email} onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))} className={errors.email ? 'border-destructive' : ''} />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" rows={6} value={formState.message} onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))} className={errors.message ? 'border-destructive' : ''} />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Success Message Below Button */}
                {successMessage && (
                  <p className="text-center text-green-600 mt-4">{successMessage}</p>
                )}
              </form>

              <div className="mt-8 flex justify-center gap-6">
                <motion.a href="https://github.com/Hari2302" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/hariharan-s-699439349/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a href="https://www.instagram.com/_.chinku/?igsh=MXZyMG1ncWxiMnVzbQ%3D%3D" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import SectionHeader from './ui/SectionHeader';
import ContactInfo from './ui/ContactInfo';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-6xl">
        <SectionHeader subtitle="Connect" title="Contact Me" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
              <ContactInfo icon={<FiMail />} label="07saadabbasi@gmail.com" />
              <ContactInfo icon={<FiPhone />} label="+92 327 6491461" />
              <ContactInfo icon={<FiMapPin />} label="Abbottabad, Pakistan" />
          </div>
          <form className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleInputChange}
                className="p-4 bg-[#f2f3f7] outline-none text-sm focus:ring-2 focus:ring-blue-500" 
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleInputChange}
                className="p-4 bg-[#f2f3f7] outline-none text-sm focus:ring-2 focus:ring-blue-500" 
                required
              />
              <textarea 
                name="message"
                placeholder="Message" 
                rows={5} 
                value={formData.message}
                onChange={handleInputChange}
                className="md:col-span-2 p-4 bg-[#f2f3f7] outline-none text-sm focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button 
                type="submit"
                disabled={formStatus === 'loading'}
                className="bg-blue-600 text-white px-10 py-4 uppercase font-bold text-[11px] tracking-widest self-start disabled:bg-gray-400 hover:bg-blue-700 transition-all"
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="md:col-span-2 text-green-600 text-sm">Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="md:col-span-2 text-red-600 text-sm">Please fill all fields correctly.</p>
              )}
          </form>
        </div>
      </div>
    </section>
  );
}

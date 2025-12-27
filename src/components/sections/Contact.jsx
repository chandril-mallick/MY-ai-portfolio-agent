import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's work together</h3>
        <p className="text-gray-500">
          Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
      >
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          const name = e.target[0].value;
          const email = e.target[1].value; // In a real mailto, we can't easily set the 'from', but we can include it in the body
          const message = e.target[2].value;
          window.location.href = `mailto:chandrilmallick1@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
        }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all font-medium" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input required type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all font-medium" placeholder="hello@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all font-medium resize-none" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-md hover:shadow-xl transition-all active:scale-[0.98]">
            Send Message
          </button>
        </form>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-6 mt-12"
      >
        {[
            { icon: Mail, label: 'Email', href: 'mailto:chandrilmallick1@gmail.com' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chandril-mallick-522b61259' },
            { icon: Github, label: 'GitHub', href: 'https://github.com/chandril-mallick' }
        ].map((item, i) => (
            <a 
              key={i} 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-gray-400 hover:text-blue-600 hover:shadow-md transition-all"
            >
                <item.icon className="w-6 h-6" />
            </a>
        ))}
      </motion.div>
    </div>
  );
}

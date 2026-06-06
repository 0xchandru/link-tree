
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  GraduationCap,
  BookOpen,
  Mail,
  MessageCircle,
  Send,
  Globe as Link,
  Shield,
  Lock,
  Code,
} from 'lucide-react';
import profile from '../assets/profile.jpg';
import { Button } from '@/components/ui/button';
import LinkCard from '@/components/LinkCard';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const links = [
    { title: 'Portfolio', url: 'http://www.chandraprakash.me/', icon: Link, color: 'from-purple-500 to-pink-500', description: 'Visit my portfolio' },
    { title: 'Resume', url: 'https://drive.google.com/file/d/1uvc_fGkEsu40CfaoMggKwQcCT0Ar4rPX/view', icon: FileDown, color: 'from-blue-500 to-cyan-500', description: 'Download PDF' },
    { title: 'LinkedIn', url: 'http://linkedin.com/in/chandraprakash-soc', icon: Linkedin, color: 'from-blue-600 to-blue-800', description: 'Professional network' },
    { title: 'TryHackMe', url: 'https://tryhackme.com/p/0xchandru', icon: Shield, color: 'from-green-600 to-green-800', description: 'Cybersecurity' },
    { title: 'Email', url: 'https://mailto:cyberchandru87@gmail.com', icon: Mail, color: 'from-indigo-500 to-purple-500', description: 'Get in touch' },
    { title: 'GitHub', url: 'https://github.com/0xchandru', icon: Github, color: 'from-gray-700 to-gray-900', description: 'Code repositories' },
    { title: 'Twitter / X', url: 'https://x.com/0xchandru', icon: Twitter, color: 'from-sky-400 to-sky-600', description: 'Latest updates' },
    { title: 'Instagram', url: 'https://instagram.com/0xchandru', icon: Instagram, color: 'from-pink-500 to-rose-500', description: 'Photos & stories' },
    { title: 'WhatsApp', url: 'https://wa.me/+919786475035', icon: MessageCircle, color: 'from-green-500 to-emerald-500', description: 'Quick chat' },
    { title: 'Telegram', url: 'https://t.me/oxchandru', icon: Send, color: 'from-sky-500 to-blue-500', description: 'Secure messaging' },
    // { title: 'Certifications', url: '#certifications', icon: GraduationCap, color: 'from-emerald-500 to-teal-500', description: 'My achievements' },
    { title: 'Blog', url: 'https://medium.com/@0xchandru', icon: BookOpen, color: 'from-orange-500 to-red-500', description: 'Tech articles' },
    // { title: 'Projects', url: '', icon: Code, color: 'from-cyan-500 to-blue-500', description: 'Featured work' },
    // { title: 'Personal Website', url: '#website', icon: Globe, color: 'from-violet-500 to-purple-500', description: 'Learn more about me' },
    // { title: 'YouTube', url: 'https://youtube.com', icon: Youtube, color: 'from-red-500 to-red-600', description: 'Video content' },
    // { title: 'HackTheBox', url: 'https://hackthebox.com', icon: Lock, color: 'from-green-400 to-blue-500', description: 'Penetration testing' },
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark
      ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900'
      : 'bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100'
      }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-10 left-10 w-32 h-32 rounded-full opacity-10 ${isDark ? 'bg-purple-400' : 'bg-purple-300'
            }`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-10 ${isDark ? 'bg-pink-400' : 'bg-pink-300'
            }`}
        />
      </div>

      {/* Scrollable container */}
      <div className="relative z-10 min-h-screen overflow-y-auto">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
          {/* Theme Toggle */}
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative inline-block mb-6"
            >
              <div className={`w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-r from-purple-500 to-pink-500 ${isDark ? 'shadow-2xl shadow-purple-500/25' : 'shadow-xl shadow-purple-500/20'
                }`}>
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-dashed border-purple-400 opacity-30"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
                } bg-clip-text text-transparent`}
            >
              Chandraprakash C
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`text-lg md:text-xl mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
            >
              Aspiring SOC Analyst & Cybersecurity Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              Securing the digital world.
            </motion.p>
          </motion.div>

          {/* Links Grid - Mobile-first with large tap targets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="w-full max-w-2xl mx-auto"
          >
            <div className="grid gap-4 md:gap-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <LinkCard
                    {...link}
                    isDark={isDark}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className={`text-center mt-16 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
          >
            <p>© 2025 Chandraprakash. Made with ❤️ using React & Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;

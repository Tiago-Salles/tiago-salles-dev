"use client"

import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, MapPin, Phone, Code, Rocket, Award, Users, TrendingUp, CheckCircle2, ArrowRight, ExternalLink, Zap, Target, Globe } from 'lucide-react';

export default function TiagoPortfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 800, 1);
  const heroOpacity = Math.max(1 - scrollY / 600, 0);
  const statsScale = Math.min(0.8 + scrollY / 2000, 1);

  const stats = [
    { number: "5+", label: "Years Python", icon: Code },
    { number: "1.5M+", label: "Users Served", icon: Users },
    { number: "100%", label: "Remote Success", icon: TrendingUp },
    { number: "4", label: "Languages", icon: Award }
  ];

  const techStack = {
    core: ["Python", "Django", "Flask", "FastAPI", "React.js", "Next.js", "TypeScript"],
    devops: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Azure", "AWS"],
    data: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]
  };

  const achievements = [
    "Building Portugal's national MOOC platform serving 1.5M+ annual enrollments",
    "Architected microservices from scratch as sole backend developer",
    "Delivered 4 enterprise Python projects across different business domains",
    "Implemented CI/CD pipelines reducing deployment time by 70%",
    "Created full-stack solutions combining Python, C#, Vue.js, and React"
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Fixed CTA Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 100 ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 backdrop-blur-xl py-2 px-3 shadow-2xl">
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
            <p className="font-bold text-xs sm:text-sm md:text-base flex-1 text-white">Stop Searching. You Found Me.</p>
            <a href="#contact" className="bg-white text-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full font-bold hover:scale-110 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap shadow-lg">
              Hire Now
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section - Apple Style */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10" style={{ opacity: heroOpacity }}>
          <div className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 animate-pulse shadow-lg">
            ✓ AVAILABLE NOW IN CAMPINAS-SP
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight px-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-gradient">
            You Just Found the<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Python Developer
            </span><br />
            You Need
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            <span className="text-blue-400 font-bold">5+ years</span> building scalable microservices • 
            <span className="text-purple-400 font-bold"> 1.5M+ users</span> served • 
            <span className="text-pink-400 font-bold"> Production-ready</span> Python, Django, React, Docker, Kubernetes
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <a href="#contact" className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 hover:shadow-blue-500/50">
              Schedule Interview Now 
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#proof" className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              See Track Record
            </a>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400 px-4">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-blue-400" />
              <span>Campinas-SP</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-purple-400" />
              <span>+351 917 005 635</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-pink-400" />
              <span className="break-all">tiagosalles20@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Parallax Effect */}
      <section className="py-20 sm:py-32 px-4 relative" style={{ transform: `scale(${statsScale})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="group text-center bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  opacity: Math.min(scrollY / 300, 1)
                }}
              >
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section - Scroll Reveal */}
      <section id="proof" className="py-20 sm:py-32 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 px-2">
              Why I'm the <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">ONE</span> You Need
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Not just another developer. A proven engineer who ships production code at scale.
            </p>
          </div>

          <div className="grid gap-8 sm:gap-12 mb-12 sm:mb-20">
            {/* Current Impact - Glassmorphism Card */}
            <div className="group relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 p-8 sm:p-10 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Rocket className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Currently Building at National Scale</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Right now, I'm maintaining Portugal's national MOOC platform (NAU) that serves{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">1.5M+ annual enrollments</span>. 
                This isn't a portfolio project—this is production code serving an entire country.
              </p>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                {[
                  "Python/Django microservices handling massive scale",
                  "Open edX integration with SSO, certificates, enrollments",
                  "React.js components in Django templates",
                  "CI/CD with GitHub Actions & Jenkins"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-blue-400 group-hover/item:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proven Delivery */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 sm:p-10 rounded-3xl backdrop-blur-xl border border-gray-700 hover:border-purple-500 transition-all duration-500">
              <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Proven Delivery Record</h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                I don't just write code—I architect solutions, ship features, and deliver business value.
              </p>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                {achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-purple-400 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack - Animated Grid */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 sm:p-10 rounded-3xl border border-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">
              Production-Tested Tech Stack
            </h3>
            <div className="grid gap-8 relative z-10">
              {Object.entries(techStack).map(([category, techs], catIndex) => (
                <div key={category}>
                  <h4 className="text-gray-400 font-bold mb-4 text-base sm:text-lg uppercase tracking-wider">
                    {category === 'core' ? '⚡ Core Development' : category === 'devops' ? '🚀 DevOps & Cloud' : '💾 Databases'}
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {techs.map((tech, i) => (
                      <span 
                        key={i} 
                        className="group bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-600 hover:to-purple-600 text-gray-200 hover:text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Cards */}
      <section className="py-20 sm:py-32 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-center mb-12 sm:mb-20 px-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Real Projects. Real Impact.
          </h2>

          <div className="space-y-8">
            {/* FCT Project */}
            <div className="group relative bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6 sm:p-8 rounded-3xl border-l-4 border-blue-500 backdrop-blur-xl hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-2">Software Engineer - FCT</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Portuguese Ministry of Education</p>
                    <p className="text-xs sm:text-sm text-gray-500">Sep 2024 - Present | Remote</p>
                  </div>
                  <Target className="w-8 h-8 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                  Building and maintaining the NAU platform—Portugal's national MOOC serving{' '}
                  <span className="text-blue-400 font-bold">1.5M+ enrollments annually</span>. 
                  This is open-source, high-scale, production Python/Django work.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-white mb-3 text-sm sm:text-base flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-400" />
                      Key Contributions
                    </p>
                    <ul className="text-xs sm:text-sm text-gray-400 space-y-2">
                      <li>• Microservices architecture</li>
                      <li>• REST APIs for Open edX</li>
                      <li>• CI/CD pipelines</li>
                      <li>• React.js + Django</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-3 text-sm sm:text-base">Tech Stack</p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">Python, Django, Flask, FastAPI, React.js, TypeScript, PostgreSQL, Redis, Elasticsearch, Docker, Kubernetes, AWS S3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantico Project */}
            <div className="group relative bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-6 sm:p-8 rounded-3xl border-l-4 border-purple-500 backdrop-blur-xl hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 mb-2">Full Stack Python Developer</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Quantico Solutions</p>
                    <p className="text-xs sm:text-sm text-gray-500">Dec 2022 - Apr 2024 | Remote</p>
                  </div>
                  <Globe className="w-8 h-8 text-purple-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                  <span className="text-purple-400 font-bold">4 enterprise Python projects</span> across different business domains. 
                  Architected the Monitur platform from scratch as sole backend developer.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-white mb-3 text-sm sm:text-base flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      Highlights
                    </p>
                    <ul className="text-xs sm:text-sm text-gray-400 space-y-2">
                      <li>• Full-stack apps (C#, Vue.js)</li>
                      <li>• Monitur platform architecture</li>
                      <li>• Multi-database integrations</li>
                      <li>• NAU Financial Manager</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-3 text-sm sm:text-base">Tech Stack</p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">Python, Django, FastAPI, Vue.js, Angular, PostgreSQL, MySQL, SQL Server, Docker, Pytest, GitHub Actions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props - Bento Grid */}
      <section className="py-20 sm:py-32 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 px-2">
            What You Get When You Hire Me
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
            {[
              { title: "Immediate Value", desc: "5+ years of Python. I start coding from day one. No ramp-up time wasted.", gradient: "from-blue-600 to-cyan-600" },
              { title: "Full-Stack Capability", desc: "Python backend + React frontend. One developer, complete solutions.", gradient: "from-purple-600 to-pink-600" },
              { title: "DevOps Ready", desc: "Docker, Kubernetes, CI/CD pipelines. I ship code to production confidently.", gradient: "from-pink-600 to-rose-600" },
              { title: "Scale Experience", desc: "Built systems serving 1.5M+ users. I understand performance and scalability.", gradient: "from-cyan-600 to-blue-600" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`group relative bg-gradient-to-br ${item.gradient} p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-500 overflow-hidden cursor-default`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">✓ {item.title}</h3>
                  <p className="text-sm sm:text-base text-white/90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Card */}
          <div className="relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-8 sm:p-10 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-orange-600/20 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <p className="text-2xl sm:text-3xl font-black text-white mb-4">
                💡 Bonus: I speak 4 languages fluently
              </p>
              <p className="text-base sm:text-lg text-white/90">
                Portuguese, English, Spanish, French - Perfect for international teams and global projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Impact */}
      <section id="contact" className="py-20 sm:py-32 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/30 via-transparent to-pink-400/30"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 px-2 text-white">
            Stop Interviewing.<br />Start Building.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 text-white/90 px-4">
            I'm available for on-site work in Campinas-SP. Let's talk about your next Python project.
          </p>

          <div className="bg-white rounded-3xl p-8 sm:p-10 text-gray-900 shadow-2xl backdrop-blur-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-gray-900">Get in Touch Now</h3>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:tiagosalles20@gmail.com" className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="font-bold text-sm sm:text-base md:text-lg break-all">tiagosalles20@gmail.com</span>
              </a>
              
              <a href="tel:+351917005635" className="group flex items-center justify-center gap-3 bg-gray-900 text-white p-4 sm:p-5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="font-bold text-sm sm:text-base md:text-lg">+351 917 005 635</span>
              </a>
              
              <a href="https://linkedin.com/in/tiagosalles-tech" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 sm:p-5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="font-bold text-sm sm:text-base md:text-lg break-all">linkedin.com/in/tiagosalles-tech</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>

            <div className="border-t-2 border-gray-200 pt-6 sm:pt-8">
              <p className="text-base sm:text-lg text-gray-700 mb-2 font-semibold">📍 Based in Campinas-SP, Brazil</p>
              <p className="text-xs sm:text-sm text-gray-600">Available for immediate on-site work • Remote experience proven</p>
            </div>
          </div>

          <p className="text-white text-xl sm:text-2xl font-black mt-12 sm:mt-16 px-4 drop-shadow-lg">
            The only question left: When do we start? 🚀
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 sm:py-10 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-gray-500">© 2026 Tiago Salles - Python Developer</p>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">Ready to ship production code from day one.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
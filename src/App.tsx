import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  ChevronDown,
  GraduationCap,
  FileText,
} from "lucide-react";
import profileImage from "./assets/shr img.jpg";
import potholes from "./assets/potholes.png"
import street from "./assets/street.jpg"
import dog from "./assets/dog.jpg"
import prog from "./assets/progr.jpg"
import framework from "./assets/Framework.jpg"

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [resumeRef, resumeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="text-center">
          {/* Profile Image */}
          <motion.img
            src={profileImage}
            alt="Shreyas M"
            className="w-32 h-40 rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          />

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Shreyas M
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8"
          >
            Full Stack Developer, Android App Developer, Data Scientist
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/shreyas29-official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyas-m-138b48235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shreyasman333@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Bouncing Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 40 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <User className="mr-4 text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            A passionate and motivated full-stack developer with a strong
            interest in web development, cloud computing, Android app
            development, and data science. Skilled in technologies like React,
            Node.js, Flutter, and Python, with a solid understanding of building
            responsive web interfaces, mobile applications, and data-driven
            solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4">Frontend</h3>
              <p className="text-gray-400">
                React, TypeScript, Tailwind CSS, Next.js
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4">Backend</h3>
              <p className="text-gray-400">
                Node.js, Express, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4">Tools</h3>
              <p className="text-gray-400">Git, Docker, AWS, CI/CD</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        ref={educationRef}
        initial={{ opacity: 0, y: 40 }}
        animate={educationInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <GraduationCap className="mr-4 text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={educationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-purple-400">
                PES College
              </h3>
              <p className="text-gray-300 mt-2">
                Master of Computer Applications (MCA)
              </p>
              <p className="text-gray-400">2023 - 2025</p>
              <p className="text-gray-400">CGPA: 7.63</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={educationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-purple-400">
                BMS College
              </h3>
              <p className="text-gray-300 mt-2">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="text-gray-400">2020 - 2023</p>
              <p className="text-gray-400">CGPA: 8.5</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Resume Section */}
      <motion.section
        ref={resumeRef}
        initial={{ opacity: 0, y: 40 }}
        animate={resumeInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <FileText className="mr-4 text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">Resume</h2>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-2xl">
              <h3 className="text-xl font-semibold mb-6 text-white">Skills</h3>
              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-purple-400 font-medium mb-2 flex items-center">
                    <img
                      src={prog}
                      alt="Programming"
                      className="w-5 h-5 mr-2"
                    />
                    Programming Languages
                  </h4>
                  <p className="text-gray-300 ml-7">
                    JavaScript, TypeScript, Python, Java, SQL
                  </p>
                </div>

                <div>
                  <h4 className="text-purple-400 font-medium mb-2 flex items-center">
                    <img
                      src={framework}
                      alt="Frameworks"
                      className="w-5 h-5 mr-2"
                    />
                    Frameworks & Libraries
                  </h4>
                  <p className="text-gray-300 ml-7">
                    React, Node.js, Express, Flutter, TensorFlow
                  </p>
                </div>

                <div>
                  <h4 className="text-purple-400 font-medium mb-2 flex items-center">
                    <img
                      src="/tools.png"
                      alt="Tools"
                      className="w-5 h-5 mr-2"
                    />
                    Tools & Technologies
                  </h4>
                  <p className="text-gray-300 ml-7">
                    Git, Docker, AWS, Firebase, MongoDB
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-purple-400">Full Stack Developer</h4>
                  <p className="text-gray-400">2022 - Present</p>
                  <p className="text-gray-300 mt-2">
                    Developed and maintained web applications using React and
                    Node.js. Implemented responsive designs and optimized
                    application performance.
                  </p>
                </div>
                <div>
                  <h4 className="text-purple-400">Mobile App Developer</h4>
                  <p className="text-gray-400">2021 - 2022</p>
                  <p className="text-gray-300 mt-2">
                    Built cross-platform mobile applications using Flutter.
                    Integrated REST APIs and implemented real-time features.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={resumeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <a
              href="/profile/Shreyasm_resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              <FileText className="mr-2" size={20} />
              Download Full Resume
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Code className="mr-4 text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={dog}
                alt="Happy Paws"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Happy Paws</h3>
                <p className="text-gray-400 mb-4">
                  Happy Paws is a mobile app that streamlines dog adoption,
                  rescue, and veterinary care through a user-friendly platform.
                  It connects users, organizations, and vets to improve animal
                  welfare with AI-powered tools and real-time support.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      Flutter
                    </span>
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      Firebase
                    </span>
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      Dart
                    </span>
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      Machine Learning
                    </span>
                  </div>
                  {/* <a href="#" className="text-purple-400 hover:text-purple-300">
                    <ExternalLink size={20} />
                  </a> */}
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={potholes}
                alt="Geo-Tagging Potholes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Geo-Tagging of Potholes
                </h3>
                <p className="text-gray-400 mb-4">
                  Geo-Tagging of Potholes Using Real-Time Mapping is a web-based
                  platform developed with Java, JSP, HTML, CSS, and SQL that
                  enables users to report and visualize potholes on a live map.
                  It allows geo-tagged submissions, stores data in a database,
                  and aids authorities in efficient road maintenance and
                  monitoring.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      Java
                    </span>
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      SQL
                    </span>
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      JSP
                    </span>
                  </div>
                  {/* <a href="#" className="text-purple-400 hover:text-purple-300">
                    <ExternalLink size={20} />
                  </a> */}
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
                alt="Airline Price Prediction"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Airline Price Prediction
                </h3>
                <p className="text-gray-400 mb-4">
                  Airline Price Prediction is a machine learning project that
                  uses XGBoost and Decision Tree models to accurately forecast
                  flight prices based on various features. Built with Flask for
                  deployment, the web app provides real-time fare predictions to
                  help users make cost-effective travel decisions.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      Flask
                    </span>
                  </div>
                  {/* <a href="#" className="text-purple-400 hover:text-purple-300">
                    <ExternalLink size={20} />
                  </a> */}
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={street}
                alt="MyCommunity"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">MyCommunity</h3>
                <p className="text-gray-400 mb-4">
                  MyCommunity is a community engagement platform designed to
                  connect local residents, organizations, and authorities. The
                  app empowers users to report issues (like potholes, garbage,
                  or streetlight problems), participate in local events, share
                  community news, and collaborate on neighborhood improvement
                  projects. It fosters transparency, real-time communication,
                  and civic participation, helping to build stronger, more
                  connected, and proactive communities..
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      MERN
                    </span>
                    <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                      MongoDB,Express,React,Tailwind,Nodejs
                    </span>
                  </div>
                  {/* <a href="#" className="text-purple-400 hover:text-purple-300">
                    <ExternalLink size={20} />
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0, y: 40 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Mail className="mr-4 text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">Get In Touch</h2>
          </div>
          <p className="text-gray-300 text-lg mb-8">
            I'm always open to new opportunities and interesting projects. Feel
            free to reach out if you'd like to collaborate!
          </p>
          <motion.a
            href="mailto:contact@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Say Hello
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2025 Shreyas M. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

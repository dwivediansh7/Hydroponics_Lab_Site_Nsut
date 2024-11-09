import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaFlask, FaBuilding, FaSeedling } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import { FiUsers } from 'react-icons/fi';
import { HiDocumentText } from 'react-icons/hi';
import { BsGraphUp } from 'react-icons/bs';

// Enhanced animation variants
const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

// New floating animation for decorative elements
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-custom text-gray-900 relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5 animate-pulse"></div>
      <motion.div 
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"
      />
      <motion.div 
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"
      />

      {/* Content Container with improved spacing */}
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-20 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-green-600 to-primary bg-clip-text text-transparent tracking-tight leading-[1.1] mb-6">
            About NSUT Hydroponics Lab
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-700/90 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide"
          >
            Pioneering the future of <span className="text-primary font-semibold">sustainable agriculture</span> through 
            <span className="text-primary font-semibold"> innovation</span> and <span className="text-primary font-semibold">research</span>
          </motion.p>
        </motion.div>

        {/* Main Content with improved grid layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl leading-relaxed tracking-wide font-medium text-gray-800">
              Welcome to <span className="font-extrabold text-primary">NSUT's state-of-the-art Hydroponics Laboratory</span>, 
              where <span className="italic">innovation meets sustainable agriculture</span>. Our facility is dedicated to advancing 
              <span className="font-semibold"> soil-less farming techniques</span> and developing 
              <span className="font-semibold"> cutting-edge solutions</span> for modern agricultural challenges.
            </p>
            <p className="text-xl leading-relaxed text-gray-800 font-medium">
              Established in <span className="font-extrabold text-primary">2023</span>, our lab serves as a hub for 
              <span className="font-semibold"> research</span>, <span className="font-semibold">education</span>, and 
              <span className="font-semibold"> technological advancement</span> in hydroponic farming systems. We focus on developing 
              sustainable growing methods that optimize resource usage while maximizing crop yields.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <button className="btn btn-primary">Learn More</button>
              <button 
                onClick={() => navigate('/contactus')} 
                className="btn glass-effect hover:bg-primary/5"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-green-500/10 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="card overflow-hidden transform group-hover:scale-[1.02] group-hover:-translate-y-2 transition-all duration-500">
              <img 
                src="/labimage.jpg" 
                alt="NSUT Hydroponics Lab"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          
        </div>

        {/* Features Section with enhanced cards */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mt-24 lg:mt-32 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Research Focus",
              items: ["Nutrient optimization", "Growth monitoring systems", "Sustainable practices", "Resource efficiency"],
              icon: <FaFlask className="text-primary/80" />,
              color: "from-blue-500/10 to-green-500/10"
            },
            {
              title: "Facilities",
              items: ["Advanced growing systems", "Environmental controls", "Monitoring equipment", "Research stations"],
              icon: <FaBuilding className="text-primary/80" />,
              color: "from-green-500/10 to-teal-500/10"
            },
            {
              title: "Impact",
              items: ["Student training", "Research publications", "Industry collaboration", "Community outreach"],
              icon: <FaSeedling className="text-primary/80" />,
              color: "from-teal-500/10 to-blue-500/10"
            }
          ].map((feature) => (
            <motion.div 
              key={feature.title}
              variants={fadeInScale}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl`}></div>
              <div className="card glass-effect relative backdrop-blur-lg hover:bg-white/40 p-8">
                <span className="text-5xl mb-6 block transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent drop-shadow-sm">
                  {feature.title}
                </h3>
                <ul className="space-y-4">
                  {feature.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center space-x-4 text-gray-800 font-medium hover:text-primary transition-colors duration-300"
                    >
                      <span className="w-2 h-2 bg-primary/50 rounded-full"></span>
                      <span className="leading-relaxed tracking-wide hover:tracking-wider transition-all">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section with enhanced animations */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { number: "50+", label: "Research Projects", delay: 0, icon: <BsGraphUp className="text-3xl text-primary/70 mb-4" /> },
            { number: "1000+", label: "Students Trained", delay: 0.2, icon: <IoSchool className="text-3xl text-primary/70 mb-4" /> },
            { number: "20+", label: "Publications", delay: 0.4, icon: <HiDocumentText className="text-3xl text-primary/70 mb-4" /> },
            { number: "15+", label: "Industry Partners", delay: 0.6, icon: <FiUsers className="text-3xl text-primary/70 mb-4" /> }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay }}
              className="relative group"
            >
              <div className="card text-center p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-white/80">
                {stat.icon}
                <motion.h4 
                  className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary via-green-600 to-primary bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.h4>
                <p className="text-sm text-gray-800 font-bold tracking-widest uppercase">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaFlask } from "react-icons/fa";
import { MdBiotech } from "react-icons/md";
import { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight, BsArrowUpRight, BsArrowRightCircle } from 'react-icons/bs';

export const Achievements = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sliderImages = [
    "/images/dbt-expo-1.jpg",
    "/images/dbt-expo-2.jpg"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center">
        {/* Content Container */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Green Box with Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#07300f] p-12"
            >
              <h1 className="text-5xl text-white mb-8">Achievements</h1>
              <p className="text-white/90 text-lg leading-relaxed">
                The Centre of Excellence in Hydroponics has become a leading force in advancing 
                sustainable agriculture through innovation, research, and community engagement. 
                We are proud to highlight some of our key achievements that reflect our dedication 
                to reshaping modern farming and promoting hydroponics as a viable solution for 
                food security, environmental sustainability, and community impact.
              </p>
            </motion.div>

            {/* Right side - Lab Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <img 
                src="/images/lab-greenhouse.jpg"
                alt="Hydroponics Lab"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Urverdure Section */}
      <div className="bg-[#07300f] py-24 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="font-serif text-6xl mb-8 text-left">Urverdure pvt ltd.</h2>
              <p className="text-white/90 text-lg leading-relaxed text-left max-w-[600px] mb-8">
                We proudly launched Urverdure, a pioneering startup dedicated to sustainable hydroponic solutions and 
                modern agriculture. With a focus on innovation, research, and eco-friendly practices, Urverdure bridges the 
                gap between science and real-world application, providing cutting-edge hydroponic systems, nutrient 
                solutions, and training programs. This milestone marks our commitment to transforming agriculture and 
                empowering communities.
              </p>
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block px-8 py-3 bg-[#2F5A32] hover:bg-[#2F5A32]/80 
                          text-white rounded-lg transition-all duration-300"
              >
                Visit Site
              </motion.a>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-end"
            >
              <div className="bg-white p-8 rounded-lg max-w-[400px]">
                <img 
                  src="/images/urverdure-logo.png" 
                  alt="Urverdure Logo" 
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Published Research Papers Section */}
      <div className="py-24 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-16">
            {/* Title Section - Left Side */}
            <div className="w-1/4">
              <h2 className="text-[#07300f] text-7xl font-serif leading-tight sticky top-24">
                Our<br />Published<br />Research<br />Papers
              </h2>
            </div>

            {/* Papers Grid - Right Side */}
            <div className="w-3/4">
              <div className="grid grid-cols-2 gap-12">
                {[
                  {
                    journal: "International Journal of Food Science & Technology",
                    title: "Effect of selected elicitors on phytochemical content and antioxidant activity of Buckwheat (Fagopyrum esculentum) sprouts obtained from seeds cultivated using the hydroponics technology."
                  },
                  {
                    journal: "Biochemical Systematics and Ecology",
                    title: "Study of the phytochemical profile of hydroponically cultivated buckwheat (Fagopyrum esculentum Moench) at different phenological stages"
                  },
                  {
                    journal: "Journal of Horticulture",
                    title: "Comparison of Growth Indices, Biomass, Anatomy, Phytochemical and Elemental Activity of Hydroponically Grown and Soil Grown Amaranthus"
                  },
                  {
                    journal: "Materials Today: Proceedings",
                    title: "Phytoremediation of selected heavy metals contaminated water by Amaranthus hybridus in hydroponic system"
                  }
                ].map((paper, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#07300f] p-8 w-[300px] h-[300px] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                    style={{
                      width: '300px',
                      height: '300px',
                      minWidth: '300px',
                      minHeight: '300px',
                      maxWidth: '300px',
                      maxHeight: '300px'
                    }}
                  >
                    <div>
                      <h3 className="text-yellow-400 text-2xl font-medium mb-6 text-center">
                        {paper.journal}
                      </h3>
                      <p className="text-white/90 text-base line-clamp-4 text-center">
                        {paper.title}
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-center gap-2 text-yellow-400">
                        <span className="text-sm font-medium">Read More</span>
                        <BsArrowRightCircle className="text-xl" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DBT Expo Image Slider Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-[#07300f] mb-6">DBT and Startupindia Expo</h2>
            <p className="text-xl text-gray-600">
              Showcasing our innovations and achievements at national level exhibitions
            </p>
          </motion.div>

          {/* Slider Container */}
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {sliderImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentImage === index ? 1 : 0,
                  scale: currentImage === index ? 1 : 1.1,
                }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img
                  src={img}
                  alt={`DBT Expo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}

            {/* Slider Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all backdrop-blur-sm"
              >
                <BsChevronLeft className="text-white text-2xl" />
              </button>
              <div className="flex gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImage === index ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all backdrop-blur-sm"
              >
                <BsChevronRight className="text-white text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
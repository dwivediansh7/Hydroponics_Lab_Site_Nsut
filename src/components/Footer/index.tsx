import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#07300f] text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>
            <div className="space-y-2">
              <p>Centre of Excellence</p>
              <p>Hydroponics Project</p>
              <p>NSUT</p>
              <p>Dwarka, Delhi</p>
              <p>110078</p>
            </div>
          </div>

          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">About Us</h3>
            <div className="space-y-2">
              <p><Link to="/mission" className="hover:text-white/80">Mission & Vision</Link></p>
              <p><Link to="/team" className="hover:text-white/80">Our Team</Link></p>
              <p><Link to="/facilities" className="hover:text-white/80">Facility Overview</Link></p>
              <p><Link to="/training" className="hover:text-white/80">Training Programs</Link></p>
              <p><Link to="/research" className="hover:text-white/80">Research</Link></p>
              <p><Link to="/community" className="hover:text-white/80">Community Outreach</Link></p>
            </div>
          </div>

          {/* Helpful Links Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Helpful Links</h3>
            <div className="space-y-2">
              <p><Link to="/faq" className="hover:text-white/80">FAQ</Link></p>
              <p><Link to="/blog" className="hover:text-white/80">Blog</Link></p>
              <p><Link to="/news" className="hover:text-white/80">News and Updates</Link></p>
            </div>
          </div>

          {/* Get Involved Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Get Involved</h3>
            <div className="space-y-2">
              <p><Link to="/partnerships" className="hover:text-white/80">Partnerships</Link></p>
              <p><Link to="/volunteer" className="hover:text-white/80">Volunteer Opportunities</Link></p>
              <p><Link to="/careers" className="hover:text-white/80">Career Opportunities</Link></p>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Opening Hours</h3>
            <div className="space-y-2">
              <p>Mon - Fri: 7am - 7pm</p>
              <p>Saturday: 8am - 5pm</p>
              <p>Sunday: 8am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 
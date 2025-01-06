import Image from "next/image";
import Heart from "./components/Heart";
import Trending from "./components/Trending";
// import Button from '@mui/material/Button';
// import { Button } from "@material-tailwind/react";
// import {Button} from "./components/MyBtn";
// import { Button}  from './MTailwind';

// import Trending from "./components/Trending";
import FAQ from "./components/FAQ";
export default function Home() {
  return (
    <div>
      
      <nav className="navbar">
        <div className="logo">Destination Wedding</div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#packages">Plans</a>
          {/* <Button className="bg-blue-500 text-white p-2 rounded">This</Button> */}
          <a href="#destination">Destination</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="buttons">
          <button>Get Started</button>
          
          <button>
            <Image src="/img/profile.png" alt="Profile" width={40} height={20} />
            </button>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <h1>Plan Your Destination Wedding</h1>
        <button className="btn">See Plans</button>
      </section>

      <div id="destination" className="container">
        <div className="header">
          <h2>Top Trending Wedding Destinations</h2>
          <button className="view-all">View all</button>
        </div>

        <div className="trending-grid">
          {['Chandragiri Resort', 'Venue 1', 'Venue 2', 'Venue 3'].map((title, index) => (
           <div key={index} className="destination-card">
           <div className="image-wrapper">
             <Trending />
             <Heart />
           </div>
           <div className="card-content">
             <h3>{title}</h3>
             <p>Description</p>
           </div>
         </div>
           
          ))}
          </div>
        

        {/* <div className="trending-grid">
          <Trending/>
        </div> */}

        <h2>Top selection</h2>
        <div className="selection-grid">
          {['Destination', 'Decoration', 'Food', 'Mocktail/Cocktail'].map((category, index) => (
            <div key={index} className="selection-card">
              <Image src={`/img/venue${index + 1}.jpg`} alt={category} width={300} height={200} />
              <p>{category}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="cta">
        <div className="cta-content">
          <h1>Customize yours</h1>
          <button className="plan-button">Plan With Us</button>
        </div>
      </section>

      <section id="packages" className="section">
        <h2 style={{ textAlign: 'center' }}>Packages</h2>
        <div className="packages">
          <div className="package">Premium</div>
          <div className="package">Standard</div>
          <div className="package">Basic</div>
        </div>
      </section>

      <div className="customize-section">
        <div className="customize-text">
          <h2>Plan your wedding with sweeter memories and better view.</h2>
          <p>We intertwine tradition and adventure.</p>

          <div className="faq-section mt-20">
            <h3 className="mb-10">Commonly asked questions</h3>
            <div className="faq-item border-b border-b-white mb-5">
              <div className="faq-question faq-question py-4 flex justify-between items-center cursor-pointer">
                <FAQ/>
              </div>
            </div>
            
          </div>
        </div>
        <div className="customize-image">
          <Image src="/img/customize-wedding.jpg" alt="Customized Wedding" width={600} height={400} />
        </div>
      </div>

      <footer id="contact">
        <div className="footer-info">
          <div className="footer-column">
            <h4>LOGO</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">Destination</a>
            <a href="#">Contact</a>
            <a href="#">Plan</a>
          </div>
          <div className="footer-column">
            <h4>Get in touch</h4>
            <p>Call: +977 9841234567</p>
            <p>Email: support@venue.com</p>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
        <div style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #eee' }}>
          <p>Connect with us</p>
          <div className="social-links">
            <a href="#"><Image src="/img/facebook.png" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="/img/instagram.jpg" alt="Instagram" width={24} height={24} /></a>
            <a href="#"><Image src="/img/linkedin.png" alt="LinkedIn" width={24} height={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

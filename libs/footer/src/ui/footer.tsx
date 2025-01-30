import React from 'react';
import { footerContent } from './footerData';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerSection">
          <h2>{footerContent.title}</h2>
          <p>{footerContent.description}</p>
        </div>

        <div className="footerSection">
          <h3>Product</h3>
          <ul>
            {footerContent.links.product.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footerSection">
          <h3>Resources</h3>
          <ul>
            {footerContent.links.resources.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footerSection">
          <h3>Company</h3>
          <ul>
            {footerContent.links.company.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footerSection callToAction">
          <h3>Try It Today</h3>
          <p>Get started for free. Add your whole team as your needs grow.</p>
          <a href="https://prod.mobilyaplan.app/login" className="startButton">
            Start today →
          </a>
        </div>
      </div>

      <div className="footerBottom">
        <p>©2025 MobilyaPlan LLC.</p>
        <div className="footerLinks">
          <a href="url">Terms & privacy</a> | <a href="url">Security</a> |{' '}
          <a href="url">Status</a>
        </div>

        <div className="socialMedia">
          {footerContent.links.socialMedia.map((social, index) => (
            <a key={index} href={social.url}>
              <i className={social.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

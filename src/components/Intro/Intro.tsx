import React from 'react';
import './Intro.css';

export const Intro: React.FC = () => {
  return (
    <div className="intro">
      <div className="intro-text-container">
        <h6>Welcome</h6>
        <p><em>Good web design is like a great conversation</em> - it's 
          engaging, intuitive, and leaves a lasting impression.</p>
        <p>
          Great frontend web design is my passion. I believe that a well-designed
          website can make all the difference when it comes to engaging with 
          users and building a strong online presence. Like any great 
          conversation, it requires a keen understanding of your audience, 
          an ability to listen to their needs, and a commitment to delivering a 
          memorable experience.
        </p>
        <p>
          With a focus on clean, organized code and user-friendly interfaces, I 
          strive to create designs that are not only visually appealing but also
          intuitive and easy to navigate. Whether you're looking to build a new 
          website from scratch or simply refresh an existing one, I'm committed 
          to bringing your vision to life and helping you achieve your goals 
          online.
        </p>
      </div>
    </div>
  );
}
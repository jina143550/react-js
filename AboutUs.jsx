import React from 'react';

const items = [
  { icon: '🗺️', title: 'Our Mission',  desc: 'To inspire and guide travelers with curated recommendations for unforgettable experiences.' },
  { icon: '👥', title: 'Our Team',     desc: 'A diverse group of explorers, writers, and photographers from around the globe.' },
  { icon: '🌟', title: 'Our Values',   desc: 'We believe in sustainable travel, cultural respect, and creating memories that last a lifetime.' },
  { icon: '📍', title: 'Our Reach',    desc: 'We have covered over 100 countries and thousands of destinations to bring you the best travel guides.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <h1>About Us</h1>
        <p>We are a passionate team of travel enthusiasts dedicated to helping you discover the world's most amazing destinations.</p>
      </section>

      <section className="page-content">
        <div className="about-grid">
          {items.map((item) => (
            <div className="about-card" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

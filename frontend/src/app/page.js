'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './Home.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/doctors?location=${encodeURIComponent(location)}&search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZt1PvK1y2H6YEZddNfpFaY0CJEPbPcDCEQ&s" alt="Practo" /> {/* replace with actual logo path */}
        </div>
        <nav className="nav-links">
          <a href="#">Find Doctors</a>
          <a href="#">Video Consult</a>
          <a href="#">Surgeries</a>
        </nav>
        <div className="header-right">
          <a href="#">For Corporates</a>
          <a href="#">For Providers</a>
          <a href="#">Security & help</a>
          <button className="login-btn">Login / Signup</button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-container">
        <h1 className="main-heading">Your home for health</h1>
        <h2 className="sub-heading">Find and Book</h2>

        <div className="search-bar">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="location-input"
          />
          <input
            type="text"
            placeholder="Search doctors, clinics, hospitals, etc."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>

        <div className="popular-searches">
          <span>Popular searches:</span>
          <a href="#">Dermatologist</a>
          <a href="#">Pediatrician</a>
          <a href="#">Gynecologist/Obstetrician</a>
          <a href="#">Others</a>
        </div>
      </main>
    </>
  );
}

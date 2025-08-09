"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import "./Doctors.css"; // ✅ Import the CSS file

export default function Doctors() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (search) {
      axios
        .get(`http://localhost:5000/api/doctors?search=${encodeURIComponent(search)}`)
        .then((res) => setDoctors(res.data))
        .catch((err) => console.error(err));
    }
  }, [search]);

  return (
    <main className="doctors-container">
      <h2 className="doctors-title">Doctor Listings</h2>

      {doctors.length > 0 ? (
        <ul className="doctors-list">
          {doctors.map((doc) => (
            <li key={doc.id} className="doctor-card">
              <h3 className="doctor-name">{doc.name}</h3>
              <p className="doctor-info">
                <strong>Specialty:</strong> {doc?.speciality}
              </p>
              <p className="doctor-info">
                <strong>Experience:</strong> {doc.experience} years
              </p>
            </li>
          ))}
        </ul>
      ) : (
        search && <p className="no-results">No doctors found for "{search}"</p>
      )}
    </main>
  );
}

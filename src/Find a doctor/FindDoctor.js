import React, { useState } from "react";
import "./FindDoctor.css";
import { Link } from "react-router-dom";
import { useDoctor } from "../DoctorContext"; // Import the context hook
import doctor2 from "../icons/doctor3.png";
import starr from "../icons/Star 3.svg";
import chevronleft from "../icons/chevron-left.svg";
import filter from "../icons/Filter.svg";
import searchIcon from "../icons/search.svg";

const FindDoctor = () => {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    gender: "",
    rating: "",
    availability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
  });

  const { setDoctorData } = useDoctor(); // Access the setDoctorData function from context
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage] = useState(6);

  const doctors = [
    {
      id: 1,
      name: "Dr. Nida Ali",
      specialty: "General Practitioner",
      location: "Lahore, Punjab",
      experience: "10 years in practice",
      consultationFee: 3000,
      rating: 4.9,
      availableNow: true,
    },
    {
      id: 2,
      name: "Dr. Ayesha Khan",
      specialty: "Cardiologist",
      location: "Karachi, Sindh",
      experience: "12 years in practice",
      consultationFee: 5000,
      rating: 4.8,
      availableNow: false,
    },
    {
      id: 3,
      name: "Dr. Asim Raza",
      specialty: "Neurologist",
      location: "Islamabad, Capital Territory",
      experience: "8 years in practice",
      consultationFee: 4000,
      rating: 4.7,
      availableNow: true,
    },
    {
      id: 4,
      name: "Dr. Sana Tariq",
      specialty: "Dermatologist",
      location: "Rawalpindi, Punjab",
      experience: "7 years in practice",
      consultationFee: 3500,
      rating: 4.6,
      availableNow: true,
    },
    {
      id: 5,
      name: "Dr. Faisal Ahmed",
      specialty: "Orthopedic Surgeon",
      location: "Faisalabad, Punjab",
      experience: "15 years in practice",
      consultationFee: 6000,
      rating: 4.9,
      availableNow: false,
    },
    {
      id: 6,
      name: "Dr. Sara Malik",
      specialty: "Pediatrician",
      location: "Multan, Punjab",
      experience: "5 years in practice",
      consultationFee: 2000,
      rating: 4.5,
      availableNow: true,
    },
    {
      id: 7,
      name: "Dr. Sophia Carter",
      specialty: "Psychiatrist",
      location: "Multan, Punjab",
      experience: "5 years in practice",
      consultationFee: 2000,
      rating: 4.5,
      availableNow: true,
    },
    {
      id: 8,
      name: "Dr. Liam Miller",
      specialty: "Endocrinologist",
      location: "Multan, Punjab",
      experience: "5 years in practice",
      consultationFee: 2000,
      rating: 4.5,
      availableNow: false,
    },
  ];

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="find-doctor-container">
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div className="search-container1">
          <select className="doctor-dropdown">
            <option value="doctors">Doctors</option>
            <option value="dentists">Dentists</option>
            <option value="specialists">Specialists</option>
          </select>
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search the best doctor"
          />
        </div>
      </div>
      {/* Filters Section */}
      <div className="filtersection-doctorlist">
        <div className="filters-section">
          <div className="filterheading">
            <h2>Filters</h2>
            <img src={filter} alt="filter funnel" className="filter-icon" />
          </div>

          <form>
            <label>
              Type of Doctor:
              <select
                name="type"
                value={filters.type}
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="General Practitioner">
                  General Practitioner
                </option>
                <option value="Cardiologist">Cardiologist</option>
              </select>
            </label>

            <label>
              Location:
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
                placeholder="Enter location"
              />
            </label>

            <label>
              Gender:
              <select
                name="gender"
                value={filters.gender}
                onChange={(e) =>
                  setFilters({ ...filters, gender: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>

            <label>
              Rating:
              <select
                name="rating"
                value={filters.rating}
                onChange={(e) =>
                  setFilters({ ...filters, rating: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="4">4+</option>
                <option value="4.5">4.5+</option>
              </select>
            </label>

            <h3>Availability:</h3>
            <div className="availability-container">
              {[
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
                "sunday",
              ].map((day) => (
                <label key={day}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}:
                  <input
                    type="checkbox"
                    className="checkboxx"
                    name={day}
                    checked={filters.availability[day]}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        availability: {
                          ...filters.availability,
                          [day]: e.target.checked,
                        },
                      })
                    }
                  />
                </label>
              ))}
            </div>
          </form>
        </div>

        {/* Doctors List Section */}
        <div className="doctors-list">
          {currentDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-card-header">
                <div className="doctor-main">
                  <div style={{ display: "flex", gap: "8px" }}>
                    <img
                      src={doctor2}
                      alt={`${doctor.name} profile`}
                      className="doctor-image"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "20px",
                          marginBottom: "8px",
                        }}
                      >
                        {doctor.name}
                      </h3>
                      <span
                        style={{ margin: 0, fontSize: "16px", fontWeight: 550 }}
                      >
                        {doctor.specialty}
                      </span>
                    </div>
                  </div>

                  <div className="doctor-rating">
                    <img src={starr} alt="star" />
                    <span>{doctor.rating}</span>
                  </div>
                </div>
                <div className="doctor-info">
                  <p>
                    Location:
                    <br />
                    <span className="info-value">{doctor.location}</span>
                  </p>
                  <p>
                    Experience:
                    <br />
                    <span className="info-value">{doctor.experience}</span>
                  </p>
                  <div className="consultation-row">
                    <p>
                      Consultation Fee:{" "}
                      <span className="info-value">
                        PK {doctor.consultationFee}
                      </span>
                    </p>
                    {doctor.availableNow && (
                      <span className="available-now">Available Now</span>
                    )}
                  </div>
                </div>
              </div>
              <Link
                to="/appointments"
                onClick={() => setDoctorData(doctor)} // Set the doctor data in context when clicked
              >
                <button className="book-appointment-button">
                  Book Appointment
                  <img src={chevronleft} alt="chevron" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="pagination-container">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="pagination-button"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from(
          { length: Math.ceil(doctors.length / doctorsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              className={`pagination-number ${
                currentPage === i + 1 ? "active" : ""
              }`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
        <button
          onClick={() => paginate(currentPage + 1)}
          className="pagination-button"
          disabled={currentPage === Math.ceil(doctors.length / doctorsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FindDoctor;

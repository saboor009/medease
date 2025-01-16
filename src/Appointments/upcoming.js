import React, { useState } from "react";
import "./Upcoming.css";
import doctorImage from "../icons/woman-doctor-wearing-lab-coat-with-stethoscope-isolated 1.png";
import calender from "../icons/calender.svg";
import { useDoctor } from "../DoctorContext"; // Import the context hook
import { Link } from "react-router-dom";

export const Upcoming = () => {
  const { doctor } = useDoctor(); // Access the doctor data from context
  const [isUpcoming, setIsUpcoming] = useState(true);

  // Get the current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h1 className="appointments-title">Appointments</h1>
        <div className="toggle-container">
          <button
            className={`toggle-text ${isUpcoming ? "upcoming" : "past"}`}
            onClick={() => setIsUpcoming(!isUpcoming)}
          >
            {isUpcoming ? "Upcoming" : "Past"}
          </button>
        </div>
      </div>

      <div className="appointments-section">
        <h2 className="appointments-subtitle">
          {isUpcoming ? "Upcoming Appointments" : "Past Appointments"}
        </h2>

        {isUpcoming ? (
          // Upcoming Appointments
          <div className="appointment-card">
            <div className="appointment-details">
              <div className="detail-item">
                <span className="detail-label">Doctor’s Name</span>
                <span className="detail-value">{doctor.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Specialty</span>
                <span className="detail-value">{doctor.specialty}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Date and Time</span>
                <span className="detail-value">{`${formattedDate} - ${formattedTime}`}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">{doctor.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Appointment Status</span>
                <span className="status-badge">Rescheduled</span>
              </div>
              <div className="button-group">
                <button className="add-calendar-button">
                  <img
                    className="calender-icon"
                    alt="Calendar icon"
                    src={calender}
                  />
                  Add to Calendar
                </button>
                <Link to="/FindDoctor">
                  <button className="cancel-button">Cancel</button>
                </Link>
              </div>
            </div>
            <div className="doctor-profile-1">
              <img
                className="doctor-image-1"
                alt="Doctor profile"
                src={doctorImage}
              />
            </div>
          </div>
        ) : (
          <div className="no-appointments-message">
            <p>There are no past appointments.</p>
          </div>
        )}
      </div>
    </div>
  );
};

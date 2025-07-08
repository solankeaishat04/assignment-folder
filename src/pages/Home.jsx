import React from "react";
import Button from "../components/button";
import { useState } from "react";

function Home() {
  const [form, setForm] = useState({
    Name: "",
    Age: "",
    Gender: "",
    PhoneNumber: "",
    Email: "",
    Complexion: "",
    RelationshipStatus: "",
    Height: "",
    Hobbies: "",
    Religion: "",
    BestFood: "",
    Nationality: "",
  });
  
  const [showCard, setShowCard] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(true);
    setSubmitMessage("Submitted successfully!");
    setTimeout(() => setSubmitMessage(""), 3000);
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(10, 128, 168, 0.7)",
        color: "white",
        margin: "10px auto",
        width: "30vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 8px rgba(0,0,0,3)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "5px" }}>About Me</h2>
      
      <form onSubmit={handleSubmit} style={{ width: "100%", gap: "10%", display: "block", marginBottom: "3px"}}>
        <div style={{display: "block", width: "100%", margin: "0 auto", padding: "20px", borderRadius: "10px"}}>
          <label htmlFor="Name"><strong>Name:</strong></label>
          <input type="text" id="Name" name="Name" style={{ width:"80%", padding:"3px", marginBottom: "10px", solid: "#ccc", borderRadius:"5px", boxSizing:"border-box"}} value={form.Name} onChange={handleChange} /> <br />
        
          <label htmlFor="Age"><strong>Age:</strong></label>
          <input type="number" id="Age" name="Age" style={{ width:"80%", padding:"3px", marginBottom: "10px", solid: "#ccc", borderRadius:"5px", boxSizing:"border-box"}} value={form.Age} onChange={handleChange} /> <br />
        
          <label htmlFor="Gender"><strong>Gender:</strong></label>
          <select id="Gender" name="Gender" style={{ width:"70%", padding:"3px", marginBottom: "10px", solid: "#ccc", borderRadius:"5px", boxSizing:"border-box"}} value={form.Gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select> <br />
        
          <label htmlFor="PhoneNumber"><strong>Phone Number:</strong></label>
          <input type="tel" id="PhoneNumber" name="PhoneNumber" style={{ width:"50%", padding:"3px", marginBottom: "10px", solid: "#ccc", borderRadius:"5px", boxSizing:"border-box"}} value={form.PhoneNumber} onChange={handleChange} /> <br />
        
          <label htmlFor="Email"><strong>Email:</strong></label>
          <input type="email" id="Email" name="Email" style={{ width:"80%", padding:"3px", marginBottom: "10px", solid: "#ccc", borderRadius:"5px", boxSizing:"border-box"}} value={form.Email} onChange={handleChange} /> <br />
        
        </div>
       
        {submitMessage && <p className="text-yellow">{submitMessage}</p>}
        <Button type="submit">Submit</Button>
      </form>

      {showCard && (
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          color: "#333",
          margin: "20px auto",
          width: "90%",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}>
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Your Details</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {form.Name && <div><strong>Name:</strong> {form.Name}</div>}
            {form.Age && <div><strong>Age:</strong> {form.Age}</div>}
            {form.Gender && <div><strong>Gender:</strong> {form.Gender}</div>}
            {form.PhoneNumber && <div><strong>Phone Number:</strong> {form.PhoneNumber}</div>}
            {form.Email && <div><strong>Email:</strong> {form.Email}</div>}
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Home;
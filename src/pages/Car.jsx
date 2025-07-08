import React from "react";
import { CarData } from "../data/CarData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Car() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
        }}
      >
        <h2 style={{ margin: "0", fontSize: "1.5rem" }}>Aye_eesha
        Autos</h2>
        <p
          style={{
            display: "flex",
            gap: "15px",
            margin: "0",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          <span>Buy Now</span>
          <span>Contact</span>
          <span>Service</span>
        </p>
      </nav>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          padding: "20px",
        }}
      >
        {CarData.map((item) => (
          <div
            key={item.id}
            style={{
              height: "26rem",
              border: "solid 1px gray",
              boxShadow: "5px 2px 5px gray",
              padding: "30px 10px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <Link to={`/single/${item.id}`}>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            )}
            <FontAwesomeIcon
              icon={item.icon}
              style={{
                height: "2rem",
                color: "royalblue",
                backgroundColor: "lightblue",
                padding: "10px",
                borderRadius: "10px",
              }}
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.price && (
              <span
                style={{
                  fontWeight: "bold",
                  color: "green",
                  display: "block",
                  marginTop: "5px",
                }}
              >
                {item.price}
              </span>
            )}
            <button
              style={{
                backgroundColor: "royalblue",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "green")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "royalblue")}
            >
              Shop Now
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Car;

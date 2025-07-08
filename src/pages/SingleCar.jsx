import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CarData } from "../data/CarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SingleCar() {
  const [data, setData] = useState({});
  const { each } = useParams();

  useEffect(() => {
    const car = CarData.find((item) => item.id === parseInt(each));
    if (car) {
      setData(car);
    }
  }, [each]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: 'skyblue'
    }}>
      <div style={{
        maxWidth: '1000px',
        width: '95%',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        padding: '20px',
        position: 'relative'
      }}>
     
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginBottom: '25px'
            }}
          />
        )}

       
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '20px'
        }}>
          <FontAwesomeIcon 
            icon={data.icon || 'car'} 
            style={{
              fontSize: '1.8rem',
              color: '#2c3e50',
              padding: '12px',
              backgroundColor: '#ecf0f1',
              borderRadius: '10px'
            }}
          />
          <h1 style={{
            margin: 0,
            color: '#2c3e50',
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.5px'
          }}>
            {data.title}
          </h1>
        </div>

       
        <p style={{
          color: '#7f8c8d',
          lineHeight: 1.7,
          marginBottom: '25px',
          fontSize: '1.1rem'
        }}>
          {data.description}
        </p>

        
        {data.price && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '25px',
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px'
          }}>
            <span style={{
              fontWeight: 700,
              color: '#27ae60',
              fontSize: '1.5rem'
            }}>
              {data.price}
            </span>
            
            <button 
              style={{
                padding: '12px 30px',
                borderRadius: '25px',
                border: 'none',
                fontWeight: 600,
                cursor: data.available ? 'pointer' : 'not-allowed',
                backgroundColor: data.available ? 'blue' : '#e74c3c',
                color: 'white',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
                transform: 'scale(1)'
              }}
              disabled={!data.available}
              onMouseOver={e => data.available && (e.target.style.transform = 'scale(1.05)')}
              onMouseOut={e => data.available && (e.target.style.transform = 'scale(1)')}
            >
              {data.available ? "Available Now" : "Out of Stock"}
            </button>
          </div>
        )}

        
        {data.features && (
          <div style={{
            margin: '25px 0',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px'
          }}>
            <h3 style={{ 
              color: '#2c3e50',
              margin: '0 0 15px 0',
              fontSize: '1.2rem'
            }}>
              Key Features
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '10px'
            }}>
              {data.features.map((feature, index) => (
                <div key={index} style={{
                  padding: '12px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 500,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        {data.mileage && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px',
            borderTop: '2px solid #eee',
            marginTop: '20px'
          }}>
            <span style={{ color: '#7f8c8d', fontWeight: 500 }}>Mileage:</span>
            <span style={{ color: '#2c3e50', fontWeight: 600 }}>{data.mileage}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleCar;
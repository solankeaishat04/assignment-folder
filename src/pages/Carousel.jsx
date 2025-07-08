import React from "react";
import { useState, useEffect } from "react";
import { CarouselData } from "../data/CarouselData.js";


const Carousel = () => {
    const [carIndex, setCarIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCarIndex((prev) => (prev + 1) % CarouselData.length);
        }, 2000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: 'skyblue'
        }}>
            <div style={{
                width: '50%',
                height: '80%',
                position: 'relative',
                margin: '0 auto',
                overflow: 'hidden'
            }}>
                {CarouselData.map((car, index) => (
                    <div key={index} style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: carIndex === index ? 1 : 0,
                        transform: carIndex === index ? "translateX(0)" : "translateX(100%)",
                        transition: "transform 1s ease-out, opacity 1s ease-out"
                    }}>
                        <img 
                            src={car.icon} 
                            alt={car.title} 
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }} 
                        />
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: carIndex === index ? 'translate(-50%, -50%)' : 'translate(-150%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            width: '90%',
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: "10px",
                            borderRadius: "10px",
                            transition: "transform 1s ease-out"
                        }}>
                            <h3 style={{ 
                                fontSize: '2rem',
                                marginBottom: '1rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                {car.title}
                            </h3>
                            <p style={{ 
                                fontSize: '1rem',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                lineHeight: '1.5'
                            }}>
                                {car.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;





    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setCar(count=> (count +1) % CarouselData.length)
    //     }, 3000)
    //     return ()=>clearInterval(interval)
    // }, [])
    // return(
    //     <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
    //         <img src={CarouselData[Car].icon} style={{paddingTop: '50px', borderRadius: '10px 10px'}}/>
    //         <p style={{border: '2px solid orange', padding: '6px 8px', fontSize: '1.2rem', backgroundColor:
    //              'orange', color: 'white', borderRadius: '20px', width: '150px', textAlign: 'center'}}>{CarouselData[Car].store}</p>
    //         <p style={{fontSize: '1.35rem', fontFamily: 'serif'}}>{CarouselData[Car].desc}</p>
    //         <h2>{CarouselData[Car].price}</h2>
    //     </div>
    // )

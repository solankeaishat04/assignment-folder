const Button = ({ handle, children }) => {
    return (
      <button
        style={{
          backgroundColor: "#0000FF",
          color: "white",
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0px 4px 6px rgba(44, 178, 202, 0.2)",
        }}
        onClick={handle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#111184")} 
        onMouseOut={(e) => (e.target.style.backgroundColor = "00008B")}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
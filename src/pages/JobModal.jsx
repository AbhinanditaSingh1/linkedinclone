import React from "react";

const JobModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose} 
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()} 
                style={{
                    background: "white",
                    width: "90%",
                    maxWidth: "340px", 
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                    display: "flex",
                    flexDirection: "column", 
                    justifyContent: "center",
                    alignItems: "stretch", 
                }}
            >
                <div style={{ marginTop: "10px" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa illum
                     ipsam veritatis eveniet error nihil, voluptas cupiditate sunt atque dolores 
                     consectetur libero. Laboriosam, molestias? Totam illum rerum labore repudiandae a?
                </div>
                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                    <button
                        style={{
                            marginLeft: "auto",
                            marginTop: "1rem",
                            borderRadius: "30px",
                            display: "block",
                            border: "1px solid #0073b1",
                            padding: "0.5rem 1rem",
                            background: "#0073b1",
                            color: "white",
                            fontSize: "1rem",
                            minWidth: "120px",
                            width: "auto",
                            maxWidth: "200px",
                            cursor: "pointer", 
                        }}
                        onClick={onClose}>
                        Close
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default JobModal;

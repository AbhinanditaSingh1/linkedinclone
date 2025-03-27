import "./JobsCard.css";
import React, { useEffect, useState } from "react";
import JobModal from "../pages/JobModal";

const JobsCard = ({ job }) => {
    const { id,logo, company, title, location } = job;
  
  const [save, setSave] = useState(() => {
    const savedValue = localStorage.getItem(`job-${job.id}-save`);
    return savedValue === 'true';  
  });

  useEffect(() => {
    localStorage.setItem(`job-${job.id}-save`, save);
  }, [save, id]);

  const handleSave = () => {
    setSave(prevSave => !prevSave);
  };
  const [open, setOpen] =useState(false);
  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }
  return (
    <div className="job-card">
        <div>
      <img src={logo}></img>
      <h6>{company}</h6>
      <small>{title}</small>
      <small>{location}</small><br></br>
      <button 
        style={{
          border:"1px solid",
          borderRadius:"30px",
        }}
      onClick={handleOpen}>Learn more</button>
        <JobModal isOpen={open} onClose={handleClose}/>
      </div>
      <div className="job-save">
        <button onClick={handleSave}>
          {save ? "Saved" : "Save job"}
        </button>
      </div>
    </div>
  );
};

export default JobsCard;

import JobsCard from "../components/JobsCard";
import Header from "./Header";
import { useState,useEffect } from 'react'
import jobsData from '../data/jobs.json'

function Jobs(){
    const [jobs, setJobs] = useState([]);
    const [tempData,setTempData]= useState(jobs);

    useEffect(() => {
      setJobs(jobsData);
      setTempData(jobsData);
    }, []);

    const onSearch=(value)=>{
        const searchedData=jobs.filter((search)=>
            search.company.toLocaleLowerCase().includes(value.toLocaleLowerCase())||
            search.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())||
            search.location.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
        setTempData(searchedData);
    }
    return(
        <div>
            <Header/>
            <input type="search" 
            style={{
                padding:12,
                width:"26%",
                fontSize:"100%",
                marginLeft:"37%",
                marginTop:"30px",
            }}
            placeholder="Search in jobs" onChange={(e)=>onSearch(e.target.value)}></input>
            {tempData.length===0?(
                <h3
                    style={{
                        marginTop:"15px",
                        marginLeft:"35%",
                    }}
                >No jobs found...</h3>
            ):
            (tempData.map((job) => (
                <JobsCard key={job.id} job={job} />
            ))
            )}
        </div>
    )
}
export default Jobs;
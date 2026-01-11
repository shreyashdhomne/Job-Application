import { IoLocationSharp } from 'react-icons/io5';
import './index.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// {
//   "jobs": [
//     {
//       "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
//       "employment_type": "Full Time",
//       "id": "d6019453-f864-4a2f-8230-6a9642a59466",
//       "job_description": "We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.",
//       "location": "Bangalore",
//       "package_per_annum": "21 LPA",
//       "rating": 4,
//       "title": "Backend Engineer"
//     }
//     ...
//   ],
//   "total":25,
// }

const DisplayJobCard = ({ eachCard }) => {
    return (
        <>
            <li style={{ listStyle: "none" }} className='bg-dark shadow p-3 rounded mb-4 my-card'>

                <div className='d-flex'>

                    <img src={eachCard.company_logo_url} width="80px" />
                    <div>

                        <h3 className='ml-3'>{eachCard.title}</h3>

                        <MdOutlineStarPurple500 className='ml-3' style={{ color: "gold" }} />
                        <span className='ml-2'>{eachCard.rating}</span>


                    </div>
                </div>

                <br />

                <div className='d-flex justify-content-between'>
                    <div>
                        <IoLocationSharp className='ml-2' />
                        <span className='ml-2'>{eachCard.location}</span>

                        <FaBriefcase className='ml-2' />
                        <span className='ml-2'>{eachCard.employment_type}</span>
                    </div>

                    <div>
                        <h4>
                            {eachCard.package_per_annum}
                        </h4>
                    </div>


                </div>
                <hr style={{ background: "white" }} />

                <h5>Description</h5>
                <p>{eachCard.job_description}</p>

            </li >
        </>

    )
}

export default DisplayJobCard;
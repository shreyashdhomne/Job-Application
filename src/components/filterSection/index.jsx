import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './index.css'

// Sample Response:

// {
//     "profile_details": {
//         "name": "Rahul Attuluri",
//             "profile_image_url": "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
//                 "short_bio": "Lead Software Developer and AI-ML expert"
//     }
// }

const employmentType = [
    {
        id: "FULLTIME",
        title: "Full Time"
    },
    {
        id: "PARTTIME",
        title: "Part Time"
    },
    {
        id: "FREELANCE",
        title: "Freelance"
    },

    {
        id: "INTERNSHIP",
        title: "Internship"
    }
]

const salaryArr = [

    {
        id: "1000000",
        title: "10LPA and Above"
    },
    {
        id: "2000000",
        title: "20LPA and Above"
    },
    {
        id: "3000000",
        title: "30LPA and Above"
    },
    {
        id: "4000000",
        title: "40LPA and Above"
    }

]



const FilterSection = () => {

    const [allValues, setValues] = useState({
        profile: {}
    });

    const token = Cookies.get("myToken");

    useEffect(() => {

        const fetchProfile = async () => {

            const api = " https://apis.ccbp.in/profile"
            const options = {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            try {

                const response = await fetch(api, options);
                const data = await response.json();

                if (response.ok) {
                    setValues({ ...allValues, profile: data.profile_details })

                }

            } catch (error) {
                console.log(error)

            }

        }
        fetchProfile()
    }, [])

    const displayProfile = () => (

        <div className="my-card p-4">

            <img src={allValues.profile.profile_image_url} width="50px" />
            <br />

            <h4 className='text-info pt-3'>{allValues.profile.name}</h4>
            <br />

            <h6>{allValues.profile.short_bio}</h6>
            <h6>Nagpur, Maharashtra</h6>

        </div>

    )

    const displayEmpFilter = () => {
        return (
            <ul>
                {
                    employmentType.map((each) => (
                        <li style={{ listStyle: "none" }} key={each.id}>
                            <input className='ml-4' type="checkbox" value={each.id} id={each.id} />
                            <label className='pl-3' htmlFor={each.id}>{each.title}</label>
                        </li>
                    ))
                }
            </ul>
        )

    }

    const displaySalaryFilter = () => {
        return (
            <ul>
                {
                    salaryArr.map((each) => (
                        <li style={{ listStyle: "none" }} key={each.id}>
                            <input className='ml-4' name='salary' type="radio" value={each.id} id={each.id} />
                            <label className='pl-3' htmlFor={each.id}>{each.title}</label>
                        </li>
                    ))
                }
            </ul>
        )

    }

    return (
        <div className='p-3'>

            {displayProfile()}
            <hr className='bg-white' />

            <h3>Type of Employment</h3>
            {displayEmpFilter()}
            <hr className='bg-white' />

            <h3>Salary Range</h3>
            {displaySalaryFilter()}

        </div>

    )
}

export default FilterSection;
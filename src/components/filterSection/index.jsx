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

    return (
        <div className='p-3'>
            <div className="my-card p-4">

                <img src={allValues.profile.profile_image_url} width="50px" />
                <br />

                <h4 className='text-info pt-3'>{allValues.profile.name}</h4>
                <br />

                <h6>{allValues.profile.short_bio}</h6>
                <h6>Nagpur, Maharashtra</h6>

            </div>
            <hr className='bg-white' />


        </div>
    )
}

export default FilterSection;
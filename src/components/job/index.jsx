import { useEffect, useState } from 'react';
import Header from '../header';
import Cookies from 'js-cookie';
import './index.css'
import FilterSection from '../filterSection';
import DisplayJobCard from '../displayJobCard';

const Job = () => {

    const [allValues, setValues] = useState({
        userArr: []
    }, [])

    useEffect(() => {

        const fetchJobsData = async () => {
            const token = Cookies.get("myToken")
            const api = "https://apis.ccbp.in/jobs";

            const options = {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const response = await fetch(api, options)
                const data = await response.json()


                if (response.ok) {

                    setValues({ ...allValues, userArr: data.jobs })
                }
                else {

                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchJobsData();

    }, []);

    return (

        <>
            <Header />

            <div className="container-fluid my-cont">
                <div className="row" >
                    <div className="col-4 border-right border-dark p-4 pl-5">
                        <FilterSection />
                    </div>

                    <div className="col-8 p-4 pl-5">
                        <ul className='p-2'>
                            {
                                allValues.userArr.map(each => <DisplayJobCard key={each.id} eachCard={each} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Job;
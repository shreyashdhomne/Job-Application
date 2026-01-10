import { useEffect, useState } from 'react';
import Header from '../header';
import Cookies from 'js-cookie';
import './index.css'
import FilterSection from '../filterSection';
import DisplayJobCard from '../displayJobCard';

const Job = () => {

    const [allValues, setValues] = useState({
        userArr: [],
        empType: [],
        salary: "",
        userIn: ""
    }, [])

    useEffect(() => {

        const fetchJobsData = async () => {

            const token = Cookies.get("myToken")

            const { empType, salary, userIn } = allValues;

            const api = `https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${salary}&search=${userIn}`;

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

    }, [allValues.userIn, allValues.empType]);

    const onChangeUserIn = (e) => {
        if (e.key === "Enter") {
            setValues({ ...allValues, userIn: e.target.value });
        }

    }

    const ChangeEmpType = (value, isChecked) => {

        if (isChecked) {
            //add
            setValues({ ...allValues, empType: allValues.empType.push(value) })
        }
        else {
            setValues({ ...allValues, empType: allValues.empType.filter(each => each !== value) });
            //remove
        }
    }

    return (

        <div className='my-bg'>
            <Header />

            <div className="container-fluid my-cont">
                <div className="row" >
                    <div className="col-4 border-right border-dark p-4 pl-5">
                        <FilterSection ChangeEmpType={ChangeEmpType} />
                    </div>

                    <div className="col-8 p-4 pl-5">
                        <input onKeyUp={onChangeUserIn} type="search" className='form-control border-danger' placeholder='Please Enter your Job' />
                        <br />
                        <ul className='p-2'>
                            {
                                allValues.userArr.map(each => <DisplayJobCard key={each.id} eachCard={each} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Job;
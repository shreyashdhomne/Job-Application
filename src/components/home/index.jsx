import { Link } from 'react-router-dom';
import Header from '../header';
import './index.css'

const Home = () => {


    return (
        <>
            <Header />
            <div style={{ height: "100vh" }} className='w-100 d-flex flex-column justify-content-center home-sec'>

                <div className='w-25 p-3 text-white my-text'>
                    <h1>Find The Job That Fits Your Life</h1>

                    <br /><br />
                    <p>Discover opportunities that match your skills, experience, and career goals.
                        Whether you’re a fresher starting out or a professional ready for the next step, we help you connect with employers who are actually hiring.
                    </p>
                    <br />

                    <Link className='btn btn-info' to="/job">Find Jobs</Link>
                </div>



            </div>
        </>

    )

}

export default Home;
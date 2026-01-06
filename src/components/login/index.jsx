import { useEffect, useState } from 'react'
import logo from '../../assets/react.svg'
import Cookies from 'js-cookie'
import './index.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    const token = Cookies.get("myToken");

    useEffect(() => {
        if (token !== undefined) {
            navigate("/");
        }

    }, [])

    const [allValues, setValues] = useState({
        username: "",
        password: "",
        errorMsg: ""
    });

    const onSubmitUser = async (e) => {

        e.preventDefault(); //---------------------> refreshes Dom

        const api = "https://apis.ccbp.in/login";

        let tempUserIn;
        let tempPass;

        if (allValues.username === "Shreyash" && allValues.password === "Shreyash@123") {
            tempUserIn = "rahul";
            tempPass = "rahul@2021";
        }

        const userDetails = {
            username: tempUserIn || allValues.username,
            password: tempPass || allValues.password

        }

        const options = {
            method: "Post",
            body: JSON.stringify(userDetails)
        }

        try {
            const response = await fetch(api, options);

            const data = await response.json();

            if (response.ok) {

                Cookies.set("myToken", data.jwt_token)
                setValues({ ...allValues, errorMsg: "" });
                navigate("/");


            }
            else {
                // setValues({ ...allValues, errorMsg: data.error_msg });
                // setValues({ ...allValues, errorMsg: "Username and password did not match" });

                let msg = data.error_msg;

                if (data.error_msg === "invalid username") {
                    msg = "Username and password didn't match"
                }
                else if (data.error_msg === "username and password didn't match") {
                    msg = "username and password didn't match"
                }
                setValues({ ...allValues, errorMsg: msg })
            }

        } catch (error) {

        }

    }
    return (


        <div className='form-cont'>
            {/* <img src="https://t4.ftcdn.net/jpg/17/16/46/77/360_F_1716467792_yqddhMly9OGdeOJTrO6wJWNRCLSk7p9B.jpg" /> */}
            {/* <img src="https://images.pond5.com/neon-mobile-security-system-login-footage-309915211_iconl.jpeg" width="40%" /> */}

            <img src={logo} />


            <img src="https://static.vecteezy.com/system/resources/thumbnails/050/699/534/small_2x/login-form-icon-login-form-page-illustration-png.png" width="25%" />


            <form onSubmit={onSubmitUser} className='w-50 bg-transparent ml-5 p-4'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input onChange={(e) => setValues({ ...allValues, username: e.target.value })}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        onChange={(e) => setValues({ ...allValues, password: e.target.value })}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

                <br /> <br />
                <b className='text-danger'>{allValues.errorMsg}</b>

            </form>


        </div>
    )
}

export default Login;
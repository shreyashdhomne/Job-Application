import './index.css'

const NotFound = () => {

    return (
        <div className='w-100 my-error'>

            <img src="https://media.istockphoto.com/id/1481759725/photo/404-error-isolated-on-white-background-page-not-found.jpg?s=612x612&w=0&k=20&c=LPKUeKjh6P7mw9o4hq2uctzgm77by0goQj8B5V5yagw=" width="30%" />

            <b style={{ fontSize: "30px" }}>ERROR 404 - PAGE NOT FOUND </b>
            <br />
            <h6>The page you are looking does not exist , might have been removed or temporarily unavailable.</h6>

        </div>
    )
}

export default NotFound;
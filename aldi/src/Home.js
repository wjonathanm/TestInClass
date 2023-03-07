import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const usenavigate = useNavigate();
    const [peoples, setPeoples]= useState("");
    const [displayPeople, setDisplayPeople] = useState();


    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/login');
        }else{
            setDisplayPeople(username);
            fetch("http://localhost:8000/user/" + username)
                .then((res) => {
                    return res.json();
                }).then((resp) => {
                    setPeoples(resp);
                }).catch((err) => {
                    console.log(err.message);
                });
        }
    }, []);
    

    return (
        <div>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <span style={{marginLeft:'80%'}}>Welcome <b>{displayPeople}</b></span>
                <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
            </div>
            <h1 className="text-center">Welcome to Nihira Techiees</h1>
            <div>{peoples.id}</div>
            <div>{peoples.password}</div>
            <div>{peoples.FirstName}</div>
        </div>
    );
}

export default Home;
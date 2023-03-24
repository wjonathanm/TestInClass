import { useEffect, useState } from "react";
function App2(){
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        fetch("/users").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(data)
            }
        )
    }, [])
    return(
        
        <div>
            {(typeof backendData.users === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            )}
        </div>
    )
}
export default App2;
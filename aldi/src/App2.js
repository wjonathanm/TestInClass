import { useEffect, useState } from "react";
function App2(){
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
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
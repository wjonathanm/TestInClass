import { useEffect, useState } from "react";
function App2(){
    const [eid, setEid] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [hiredate, setHireDate] = useState("")
    const [lid, setLid] = useState("")
    const [role, setRole] = useState("")
    const [sick, setSick] = useState("")
    const [personal, setPersonal] = useState("")
    const [vacation, setVacation] = useState("")


    useEffect(() => {
        fetch("/users").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    setEid(data[i].id);
                    setEmail(data[i].email);
                    setFname(data[i].firstname);
                    setLname(data[i].lastname);
                    setLid(data[i].leaderid);
                    setRole(data[i].role);
                    setSick(data[i].ptobalancesick);
                    setPersonal(data[i].ptobalancepersonal);
                    setVacation(data[i].ptobalancevacation);
                    setHireDate(data[i].hiredate);

                }
            }
        )
    }, [])
    return(
        
        <div>
            {/*<p>{JSON.stringify(backendData)}</p>*/}
            <p>ID: {eid}</p>
            <p>Leader Id: {lid}</p>
            <p>First Name: {fname}</p>
            <p>Last Name: {lname}</p>
            <p>Role: {role}</p>
            <p>Email: {email}</p>
            <p>Hire Date: {hiredate}</p>
            <p>Sick Days: {sick}</p>
            <p>Personal Days: {personal}</p>
            <p>Vacation Days: {vacation}</p>

        </div>

    )
}
export default App2;
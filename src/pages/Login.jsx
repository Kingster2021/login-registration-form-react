import { useState } from "react"




const Login = () => {
    // First Name, Last Name, Username, Password, Gender, Tech Stack
    const [formData, setFormData] = useState({
        userName : '',
        password : '',
        check : false,


    })

    const handleOnChange = (event) => {{
            if(event.target.name === 'check') {
                let copy = {...formData}

                if(event.target.checked) {
                    copy.check = true
                }else {
                    copy.check = false
                }

                setFormData(copy)
            }else{
                setFormData(() => ({
                    ...formData,
                    [event.target.name] : event.target.value
                }))
            }
        }

    }
    const submitForm = (event) => {
        event.preventDefault()
        console.log(formData)
    }
    return(
        <>
        <div className="login" style={{padding:"30px", margin: "auto", maxWidth: "400px", backgroundColor: "darkturquoise", marginTop:"100px", borderRadius:"5%"}}>

            <h1 className="text-center">Login</h1>

            <form>

            <div className="form-group">
                <label className="form-label" htmlFor="userName">UserName</label>
                <input className="form-control" type="text" onChange={handleOnChange} name="userName" id="userName"/>
            </div><br />

            <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" onChange={handleOnChange} name="password" id="password"/>
            </div><br />

            <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" onChange={handleOnChange} name="check" id="check" />
                <label className="form-check-label" htmlFor="check">Remember me</label>
            </div><br />

            <button onClick={submitForm} className="btn btn-dark w-100">Log In</button>

            </form>

        </div>
        </>
    )
}
export default Login;
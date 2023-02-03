import { useState } from "react"



const Register = () => {
    // First Name
    // Last Name
    // Username
    // Password
    // Gender
    // Tech Stack - Checkbox
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        gender: '',
        techstack: []
    })

    const handleOnChange = (event) => {
        if(event.target.name === 'techstack') {
            let copy = {...formData}

            if(event.target.checked) {
                copy.techstack.push(event.target.value)
            }else{
                copy.techstack = copy.techstack.filter(el => el !== event.target.value)
                
            }
            setFormData(copy)
            // console.log(copy)
        }else{
        setFormData(() => ({
            ...formData,
            [event.target.name] : event.target.value
        }))
    }
    }

    const submitForm = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
            <>
            
                <div className="container" style={{padding:"30px"}}>
                    <form className="form-signup" style={{ margin: "auto", maxWidth: "400px", backgroundColor: "darkturquoise", padding: "15px" }}>
                        <h2 style={{ textAlign: "center" }}>Register</h2>
                        <p style={{ textAlign: "center", borderBottom:"1px solid black" }}>Create your account it's free only take a minute.</p>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="firstName">First Name:</label><br />
                                    <input type="text" name="firstName" className="form-control" id="firstName" placeholder="Enter First Name" onChange={handleOnChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName">Last Name:</label><br />
                                    <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Enter Last Name" onChange={handleOnChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">User Name:</label><br />
                            <input type="text" name="userName" className="form-control" id="userName" placeholder="Enter UserName" onChange={handleOnChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={handleOnChange}/>
                        </div>
                        {/* <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label><br />
                    <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirm Password"/>
                </div> */}
                        <div className="form-group">
                            <label htmlFor=""></label><br />
                            <select name="gender" className="form-control" onChange={handleOnChange}>
                                <option>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div><br />
                        <div className="form-group" style={{ display: "flex", justifyContent: "space-evenly" }} onChange={handleOnChange}>
                            <input type="checkbox" value="HTML" name="techstack" />HTML
                            <input type="checkbox" value="CSS" name="techstack" />CSS
                            <input type="checkbox" value="js" name="techstack" />JS
                        </div>
                        <div><br />
                            <input type="checkbox" name="" id="" />
                            I accept the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
                        </div><br />
                        <div>
                            <button onClick={submitForm} className="btn btn-dark form-control">Submit</button>
                        </div>
                    </form>
                </div>
            
        </>
    )
}



export default Register
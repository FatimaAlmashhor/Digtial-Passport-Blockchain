import React, { useState } from 'react'

function Create(props) {

    const { onClickToCreate } = props;

    const [address, setaddress] = useState('')
    const [name, setname] = useState('')
    const [gender, setgender] = useState('')
    const [age, setage] = useState('')
    const [country, setcountry] = useState('')
    const handleChange = (e) => {
        console.log();
    }
    return (
        <div className=' d-flex flex-column  justify-content-center my-5  align-items-center'>
            <form>
                <div className="form-group">
                    <label >Address</label>
                    <input
                        type="text"
                        onChange={(e) => setaddress(e.target.value)}
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Address" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share the address with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Name</label>
                    <input
                        type="text"
                        onChange={(e) => setname(e.target.value)}
                        className="form-control"
                        placeholder="Full Name" />
                </div>
                <div className="form-group">
                    <label >Age</label>
                    <input
                        type="text"
                        onChange={(e) => setage(e.target.value)}
                        className="form-control" placeholder="Age" />
                </div>
                <div className="form-group">
                    <label >Gender</label>
                    <input
                        type="text"
                        onChange={(e) => setgender(e.target.value)}
                        className="form-control"
                        placeholder="Gender" />
                </div>
                <div className="form-group">
                    <label >Country</label>
                    <input
                        type="text"
                        onChange={(e) => setcountry(e.target.value)}
                        className="form-control"
                        placeholder="Country" />
                </div>

                <button
                    type="submit"
                    onClick={() => onClickToCreate(address, name, age, gender, country)}
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create

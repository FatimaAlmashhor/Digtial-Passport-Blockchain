import React, { useState } from 'react'

function Search({ onCLickToSearch }) {
    const [address, setaddress] = useState('')
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
                <button
                    type="submit"
                    onClick={() => onCLickToSearch(address)}
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Search

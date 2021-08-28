import React from 'react'
import Avatar from '../assets/Avatar'

function Passport() {
    return (
        <div className='passport-page '>
            <div className='row mt-5'>
                <div className='col-lg-3  col-sm-12'>
                    <div className='visa-part card'>
                        <h3>VISA</h3>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 '>
                    <div className='profile card'>
                        <div className='avatar'>
                            <Avatar />
                        </div>
                        <h4 className='py-4 '> <p className='bold inline'>No. </p>
                            <p className='font-lighter '>10898384</p>
                        </h4>
                        <div className='profile-info'>
                            <h5>
                                <p className='inline'>Surname :</p>
                                <p className='font-lighter ml-5 pl-5' >Almaliky</p>
                            </h5>
                            <h5 className=''>
                                <p className='inline'>Fisrt  name :</p>
                                <p className='font-lighter ml-5  pl-4' >Ahmad</p>
                            </h5>
                        </div>
                    </div>
                    <div className='additional-info card p-4'>
                        <h3 className='dark-blue-color'>More Information :</h3>
                        <h6 className='mt-4'>
                            <p className='inline'>Day of birth  :</p>
                            <p className='font-lighter ' >1/12/1999</p>
                        </h6>
                        <h6 className='mt-3'>
                            <p className='inline'>No of entires  :</p>
                            <p className='font-lighter ' >Single</p>
                        </h6>
                        <h6 className='mt-3'>
                            <p className='inline'>Gender  :</p>
                            <p className='font-lighter ' >Male</p>
                        </h6>
                        <h6 className='mt-3'>
                            <p className='inline'>Issuing state  :</p>
                            <p className='font-lighter ' >Student</p>
                        </h6>
                    </div>
                </div>
                <div className='col-lg-3  col-sm-12'>
                    <div className=' p-5 card'>
                        <h6 className='mt-4'>
                            <p className='inline'>Day of birth  :</p>
                            <p className='font-lighter ' >1/12/1999</p>
                        </h6>
                        <h6 className='mt-3'>
                            <p className='inline'>No of entires  :</p>
                            <p className='font-lighter ' >Single</p>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Passport

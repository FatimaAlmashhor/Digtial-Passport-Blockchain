import React, { useState } from 'react'
import Create from './Create'
import Search from './Search'
function Home(props) {

    const { PassportServices, account } = props;

    const [isSearch, setisSearch] = useState(false);
    const [isCreate, setisCreate] = useState(false);
    const [msg, setMsg] = useState('');
    const [isSccess, setisSccess] = useState(false)

    // React.useEffect(() => {
    //     console.log('the contact from the Home ,', PassportServices);
    // })

    const createNewPassport = (address, name, age, gender, country) => {
        try {
            PassportServices.methods.createOrUpdatePassport(address, `${name}, ${age} years,${gender}, ${country}`).send({ from: account });
            setMsg('seccussfuly adding the passport');
            setisSccess(true)

        } catch (error) {
            setMsg(error);
            setisSccess(false)
        }
    }
    const getAPassport = (address) => {
        let passport = PassportServices.methods.getPassport(address).send({ from: account })
        console.log(passport);
    }
    return (
        <div className=' h-100 d-flex flex-column  justify-content-center my-5  align-items-center'>
            <div className='text-center mt-5 '>
                <h2 className='h2'>Welcom</h2>
                <p>what do you want to do?</p>
            </div>
            <div className='mx-5 my-5 d-flex flex-sm-column flex-lg-row justify-content-center'>
                <div
                    onClick={() => {
                        setisCreate(prev => !prev);
                        setisSearch(false)
                    }}
                    className='btn btn-success bottom-0 py-2'>Create New Passport</div>
                <span className='mx-3'>OR</span>
                <div
                    onClick={() => {
                        setisSearch(prev => !prev);
                        setisCreate(false);
                    }}
                    className='btn btn-warning bottom-0 py-2' >Looking for Passport</div>
            </div>
            {
                isCreate &&
                <Create onClickToCreate={createNewPassport} />
            }
            {
                isSearch
                &&
                <Search onCLickToSearch={getAPassport} />
            }{
                isSccess &&
                <p>{msg}</p>
            }
        </div>
    )
}

export default Home

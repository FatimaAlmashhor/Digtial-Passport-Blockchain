import React, { Component, useEffect, useState } from 'react'
import Web3 from 'web3'
import './App.css'
import { PASSPORT, ADDRESS, ADMIN } from './config'
import Passport from './components/Passport'
import Login from './components/Login'
import Home from './components/Home'
function App() {
  const [account, setaccount] = useState()
  const [PassportServices, setPassportServices] = useState()
  const [message, setmessage] = useState()
  const [loginIncorrectly, setloginIncorrectly] = useState(false)
  const [loading, setloading] = useState(true)
  const [isAdmin, setAdmin] = useState(false)
  useEffect(() => {
    loadBlockchainData()
  }, [])

  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    await web3.eth.getAccounts(function (err, accounts) {
      if (err != null) {
        setmessage("An error occurred: " + err)
        console.error("An error occurred: " + err)
      }
      else if (accounts.length === 0) setmessage("User did not login in to MetaMask");
      else {
        setmessage("User is Login in to MetaMask seccussefuly ");
        setaccount(accounts[0])
        setloginIncorrectly(true)
        const Passportservice = new web3.eth.Contract(PASSPORT, ADDRESS)
        setPassportServices(Passportservice)

        if (accounts[0] === ADMIN) {
          setAdmin(true);
          let x = Passportservice.methods.getHistoryRecordLength().send({ from: accounts[0] });
          console.log(x);
          // for (let i = 0; i < Passportservice.methods.getHistoryRecordLength().send({ from: accounts[0] }); i++) {
          //   console.log(Passportservice.methods.getHistoryRecord(parseInt(i).send({ from: accounts[0] })));
          // }
        }
        else {
          personPassport(Passportservice, accounts[0]);
        }

        // Passportservice.methods.createOrUpdatePassport('0x27ED7331101eA4c4D57303E11989D81721AFb73B', "John Smith, 33 years, NY, USA").send({ from: accounts[0] });

      }
      setloading(false);

    });

  }


  const createTask = (content) => {
    this.setState({ loading: true })
    this.state.todoList.methods.createTask(content).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
      })
  }
  const createNewPassport = (address, name, age, gender, country) => {
    try {
      PassportServices.methods.createOrUpdatePassport(address, `${name}, ${age} years,${gender}, ${country}`).send({ from: account });
      return true;

    } catch (error) {
      setmessage(error);
      return false;
    }
  }
  const personPassport = (Passportservice, account) => {
    console.log('the function of the person passport');
    // try {
    let passport = Passportservice.methods.getPassport().send({ from: account }).then((data) => {
      console.log(data);
    })
    console.log('the passport is ', passport);
    // } catch (error) {
    // setmessage(error);
    // }
  }

  if (loading)
    return (
      <h5>Loading ...</h5>
    )
  return (
    <div className=' h-100 d-flex flex-column  justify-content-center my-5  align-items-center'>
      {
        message !== '' && !loginIncorrectly ?
          <div>
            <h3>{message}</h3>
            <button className='btn'>Reload</button>
          </div>
          :
          isAdmin ?
            <Home createNewPassport={createNewPassport} />
            :
            <Passport />
      }
    </div>
  );
}

export default App;

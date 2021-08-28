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
      else if (accounts.length === 0) setmessage("User is not logged in to MetaMask");
      else {
        if (accounts[0] === ADMIN) {
          setAdmin(true)
        }
        setmessage("User is logged in to MetaMask");
        setaccount(accounts[0])
        setloginIncorrectly(true)
        const Passportservice = new web3.eth.Contract(PASSPORT, ADDRESS)
        setPassportServices(Passportservice)
        // Passportservice.methods.createOrUpdatePassport('0x27ED7331101eA4c4D57303E11989D81721AFb73B', "John Smith, 33 years, NY, USA").send({ from: accounts[0] });
        let passport = Passportservice.methods.getPassport().send({ from: accounts[0] })
        console.log(passport);
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
  const showAll = () => {

  }

  if (loading)
    return (
      <h5>Loading ...</h5>
    )
  return (
    <div>
      {/* <Passport /> */}
      {
        message !== '' && !loginIncorrectly ?
          <div>{message}</div>
          :
          isAdmin ?
            <Home PassportServices={PassportServices} account={account} />
            :
            <Passport />
      }
    </div>
  );
}

export default App;

import React, { Component, useEffect } from 'react'
import Web3 from 'web3'
import './App.css'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'
import TodoList from './TodoList'
import Avatar from './components/Avatar'
function App() {
  useEffect(() => {
    // loadBlockchainData()
  }, [])

  // const  loadBlockchainData = async() =>{
  //   const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
  //   const accounts = await web3.eth.getAccounts()
  //   this.setState({ account: accounts[0] })
  //   const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
  //   this.setState({ todoList })
  //   const networkId = await web3.eth.net.getId();
  //   const chainId = await web3.eth.getChainId();
  //   console.log(networkId, chainId);
  //   // const taskCount = await todoList.methods.taskCount().call()
  //   // this.setState({ taskCount })
  //   // for (var i = 1; i <= taskCount; i++) {
  //   //   const task = await todoList.methods.tasks(i).call()
  //   //   this.setState({
  //   //     tasks: [...this.state.tasks, task]
  //   //   })
  //   // }
  //   // this.setState({ loading: false })
  // }


  // const createTask =(content)=> {
  //   this.setState({ loading: true })
  //   this.state.todoList.methods.createTask(content).send({ from: this.state.account })
  //     .once('receipt', (receipt) => {
  //       this.setState({ loading: false })
  //     })
  // }

  // toggleCompleted(taskId) {
  //   this.setState({ loading: true })
  //   this.state.todoList.methods.toggleCompleted(taskId).send({ from: this.state.account })
  //     .once('receipt', (receipt) => {
  //       this.setState({ loading: false })
  //     })
  // }

  return (
    <div className='passport-page '>
      <div className='row mt-5'>
        <div className='col-lg-3  col-sm-12'>
          <div className='visa-part card'>
            <h2 className='h2'>VISA</h2>
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
              <h5 className='my-4'>
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
  );
}

export default App;

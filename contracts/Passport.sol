pragma solidity >=0.4.22 <0.9.0;


contract Passport {
   address public owner = msg.sender; 


   struct Person {
    bytes32  surname;
    bytes32  firstName;
    string gender ;
    string dayOfbirth ;
    string entries ;
    string country ;
    string nationality ;
  }
  struct VISA {
      uint id ;
      string country ;
      string stats ;
  }
  
  function setPassport() {

  }
 function gertPassport() {

  }

}
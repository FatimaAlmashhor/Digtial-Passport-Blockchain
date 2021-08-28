pragma solidity >=0.4.22 <0.9.0;


// contract Passport {
//    address  owner = msg.sender; 
   
//    struct Person {
//     bytes32  surname;
//     bytes32  firstName;
//     string gender ;
//     string dayOfbirth ;
//     string entries ;
//     string country ;
//     string nationality ;
//   }
//   struct VISA {
//     uint id ;
//     string country ;
//     string stats ;
//   }

//  struct PassportIssuingAgency {
//    bytes32 name ;
//    string country ;
//    string state ;
//  }

//  struct Country {
//    uint id ;
//    string  name ;
//  }

//   mapping (address => Person) public passport;

//   mapping (address=> VISA[]) private personVisas;

//   mapping (address=> PassportIssuingAgency ) private userPassportIssuingAgency;
 
//   function createPassport (
//     bytes32 _surname  ,
//     bytes32 _firstName ,
//     string memory _gender ,
//     string memory _dayOfbirth ,
//     string memory _entries ,
//     string memory _country ,
//     string memory _nationality 
//    ) public {

//     // here should not be allow to add unliss you have preimission

//      Person memory person = Person(_surname ,
//      _firstName ,
//      _gender ,
//      _dayOfbirth, 
//      _entries ,
//      _country ,
//      _nationality) ;

//      passport[msg.sender] = person ;
//    }

// }

contract Passport {
  address constant  ADMIN_ADDRESS = 0x8c0199C5D6e4B22A1948358F1bf48dD095Ae5300; 

  struct Person {
    uint ppNo ;
    bytes32  surname;
    bytes32  firstName;
    string gender ;
    string dayOfbirth ;
    string entries ;
    string country ;
    string nationality ;
  }
   mapping(address => string) private passportDictionary;
   HistoryRecord[] private historyRecords;
  function createOrUpdatePassport(address _owner, string memory _data) public 
  {     
     checkAdminPermission();
      passportDictionary[_owner] = _data;
      historyRecords.push(HistoryRecord({incidentTime : block.timestamp , owner : _owner, data : _data}));
  }

  function getPassport() public view returns (string memory) {
      return passportDictionary[msg.sender];
  }

  // function createPassport (
  //   bytes32 _surname  ,
  //   bytes32 _firstName ,
  //   string memory _gender ,
  //   string memory _dayOfbirth ,
  //   string memory _entries ,
  //   string memory _country ,
  //   string memory _nationality 
  //  ) public {

  //   // here should not be allow to add unliss you have preimission

  //    Person memory person = Person(_surname ,
  //    _firstName ,
  //    _gender ,
  //    _dayOfbirth, 
  //    _entries ,
  //    _country ,
  //    _nationality) ;

  //  }
  function getHistoryRecord(uint index) public view returns 
  (uint256 incidentTime, address owner, string memory data) {
      checkAdminPermission();
      return (historyRecords[index].incidentTime, 
              historyRecords[index].owner, historyRecords[index].data);
  }

  struct HistoryRecord {
      uint256 incidentTime;
      address owner;
      string data;
  }

  // utility functions
  function getHistoryRecordLength() public view returns (uint) {
      checkAdminPermission();
      return historyRecords.length;
  }

  function checkAdminPermission() private view {
      if (msg.sender != ADMIN_ADDRESS) {
          revert();
      }
  }

}

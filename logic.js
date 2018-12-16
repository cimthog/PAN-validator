 
 //this function reverses a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

function validateCC() {
    //get user input and declares variables
    let number = document.getElementById('pan_input').value,
        oddIndex = 0,
        evenIndex = 1,
        s1 = s2 = 0;

        //checks if input is empty or less than 16
        if (number === '' || number.length<16) {
            alert('Invalid Input');
            return;
        }
    number = reverseString(number);
    while (oddIndex < number.length) {
        console.log('odd ', number[oddIndex]);
        //parses the string to integer and adds the value of number at each iteration
        s1 += parseInt(number[oddIndex]);
        //increases iteration by 2 for oddindex
        oddIndex += 2;
    }
    while (evenIndex < number.length) {
        s2 += sumOfDigits(number[evenIndex] * 2);
        console.log('even ', number[evenIndex]);
        evenIndex += 2;
    }
    //checks if the sum of the numbers is wholely divided by 10
    if ((s1 + s2) % 10 === 0) {
        document.getElementById('result').innerHTML = reverseString(number) +' is valid ';
    } else {
        document.getElementById('result').innerHTML = reverseString(number) +' is invalid';
    }
    console.log('Result ', s1 + s2)

  document.getElementById('pan_input').value = '';
}

//this function calculates the sum of digits
function sumOfDigits(n) {
    var digit = 0,
        sum = 0;
    while (n != 0) {
        digit = n % 10;
        sum += digit;
        n = parseInt(n / 10);
    }
    return sum;
}


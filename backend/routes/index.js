const express = require('express');

const router = express();

router.post('/api/step-addition', (req, res) => {
    try {
        console.log('body', req.body);
        const { fno, sno } = req.body;
        // .......................................................
        let carry = 0;
        let result = [];
        let carryResult = [];
        let sumString = [];
        let carryString = [];

        const toDigits = num => num.toString().split('').map(Number).reverse();
        const A = toDigits(fno);
        const B = toDigits(sno);

        for (let i = 0; i < Math.max(A.length, B.length); i++) {
            let sum = (A[i] || 0) + (B[i] || 0) + carry
            result.push(sum > 9 ? sum % 10 : sum)
            sumString.push(result.slice().reverse().join(''));
            carry = Math.floor(sum / 10);
            if (i !== Math.max(A.length, B.length) - 1) {
                console.log('t', carryResult)
                carryResult.push(carry);
            }
            carryString.push(carryResult.slice().reverse().join(''))
        }

        if (carry) {
            sumString[sumString.length - 1] = carry.toString() + sumString[sumString.length - 1]
        }
        console.log(sumString, carryString);
        // ........................................................
        return res.status(200).send({ sumString, carryString })
    } catch (error) {
        return res.status(500)
    }
})

module.exports = router;
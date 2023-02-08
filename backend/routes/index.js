const express = require('express');

const router = express();

router.post('/api/step-addition', (req, res) => {
    try {
        const { fno, sno } = req.body;
        const isPositiveNumber = num => {
            const regex = /^[1-9]\d*$/;
            return regex.test(num);
        }

        let carry = 0;
        let result = [];
        let carryResult = [];
        let output = [];

        if (!isPositiveNumber(fno) || !isPositiveNumber(sno)) {
            console.log(1)
            return res.status(403).send({ message: 'Please enter a valid number, only use positive Integers.' })
        }
        const toDigits = num => num.toString().split('').map(Number).reverse();

        const num1 = toDigits(fno);
        const num2 = toDigits(sno);

        for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
            let sum = (num1[i] || 0) + (num2[i] || 0) + carry;
            result.push(sum > 9 ? sum % 10 : sum);
            carry = Math.floor(sum / 10);
            if (i !== Math.max(num1.length, num2.length) - 1) {
                carryResult.push(carry);
            }
            output.push(`"step ${i + 1}" : { "carryString" : "${carryResult.slice().reverse().join('')}_", "sumString":"${result.slice().reverse().join('')}"}`);
        }

        if (carry) {
            output[output.length - 1] = `"step ${output.length}" : { "carryString" : "${carryResult.slice().reverse().join('')}_", "sumString":"${carry.toString() + result.slice().reverse().join('')}"}`
        }
        return res.status(200).send({ output });

    } catch (error) {
        return res.status(500).send({ message: "Some error occured" })
    }
})

module.exports = router;
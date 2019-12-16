/* https://dev.to/thepracticaldev/daily-challenge-138-do-i-get-a-bonus-55i3 */

let dailyChallenge = (salary, bonus) => `\u00A3${bonus ? salary * 10 : salary}`;

const salary = 100;
const bonus = true;
let result = dailyChallenge(salary, bonus);
console.log(result);

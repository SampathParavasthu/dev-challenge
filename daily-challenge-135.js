/* https://dev.to/thepracticaldev/daily-challenge-135-the-wide-mouthed-frog-ie9 */

let dailyChallenge = animal =>
  `${animal.toLowerCase() === 'alligator' ? 'small' : 'wide'}`;

const animal = 'alligator';
let result = dailyChallenge(animal);
console.log(result);

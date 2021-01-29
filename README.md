#Usage 
```
import getMatches from 'react-match-finder'

const array = ['test', 'testing', 'tester', 'testing to see if this works', 'nothing here']
const searchInput = 'test'
// match percentage
const percentMatch = 50
const matches = getMatches('test', array, percentMatch)
console.log(matches)
```
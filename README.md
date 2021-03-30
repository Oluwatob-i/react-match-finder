#Usage 
```
import getMatches from 'react-match-finder'

const array = ('test', ['test', 'testing', {name: 'test'}, [{name: 'testing'}], 'nothing here'], 50)
const searchInput = 'test'
// match percentage
const percentMatch = 50
const matches = getMatches('test', array, percentMatch) //  returns ['test', 'testing', {name: 'test'}, [{name: 'testing'}]]

```
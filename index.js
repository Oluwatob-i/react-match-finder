function getMatches(searchInput, array, matchPercent=50) {
    return array.filter(
         (item) => {
            let splitItem;
            let string = typeof item == 'string';
            
             if ((string && searchInput.toLowerCase().includes(item.toLowerCase())) || (function() {
                 // an immediately invoked  function that checks if searchInput contains item 
                 // convert searchInput to lower case and split searchInput  
                 let _search = searchInput.toLowerCase().split(' ');
                 // split item
                
                 // iterate over a item filter that returns a non empty array for each item in item 
                 // if searchInput match item by
                if (string) 
                    splitItem = item.toLowerCase().split(' ');
                else {
                   
                    let a = [];
                    const handleType = (item) => {
                        if(item === null || item === undefined)
                            return
                        if (typeof item == 'number') {
                            a.push(item.toString())
                        }
                        else if (typeof item == 'string')
                            a = [...a, ...item.toLowerCase().split(' ')]
                        else if (item instanceof  Array) {
                            item.map(
                                i =>  handleType(i)
                            )
                        }
                        else if (typeof item == 'object') {
                            handleType(Object.values(item))
                        } 
                      
                    }

                    let o = handleType(item);
                    splitItem = a;
                }

                       




                  for (let i of splitItem.filter(
                     _item => (
                         // immediately invoked 
                         function (){
                             // initialize result 
                             let result = [];
                             // iterate over _search 
                             // _search is an array of the original string split by ' '
                             for (let i of _search) {
                                 // initialize match to 100%
                                 let match = 100;
                                 // p is the weight of each letter in  _item
                                 let p = 100 /  _item.length;
                                 // iterate over each item in _search 
                                 // each i is a string 
                                 for (let _ of i) {       
                                     // iterate over each letter in i
                                     // if item doesnt include that letter 
                                     // subtract p from match `                   
                                     if (!_item.includes(_))
                                          match = match - p;
                                     if(_item.indexOf(_) !== i.indexOf(_))
                                         match = match - (p/3);
                                 }
                                 // check if length of _item isnt the same as i 
                                 if ( _item.length !== i.length) {
                                     // subtract _item.length from i.length and get the absolute value
                                     // multiply this value by p and subtract from match 
                                     let d = Math.abs( _item.length - i.length);    
                                     match = match - (d*p);
                                 }
                            
                                 // push 
                                 result.push({[_item]: [match, i]});
                                 
                             }
                             // check if any item in result matches by 50% or more 
                             for (let i of result) {
                                 // return
                                 for ( let [key, [value, searchMatch]] of Object.entries(i)) {    
                                   if (value >= matchPercent) {
                                     
                                       // return 
                                       return [_item, ];
                                     }
                                 }
                                   
                             }
                     }())                      
                 )) {
                     if (i.length) {

                        return 'match found';
                     }
                 }
             } ())) {

                return item;
                
             }
         }
     )
 }

 module.exports = getMatches;

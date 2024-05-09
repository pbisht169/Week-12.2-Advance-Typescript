const users = new Map();
users.set('titu', { name: 'sharma', age:30, email: 'titu@gmail.com'})
users.set('jitu', { name: 'yadav', age:30, email: 'jitu@gmail.com'});

const user = users.get('titu');

console.log(users.get('titu'))
console.log(users.get('jitu'))
console.log(users)
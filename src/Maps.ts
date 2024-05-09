const users = new Map();
users.set('titu', { name: 'sharma', age:30, email: 'titu@gmail.com'})
users.set('jitu', { name: 'yadav', age:30, email: 'jitu@gmail.com'});

const user = users.get('titu');

console.log(users.get('titu'))
console.log(users.get('jitu'))
console.log(users)


type Plane = {
    name: string;
    flightNo: number;
}

const flights = new Map<string, Plane>();

flights.set('boeing117', { name: '3442sdw', flightNo: 233111 })
flights.set('boeing119', { name: '34411rt', flightNo: 223322 })

console.log(flights.get('boeing117'))

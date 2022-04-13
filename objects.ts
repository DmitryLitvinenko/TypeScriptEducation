const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple type
} = {
    name: "Dmitry",
    age: 29,
    hobbies: ['Bowling', 'Poker'],
    role: [2, 'qualification_in']
};

person.role.push('admin'); //replace value with the same string
person.role[0] = 10; //adding value to 1 position

for (const hobby of person.hobbies) console.log(hobby);

console.log(person)

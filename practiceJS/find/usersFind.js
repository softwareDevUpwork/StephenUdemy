let users = [
    {name : 'Alex'},
    {name : 'John'},
    {name : 'Bob'},
    {name : 'Alice'},
]

let user =  users.find(function(user){
    return user.name === 'Alex'
})

console.log(user)

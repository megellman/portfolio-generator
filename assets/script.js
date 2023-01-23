const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([{
    type: 'input',
    message: 'Please enter your name',
    name: 'name'
},
{
    message: 'Please enter your location',
    name : 'location'
},
{
    message: 'Please tell me a little bit about yourself',
    name: 'bio'
},
{
    message: 'Please enter your linkedIn link',
    name: 'linkedIn'
},
{
    message: 'Please enter your Github link',
    name: 'github'
}
])
.then(function(response){
    // console.log(response)
    createPort(response)
});

function createPort(response){
fs.writeFile('index2.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
</head>
<body>
    <h1 id="name">${response.name}</h1>
    <h2 id="location">${response.location}</h2>
    <h2 id="bio">${response.bio}</h2>
    <h2 id="linkedin">${response.linkedIn}</h2>
    <h2 id="github">${response.github}</h2>
</body>
</html>`, function(err){
    if(err){
        throw err;
    }
})
}
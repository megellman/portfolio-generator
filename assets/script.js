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
fs.writeFile('index.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;1,100;1,200&family=Yeseva+One&display=swap" rel="stylesheet">
</head>
<body>
    <h1 id="name">${response.name}</h1>
    <h2 id="location">Location: ${response.location}</h2>
    <h2 id="bio">A little about me:</h2>
    <p>${response.bio}</p>
    <a href="${response.linkedIn}" target="_blank">
        <h2 id="linkedin">LinkedIn</h2>
    </a>
    <a href="${response.github}" target="_blank">
        <h2 id="github">GitHub</h2>
    </a>
</body>
</html>`, function(err){
    if(err){
        throw err;
    }
})
}
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

console.log('This is main page of SVSU');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


var Inquirer = require('inquirer');
Inquirer.prompt([
        {
            type: "list",
            name: "activity",
            message: "What would you like to do?",
            choices: ["list installed versions", "stop service", "start service", "switch service"]
        }
    ]).then(function(inqResp){
        var activity = inqResp.activity;

        if (activity === "list installed versions"){
            listinstalled();
        } else if (activity === "stop service"){
            stopservice();
        } else if (activity === "start service"){
            startservice();
        } else if (activity === "switch service"){
            switchservice();
        }
    });


function listinstalled() {
	
	console.log("called list installed versions");
}
function stopservice() {
	
	console.log("called to stop service");
	
	const exec = require('child_process').exec;
var yourscript = exec('bash sds-svsu.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
}
function startservice() {
	
	console.log("called to start service");
}
function switchservice() {
	
	console.log("called to switch versions");
}

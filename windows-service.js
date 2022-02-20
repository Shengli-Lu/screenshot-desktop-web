const Service = require('node-windows').Service;
const readline = require('readline');

// Create a new service object
const svc = new Service({
  name: 'Victor_Screenshot',
  description: 'Node application as Windows Service for Screenshots',
  script: 'C:\\Victor\\screenshots\\bin\\www'
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask user for the option input
rl.question(`Do you want to install or uninstall windows service? (i/u)`, (option) => {
  option = option.toLowerCase()
  if (option == 'i') {
    // Listen for the "install" event, which indicates the
    // process is available as a service.
    svc.on('install', function () {
      svc.start();
    });
    svc.install();
  } else if (option == 'u') {
    // Listen for the "uninstall" event so we know when it's done.
    svc.on('uninstall', function () {
      console.log('Uninstall complete.');
      console.log('The service exists: ', svc.exists);
    });
    // Uninstall the service.
    svc.uninstall();
  } else{
    console.log(`${option} is not a valid input.`);
  }
  // close the stream
  rl.close();
});



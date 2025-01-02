const fs = require('fs');

const filename = process.argv[2]; // Get the file path from command-line args
if (!filename) {
    console.error("Please provide the input file path.");
    process.exit(1);
}

// Read and process the input file
fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        process.exit(1);
    }

    // Process the commands from the input file
    const commands = data.split('\n').filter(line => line.trim() !== '');
    for (const command of commands) {
        // Replace this with your application's processing logic
        console.log(`Processing command: ${command}`);
    }
});

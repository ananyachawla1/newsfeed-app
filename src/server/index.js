const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all routes

// Define the endpoint to handle chat requests
app.get('/chat', (req, res) => {
    const userInput = "What is the budget?";

    if (!userInput) {
        return res.status(400).json({ error: 'Input is required' });
    }
    console.log("model api...", userInput, __dirname)
    // Execute the Python script
    // exec(python ${ path.join(__dirname, 'model.py') } "${userInput}", (error, stdout, stderr) => {
    //     if (error) {
    //         console.error(exec error: ${ error });
    //         return res.status(500).json({ error: 'Internal server error' });
    //     }
    //     res.json({ response: stdout.trim() });
    // });
    const args = [userInput];
    // Spawn a new process to run the Python script
  const pythonProcess = spawn('python3', ['model.py', ...args]);

  // Capture the output from the Python script
  let scriptOutput = '';

  pythonProcess.stdout.on('data', (data) => {
    scriptOutput += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python script exited with code ${code}`);
    res.send(scriptOutput);
  });
});

// Start the server
app.listen(3003, () => {
    console.log('Server is running on port 3001');
});


const corsOptions = {
    origin: 'http://localhost:3002', // Allow only this origin
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
};

app.use(cors(corsOptions));
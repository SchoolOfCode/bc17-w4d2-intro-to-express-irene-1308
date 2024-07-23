import express from 'express'; // imports the express module 

const app = express(); //creates a var for an express application, and will be used to deal with requests and responses.
const port = 3000; // port number

app.get('/', (req, res) => { //  a callback function that will be executed when a request is received.
  res.send('Hello World!'); // sends the string 'Hello World!' as the response
});

app.get('/test', (req, res) => {
  res.send('this is a test');
});

/* app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
}); */



app.listen(port, () => { // initiates a server on 3000 port (in this case)
  console.log(`Example app listening on port ${port}`) // shows a message confirming the server is running and listening on on the 3000 port.
});
const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json())
const publicVapidKey='BHXgmFsPVBre-l6BQsmBthUqFzp8q1qXoO9iDpVGUuo72z5punlpuO4FYLlFIC16oOlq5ZQ2kc8wIQ5Lhq03gew';
const privateVapidKey='UWnUOLFJ9OyoSX0Ud1poW0snRh4487mmXZ5lPBaz03I';

webpush.setVapidDetails('mailto:nigamkumar61@gmail.com',publicVapidKey,privateVapidKey);

// Subscrive Rule
app.post('/subscribe', (req,res)=>{
// Get Push Subscribtion object
const subscription = req.body;
// Send 201 - resource created

res.json({});

// Create Payload
const payload = JSON.stringify({title: 'Push Test By Ratnesh'});

// Pass Object into Send Notification
webpush.sendNotification(subscription, payload).catch(err => console.error(err));

});

const port = 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
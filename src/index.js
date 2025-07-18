const express = require('express');
// const amqplib = require('amqplib');
// async function connectQueue() {
//     try {
//         const connection = await amqplib.connect("amqp://localhost");
//         const channel = await connection.createChannel();
//         await channel.assertQueue("noti-queue");

//        setInterval(()=>
//         channel.sendToQueue("noti-queue", Buffer.from('connection is up, why not there?'))
//        , 1000) 
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }
const { ServerConfig ,Queue} = require('./config');
const apiRoutes = require('./routes');
const CRON = require('./utils/common/cron-jobs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);
app.use('/bookingService/api', apiRoutes);

app.listen(ServerConfig.PORT,  () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    
    Queue.connectQueue();
    // connectQueue();
    // console.log("queue connected")
    CRON();

});

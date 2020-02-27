require('dotenv').config()

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var fila = process.env.MQ_LOCACAO;
        var msg = 'Hello World 123!';
        ch.assertQueue(fila, { durable: false });     
        ch.sendToQueue(fila, new Buffer(msg));
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () { conn.close(); process.exit(0) }, 500);
});


app.listen(process.env.PORT, ()=>{
    console.log(`Node server running on ${process.env.PORT}`)
})
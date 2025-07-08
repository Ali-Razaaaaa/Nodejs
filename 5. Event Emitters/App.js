// const EventEmitter = require("events");
// const event = new EventEmitter();

// //.on takes event name and a callback function
// event.on('Greet',()=>
// {
//     console.log("I am called");
// })

// event.emit('Greet');


//Real use case


const EventEmitter=require('events');

const order=new EventEmitter();

order.on('order',(customername,item)=>
{
    console.log(`Order Receieved From Customer ${customername} for ${item}`);
});

order.on('order',(customername,item)=>
{
    setTimeout(()=>
    {
         console.log(`Preparing Item ${item} for Customer ${customername}`);

         setTimeout(()=>
        {
            console.log(`Order For Customer ${customername} is ready for ${item} `)
        }, 1000)

    }, 1500);

})

order.emit('order','Ali Raza Bugti', 'Pizza');
order.emit('order','Saif Ur Rehman Gill', 'Burger');

const menu=[
    {name:"Margherita" , price:8},
    {name:"Pepperroni" , price:10 },
    {name:"Hawaiian" , price:10 },
    {name:"Veggie" , price:9 }
]

const cashInRegister=100
const orderQueue=[]
let nextOrderId=1;

const addPizza=(name , price)=>{
    menu.push({name:name, price: price})

}

const placeOrder=(name)=>{
     const order=menu.find(pizza=>pizza.name==name)
     orderQueue.push({pizza:order, statut:"Ordered",Id:nextOrderId++})
     cashInRegister+=order.price
     return order
}

const completeOrder=(Id)=>{
    const order=orderQueue.find(order=>order.Id==Id)
    order.statut="Completed"
    return order
}

addPizza("Chiken bacon ranch",12)
addPizza("BBQ Chiken",12)
addPizza("Spicy sausage",11)

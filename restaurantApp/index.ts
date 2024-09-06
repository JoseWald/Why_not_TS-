 export let menu=[
    {name:"Margherita" , price:8},
    {name:"Pepperroni" , price:10 },
    {name:"Hawaiian" , price:10 },
    {name:"Veggie" , price:9 }
]

export let cashInRegister=100
export let orderQueue=[
    {pizza:"name of pizza", statut:"Ordered/Completed" , Id:0}
]
export let nextOrderId=1;

export const addPizza=(name , price)=>{
    menu.push({name:name, price: price})

}

 export const placeOrder=(name)=>{
     const order=menu.find(pizza=>pizza.name==name)
   
     if(order){
        orderQueue.push({pizza:order.toString(), statut:"Ordered",Id:nextOrderId++})
        cashInRegister+=order.price
     }
       
     return order
}

 export const completeOrder=(Id)=>{
    const order=orderQueue.find(order=>order.Id==Id)
    if(order){
           order.statut="Completed"
    }
 
    return order
}

addPizza("Chiken bacon ranch",12)
addPizza("BBQ Chicken",12)
addPizza("Spicy sausage",11)

placeOrder("BBQ Chicken")
completeOrder("1")

console.log("Menu:"+menu)
console.log("Cash In Register:"+ cashInRegister)
console.log("order Queue:"+orderQueue)

/*
    TypeScript may intimidate you with all the code underlined in red
    but it will help you to keep your code maintainable

    The first time will be a little hard but practice will make you a master
    
*/
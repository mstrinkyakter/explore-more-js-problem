const phones = [
    {name:'samsung',camera:12,storage:'32gb',price:36000,color:'silver'},
    {name:'iphone',camera:14,storage:'32gb',price:86000,color:'silver'},
    {name:'walton',camera:10,storage:'32gb',price:22000,color:'silver'},
    {name:'oppo',camera:12,storage:'32gb',price:53000,color:'silver'},
    {name:'nokia',camera:12,storage:'32gb',price:44000,color:'silver'}
];
function cheapestPhone (phones){
    let cheapest = phones[0];
    for(let i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price<cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);


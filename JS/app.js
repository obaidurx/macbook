// Update memory cost function
function updateMemoryCost(isBaseMemory){
    let extraMemoryCost=document.getElementById('extra-memory-cost').innerText;
    let totalMemoryCost=document.getElementById('extra-memory-cost');

    if(isBaseMemory =='8gb'){
        totalMemoryCost.innerText = 0;
    }
    else if (isBaseMemory =='16gb') {
        
        totalMemoryCost.innerText = 180;
    }
    
    return totalMemoryCost;
}
//Update storage cost function
function UpdateStorageCost(isStorage){
    let extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    let totalStorageCost = document.getElementById('extra-storage-cost');
 
    if (isStorage =='256gb-storage') {       
        totalStorageCost.innerText = 0;
    }
    else if (isStorage =='512gb-storage') {
        totalStorageCost.innerText = 100;
    } else if (isStorage=='1tb-storage') {
        totalStorageCost.innerText = 180;
    } 
    return totalStorageCost;
}
//update delivery cost function
function updateDeliveryCost(isDeliveryCharge){
    let deliveryCost=document.getElementById('delivery-cost').innerText;
    let totalDeliveryCost=document.getElementById('delivery-cost');
    
    if (isDeliveryCharge=='without-charge') {
        totalDeliveryCost.innerText = 0;
    }
    else if (isDeliveryCharge=='with-charge') {
        
        totalDeliveryCost.innerText = 20;
    }
    return totalDeliveryCost;
}
//calculate total charge function
function calculate(memory,storage,delivery,code){
    let memoryCost=updateMemoryCost(memory).innerText;
    const finalMemoryCost = parseFloat(memoryCost);
    let storageCost = UpdateStorageCost(storage).innerText;
    const finalStorageCost =parseFloat(storageCost);
    let deliveryCost = updateDeliveryCost(delivery).innerText;
    const finalDeliveryCost = parseFloat(deliveryCost);

    let currentBalance =document.getElementById('best-price').innerText;
    let totalBalance = document.getElementById('total-price');
    totalBalance.innerText = finalMemoryCost+finalStorageCost+finalDeliveryCost+parseFloat(currentBalance);

    //display total cost 
    let displayCost =document.getElementById('display-cost');
    displayCost.innerText=totalBalance.innerText;

    //promo code
    const promoCode =document.getElementById('promo-code').value;
    if (promoCode=='stevekaku') {
        const reducedAmount = parseFloat(totalBalance.innerText)*.20;
        const afterPromoCode = totalBalance.innerText-reducedAmount;
        displayCost.innerText=afterPromoCode;
        
    }
}

// 8 gb Memory handle button 
document.getElementById('8gb-memory').addEventListener('click',function(){
    
    updateMemoryCost('8gb');
    calculate('8gb');

})
// 16 gb Memory handle button 
document.getElementById('16gb-memory').addEventListener('click',function(){
 updateMemoryCost('16gb');
 calculate('16gb');

})
//256gb storage handle 
document.getElementById('256gb-storage').addEventListener('click',function(){
   UpdateStorageCost('256gb-storage');
   calculate('256gb-storage')

})
//256gb storage handle 
document.getElementById('512gb-storage').addEventListener('click',function(){
   UpdateStorageCost('512gb-storage');
   calculate('512gb-storage')
    
})
//256gb storage handle 
document.getElementById('1tb-storage').addEventListener('click',function(){
   UpdateStorageCost('1tb-storage');
   calculate('1tb-storage')
    
})

//Delivery free button handle
document.getElementById('free-delivery').addEventListener('click',function(){
   updateDeliveryCost('without-charge');
   calculate('without-charge')
})
//Delivery charge button handle
document.getElementById('charge-delivery').addEventListener('click',function(){
   updateDeliveryCost('with-charge');
    calculate('with-charge')
})
document.getElementById('submit-btn').addEventListener('click',function(){
    calculate('stevekaku');
    document.getElementById('promo-code').value = '';
 });
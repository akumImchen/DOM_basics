const form=document.querySelector('form');
// ! if we write the weight and heights cases here it will return empty values 

form.addEventListener('submit',function(e){
    e.preventDefault();

// ! converting string to int 
const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const result=document.querySelector(".result");

if(height ===''||height<0|| isNaN(height)){
    result.innerHTML=`enter a valid value ${height}`;
}
else if(weight ===''||weight<0||isNaN(weight)){
    result.innerHTML=`enter a valid value ${weight}`;
}
else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`
    let message=''
    if(bmi<=18.6){
        message=(`${bmi} is underweight`);  
    }
    else if(bmi<=24.9){
        message=(`${bmi} is normal range`);
    }
    else{
        message=(`${bmi}  pff ur obesse affff `);
        
    }
    result.innerHTML=`<span> ${message}</span>`
    // console.log(message);
    
}

})


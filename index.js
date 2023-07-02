
let Container_buttons=document.querySelector('.Container_Btn ');

let info_display=document.querySelector('.display .info-display-value');

let Display=document.querySelector('.display input')


let Mathematical_symbols=['/','+','=','-','*',]

let Numbers=[1,2,3,4,5,6,7,8,9,0];

let Clear=['AC','DEL'];

let columnCalculator ={
    1:[0,1,4,7,'AC'],
    2:['.',2,5,8,'DEL'],
    3:['/',3,6,9,'/'] ,
    4:['=','+','-','*'],
}

let count=0;

window.onload=()=>{
    for (const key in columnCalculator) {
        count++
    }
    for(let i=1;i<=count;i++){
        GenerateParentEelement(i)
    }
    
    CreateElement()

}

function CreateElement(){
    



  for (let k in columnCalculator) {
     Array.from( columnCalculator[k]).forEach((item)=>{
        
          Generateinputbottom( k,item)
      
     })
 }

}

function GenerateParentEelement(number){  
 


    Container_buttons.innerHTML+=`<div class="colum${number} newcolum">  </div>`;



}

   

function Generateinputbottom( contianer,number){

let newk=document.querySelector(`.colum${contianer}`);

   newk.innerHTML+=` <input type="button" onclick="Clickbuttons(event)" class="input-button" value="${number}">`
  
}


let infovaluenew;
let displaynew;


 let countfirstnumber=0

function  Clickbuttons(e){

    
    if(e.target.value==="DEL"  ){
        Delete(e.target.value)
        return
        
    }
    else if(e.target.value==='AC'){
        
        AC();
        return
    }
    else  if(e.target.value=='.'){
        let detect= preventdot()
        if(detect){
            return
        }
        else{
           
          console.log(math_operation)
    
        }
        
    }

    if(Mathematical_symbols.includes(e.target.value)){
        

       
        
        
        
        ManageMathematical_Symbols(e.target.value)
          
        return   
    }

    
    if(info_display.textContent){
        
        
        AddValueinfo(e.target.value)
        
        return
    }
    
    AddValueinfo(e.target.value);





}


let math_operation={
    numberone:'',
    numbertwo:'',
}


let arrayspecial=[];

function AddValueinfo(value){
    
    
    if(countfirstnumber==0){
        
        Display.value='';
        Display.value+=value
        math_operation.numbertwo=Display.value
        countfirstnumber++;
    }
    else{
        
        if(Display.value=='0'){
            Display.value=''
        }
        
        
        Display.value+=value
        math_operation.numbertwo=Display.value
    }
    
    
          
        math_operation.numberone=info_display.textContent;

        

    
}



function preventdot(){
    let regex=/\./g 
    let found=Display.value.match(regex)?true:false;;
    return found
}



function AC(){
    
    
    if(Display.value=='0' && info_display.value==''){
      
        return 
    }
    else{
        Display.value='0';
        info_display.textContent='';
        if(Display.value==='0'){
          Display.value='0'
         }
    }

    }



function Delete(){
    if(Display.value=='0' || Display.value==''){
        Display.value=0
        
    }
    
    else{
        let k= Array.from(Display.value)
        let m= k.splice(0,Display.value.length-1);
        Display.value=m.join('')

    }

   
}





function ManageMathematical_Symbols(value){


    
    info_display.textContent=Display.value+value;
    
    
    if(info_display.textContent && value){
        countfirstnumber=0
        
      
        Display.value='0';
        
        
    }
    
    arrayspecial.push(value);

    if(arrayspecial.length==2){
      Calculator(arrayspecial[0],arrayspecial[1])
    }


    


}




function Calculator(mathcurrent,mathafter ){

  
    

    switch (String(mathcurrent)) {
        case '+':
            sum(mathcurrent,mathafter)            
            break;
            case '-':
                minus(mathcurrent,mathafter)
            break;

            case '/':
                Division(mathcurrent,mathafter)
                break;
            
            case '*':
                multiplication(mathcurrent,mathafter)
                break;

        default:
         

            break;
    }



}

function sum(mathcurrent,mathafter){



  
    arrayspecial.splice(0,1)
   
    let getnumbersumone=math_operation.numberone.slice(0,math_operation.numberone.length-1);

    let setvaluesum=  (Number(getnumbersumone) + Number(math_operation.numbertwo) )

    Recognizing_operation(setvaluesum,mathafter)
}

function minus(mathcurrent,mathafter){


    arrayspecial.splice(0,1)

    let getnumberminusone=math_operation.numberone.slice(0,math_operation.numberone.length-1);
    let setvalueminu=Number(getnumberminusone)- Number(math_operation.numbertwo);

    Recognizing_operation(setvalueminu,mathafter)


}


function Division(mathcurrent,mathafter) {


    arrayspecial.splice(0,1)
    let getnumberdivisionone=math_operation.numberone.slice(0,math_operation.numberone.length-1);
    let setvaluedivision=Number(getnumberdivisionone) /Number(math_operation.numbertwo);

    Recognizing_operation(setvaluedivision,mathafter)


}


function multiplication(mathcurrent,mathafter){

   
    arrayspecial.splice(0,1)
    let gentumbermulitplicationone=math_operation.numberone.slice(0,math_operation.numberone.length-1);
    let setvalimultiplication=Number(gentumbermulitplicationone) * Number(math_operation.numbertwo);

    Recognizing_operation(setvalimultiplication , mathafter)
}




function Recognizing_operation(value ,operation){
    if(operation=='='){

        equal(value)

    }else{
        info_display.textContent=String(value)+operation;
    }   
}


function equal(setvalue){

    info_display.textContent=math_operation.numberone+math_operation.numbertwo +'=';
    Display.value=setvalue;
    arrayspecial=[];

    
}







    
    
   

let input=document.getElementById('inp');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;

        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='sqrt'){
            string=string**0.5;
            input.value=string;
        }
        else if(e.target.innerHTML=='sq'){
            string=string**2;
            input.value=string;
        }
        else if(e.target.innerHTML=='cubert'){
            string=string**1/3;
            input.value=string;
        }
        else if(e.target.innerHTML=='cube'){
            string=string**3;
            input.value=string;
        }
        else if(e.target.innerHTML=='log'){
            string=Math.log(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='!'){
            
            function fact(string) {
                if(string==0) {
                return 1;
                }
                return string* fact(string-1);
                }
            input.value=fact(string);
                
            
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
    }
    })
})
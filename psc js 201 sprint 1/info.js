function createobj(a,s,d,f,g){
    this.name=a;
    this.course=s;
    this.unit=d;
    this.image=f;
    this.batch=`FT-Web${g}`;
 }
 let data=JSON.parse(localStorage.getItem("studentinfo")) || []
 function fun1(e){
    event.preventDefault()

     let form=document.querySelector("#form")

     let name=form.name.value;
     let cource=form.course.value;
     let unit=form.unit.value;
     let img=form.image.value;
     let batch=form.batch.value;

      let x=new createobj(name,cource,unit,img,batch)
     
       data.push(x)
       localStorage.setItem("studentinfo",JSON.stringify(data))
 }

 function calculate(){
    
   let data=JSON.parse(localStorage.getItem("studentinfo")) || []

   let obj={}
 let count=0
   for(var i=0;i<data.length;i++){

       count++
       document.querySelector("#count2").innerText=`Total : ${count}`
      
       if(obj[data[i].batch]==undefined){
            obj[data[i].batch]=1
       }
       else{
         obj[data[i].batch]++
       }
   } 
     for(var a in obj){
         document.querySelector("#count").innerText=`Batch : ${a}: ${obj[a]}`
         document.querySelector("#count1").innerText=`Batch : ${a}: ${obj[a]}`
     }
   
 }
 calculate()
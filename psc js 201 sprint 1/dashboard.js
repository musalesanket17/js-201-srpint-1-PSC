function displaydata(){

    let data=JSON.parse(localStorage.getItem("studentinfo")) || []
  
     data.forEach(function(el,index){
        //  console.log(el)
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.image
        let name=document.createElement("p")
        name.innerText=el.name
        let course=document.createElement("p")
        course.innerText=el.course
        let unit=document.createElement("p")
        unit.innerText=el.unit
     
        let batch=document.createElement("p")
        batch.innerText=el.batch

        let btn=document.createElement("button")
        btn.innerText="Remove";
        btn.style.cursor="pointer"
        btn.addEventListener("click",function(){
              deleta(el,index)
        })

        div.append(image,name,course,unit,batch,btn)
        document.querySelector("#main").append(div)
     })
  }
  displaydata()
 let trash=JSON.parse(localStorage.getItem("trash"))|| []
  function deleta(el,index){
  
   let data=JSON.parse(localStorage.getItem("studentinfo")) || []
      data.splice(index,1)
      localStorage.setItem("studentinfo",JSON.stringify(data))
      trash.push(el)
      localStorage.setItem("trash",JSON.stringify(trash))
      window.location.reload()

  }
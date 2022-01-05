var orderlist = document.getElementById("orderlist")
console.log(orderlist)

function add(){
    var myinput = document.getElementById("myinput")
    console.log(myinput.value.length)

    if(myinput.value.length > 3){
      console.log("correct")
      //   create add list intodo
        var li = document.createElement("li")
        var litext = document.createTextNode(myinput.value)
        li.appendChild(litext)
        console.log(li)
        //  create deletebutton
      var delbtn = document.createElement("button")
      var deletext = document.createTextNode("")
      delbtn.innerHTML = '<i class="fas fa-trash"></i>'
      delbtn.appendChild(deletext)
      delbtn.setAttribute("onclick","delbtn(this)");
      console.log(delbtn)

    //   create editbutton
      
       var editbtn = document.createElement("editbtn")
       var edittext = document.createTextNode("")
       editbtn.innerHTML = '<i class="fas fa-edit"></i>'
      //  console.log(editbtn)
      //  console.log(edittext)
       editbtn.setAttribute("onclick","editbtn(this)")
       editbtn.appendChild(edittext)
       console.log(editbtn)
       li.appendChild(delbtn)
       li.appendChild(editbtn)
       orderlist.appendChild(li)
       myinput.value.text = ""
      } else{
        alert("enter valid data")
    } 

    function Ali(){
      orderlist.innerHTML = " "
    }

    function Foo(k){
      k.parentnode.remove()
    }

  function edit(){
    mylist = prompt("enter edit value",e.parentnode.firstChild.nodevalue())
    console.log(mylist)
    e.parentnode.firstChild.nodevalue = mylist
  }




 

    
  

















  


    }

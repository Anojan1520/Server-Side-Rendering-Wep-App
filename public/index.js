

function pop() {
    document.getElementById("mod").style.display = "block"
    document.getElementById("lay").style.display = "block"
}
function can() {
    document.getElementById("mod").style.display = "none"
    document.getElementById("lay").style.display = "none"
}
function sub(){
    let id=document.getElementById("unic").value
    let frist=document.getElementById("name").value
    let mail=document.getElementById("mail").value
    let gender=document.getElementById("gender").value
    let sel=document.getElementById("sel").value
  
    let tr=document.createElement("tr")
    tr.innerHTML=`  <tr>
    <td>${id}</td>
    <td>${frist}</td>
    <td>${mail}</td>
    <td>${gender}</td>
    <td>${sel}</td>
    <td><button class="pen"><i class="fa fa-pencil" aria-hidden="true"></i></button> <button class="trash" onclick="trash(event)"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
</tr>`
     let table=document.getElementById("table")
     table.appendChild(tr)
can()
   
}
function trash(event){
    var tr = event.target.parentNode.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
}
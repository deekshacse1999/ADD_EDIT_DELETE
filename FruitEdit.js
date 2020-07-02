var arr = [];
var index;
function myFun()
{
var name = document.getElementById('name').value;
arr.push(name);
table();

}
function table(){
var text = document.getElementById('table').innerHTML;
for (var i = 0; i < arr.length; i++) {
text+="<li>"+arr[i]+" <button onclick=myDELE("+i+");>delete</button> <button onclick=myEdit("+i+");>edit</button></li>"
}
text+="</ul>";
console.log(text);

document.getElementById('table').innerHTML = text;
tablehidden();
}

function myDELE(i)
{
var name = arr.splice(i,1);

// name.splice(i,1);
console.log(name);
table();
tablehidden();
}
function tablehidden(){
if (!arr.length) { document.getElementById('table').hidden=true; }
else{document.getElementById('table').hidden=false;}
}
function myEdit(i)
{
text = document.getElementById('name').value = arr[i];
         index = i;
}
function update(){
arr[index]=document.getElementById('name').value ;
table();
tablehidden();
}
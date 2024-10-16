let a1=1;
function qanda()
{
let a2=0;
for(;a1<=8;a1++)
{
let b=a1.toString();
let a=document.getElementById("Q"+b);
a2=0;
for(let b1=0;b1<a.length;b1++)
{
if(a[b1].checked==true)
{
if(a[b1].value=="correct")
{
document.getElementById("dis/"+b).innerHTML="correct answer";
}
else
{
document.getElementById("dis/"+b).innerHTML="wrong answer <br>";
}
a2=a2+1;
}
if(a2==0)
{
document.getElementById("dis/"+b).innerHTML="unattempted <br>";
}
}
document.getElementById("dis!"+b).style.display="block";
}
}

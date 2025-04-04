//your JS code here. If required.
let btn=document.querySelector("input");
btn.addEventListener(("click"),()=>{
let sel=document.getElementById("colorSelect");
let selectedIndex=sel.selectedIndex;
if(selectedIndex!=-1)
{
sel.remove(selectedIndex);
}
});

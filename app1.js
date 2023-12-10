const button=document.querySelector("#stisni");

button.addEventListener("click",loadDoc);

let table="";
let term,song;

function loadDoc() {
    term=document.querySelector("#umjetnik").value;
    song=document.querySelector("#pjesma").value;
    //document.querySelector('.table').innerHTML="Loading...";
    document.querySelector('.table').innerHTML="";
       document.querySelector('.table').classList.add("loading");
        
    //const url=`https://corsproxy.io/?https://itunes.apple.com/search?term=${indie}`;
    const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=${song}`;
    const songRequest=new XMLHttpRequest();
songRequest.open("GET",url,true);


songRequest.onload=function(result){
    
    document.querySelector('.table').classList.remove("loading");  
    let listap;
    try{
    listap=JSON.parse(result.target.response);
    
    if(listap['errorMessage']) throw `${listap['errorMessage']}`;


let lista=listap['results'];
console.log('===',listap);
if(lista.length!==0)
{
    table="<table>";
    table+=`<tr><th>Name</th><th>Kolekcija</th><th>Cijena</th><th>Cijena trake</th><th>Tip pjesme</th><th>Cijena</th></tr>`
    for(let i=0;i<lista.length;i++)
    {
    table+=`<tr>`
    table+=`<td>${lista[i].artistName}</td><td>${lista[i].collectionCensoredName}</td><td>${lista[i].collectionName}</td><td>${lista[i].collectionPrice}</td><td>${lista[i].kind}</td><td>${lista[i].trackPrice}</td>`
    table+=`</tr>`
}
    table+=`</table>`;
    console.log(lista);
    
    document.querySelector('.table').innerHTML=table;
} else {
    
    document.querySelector('.table').innerHTML="<h2>Nema rezultata</h2>"; 
}
    }catch(errorMessage){
        document.querySelector('.table').innerHTML=`<h2>Unesen zanr ne postoji ${errorMessage}</h2>`;   
    }


};
setTimeout(()=>{
songRequest.send();
},2000);

}
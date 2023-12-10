const button=document.querySelector("button");


document.addEventListener("click",loadDoc);

//https://corsproxy.io/?https://itunes.apple.com/search?term=jack+johnson
// const url=`https://corsproxy.io/?https://itunes.apple.com/search?term=${indie}&entity=${song}`;



let table="";


function loadDoc() {
    const term=document.querySelector("#umjetnik").value;
    // const song=document.querySelector("pjesma");
    //const url=`https://corsproxy.io/?https://itunes.apple.com/search?term=${indie}`;
    const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song`;
    let songRequest=new XMLHttpRequest();
songRequest.open("GET",url,true);

songRequest.onload=function(result){

    let listap=JSON.parse(result.target.response);

//console.log(JSON.parse(result.target.response));



let lista=listap['results'];


table="<table>";
table+=`<tr><th>Name</th><th>Kolekcija</th><th>Cijena</th><th>Cijena trake</th></tr>`
for(let i=0;i<lista.length;i++)
{
table+=`<tr>`
//console.log(`${lista[i].artistName}==${lista[i].collectionCensoredName}==${lista[i].collectionName}==${lista[i].collectionPrice}==${lista[i].kind}==${lista[i].trackPrice}`)

table+=`<td>${lista[i].artistName}</td><td>${lista[i].collectionCensoredName}</td><td>${lista[i].collectionName}</td><td>${lista[i].collectionPrice}</td><td>${lista[i].kind}</td><td>${lista[i].trackPrice}</td>`
table+=`</tr>`


}
table+=`</table>`;
console.log(lista);
document.getElementById('table').innerHTML=table;

};

songRequest.send();
}
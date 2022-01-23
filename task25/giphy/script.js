// Search() to fetch data provided by user
async function Search(){
  var search=document.querySelector("#Search").value;
  let giphy;
  try{
     var data = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=AAGf965xtYTGrVNKRuzdHUugBnzHk0g0&limit=15`,{method:"GET"});
    data=await data.json();        
    giphy=data.data;
  }catch(err){console.log(err);}
  return giphy;
}

// onclick of button we are calling display()
async function display(){
  let giphy=await Search();            //with that we are calling Searh()
  var div=document.querySelector(".dis");  //get hold on dis element
   div.innerHTML="";                       //display the fetch data in card 
   giphy.forEach((e)=>{
     div.innerHTML+=`
     <div class="card">
   <div class="embed-responsive embed-responsive-4by3">
   <iframe class="embed-responsive-item" src="${e.embed_url}"></iframe>
   </div>
   </div>`;
   });
}
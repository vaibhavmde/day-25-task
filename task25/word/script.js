//on click of button we are calling get()

async function get(){              //async 
  try{
       var data = await fetch("https://random-words-api.vercel.app/word",{method:"GET"});//fetch with method
       data=await data.json();
     }catch(err){console.log(err);}
      let info=data[0];
      const div=document.querySelector(".dis");  //geting hold on dis and displaying the fetch data
      div.innerHTML=""
      div.innerHTML=`
      <div id="card">
      <h1>${info.word}</h1>
      <p>Meaning : ${info.definition}</p>
      <p>Pronunciation=>${info.pronunciation}</p>
      </div>`;
}
 
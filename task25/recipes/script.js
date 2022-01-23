// getBySearch function to fetch data
async function getBySearch(){
    var number=document.querySelector("#search-box").value;
    let users;
    try{
      const data = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=${number}&tags=under_30_minutes`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key": "f1e2210748msh1c4f56502173a72p11b045jsnf8de56189bb7"
        }
      });
      users=await data.json();   
    }catch(err){console.log(err)}
    return users.results;
  }
  
  //onclick of button display function is called
  async function display(){
     
    let users= await getBySearch();  //in display function we are calling getBySearch
    console.log(users);
    const div=document.querySelector(".dis");  //getting hole on dis element
    div.innerHTML="";

    users.forEach(user=>{                      //with a card element we are putting fetch data
        let html = '<ul>';
        user.instructions.forEach((e) => {
            html += `<li>${e.display_text}</li>`
        })
        html += '</ul>';
      div.innerHTML+=`
         <div class="card">
         <img src="${user.thumbnail_url}" alt="">
         <h1>${user.name}</h1>
         <p>County-dish:${user.country}</p>
         <p>Description:${user.description}</p>
         <div>
         <h3>Recipe</h3>
         ${html}
         </div>
         <p>Servings:${user.num_servings}</p>
         <div>
         <h3>Nutrition</h3>
         <span>Calaries ${user.nutrition.calories}g</span>
         <span>Carbohydrates ${user.nutrition.carbohydrates}g</span>
         <span>Fat ${user.nutrition.fat}g</span>
         <span>Fiber ${user.nutrition.fiber}g</span>
         <span>Protien ${user.nutrition.protein}g</span>
         <span>Sugar ${user.nutrition.sugar}g</span>
         </div>
         </div>
         `;
    })
  }
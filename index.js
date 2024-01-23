var searchBar = document.getElementById("myForm")

searchBar.addEventListener('submit',function(e){
    e.preventDefault();

    var userInput = document.getElementById("input").value;


    //generating final input 
    var finalInput = userInput.split(' ').join('')


    //Fetch Function
    fetch("https://api.github.com/users/" + finalInput)
    .then((result) => result.json())
    .then((data)=>{
    
      console.log(data)
      document.getElementById("name").innerHTML = `<h1> ${data.login}<h1/>`
      document.getElementById("norepos").innerHTML = `<h1>Repositories     ${data.public_repos}<h1/>`
      document.getElementById("avatars").innerHTML =`<img src = "${data.avatar_url}"/>`
      document.getElementById("followers").innerHTML =`<h2> Followers      ${data.followers}<h2/>`
      document.getElementById("following").innerHTML =`<h2> Following      ${data.following}<h2/>`
      document.getElementById("repos").innerHTML =`<a href="https://github.com/${data.login}?tab=repositories"><button>View Repos</button></a>`
      document.getElementById("bio").innerHTML =`<h1>BIO<h1/> <br><p> ${data.bio}<p/>`
        

      
       /* try {
           
        } catch (error) {
            console.log(error.name)
            alert("User does not Exist")
            document.getElementById("name").innerHTML = `<h1>User Does Not Exist<h1/>`
            document.getElementById("avatars").innerHTML =`<h2> <h2/>`
            document.getElementById("followers").innerHTML =`<h2> <h2/>`
            document.getElementById("following").innerHTML =`<h2><h2/>`
            document.getElementById("repos").innerHTML =`<h2> <h2/>`
            document.getElementById("bio").innerHTML =`<p><p/>`
        } */
        
        
        })
   
    })


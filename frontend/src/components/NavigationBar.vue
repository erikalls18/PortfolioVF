<template>
  <div class = "nav-container ">
      
      <nav class="navbar">
          <div class="container">
              <div class="brand">
    
                  <span class="title">Erika Leguizamon</span>  
                  <img src="/images/wallpaper.jpg" width={200} height={200} className="img-main" alt="wallpaper" />
                  
              </div>

              <ul class="nav-links">
                <li>
                   <router-link to="/" class="nav-link">Home</router-link>
                </li>
                  <li>
                      <router-link to="/about" class="nav-link">About</router-link>
                  </li>
                 
                  <li>
                      <router-link to="/projects" class="nav-link">Projects</router-link>
                  </li>
                 
                  
              </ul>
          </div>
       </nav>
     
  </div>


</template>




<script>


export default{
  
  name:"NavigationBar"
}
</script>

<style>
.nav-container{
margin: 0%;

}
.navbar {

border-radius: 0.5rem;
padding: 1rem;
margin: auto;
width: 90%;

}

.container {
display: flex;
justify-content: space-between;
align-items: center;
}


.title{
color: rgb(27, 178, 238);
}

.nav-links {
list-style: none;
display: flex;
align-items: center;


}

.nav-link {
text-decoration: none;
color: #0a0a0a;
margin-left: 1rem;
font-size: 25px;
margin-right: 2rem;
color: white;
color: rgb(27, 178, 238);


}

.nav-link:hover {
color: #ec991c;
}

.brand {
text-decoration: none;
color: #079129;
font-size: 35px;
display: flex;
align-items: center;

border-radius: 0.5rem;


}

.img-main{
width: 60px;
height: 60px;
border-radius: 50%; 
object-fit: cover; 
margin: auto;
margin-left: 10px;


}

.title-skills{
    margin-top: 50px;
    text-align: center;
}

@media (max-width: 1024px) {



.nav-links{
    font-size: 22px;
} 

.title{
    font-size: 22px;
}

}

@media (max-width: 768px) {

    .nav-link{
    font-size: 20px;
    margin-left: 2px;
}

  
}

@media (max-width: 480px) {

    .title{
        display: none;
    }

    .nav-link{
    font-size: 18px;
    margin-left: 1px;
    margin-right: 10px;
    }

    .navbar {
    width: 70%;
    }

}


</style>
<template>
  <div class="container-home">
    
    <div class = "content">
      
      <div class=" description">
        <h2 >Hi there! I'm Erika  </h2>
       <p> I’m a Data and Software developer. I love turning challenges into sleek and  practical solutions. Always curious,  driven, 
        and passionate about crafting software that makes a real impact.</p>
        <h3 class ="subtitle">Top Categories </h3>
        <span class = "categories">Python</span> 
        <span class = "categories">JavasScript</span>
        <span class = "categories">Java</span>
        <span class = "categories">React</span>
        <span class = "categories">Node.js</span>
        <span class = "categories">Android</span>
        <div class=" container-img-reds">
          <img src="/images/git.jpg"  className="img-reds" alt="git" />
          <img src="/images/mail.png"  className="img-reds" alt="git" />
          <img src="/images/linkedin.png"  className="img-reds" alt="git" />
        </div>
     </div>
     
    <div class=" img-container">
      <img src="/images/craiyon_code.png"  className="img-home" alt="wallpaper" />
    </div>

    

    </div>
    
   
    
    <div className="container-img">
     
      
    </div>
 
  </div>
</template>

<script>
export default {
  name: 'HomePage',

}
</script>

<style scoped>
.container-home {
  
  text-align: center;
}
.content{
  width: 70%;
  margin: auto;
  margin-top: 60px;
  display: flex;
  align-items: center; 

  padding: 10px; /* Añade espacio interno */
  /*background-color: aliceblue;*/
}

.description {
  flex: 1;
 /* background-color: aqua;*/
  width: 100px;
  margin: auto;
  text-align: justify;
}

.img-container {
  flex:1;
  margin: auto;
  padding: 10px;
  margin-top: 30px;
 
}

h2{
  margin-top: 80px;
  color: rgb(224, 160, 216);
  font-size: 42px;
  text-align: left;

}
.img-home{
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover; 
  transition: box-shadow 0.3s ease, filter 0.3s ease;

 
}



 p{
  color: rgb(236, 214, 233);
  font-size: 24px;
  transition: text-shadow 0.3s ease, filter 0.3s ease;
 }

 p:hover {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Efecto de resplandor alrededor del párrafo */
  filter: brightness(1.2); /* Aumenta el brillo del texto */
}

 .img-container:hover .img-home{
  background-color: rgba(255, 255, 0, 0.5); /* Cambia este color para ajustar la iluminación */
  filter: brightness(1.8);
 }
 .categories{
  margin-left: 5px;
  background-color: rgb(15, 122, 122);
  padding: 8px;
  border-radius: 0.3rem;
  color: rgb(240, 235, 241);
  font-weight: bold;
 }
 .subtitle{
  margin-top: 65px;
  color: rgb(233, 124, 148);
  margin-bottom: 35px;
 }

 .container-img-reds{
  margin-top: 60px;
 }
 .img-reds{
  width: 40px;
  margin-right: 15px;
  border-radius: 0.5rem;

 }
</style>

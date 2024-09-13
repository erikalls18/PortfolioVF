<template>
  <div class="container-home">
    
    <div class = "content">
      
      <div class=" description">
        <h2 class=" name" >Hi there! I'm Erika  </h2>
       <p class="descr"> I’m a Data and Software developer. I love turning challenges into sleek and  practical solutions. Always curious,  driven, 
        and passionate about crafting software that makes a real impact.</p>
        <h3 class ="subtitle">Top Categories </h3>
       
        <span class = "categories"  @click="setCategory('machine-learning')">Python</span> 
        <span class = "categories"  @click="setCategory('app')">JavasScript</span>
        <span class = "categories"  @click="setCategory('app')">Java</span>
        <span class = "categories"  @click="setCategory('app')">React</span>
        <span class = "categories"  @click="setCategory('app')">Node.js</span>
        <span class = "categories"  @click="setCategory('app')">Android</span>
        <div class=" container-img-reds">
          <h4 class="connect">Let's  Connect </h4>
          <a  href="https://github.com/erikalls18" className="links" target="_blank">
            <img src="/images/git.jpg"  className="img-reds" alt="git" />
          </a>
          <a href="https://www.linkedin.com/in/erika-leguizamón/" className="links" target="_blank">
            <img src="/images/linkedin.png"  className="img-reds" alt="linkedin" />
          </a>
          <a href="mailto:erikalls18@hotmail.com" className="links">
            <img src="/images/mail.png"  className="img-reds" alt="mail" />
          </a>
          
          
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
  inject: ['selectedCategory'],

  data(){
    return{
      selectedCategory: 'all',

      
    }
  },

  methods:{
  setCategory(category){
   
    this.$router.push({ name: 'projects',  query: { category } });
  }
}

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
  padding: 10px; 
  
}

.description {
  flex: 1;
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



 p{
  color: rgb(236, 214, 233);
  font-size: 24px;
  transition: text-shadow 0.3s ease, filter 0.3s ease;
 }

 p:hover {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); 
  filter: brightness(1.2); 
}

@keyframes uptodown {
  0% {
        transform: translateY(0);
  }
  50% {
      transform: translateY(-10px);
  }
  100% {
      transform: translateY(0);
  }
  
}
.img-home{
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover; 
  transition: box-shadow 0.3s ease, filter 0.3s ease;
  display: inline-block;
  animation: uptodown 2s infinite;
 
}


 .img-container:hover .img-home{
  background-color: rgba(255, 255, 0, 0.5); 
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
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 0.5rem;
  transition: transform 0.3s ease; 
  cursor: pointer;

 }

 .img-reds:hover {
  transform: scale(1.4); 
}

 .name{
  white-space: nowrap; 
    overflow: hidden; 
    border-right: 2px solid; 
    animation: escribir 4s steps(16) 1s forwards;
    width: 0ch
 }

 @keyframes escribir {
    from { width: 0; }
    to { width: 16ch; }
}

h4{
  font-size: 20px;
  color: rgb(27, 178, 238);
}

@media (max-width: 1024px) {

.name{
  font-size: 24px;
}
.descr{
  font-size: 20px;
}

.img-home{
  width: 200px;
  height: 200px;
  margin-left: 80px;
}

}

@media (max-width: 768px) {

  .img-reds{
    width: 40px;
    height: 40px
  }
  .content{
    width: 80%;
    margin-top: 10px;
  }
  .description{
    width: 30%;

    
  }

  .descr{
    font-size: 15px;
  }
}


@media (max-width: 480px) {

  .img-home{
  width: 100px;
  height: 100px;
  margin-top: 100px;
  margin-left: 80px;
  }
  .name, .subtitle, .connect{
    font-size: 18px;
  }

  .content{
    width: 90%;
    margin-top: 10px;
  }
  .categories{
    font-size: 12px ;
    padding: 4px;
  }

  .img-reds{
    width: 25px;
    height: 25px
  }

}
</style>

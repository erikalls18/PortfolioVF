<template>
  <div class="container-projects">
    <div class="container-categories">
      <span class="categories"  :class="{ active: filter === 'all' }" @click="showAll">All</span>
      <span class="categories" :class="{ active: filter === 'app' }" @click="showApps" >Web and Mobile</span>
      <span class="categories" :class="{ active: filter === 'machine-learning' }" @click="showMl">Machine Learning</span>
    </div>
    
    <div class="container-cards">
      <div v-for="(project, index) in filteredProjects" :key="index" class="card-project" @click="openModal(project)">
        <img :src="project.image" class="img-profile" alt="project" />
        <h2 class="name-project">{{ project.name }}</h2>
      </div>
    </div>
    <Teleport to="#modal">
      <div v-if="isModalOpen" class="modal-overlay">
        <div class="modal-content">
         
          <img :src="selectedProject?.image" class="img-project" alt="project" />
          <p class="description-project">{{ selectedProject?.description }}</p>
          <p><strong>Technologies:</strong> {{ selectedProject?.technologies }}</p>
          <div class = "container-buttons">
            <button class="button-source" @click="handleSource(selectedProject)">Source</button>
            <button @click="closeModal" class="button-source">Close</button>
          </div>
          
        </div>
      </div>
    </Teleport>

    <div id="modal"></div>
  </div>
</template>

<script>

import {ref} from 'vue'

export default {


  name: 'ProjectsPage',
  data() {
    return {
      projects: [],
      isModalOpen: ref(false),
      selectedProject: ref(null),
      filter: 'all',
     
      
    };
  },

  computed:{
      filteredProjects(){
       

        if(this.filter ==='all'){
        return this.projects
        }

      return this.projects.filter(project => project.category === this.filter);
      }
      

    },

  
  created() {
    console.log("ProjectsPage component created");
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        console.log("Fetching projects...");
        const response = await fetch("/projects.json");
        if (!response.ok) {
          console.error("HTTP error:", response.status);
          return;
        }
        this.projects = await response.json();
        console.log("Projects loaded:", this.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },

    showAll() {
     this.filter = 'all'
    },
    showApps() {
      this.filter = 'app'; 
    },
    showMl() {
      this.filter = 'machine-learning';
    },

    handleSource(){
    window.open(this.selectedProject.source, "_blank"); 
   },
   closeModal() {
      this.isModalOpen = false;
    },
    openModal(project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    }
  },



 
};
</script>

<style scoped>
.container-projects {
  width: 80%;
  text-align: center;
  margin: auto;
  margin-top: 50px;
  color: rgb(37, 133, 133);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.container-cards {
  margin: auto;
  text-align: center;
  width: 85%; 
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, minmax(90px, 1fr)); 
}

.card-project {
  box-sizing: border-box;
  padding: 2px;
  border-radius: 5px;
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  transition: transform 0.3s ease;
  font-weight: bold;
  border-radius: 0.8em ;
  cursor: pointer;
}
.card-project:hover {
  transform: scale(1.1);
}
.modal-overlay {
  top:0%;
  left: 0%;
  position: fixed;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  margin:auto;
  border-radius: 08rem;

}

.modal-content {
  background-color: white;
  width: 50%; 
  height: 70%;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: auto;
  text-align: center;
  
}


.close-modal {
  margin-top: 10px;
  
}
.img-project{
  width: 80%;
  margin-top: 10px;
  object-fit: cover;
  margin:auto;
}
.title{
  color: rgb(206, 167, 211);
  animation: colorChange 2s infinite;
  text-align: left;
}


.name-project{
  transform: translateY(50px);
  opacity: 0;
  animation: slideUp 1s ease-out forwards;
  font-size: 20px;
  color: rgb(214, 195, 195);
  
  
}
@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.description-project{
  text-align: justify;
  margin: auto;
  margin-top: 40px;
}
.button-source{
  margin-top: 20px;
  padding: 8px;
  background-color: rgb(126, 63, 82);
  color: white;
  border-radius: 0.5rem;
  font-size: 18px;
}
.container-categories{
  background-color: rgb(237, 231, 241);
  padding: 15px;
  width: 35%;
  margin-left: 120px;
  margin-top: 20px;
  border-radius: 15rem;
  display: flex;
  text-align: center;
  z-index: 1;
  background: linear-gradient(90deg, rgb(209, 132, 132), rgb(62, 136, 62), rgb(58, 58, 194), rgb(117, 72, 117));
  margin: auto;
  margin-bottom: 50px;
 

}

.categories{
  margin-right: 40px;
  color: rgb(248, 244, 244);
  font-size: 20px;
  padding: 2px;
  text-align: center;
  margin: auto;
  cursor: pointer;
  position: relative;
  font-weight: bold;
 
}

.categories::after {
  content: "";
  display: block;
  height: 3px; 
  background-color: rgb(13, 13, 29); 
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.categories.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (max-width: 1024px) {
  .container-categories{
    width: 85%;
  }

  .name-project{
    font-size: 16px;
  }

  .container-cards{
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    margin: auto;
  }

  .container-project{
    height:fit-content;
  }
}

@media (max-width: 480px) {
  
  .container-projects{
    width: 100%;
  }
  .container-cards{
    grid-gap: 10px;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    margin: auto;
    width: 90%;
    font-size: 12px;
  }

  .container-categories{
    width: 90%;
    
  }
  .categories{
    font-size: 15px;
  }
  
  
}
</style>

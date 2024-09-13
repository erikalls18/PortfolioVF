<template>
  <div class="about-container">
    <div class="container-elements">
      <div class="container-img">
        <img src="/images/profile.jpg" class="img-profile" alt="wallpaper" />
        <div @click="toggleSoftwareSkills" class="container-info ">
          <h2 class="pointer">Contact Info</h2>
          <img src="/images/chevron.png" class="chevron" alt="wallpaper" />
          <div v-if="showSoftwareSkills" class="container-skills">
            <p class="data"> New Westminster, BC</p>
            <a href="mailto:erikalls18@hotmail.com" class="links">
              <span  class="data data-links"> erikalls18@hotmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/erika-leguizamón/" class="links" target="_blank">
              <p  class="data data-links">LinkedIn</p>
            </a>
            <a  href="https://github.com/erikalls18" class="links" target="_blank">
              <p  class="data data-links">Repositories</p>
            </a>  
          </div>
        </div>

        <div @click="toggleShowSoftSkills" class="container-info ">
          <h2 class="pointer">Soft Skills</h2>
          <img src="/images/chevron.png" class="chevron" alt="wallpaper" />
          <div v-if="showSoftskills" class="container-skills">
            <p class = "data">Quick Learner</p>
            <p class = "data">Problem-solving</p>
            <p class = "data">Critical thinker</p>
            <p class = "data">Collaborative teamwork</p>
            <p class = "data">Detail-oriented</p>
          </div>
        </div>
       
      </div>

      <div class="description">
        <div class= descr-par>
          <div >
            <h2 class="profile-title">A little more about me</h2>
          </div>
          <div>
            <p class="description-p1">
              Completed my degree in Computing Studies and Information Systems
              Diploma at Douglas College. I am truly passionate about acquiring new knowledge and skills, and I find joy in exploring innovative approaches to solving complex problems. This journey in the realm of technology fuels my curiosity and drives me to continuously enhance my expertise in the field.
            </p>
          </div>

          <div>
            <h2 class="profile-experience">Experience</h2>
          </div>
          <div>
            <p class="description-p2">
              My experience in IT includes working as a Data Developer, where I have had the valuable opportunity to work with data and craft solutions that contribute to informed decision-making. Additionally, I have gained practical expertise by embarking on personal projects that align with the technologies I have been learning. These projects have granted me hands-on experience and a deeper understanding of software development.
            </p>
          </div>
        </div>
        <h2 class = "title-skills">Some technologies I worked with </h2>
        <div class="container-imgs">
          <swiper
          :slides-per-view="3"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          navigation 
          :pagination="{ clickable: true }"
          loop
        >
        <swiper-slide v-for="(image, index ) in images" :key="index">
       
            <img :src="`/images/${image}`" alt="" class="imgs"/>
        </swiper-slide>
          
        </swiper>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { Swiper, SwiperSlide } from 'swiper/vue';
//import 'swiper/swiper-bundle.css'
import 'swiper/css';
import { Pagination, Navigation, Autoplay, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { register } from 'swiper/element/bundle';
register();


export default {
  name: 'AboutPage',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      showSoftwareSkills: false,
      showSoftskills: false,
      images: [
        'img_tech_1.png',
        'img_tech_2.png',
        'img_tech_3.jpg',
        'img_tech_4.png',
        'img_tech_5.png',
        'img_tech_6.jpeg',
        'img_tech_7.png',  
      
      ]
    };
  },
  methods: {
   
    toggleSoftwareSkills() {
      this.showSoftwareSkills = !this.showSoftwareSkills;
    },
    toggleShowSoftSkills() {
      this.showSoftskills = !this.showSoftskills;
    }
  },

  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Autoplay, Scrollbar, A11y],
      };
    },
};
</script>

<style scoped>

.swiper-pagination-bullet {
  background-color: goldenrod !important;
}
.about-container {
  text-align: center;
  margin: auto;
}

.container-elements {
  width: 60%;
  margin: auto;
  margin-top: 60px;
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
 
}

.container-img {
  flex: 0.5;
}

.img-profile {
  width: 250px;
  height: 250px;
  margin-top: 5px;
  border-radius: 50%;
}

.description {
  flex: 1;
  margin: 0;
  text-align: justify;
  font-size: 20px;
  color: rgb(243, 240, 236);

}

h2 {
  color: rgb(102, 155, 233);
}

.profile-title, .profile-experience {
  padding: 5px;
  border-radius: 0.5rem;
  margin: 0;
  width: 400px;
  background-clip: padding-box;
}

.pointer {
  cursor: pointer;
  color: aqua;
  display: inline-block;
  transition: transform 0.3s ease;
  margin-left: 5px;
  margin-top: 15px;
  padding: 5px;
  border-radius: 0.3rem;
  color: rgb(240, 235, 241);
  font-weight: bold;
  width: 160px;
}
.chevron{
  width: 20px;
  height: 20px;
  margin-right: 10px;

}

.pointer, .chevron:hover {
  transform: scale(1.1);
}

.skills {
  color: rgb(248, 242, 242);
  text-align: center;
  margin-top: 10px;
  background-color: rgb(3, 67, 110);
  width: 200px;
  margin: auto;
  padding: 5px;
  border-radius: 0.5rem;
  margin-top: 5px;
}

.container-imgs{
  width: 100%;

  height: 300px; 
  padding: 10px;
  max-width: 700px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  border-radius: 0.5rem;
}

.imgs {
  width: 90%;
  height: 80%;
  padding: 15px;
  margin-top: 25px;
  display: block;

  
}

.container-info{
  
  align-items:center;
  
 
}
.links{
  color:white;

}
.data-links{
  cursor: pointer;
 
}
.data{
  color: #e2d9d7;
}

.container-skills{
  font-size: 18px;
}


.descr-par p{
  opacity: 0;
  transform: scale(0.8); 
  animation: fadeFromCenter 3s ease forwards;
  margin: 20px 0;
}



@keyframes fadeFromCenter {
  0% {
    opacity: 0;
    transform: scale(0.8); 
  }
  100% {
    opacity: 1;
    transform: scale(1); 
  }
}
.descr-par h2{
  animation: colorChange 4s infinite; 
}

.title-skills{
 
  animation: colorChange 4s infinite; 
}


@keyframes colorChange {
  0% {
    text-shadow: 0 0 10px #ff0000; 
  }
  33% {
    text-shadow: 0 0 10px #42e942; 
  }
  66% {
    text-shadow: 0 0 10px #fda604; 
  }
  100% {
    text-shadow: 0 0 10px #ff0000; 
  }
}


@media (max-width: 1024px) {

  .about-container{
    margin: auto;
    
  }

  .container-elements{
  width: 90%;
  margin-left: 10px;
  margin-top: 60px;
  display: flex;
  align-items: stretch; 
 

  }

  .description {
  width: 20%;
  margin: 0;
  text-align:justify;
  font-size: 15px;

  margin-left: 50px;
 
}

.img-profile {
  width: 150px;
  height: 150px;
  margin-top: 5px;
  
}
  
}

.data{
  font-size: 15px;
}
.pointer{
  font-size: 20px;
 

}

.container-imgs{
  width: 100%;

  height: 200px; 
  padding: 5px;
  max-width: 500px;
  margin-top: 0px;
  position: relative; 
}

:root {
  --swiper-navigation-size: 20px; 
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 20%);
  width: calc(var(--swiper-navigation-size) / 20 * 5);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 20;
  cursor: pointer;
  display: flex;
  align-items: center;

  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}


@media (max-width: 768px) {

  .pointer{
    font-size: 15px;
    width: 110px;
  }

  
.container-elements{
  width: 100%;
  margin:auto;
  margin-top: 70px;

  }

  .description {
  flex: 1;
  margin: 0;
  text-align:justify;
  font-size: 15px;
  padding: 5px;
  margin: auto;
  }
  .description-p1,.description-p2{
    padding: 8px;
    width: 85%;
  }

  .container-imgs{
    width: 80%;
    height: 200px; 
    }
  .container-img{
    flex: 0.5;
    
  }

.img-profile {
  width: 150px;
  height: 150px;
  margin-top: 5px;
  border-radius: 50%;
}

.data{
  font-size: 12px;
}

.chevron{
  width: 15px;
  height: 15px;
}
.title-skills{
  text-align: left;
  font-size: 20px;
}

  .container-imgs{
    width: 80%;
   
    margin-left: 0px;
   
    height: 140px;
    }

  
}
@media (max-width: 480px) {
  .about-container{
    overflow: hidden;
  
    width: 100%;
  }
  

  .profile-title, .profile-experience, .title-skills{
    font-size: 18px;
    margin-left: 15px;
  }

  .description-p1,.description-p2{
   
    width: 85%;
    font-size: 12px;
    margin-left: 15px;
   
   
  }

  .img-profile {
  width: 80px;
  height: 80px;

}

  .container-imgs{
    width: 100%;
    height: 200px; 
 
    }

  .pointer{
    font-size: 12px;
    width: 70px;
  }
  .chevron{
  width: 10px;
  height: 10px;
  margin-right: 0px;

}
.container-elements{
  width: 90%;
  margin:auto;
  margin-top: 40px;
  
 

  }

  .imgs{
    margin-bottom: 50px;
  }

  .data{
  font-size: 10px;
}


}

</style>

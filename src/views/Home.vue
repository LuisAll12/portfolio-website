<script setup>
import { ref, onMounted } from 'vue';
import htmlIcon from '../assets/images/icons/html.png';
import cssIcon from '../assets/images/icons/css.png';
import jsIcon from '../assets/images/icons/js.png';
import csharpIcon from '../assets/images/icons/csharp.png';
import vueJsIcon from '../assets/images/icons/vuejs.png';
import pythonIcon from '../assets/images/icons/python.png';
import sqlIcon from '../assets/images/icons/sql.png';
// State variables
const age = ref(0);
const skills = ref([
    { id: 2, name: 'HTML', icon: htmlIcon, experience: '02-2024' },
    { id: 3, name: 'CSS', icon: cssIcon, experience: '02-2024' },
    { id: 4, name: 'JavaScript', icon: jsIcon, experience: '04-2024' },
    { id: 1, name: 'C#', icon: csharpIcon, experience: '08-2023' },
    { id: 5, name: 'Vue.js', icon: vueJsIcon, experience: '08-2024' },
    { id: 6, name: 'Python', icon: pythonIcon, experience: '08-2024' },
    { id: 7, name: 'SQL', icon: sqlIcon, experience: '02-2024' } 
]);


const formatDate = (date) => {
    const [month, year] = date.split('-');
    return `${month}/${year}`;
};

onMounted(() => {
    const birthDate = new Date(2008, 5, 19); 
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
    }

    age.value = calculatedAge;
});

</script>

<template>
    <div class="home-container">
        <div class="title">
            <div class="title-left">
                <h1>Hi, I'm <br><span class="colored">Luis Allamand</span></h1>
                <br>
                <p>I am currently doing my apprenticeship as an application developer at the IMS in Lucerne.</p>
                <br>
                    <div class="lowertitle">
                        <a class="btn-github" href="https://github.com/LuisAll12">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: white;">
                                <path d="M7.99992 1.33331C7.12444..." fill="currentColor"></path>
                            </svg>
                            <span>View on Github</span>
                        </a>
                    </div>
                </div>
            <div class="title-right">
                <img src="../assets/images/Portrait_Luis.jpeg" alt="Luis Allamand">
            </div>
        </div>

        <!-- About Section -->
        <h2 id="About-Title" class="section-title">About</h2>
        <div class="whoami">
            <div class="content">
                <img src="../assets/images/WhoAmI.jpg" alt="Who am I?">
                <div class="text">
                    <h2>Who am I?</h2>
                    <br>
                    <p>I am a {{ age }} year old student at the IMS Lucerne.</p>
                    <p>In my free time, I go sailing and enjoy new challenges.</p>
                    <p>When I'm indoors, I love coding and learning about tech and world affairs.</p>
                </div>
            </div>
        </div>

        <!-- Skills Section -->
        <h2 id="Skills-Title" class="section-title">Coding Skills</h2>
        <div class="skills-container">
            <div class="skills">
                <h4>My Skills</h4>
                <p>Despite my short time in software programming, I have already learned several languages and frameworks.</p>
                <br>
                <div v-for="skill in skills" :key="skill.id" class="skill-list">
                    <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
                    <div class="skill-info">
                        <h3>{{ skill.name }}</h3>
                        <p>Since: {{ formatDate(skill.experience) }}</p>
                    </div>
                </div>
            </div>
            <img class="skills-img" src="../assets/images/Coding-Picture.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
@import '../assets/css/components/home.css';

html, body {
    margin: 0;
    padding: 0;
}
</style>

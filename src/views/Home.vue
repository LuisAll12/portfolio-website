<script setup>
import { ref, onMounted } from 'vue';

const age = ref(0);

onMounted(() => {
    const birthDate = new Date(2008, 5, 19); // Monat 5 = Juni (0-basiert)
    const today = new Date();
    
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
    }
    
    age.value = calculatedAge;
    console.log("Aktuelles Alter:", age.value);
});
</script>

<template>
    <div class="home-container">
        <div class="title">
            <div class="title-left">
                <h1>Hi, I'm <br><span class="colored">Luis Allamand</span></h1>
                <br>
                <p>I am currently doing my apprenticeship as an application developer at the IMS in lucerne</p>
            </div>
            <div class="title-right">
                <img src="../assets/images/Portrait_Luis.jpeg" alt="">
            </div>
        </div>
        <br>
        <div class="lowertitle">
            <button class="cta-button">Get CV</button>
            <button class="cta-button2">Contact</button>
        </div>

        <div class="whoami">
            
            <div class="content">
                <img src="../assets/images/WhoAmI.jpg" alt="">
                <div class="text">
                    <h2>Who am I?</h2>
                    <br>
                    <p>I am a {{ age }} year old student at the IMS in Lucerne. I am currently doing my apprenticeship as an application developer. I am a very open and communicative person. I am always open to new things and I am always looking for new challenges.</p>
                    <p>In my free time, I pursue my hobbies and usually go sailing on the water, because that's what I enjoy most, apart from talking to colleagues. </p>
                    <p>When I'm sitting inside and working on the computer, there's nothing else for me but coding or finding out about new things like current world and economic issues. Building a new website or trying out a new API, I love the challenges, I learnt that from sailing. </p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/css/components/home.css';

    html, body{
        margin: 0;
        padding: 0;
    }
    
</style>
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
});
</script>

<template>
    <div class="home-container">
        <div class="title">
            <div class="title-left">
                <h1>Hi, I'm <br><span class="colored">Luis Allamand</span></h1>
                <br>
                <p>I am currently doing my apprenticeship as an application developer at the IMS in lucerne</p>
                <br>
                <div class="lowertitle">
                    <a class="btn-github" href="https://github.com/LuisAll12?tab=overview&from=2025-02-01&to=2025-02-17">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                            fill="currentcolor"
                            ></path>
                        </svg>
                        <span>View on Github</span>
                    </a>
                </div>
            </div>
            <div class="title-right">
                <img src="../assets/images/Portrait_Luis.jpeg" alt="">
            </div>
        </div>
        <br>

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
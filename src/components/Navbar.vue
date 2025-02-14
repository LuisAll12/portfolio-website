<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
    <nav class="navbar">
        <div class="logo">
            <span class="colored">L</span><span class="white">uis</span> <span class="colored">A</span><span class="white">llamand</span>
        </div>
        <button class="menu-toggle" @click="isOpen = !isOpen">☰</button>
        <ul :class="['nav-links', { 'open': isOpen }]">
            <li><a href="#" >Why Us</a></li>
            <li><a href="#" >Case Studies</a></li>
            <li><a href="#" >Testimonials</a></li>
            <li><a href="#" >FAQ</a></li>
        </ul>
        <button class="cta-button">
            Let's Talk <span class="arrow">↗</span>
        </button>
    </nav>
</template>

<style scoped>
@import '../assets/css/global.css';

span {
    font-size: 1.8rem;
}

.navbar {
    background-color: #0b0f16;
    color: var(--color-light-5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    position: relative;
}

.logo {
    font-size: 1.25rem;
    font-weight: bold;
}

.white {
    color: white;
}

.colored {
    color: #8d6eef;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 24px;
}

.nav-links li a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
}

.nav-links li a:hover {
    color: #8d6eef;
}



.cta-button {
    background: var(--gradient-primary);
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.3s;
}

.cta-button:hover {
    background-color: #8d6eef;
    translate: translateY(-2px);
}

.arrow {
    margin-left: 8px;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        background-color: black;
        width: 200px;
        text-align: right;
        padding: 16px;
    }

    .nav-links.open {
        display: flex;
    }

    .menu-toggle {
        display: block;
    }
}

html, body {
    margin: 0;
    padding: 0;
}
</style>
<script setup>

</script>
<template>
    <div class="cv-container">
        <h1 class="CV Title">This is my official CV in German</h1>
        <div class="cv-page">
            <div class="uppper">
                <div class="image-container">
                    <img src="../assets/images/Portrait_Luis.jpeg" alt="My Portrait" class="portrait">
                </div>
                <div class="cv-title">
                    <h1 class="name">Luis Allamand</h1>
                    <p class="Position">Ausbildung/Studium: Applikationsentwickler(EFZ) an der Informatikmittelschule Luzern</p>
                    <p class="Sentence">Kreativer Softwareentwickler mit Erfahrung in der Applikationsentwicklung einer mit Leidenschaft für die kontinuierliche Verbesserung von Produkten und Prozessen.</p>
                </div>
            </div>
            <br><hr><br>
            <div class="contact">
                <div class="item">
                    <img src="../assets/images/icons/cv/mail.png" alt="" class="icon" id="email">
                    <p class="text">Luis@g-12.ch</p>
                </div>
                <div class="item">
                    <img src="../assets/images/icons/cv/pin.png" alt="" class="icon" id="place">
                    <p class="text">Alpnach Dorf, Schweiz</p>
                </div>
                <div class="item">
                    <img src="../assets/images/icons/cv/linkedin.png" alt="" class="icon" id="linkedin">
                    <p class="text"><a href="https://www.linkedin.com/in/luis-allamand-b01637352/">luis-allamand</a></p>
                </div>
                <div class="item">
                    <img src="../assets/images/icons/cv/phone.png" alt="" class="icon" id="phone">
                    <p class="text">+41 78 312 33 99</p>
                </div>
                <div class="item">
                    <img src="../assets/images/icons/cv/website.png" alt="" class="icon" id="website">
                    <p class="text"><a href="https://www.luisallamand.ch/">luisallamand.ch</a></p>
                </div>
                <div class="item">
                    <img src="../assets/images/icons/cv/github.png" alt="" class="icon" id="github">
                    <p class="text"><a href="https://github.com/LuisAll12/">LuisAll12</a></p>
                </div>
            </div>
            <br><hr><br>
            <div class="content">
                <!-- WorkExperience -->
                    <div class="container" id="WorkExperience">
                        <h1 class="content-title">ARBEITSERFAHRUNG</h1>
                        <!-- Items -->
                        <div class="item">
                            <h2 class="position">Social Media Contentcreator,</h2>
                            <p class="company">Mrs. Sporty Luzern</p>
                            <p class="company-description">Grösstes Franchise-Unternehmen Europas im Bereich Frauengymnastik</p>
                            <p class="date">06/2024 - Derzeit</p>
                            <div class="servicestasks">
                                <p class="servicestasks-title">Leistungen/Aufgaben:</p>
                                <ul class="servicestasks-list">
                                    <li class="servicestasks-list-item">Erstellen von Video und Foto Inhalten.</li>
                                    <li class="servicestasks-list-item">Management und Optimierung von Social-Media-Kampagnen mit Meta-Business Manager.</li>
                                </ul>
                            </div>
                            <p class="contact"><span class="contact-title">📞 Kontakt:</span>Bolli Nick +41 78 899 04 84</p>
                        </div>

                        <div class="item">
                            <h2 class="title"></h2>
                            <p class="company"></p>
                            <p class="company-description"></p>
                            <p class="date"></p>
                            <div class="servicestasks">
                                <p class="servicestasks-title">Leistungen/Aufgaben</p>
                                <ul class="servicestasks-list">
                                    <li class="servicestasks-list-item"></li>
                                    <li class="servicestasks-list-item"></li>
                                </ul>
                            </div>
                            <p class="contact"><span class="contact-title">📞 Kontakt:</span></p>
                        </div>

                        <div class="item">
                            <h2 class="title"></h2>
                            <p class="company"></p>
                            <p class="company-description"></p>
                            <p class="date"></p>
                            <div class="servicestasks">
                                <p class="servicestasks-title">Leistungen/Aufgaben</p>
                                <ul class="servicestasks-list">
                                    <li class="servicestasks-list-item"></li>
                                    <li class="servicestasks-list-item"></li>
                                </ul>
                            </div>
                            <p class="contact"><span class="contact-title">📞 Kontakt:</span></p>
                        </div>

                    </div>

                <!-- Education -->
                    <div class="container" id="Education"></div>

                <!-- Skills -->
                    <div class="container" id="Skills"></div>

                <!-- Languages -->
                    <div class="container" id="Languages"></div>

                <!-- HobbysInterests -->
                    <div class="container" id="HobbysInterests"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/css/components/cv.css';
</style>
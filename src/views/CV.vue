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
                    <div class="side">
                        <div class="container" id="WorkExperience">
                            <h1 class="content-title">ARBEITSERFAHRUNG</h1>
                            <!-- Items -->
                                <div class="item">
                                    <h2 class="position"><em>Social Media Contentcreator,</em></h2>
                                    <p class="company">Mrs. Sporty Luzern</p>
                                    <p class="company-description">Grösstes Franchise-Unternehmen Europas im Bereich Frauengymnastik</p>
                                    <p class="date"><i>06/2024 - Derzeit</i></p>
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
                                    <h2 class="title"><em>Applikationsentwickler Remote,</em></h2>
                                    <p class="company">Prodega, Transgourment</p>
                                    <p class="company-description">Prodega/Transgourmet der führende Lebensmittel-Großhändler in der Schweiz</p>
                                    <p class="date"><i>01/2024</i></p>
                                    <div class="servicestasks">
                                        <p class="servicestasks-title">Leistungen/Aufgaben</p>
                                        <ul class="servicestasks-list">
                                            <li class="servicestasks-list-item">Entwicklung einer Website für ein Firmen-Event</li>
                                            <li class="servicestasks-list-item">Fullstack Webapplikation</li>
                                            <li class="servicestasks-list-item">Vue.js, JavaScript und CSS</li>
                                        </ul>
                                    </div>
                                    <p class="contact"><span class="contact-title">📞 Kontakt:</span>Allamand Josa +41 79 829 95 72</p>
                                </div>

                                <div class="item">
                                    <h2 class="title"><em>Hackathon-Teilnahme,</em></h2>
                                    <p class="company">UMB & ICT-BZ</p>
                                    <p class="company-description"></p>
                                    <p class="date"><i>10/2024</i></p>
                                    <div class="servicestasks">
                                        <p class="servicestasks-title">Porjekt</p>
                                        <ul class="servicestasks-list">
                                            <li class="servicestasks-list-item">Affiliate-Marketing System</li>
                                            <li class="servicestasks-list-item">PHP, HTML, CSS, XAMMP</li>
                                            <li class="servicestasks-list-item">GitHub: <a href="https://github.com/LuisAll12/Affing-PHP">LuisAll12/Affing-PHP</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                    <!-- Education -->
                        <div class="container" id="Education">
                            <h1 class="content-title">AUSBILDUNG</h1>
                            <!-- Items -->
                                <div class="item">
                                    <h2 class="title">Applikationsentwickler(EFZ) Informatikmittelschule,</h2>
                                    <p class="company">Fachmittelschule Luzern</p>
                                    <p class="date"><i>08/2023 - 08/2027</i></p>
                                </div>
                        </div>
                    </div>
                    
                    <div class="side">
                    <!-- Skills -->
                        <div class="container" id="Skills">
                            <h1 class="content-title">SKILLS</h1>
                            <!-- Items -->
                                <div class="item">
                                    <h2 class="content-title">Programmiersprachen & Technologien:</h2>
                                    <ul class="skills-list">
                                        <li class="skills-list-item">Vue.js, PHP, Python</li>
                                        <li class="skills-list-item">HTML, CSS, Javascript</li>
                                        <li class="skills-list-item">C# (inkl. WPF & Windows Forms)</li>
                                        <li class="skills-list-item">MySQL, T-SQL</li>
                                        <li class="skills-list-item">Git, XAMMP</li>
                                    </ul>
                                </div>
                                <div class="item">
                                    <h2 class="content-title">Software & Tools: </h2>
                                    <ul class="skills-list">
                                        <li class="skills-list-item">VS Code & VisualStudio, JetBrains</li>
                                        <li class="skills-list-item">Figma, Vercel, Airtable</li>
                                        <li class="skills-list-item">Adobe, Office 356</li>
                                    </ul>
                                </div>
                                <div class="item">
                                    <h2 class="content-title">Soft Skills: </h2>
                                    <ul class="skills-list">
                                        <li class="skills-list-item">Teamarbeit & Kommunikation</li>
                                        <li class="skills-list-item">Problemlösung & analytisches Denken</li>
                                        <li class="skills-list-item">Eigenständiges Arbeiten</li>
                                        <li class="skills-list-item">Kritikfähigkeit & Flexibilität</li>
                                    </ul>
                                </div>
                        </div>

                    <!-- Languages -->
                        <div class="container" id="Languages">
                            <h1 class="content-title">SPRACHEN</h1>
                            <!-- Items -->
                                <p class="language-item">Deutsch - Muttersprache</p>
                                <p class="language-item">Englisch - Fliessend (B2/C1)</p>
                                <p class="language-item">Französisch - Grundkentnisse (A2/B1)</p>
                        </div>

                    <!-- HobbysInterests -->
                        <div class="container" id="HobbysInterests"></div>
                    </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/css/components/cv.css';
</style>
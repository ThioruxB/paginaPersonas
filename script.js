document.addEventListener('DOMContentLoaded', () => {
    // --- Main Particle Config ---
    const mainParticlesConfig = {
        "particles": {
            "number": { "value": 120, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#999999" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.7, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#bbbbbb", "opacity": 0.6, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    };

    // --- Header/Footer Particle Config (White & Fewer) ---
    const headerFooterParticlesConfig = {
        "particles": {
            "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.6, "random": true },
            "size": { "value": 2, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.3, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } },
        "retina_detect": true
    };

    // --- Initialize All Particle Instances ---
    particlesJS('particles-js', mainParticlesConfig);
    particlesJS('header-particles', headerFooterParticlesConfig);
    particlesJS('footer-particles', headerFooterParticlesConfig);

    // Embedded Data
    const profiles = [
      {
        "imagen": "person_1.jpg",
      "rango_de_edad": {
        "minima": 38,
        "maxima": 48
      },
      "genero": "Masculino",
      "descripcion_demografica": "Hombre de aparente etnia hispana o latina, de complexión media, con cabello corto y oscuro y bigote. Viste de manera informal con ropa oscura (polo, pantalones y chaleco o chaqueta sobre los hombros).",
      "perfil_de_consumidor": "Consumidor práctico y casual. Su estilo de vestir sugiere una preferencia por la comodidad y la funcionalidad sobre las tendencias de moda. Podría ser leal a marcas conocidas que ofrezcan una buena relación calidad-precio para uso diario."
      },
      {
        "imagen": "person_2.jpg",
      "rango_de_edad": {
        "minima": 60,
        "maxima": 70
      },
      "genero": "Masculino",
      "descripcion_demografica": "Hombre de aparente etnia caucásica, de edad avanzada y complexión robusta. Tiene cabello corto y canoso, y lleva gafas. Viste de manera informal con un suéter o sudadera de color gris y pantalones de mezclilla.",
      "perfil_de_consumidor": "Consumidor que prioriza la comodidad y la practicidad. Su estilo es funcional y tradicional, lo que sugiere una preferencia por marcas consolidadas que ofrezcan prendas duraderas y confortables. No parece seguir las tendencias de la moda."
      },
      {
        "imagen": "person_3.jpg",
      "rango_de_edad": {
        "minima": 40,
        "maxima": 50
      },
      "genero": "Masculino",
      "descripcion_demografica": "Hombre de aparente etnia caucásica o hispana, de complexión media. Tiene cabello corto y oscuro y lleva gafas. Viste con un estilo 'smart casual' que incluye una camisa de color claro debajo de un suéter azul, pantalones oscuros y zapatos de vestir de color marrón.",
      "perfil_de_consumidor": "Consumidor que se inclina por un estilo de vestir profesional pero relajado ('business casual'). Su atuendo sugiere que valora la presentación y la calidad, eligiendo prendas clásicas y versátiles que se adaptan tanto a un entorno de oficina como a un evento social. Podría ser cliente de marcas que ofrecen una estética pulcra y atemporal."
      },
      {
        "imagen": "person_4.jpg",
      "rango_de_edad": {
        "minima": 28,
        "maxima": 38
      },
      "genero": "Masculino",
      "descripcion_demografica": "Hombre de aparente etnia hispana, latina o afrodescendiente, de complexión robusta. Tiene el cabello corto y oscuro con un corte de estilo degradado y lleva barba. Viste de manera informal con un atuendo completamente negro (camiseta y pantalones), lleva una mochila y calza zapatillas deportivas de dos tonos. Se le observa mirando su teléfono móvil.",
      "perfil_de_consumidor": "Consumidor con un estilo urbano y moderno. Su elección de un atuendo monocromático, combinado con zapatillas de deporte de moda y una mochila, sugiere una preferencia por la ropa de calle ('streetwear') y las marcas que proyectan una imagen actual y funcional. Su atención al móvil podría indicar que es un consumidor tecnológicamente hábil, posiblemente influenciado por tendencias en línea y redes sociales."
      }
    ];

    const slider = document.querySelector('.carousel-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const personSelect = document.getElementById('person-select');
    
    let currentIndex = 0;
    let ageChart, genderChart;
    let radarCharts = []; // To hold instances of our radar charts

    function calculateRadarStats(profile) {
        const text = (profile.perfil_de_consumidor + ' ' + profile.descripcion_demografica).toLowerCase();
        const stats = { 'Comodidad': 2, 'Moda': 2, 'Practicidad': 2, 'Calidad': 2, 'Precio': 2 };
        if (/comodidad|cómoda|confortables|relajado/.test(text)) stats['Comodidad'] = 9;
        if (/moda|tendencias|estilo|juvenil|moderno|streetwear/.test(text)) stats['Moda'] = 8;
        if (/práctico|funcional|utilitario|versátiles/.test(text)) stats['Practicidad'] = 9;
        if (/calidad|duraderas|resistentes|consolidadas/.test(text)) stats['Calidad'] = 7;
        if (/asequibles|calidad-precio|ofertas/.test(text)) stats['Precio'] = 8;
        return Object.values(stats);
    }

    function createStatSheetHTML(profile, index) {
        const consumerClass = profile.perfil_de_consumidor.split('.')[0];
        const traits = profile.perfil_de_consumidor.slice(consumerClass.length + 1).split(/[,.]/).map(t => t.trim()).filter(t => t.length > 3);
        const traitsHTML = traits.map((trait, i) => `<div class="tag" style="animation-delay: ${i * 100}ms">${trait}</div>`).join('');
        return `
            <h2 class="profile-title">PERSONA ${profile.imagen.split('_')[1].split('.')[0]}</h2>
            <div class="profile-description">
                <div class="stat-block" style="animation-delay: 0s"><span class="stat-block__label">Clase</span><span class="stat-block__value">${consumerClass}</span></div>
                <div class="stat-block" style="animation-delay: 100ms"><span class="stat-block__label">Género</span><span class="stat-block__value">${profile.genero}</span></div>
                <div class="stat-block" style="animation-delay: 200ms"><span class="stat-block__label">Rango de Edad</span><span class="stat-block__value">${profile.rango_de_edad.minima} - ${profile.rango_de_edad.maxima}</span></div>
                <div class="stat-block stat-block--full-width" style="animation-delay: 300ms"><span class="stat-block__label">Rasgos</span><div class="tags-container">${traitsHTML}</div></div>
            </div>
            <div class="radar-chart-container">
                <canvas id="radar-chart-${index}"></canvas>
            </div>
        `;
    }

    function createProfileCards() {
        slider.innerHTML = '';
        profiles.forEach((profile, index) => {
            const card = document.createElement('div');
            card.classList.add('profile-card');
            const image = document.createElement('img');
            image.src = `cropped_persons/${profile.imagen}`;
            image.alt = `Imagen de ${profile.imagen}`;
            const statSheetContainer = document.createElement('div');
            statSheetContainer.innerHTML = createStatSheetHTML(profile, index);
            card.appendChild(image);
            while(statSheetContainer.firstChild) card.appendChild(statSheetContainer.firstChild);
            slider.appendChild(card);
        });
        createAllRadarCharts();
    }
    
    function createAllRadarCharts() {
        profiles.forEach((profile, index) => {
            const ctx = document.getElementById(`radar-chart-${index}`).getContext('2d');
            const statsData = calculateRadarStats(profile);
            radarCharts[index] = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Comodidad', 'Moda', 'Practicidad', 'Calidad', 'Precio'],
                    datasets: [{
                        label: 'Atributos de Consumidor',
                        data: statsData,
                        backgroundColor: 'rgba(0, 123, 255, 0.2)',
                        borderColor: 'rgba(0, 123, 255, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(0, 123, 255, 1)'
                    }]
                },
                options: {
                    animation: { duration: 1200, easing: 'easeInOutCubic' },
                    scales: { r: { angleLines: { color: 'var(--border-color)' }, grid: { color: 'var(--border-color)' }, pointLabels: { font: { size: 12 }, color: 'var(--text-color-muted)' }, ticks: { backdropColor: 'var(--card-background)', color: 'var(--text-color-muted)' }, min: 0, max: 10 } },
                    plugins: { legend: { display: false } }
                }
            });
        });
    }

    function populatePersonSelect() {
        profiles.forEach((profile, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `Persona ${profile.imagen.split('_')[1].split('.')[0]}`;
            personSelect.appendChild(option);
        });
    }

    function updateCarousel() {
        if (slider.querySelector('.profile-card')) {
            const cardWidth = slider.clientWidth;
            slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
            personSelect.value = currentIndex;
            updateMainCharts(currentIndex);
        }
    }

    function createMainCharts() {
        const ageCtx = document.getElementById('ageChart').getContext('2d');
        const genderCtx = document.getElementById('genderChart').getContext('2d');
        const commonOptions = { animation: { duration: 1200, easing: 'easeInOutCubic' }, plugins: { legend: { labels: { color: 'var(--text-color)', font: { size: 14 } } } }, scales: { x: { ticks: { color: 'var(--text-color-muted)' }, grid: { display: false } }, y: { ticks: { color: 'var(--text-color-muted)' }, grid: { color: 'var(--border-color)' } } } };
        ageChart = new Chart(ageCtx, { type: 'bar', data: { labels: [], datasets: [{ label: 'Conteo de Edades', data: [], backgroundColor: 'var(--chart-1)' }] }, options: commonOptions });
        genderChart = new Chart(genderCtx, { type: 'doughnut', data: { labels: [], datasets: [{ data: [], backgroundColor: ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)'] }] }, options: { ...commonOptions, scales: {} } });
        updateMainCharts('all');
    }

    function updateMainCharts(personIndex = 'all') {
        let dataToShow = (personIndex === 'all' || personIndex === null) ? profiles : [profiles[personIndex]];
        const ageRanges = {};
        const ageLabels = ['10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70+'];
        ageLabels.forEach(l => ageRanges[l] = 0);
        dataToShow.forEach(p => {
            const avgAge = (p.rango_de_edad.minima + p.rango_de_edad.maxima) / 2;
            if (avgAge < 20) ageRanges['10-19']++; else if (avgAge < 30) ageRanges['20-29']++; else if (avgAge < 40) ageRanges['30-39']++; else if (avgAge < 50) ageRanges['40-49']++; else if (avgAge < 60) ageRanges['50-59']++; else if (avgAge < 70) ageRanges['60-69']++; else ageRanges['70+']++;
        });
        ageChart.data.labels = ageLabels;
        ageChart.data.datasets[0].data = Object.values(ageRanges);
        ageChart.update();
        const genderCounts = { 'Masculino': 0, 'Femenino': 0, 'Indeterminado': 0 };
        dataToShow.forEach(p => { if (genderCounts[p.genero] !== undefined) genderCounts[p.genero]++; });
        genderChart.data.labels = Object.keys(genderCounts);
        genderChart.data.datasets[0].data = Object.values(genderCounts);
        genderChart.update();
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % profiles.length; updateCarousel(); });
    prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + profiles.length) % profiles.length; updateCarousel(); });
    personSelect.addEventListener('change', (e) => { const val = e.target.value; if (val === 'all') { updateMainCharts('all'); } else { currentIndex = parseInt(val, 10); updateCarousel(); } });
    window.addEventListener('resize', () => { if (profiles.length > 0) updateCarousel(); });

    // Initialize App
    function initializeApp() {
        createProfileCards();
        populatePersonSelect();
        createMainCharts();
        updateCarousel();
    }

    initializeApp();
});
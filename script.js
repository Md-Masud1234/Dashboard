document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle logic
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('bg-gray-100');
        document.body.classList.toggle('bg-gray-800');
        document.body.classList.toggle('text-white');
    });

    // Data for the charts
    const gdpData = {
        countries: [
            "United States Of America", "China", "Japan", "Germany", "India",
            "United Kingdom", "France", "Italy", "Brazil", "Canada"
        ],
        gdp: [21137, 14140, 5155, 3846, 2875, 2825, 2716, 2001, 1839, 1736],
        growth: [
            [1000, 2000, 4000, 8000, 16000], // US
            [500, 1000, 3000, 7000, 14140],  // China
            [3000, 4000, 5000, 6000, 5155],  // Japan
            [2000, 2500, 3000, 3500, 3846],  // Germany
            [500, 800, 1200, 2000, 2875],    // India
            [1500, 1800, 2000, 2500, 2825],  // UK
            [1400, 1600, 2000, 2400, 2716],  // France
            [1000, 1200, 1500, 1800, 2001],  // Italy
            [900, 1100, 1300, 1600, 1839],   // Brazil
            [800, 1000, 1200, 1400, 1736]    // Canada
        ]
    };

    // Bar Chart (Top 10 GDP)
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: gdpData.countries,
            datasets: [{
                label: 'GDP (in billion USD)',
                data: gdpData.gdp,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Line Chart (GDP Growth)
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['1970', '1990', '2000', '2010', '2020'],
            datasets: gdpData.countries.map((country, index) => ({
                label: country,
                data: gdpData.growth[index],
                fill: false,
                borderColor: `hsl(${index * 36}, 70%, 50%)`,
                tension: 0.1
            }))
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

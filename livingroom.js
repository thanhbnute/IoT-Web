function initLivingroom() {
    startClock(); // Từ main.js
    drawCharts();
}

function drawCharts() {
    const data = mockSensorData.livingroom;

    // Update current values
    document.querySelector('.val-temp').innerText = `${data.temp} °C`;
    document.querySelector('.val-humid').innerText = `${data.humidity} %`;
    document.querySelector('.light-text').innerText = `Ánh sáng: ${data.light} Lux`;

    // Temp Chart (tương tự bedroom)
    new Chart(document.getElementById('chartTemp').getContext('2d'), {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Nhiệt độ',
                data: data.tempHistory,
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.2)',
                borderWidth: 3,
                pointBackgroundColor: '#e74c3c',
                pointRadius: 4,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { suggestedMin: 20, suggestedMax: 35 } }
        }
    });

    // Humidity Chart
    new Chart(document.getElementById('chartHumid').getContext('2d'), {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Độ ẩm',
                data: data.humidityHistory,
                borderColor: '#27ae60',
                backgroundColor: 'rgba(39, 174, 96, 0.2)',
                borderWidth: 3,
                pointBackgroundColor: '#27ae60',
                pointRadius: 4,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { suggestedMin: 50, suggestedMax: 70 } }
        }
    });
}
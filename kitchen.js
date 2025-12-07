function initKitchen() {
    startClock();
    drawCharts();
}

function drawCharts() {
    const data = mockSensorData.kitchen;

    // Update current values
    document.querySelector('.val-temp').innerText = `${data.temp} °C`;
    document.querySelector('.val-humid').innerText = `${data.humidity} %`;
    document.querySelector('.gas-text').innerText = `Khí gas: ${data.gas} %`;

    // Update gas gauge conic-gradient dynamic (via CSS)
    const gasGauge = document.querySelector('.gas-gauge');
    gasGauge.style.background = `conic-gradient(#e74c3c 0% ${data.gas}%, #e0e0e0 ${data.gas}% 100%)`;

    // Temp Chart (đồng bộ với các phòng)
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
            scales: { y: { suggestedMin: 20, suggestedMax: 40 } }  // Giới hạn để tránh kéo dài
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
            scales: { y: { suggestedMin: 40, suggestedMax: 70 } }  // Giới hạn
        }
    });
}
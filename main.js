// Dữ liệu mock thống nhất cho tất cả phòng
const mockSensorData = {
    bedroom: {
        temp: 25.5,
        humidity: 60,
        light: 400,
        labels: ["21:00", "22:00", "23:00", "00:00", "01:00", "02:00"],
        tempHistory: [26.0, 25.8, 25.5, 25.4, 25.3, 25.5],
        humidityHistory: [65, 62, 60, 61, 60, 60]
    },
    livingroom: {
        temp: 28.5,
        humidity: 62,
        light: 750,
        labels: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
        tempHistory: [27.5, 28.1, 28.5, 28.2, 29.0, 28.8],
        humidityHistory: [65, 63, 62, 64, 61, 62]
    },
    kitchen: {
        temp: 32.1,
        humidity: 55,
        gas: 30,
        labels: ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
        tempHistory: [30.0, 31.5, 32.1, 31.8, 33.0, 32.5],
        humidityHistory: [58, 56, 55, 57, 54, 55]
    }
};

// Đồng hồ thời gian
function startClock() {
    const updateTime = () => {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        document.getElementById("time").innerText = h + ":" + m + ":" + s;
    };
    updateTime();
    setInterval(updateTime, 1000);
}

// Toggle devices chung
function toggleDevice(btn) {
    const isTurningOn = btn.innerText === "OFF";
    const deviceId = btn.id.split('-')[1]; // light, fan, etc.
    const icon = document.getElementById(`${deviceId}-icon`);

    if (isTurningOn) {
        btn.innerText = "ON";
        btn.classList.add("on");
        if (icon) icon.src = `image/icon_${deviceId}_on.gif`;
    } else {
        btn.innerText = "OFF";
        btn.classList.remove("on");
        if (icon) icon.src = `image/icon_${deviceId}_off.png`;
    }
}

// Menu navigation
function goHome() { window.location.href = "index.html"; }
function goBedroom() { window.location.href = "bedroom.html"; }
function goLiving() { window.location.href = "livingroom.html"; }
function goKitchen() { window.location.href = "kitchen.html"; }
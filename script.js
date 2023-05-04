const solarCalculator = document.getElementById('solar-calculator');
const results = document.getElementById('results');
const solarPanels = document.getElementById('solar-panels');
const inverterSize = document.getElementById('inverter-size');
const batterySize = document.getElementById('battery-size');

const panelOptions = [470, 550];
const inverterOptions = [5, 8, 10, 12];
const batteryOptions = [5.1, 4.8, 5.32, 6.14, 8, 10.4];

solarCalculator.addEventListener('submit', (event) => {
    event.preventDefault();

    const lights = parseInt(document.getElementById('lights').value);
    const tvs = parseInt(document.getElementById('tvs').value);
    const fridges = parseInt(document.getElementById('fridges').value);
    const airConditioners = parseInt(document.getElementById('air-conditioners').value);
    const stoveHours = parseInt(document.getElementById('stove-hours').value);
    const geyserHours = parseInt(document.getElementById('geyser-hours').value);

    const totalEnergyUsage = (lights * 10 + tvs * 150 + fridges * 500 + airConditioners * 1000) * 24 + stoveHours * 3000 + geyserHours * 2000;
    const requiredSolarPower = totalEnergyUsage / 24;

    const numberOfPanels = Math.ceil(requiredSolarPower / Math.max(...panelOptions));
    const chosenInverter = inverterOptions.find((inverter) => inverter * 1000 >= requiredSolarPower);
    const chosenBattery = batteryOptions.find((battery) => battery * 1000 >= totalEnergyUsage);

    solarPanels.textContent = `Number of Solar Panels: ${numberOfPanels}`;
    inverterSize.textContent = `Inverter Size Needed: ${chosenInverter}kW`;
    batterySize.textContent = `Battery Size Needed: ${chosenBattery}kWh`;

    results.classList.remove('hidden');
});

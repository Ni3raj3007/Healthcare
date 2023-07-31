document.addEventListener("DOMContentLoaded", () => {
  // Simulated health data (replace with real data from wearable devices)
  const healthData = {
    heartRate: 73,
    bloodPressure: "120/80",
    sleepQuality: "Good",
    activityLevel: "Moderate"
  };

  // Update health dashboard with simulated data
  document.getElementById("heartRate").textContent = healthData.heartRate;
  document.getElementById("bloodPressure").textContent = healthData.bloodPressure;
  document.getElementById("sleepQuality").textContent = healthData.sleepQuality;
  document.getElementById("activityLevel").textContent = healthData.activityLevel;

  // Simulated personalized recommendation (replace with real AI-based recommendations)
  const recommendation = "Take a short walk in the park for 15 minutes.";
  document.getElementById("recommendation").textContent = recommendation;

  // Emergency button click event (replace with actual emergency response functionality)
  document.getElementById("emergencyButton").addEventListener("click", () => {
    alert("Distress signal sent! Help is on the way.");
  });

  // Telemedicine button click event (replace with actual telemedicine functionality)
  document.getElementById("telemedicineButton").addEventListener("click", () => {
    alert("Telemedicine consultation requested. Please wait for the call.");
  });
});

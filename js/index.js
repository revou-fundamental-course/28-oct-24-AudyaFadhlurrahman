function calculateBMI(event) {
  event.preventDefault();

  // Get values from the form
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  // Calculate BMI
  const bmi = weight / (height * height);
  const bmiResult = bmi.toFixed(2);
  let category;
  let min, max;
  let explanation;

  // Determine the BMI category and set boundaries
  if (bmi < 18.5) {
    category = "Kekurangan Berat Badan";
    min = 0;
    max = 18.5;
    explanation = "Anda perlu meningkatkan berat badan Anda untuk mencapai BMI yang lebih sehat.";
  } else if (bmi < 24.9) {
    category = "Normal";
    min = 18.5;
    max = 24.9;
    explanation = "Anda berada pada berat badan yang sehat. Pertahankan gaya hidup sehat Anda.";
  } else if (bmi < 29.9) {
    category = "Kelebihan Berat Badan";
    min = 24.9;
    max = 29.9;
    explanation = "Anda disarankan untuk menurunkan berat badan agar kembali ke rentang yang lebih sehat.";
  } else {
    category = "Obesitas";
    min = 29.9;
    max = 40;
    explanation = "Kondisi ini berisiko tinggi untuk masalah kesehatan. Konsultasikan dengan dokter.";
  }

  // Update the HTML with the results
  document.getElementById("bmi-result").innerText = ` ${bmi.toFixed(2)}`;
  document.getElementById("bmi-category").innerText = `Anda berada dalam kategori: ${category}`;
  document.getElementById("bmi-category2").innerText = `Anda ${category}`;
  document.getElementById("bmi-summary").innerText = `Hasil BMI Anda di antara: ${min} - ${max}`;

  document.getElementById("download-button").style.display = "block";
}

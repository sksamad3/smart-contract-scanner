const fileInput = document.getElementById('main-input');
const fileText = document.getElementById('file-text');
const scanButton = document.getElementById('scan-button');

// Update file label text when file is selected
fileInput.addEventListener('change', () => {
  if(fileInput.files.length > 0){
    fileText.textContent = fileInput.files[0].name;
  } else {
    fileText.textContent = "Choose Solidity File...";
  }
});

// Scan button triggers upload
scanButton.addEventListener('click', async () => {
  if(fileInput.files.length === 0) return;

  const formData = new FormData();
  formData.append("contract", fileInput.files[0]);

  try {
    const res = await fetch("http://localhost:5000/scan", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    document.getElementById("result").innerHTML =
      "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
  } catch (err) {
    document.getElementById("result").innerHTML =
      "<p style='color:red;'>Error connecting to server.</p>";
    console.error(err);
  }
});



# 🛡️ Smart Contract Scanner

A **full-stack smart contract scanner** that allows users to upload Solidity (`.sol`) files and scan for vulnerabilities.

* **Frontend:** User-friendly upload form & JSON results display
* **Backend:** Node.js + Express server handling uploads
* **Scanner module:** Analyzes contracts and returns structured findings

---

## ⚙️ Prerequisites

Make sure your system has the following installed:

* 🟢 **Node.js** (v18+) → [Download here](https://nodejs.org/)
* 🟢 **npm** (comes with Node.js)
* 💻 Terminal / Command Prompt

> ✅ Note: If Node.js is installed, npm comes with it automatically.

---

## 📂 Project Structure

```
Smart-contract-scanner/
│ server.js              # Backend server
│ package.json           # Project dependencies
│ node_modules/          # Auto-generated, contains installed packages
│
├── frontend/
│    └── index.html      # User interface
│
├── lib/
│    └── scanner.js      # Scanner logic
│
├── uploads/             # Temporary storage for uploaded files
```

---

## 🏁 Step-by-Step Execution

### **1️⃣ Clone the repository (optional if viewing directly from GitHub)**

1. Open your terminal / command prompt
2. Navigate to the folder where you want the project:

```bash
cd path_to_your_folder
```

3. Clone the repository:

```bash
git clone https://github.com/sksamad3/smart-contract-scanner.git
```

4. Go into the project folder:

```bash
cd Smart-contract-scanner
```

---

### **2️⃣ Install all project dependencies**

1. Make sure your terminal is in the project folder (`Smart-contract-scanner`)
2. Run:

```bash
npm install
```

> ⏳ This will install all required packages like **express, cors, multer, open**.

---

### **3️⃣ Run the server**

1. In the terminal (inside project folder), run:

```bash
node server.js
```

2. You should see:

```
Server running on http://localhost:5000
```

3. ✅ Your default browser will automatically open **frontend page**

> If the browser doesn’t open automatically, open it manually and go to:

```
http://localhost:5000
```

---

### **4️⃣ Upload and scan a contract**

1. On the opened webpage, click **Choose File**
2. Select any `.sol` Solidity contract from your computer
3. Click **Scan**
4. Wait a few seconds → JSON results will appear below the form

> Example output:

```json
{
  "success": true,
  "report": {
    "file": "uploads/123456789.sol",
    "findings": ["[Demo] Scanner is working! Add rules next."]
  }
}
```

---

### **5️⃣ Notes**

* 🗂️ Uploaded files are saved temporarily in the `uploads/` folder
* ⚡ Scanner currently returns **demo findings**
* 💡 No further setup needed — fully demo-ready

---

### **6️⃣ Optional: Viewing the project on GitHub**

* Open any browser on your phone or PC:

```
https://github.com/sksamad3/smart-contract-scanner
```

* You can **view code, file structure, and commit history** without installing anything

---

### **7️⃣ Troubleshooting**

* ❌ If `node server.js` fails:

  * Make sure Node.js and npm are installed
  * Make sure you are in the **correct project folder**
  * Run `npm install` first before starting the server

* ❌ If browser doesn’t open automatically:

  * Manually go to `http://localhost:5000`

---

### ✅ Congratulations!

* You have now a **fully functional demo-ready smart contract scanner**
* Frontend + backend + scanner are **working together**
* Ready for testing, presentation, and further improvements

---
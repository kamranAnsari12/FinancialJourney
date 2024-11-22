const sendToBackend = async () => {
    if (!combinedData) {
      console.log("No data to send.");
      return;
    }
  
    try {
      const response = await fetch("https://your-backend-url.com/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });
      const result = await response.json();
      console.log("Data successfully sent:", result);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  
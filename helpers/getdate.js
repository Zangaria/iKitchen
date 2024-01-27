

// Amitoz 27/01/24
export const getIsraelDateTime = () => {
    const israelTimeZone = "Asia/Jerusalem";
    const currentTime = new Date();
    const options = { timeZone: israelTimeZone, hour12: false };
  
    return currentTime.toLocaleString("en-US", options);
  };
  

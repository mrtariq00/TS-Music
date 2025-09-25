const API_URL = "https://raw.githubusercontent.com/mrtariq00/api-s/refs/heads/main/songsApi.json";

async function getSongs() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // songs ka pura data return karega
  } catch (error) {
    console.error("Error fetching songs:", error);
    return null;
  }
}

// Example use:
let TsMusic = await getSongs();

console.log(TsMusic);
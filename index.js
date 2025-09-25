const API_URL = "https://raw.githubusercontent.com/mrtariq00/api-s/refs/heads/main/songsApi.json";

async function getData() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data || data; // return songs array
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}
async function getSongs() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.songs || data; // return songs array
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}

const TsMusic = {
  getSongs : await getSongs(),
  getData : await getData()
};

// console.log(TsMusic.getData);


export default TsMusic;

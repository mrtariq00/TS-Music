# TS Music API

**TS Music API** is a free and open-source music API providing song metadata, cover images, ratings, and audio streaming links. It allows developers to integrate music-related data into their applications with ease. You can access song metadata, images, ratings, and more.

## Features

- Free access to music metadata, including song information, cover images, and audio streaming links.
- Open-source, easily extendable.
- JSON response format for easy integration into your project.
- Provides a `songs` array that can be used to fetch song details and other related data.

## Installation

You can use the `TS Music API` in your project by installing it via npm.

```bash
npm install tsmusic
```
or directly from api 
```bash
https://raw.githubusercontent.com/mrtariq00/api-s/refs/heads/main/songsApi.json
```
## Usage
### Example

```bash
import TsMusic from 'tsmusic';

async function getAllSongs() {
  try {
    // Fetching the songs metadata
    const songs = TsMusic.getSongs;
    console.log(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
  }
}

getAllSongs();

```
This will return an array of songs and their metadata.

API Methods
TsMusic.getData()
Fetches general music data (metadata, cover images, etc.)

Returns a JSON object with song details.

TsMusic.getSongs()
Fetches an array of songs with all associated metadata (song title, artist, rating, etc.).

Returns an array of songs.

Scripts
You can run the following scripts using npm run:

npm run start: Starts the API and fetches data from the provided URL.

npm run test: Placeholder for any future test implementations.

License
This project is licensed under the Apache-2.0 License.

Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

Bugs & Issues
If you encounter any bugs or issues, please report them on the GitHub issues page.

Links
TS Music API [GitHub Repository](https://github.com/mrtariq00/api-s "GitHub Repository")


TS Music API [Homepage](https://mrtariq00.github.io/api-s/ "Homepage")

## Author
This project is maintained by Tariq Elahi.

### Key Sections Explained:
- **Overview**: General description of what the API does and its features.
- **Installation**: How to install and use the API in your project.
- **Usage**: Example code showing how to integrate and call the API in your application.
- **License**: Mentions the Apache-2.0 open-source license.
- **Contributing**: Information about contributing to the project.
- **Bugs & Issues**: Link to the GitHub Issues page for bug reporting.

# static properties

- Properties which belong to class itself not for the instances of the class

- Declared within static keyword

- Accessed directly through the class name using dot notation

---

## Example 

```JavaScript
class Circle {
    static PI = 3.14159; // static property

    constructor(radius) {
        this.radius = radius;
    }

    getArea(){
        return Circle.PI * this.radius * this.radius; // Accessing static property
    }
}

console.log(Circle.PI); // output: 3.14159
```


## Example 2

```javaScript
class MusicPlayer {
    static supportedFormats = ["mp3", "ogg", "flac"]; // Stores supported audio formats (static property)
  
    constructor(playlist) {
      this.playlist = playlist;
    }
  
    play(song) {
      if (MusicPlayer.supportedFormats.includes(song.format)) {
        // Play the song
        console.log(`Playing song: ${song.title}`);
      } else {
        console.log(`Unsupported format: ${song.format}`);
      }
    }
  }
  
  // Create a playlist with different formats
  const playlist = [
    { title: "Song A", format: "mp3" },
    { title: "Song B", format: "ogg" },
    { title: "Song C", format: "wav" }, // Unsupported format
  ];
  
  const player = new MusicPlayer(playlist);
  
  player.play(playlist[0]); // Output: Playing song: Song A
  player.play(playlist[2]); // Output: Unsupported format: wav
```


export default function videos() {
  const videos = document.querySelectorAll(".video");

  if (videos.length) {
    videos.forEach(video => {
      const player = new Plyr(video);
    })
  }
}
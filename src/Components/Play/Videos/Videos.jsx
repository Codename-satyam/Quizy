import React, { useState } from "react";
import "./Videos.css";

const sampleVideos = [
  { id: "dQw4w9WgXcQ", title: "Sample Video 1" },
  { id: "9bZkp7q19f0", title: "Sample Video 2" },
  { id: "3JZ_D3ELwOQ", title: "Sample Video 3" },
  { id: "kxopViU98Xo", title: "Sample Video 4" },
  { id: "fJ9rUzIMcZQ", title: "Sample Video 5" }
];

function extractYouTubeId(item) {
  if (!item) return null;
  if (item.id) return item.id;
  if (item.videoId) return item.videoId;
  if (item.url) {
    const url = item.url;
    const patterns = [
      /(?:v=)([\w-]{11})/,
      /youtu\.be\/([\w-]{11})/,
      /embed\/([\w-]{11})/
    ];
    for (const p of patterns) {
      const m = url.match(p);
      if (m && m[1]) return m[1];
    }
  }
  return null;
}

export default function YouTubeVideoGallery({ videos = sampleVideos }) {
  const list = Array.isArray(videos) ? videos : sampleVideos;
  const firstId = extractYouTubeId(list[0]) || "dQw4w9WgXcQ";
  const [currentId, setCurrentId] = useState(firstId);

  function makeEmbedUrl(id) {
    return `https://www.youtube.com/embed/${id}?rel=0&showinfo=0`;
  }

  return (
    <div className="yt-gallery-root">
      <div className="gallery-grid">
        <div className="left-gameboy">
          <div className="gameboy-shell">
            <div className="screen-wrap">
              <iframe
                src={makeEmbedUrl(currentId)}
                title="YouTube player"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            <div className="now-playing">
              <div className="video-title">Now playing</div>
              <div className="video-name">
                {(list.find(item => extractYouTubeId(item) === currentId) || {}).title || currentId}
              </div>
            </div>

            <div className="right-list inside-gameboy">
              <div className="list-title">Other videos</div>
              <div className="list-container">
                {list.map((item, idx) => {
                  const id = extractYouTubeId(item);
                  if (!id) return null;
                  const title = item.title || item.name || `Video ${idx + 1}`;
                  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                  return (
                    <div
                      key={id + idx}
                      className={`thumb-item ${id === currentId ? "active" : ""}`}
                      onClick={() => setCurrentId(id)}
                    >
                      <img className="thumb-img" src={thumb} alt={title} />
                      <div className="thumb-meta">
                        <div className="thumb-title">{title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

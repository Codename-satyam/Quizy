import React, { useState, useEffect } from "react";
import "./Videos.css";

const sampleVideos = [
  { id: "uwzViw-T0-A", title: "Pyasa marta hua kaua" },
  { id: "zTwYLyx-frE", title: "The Ant and the Piegon" },
  { id: "jKi2SvWOCXc", title: "The Bear And the BEE" },
  { id: "1Q_4HXewiS0", title: "FUN science Experiments" },
  { id: "_yH3BntZCSI", title: "FUN Fact about the Ocean" },
  { id: "8adtdg0N2-g", title: "Ocean Adventures" },
  { id: "mjlsSYLLOSE", title: "Basic Addition" },
  { id: "K3fzAYLytgg", title: "FUN maths" },
  { id: "be9RJp4f4Pc", title: "Riddles" },
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
  const list = Array.isArray(videos) && videos.length ? videos : sampleVideos;
  const ids = list.map(extractYouTubeId);
  const firstId = ids[0] || "uwzViw-T0-A";
  const [currentId, setCurrentId] = useState(firstId);

  useEffect(() => {
    const el = document.querySelector(`[data-video-id="${currentId}"]`);
    if (el && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [currentId]);

  function makeEmbedUrl(id) {
    return `https://www.youtube.com/embed/${id}?rel=0&showinfo=0`;
  }

  function goNext() {
    const idx = ids.indexOf(currentId);
    const nextIdx = idx === -1 ? 0 : (idx + 1) % ids.length;
    setCurrentId(ids[nextIdx]);
  }

  function goPrev() {
    const idx = ids.indexOf(currentId);
    const prevIdx = idx === -1 ? 0 : (idx - 1 + ids.length) % ids.length;
    setCurrentId(ids[prevIdx]);
  }

  const current = list.find(item => extractYouTubeId(item) === currentId) || {};

  return (
    <div className="yt-root">
      <div className="yt-grid">
        <div className="player-column">
          <div className="player-card">
            <div className="video-frame">
              <iframe
                src={makeEmbedUrl(currentId)}
                title="YouTube player"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            <div className="current-info">
              <div className="now-label">Now playing</div>
              <div className="now-title">{current.title || currentId}</div>
            </div>

            <div className="sidebar-list">
              <div className="sidebar-header">Other videos</div>
              <div className="sidebar-scroll">
                {list.map((item, idx) => {
                  const id = extractYouTubeId(item);
                  if (!id) return null;
                  const title = item.title || item.name || `Video ${idx + 1}`;
                  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                  return (
                    <div
                      key={id + idx}
                      data-video-id={id}
                      className={`list-thumb ${id === currentId ? "selected" : ""}`}
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
              <div className="sidebar-controls">
                <button className="pixel-btn" onClick={goPrev} aria-label="Previous video">Prev</button>
                <button className="pixel-btn" onClick={goNext} aria-label="Next video">Next</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

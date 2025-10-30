import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="loading-content pixelify-sans-font">
        <div className="pixel-spinner">
          <div className="pixel-block block1"></div>
          <div className="pixel-block block2"></div>
          <div className="pixel-block block3"></div>
          <div className="pixel-block block4"></div>
        </div>
        <h1>Loading...</h1>
        <p>Preparing your quiz experience...</p>
      </div>
    </div>
  );
}

export default LoadingPage;

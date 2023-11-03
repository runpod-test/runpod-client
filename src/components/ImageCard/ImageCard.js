import './ImageCard.css';

function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img src={image.image_url} alt={image.image_prompt}/>

      <div className="image-overlay">
        <div className="image-prompt">{image.image_prompt}</div>
      </div>
    </div>
  );
}

export default ImageCard;

import './PhotoCard.css';

function PhotoCard({ photo, onClick }) {
  return (
    <div className="photo-card" onClick={onClick}>
      <div className="photo-image-container">
        <img
          src={`${photo.download_url}?w=400&h=300`}
          alt={photo.name}
          className="photo-image"
          loading="lazy"
        />
      </div>
      <p className="photo-name">{photo.name}</p>
    </div>
  );
}

export default PhotoCard;

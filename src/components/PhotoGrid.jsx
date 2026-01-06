import PhotoCard from './PhotoCard';
import './PhotoGrid.css';

function PhotoGrid({ photos, loading, onPhotoClick }) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando fotos...</p>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="no-results">
        <p>Nenhuma foto encontrada</p>
      </div>
    );
  }

  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <PhotoCard 
          key={photo.id} 
          photo={photo} 
          onClick={() => onPhotoClick(photo)}
        />
      ))}
    </div>
  );
}

export default PhotoGrid;

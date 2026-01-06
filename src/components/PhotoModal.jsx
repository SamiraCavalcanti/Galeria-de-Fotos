import { useEffect } from 'react';
import './PhotoModal.css';

function PhotoModal({ photo, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!photo) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="modal-image-container">
          <img
            src={`${photo.download_url}?w=1200`}
            alt={photo.name}
            className="modal-image"
          />
        </div>
        
        <div className="modal-info">
          <h2 className="modal-title">{photo.name}</h2>
          <p className="modal-author">Autor: {photo.author}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;

import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';
import PhotoModal from './components/PhotoModal';
import Footer from './components/Footer';
import { UNSPLASH_ACCESS_KEY } from './config';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    filterPhotos();
  }, [searchTerm, photos]);

  const fetchPhotosFromUnsplash = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=20&order_by=popular`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      }
    );
    const data = await response.json();
    
    return data.map((photo) => ({
      id: photo.id,
      name: photo.alt_description || photo.description || `Foto por ${photo.user.name}`,
      author: photo.user.name,
      download_url: photo.urls.regular,
      width: photo.width,
      height: photo.height
    }));
  };

  const fetchPhotosFromPicsum = async () => {
    // IDs específicos para garantir fotos únicas e variadas
    const uniqueIds = [1, 10, 20, 28, 48, 58, 82, 103, 119, 152, 
                       169, 180, 201, 250, 287, 349, 403, 478, 659, 718];
    
    const photosPromises = uniqueIds.map(async (id) => {
      const infoResponse = await fetch(`https://picsum.photos/id/${id}/info`);
      const info = await infoResponse.json();
      return {
        id: info.id,
        name: `${info.author}`,
        author: info.author,
        download_url: info.download_url,
        width: info.width,
        height: info.height
      };
    });
    
    return await Promise.all(photosPromises);
  };

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      
      // Tenta Unsplash primeiro, se tiver API key configurada
      let photosData;
      if (UNSPLASH_ACCESS_KEY) {
        try {
          photosData = await fetchPhotosFromUnsplash();
        } catch (error) {
          console.log('Unsplash não disponível, usando Picsum...');
          photosData = await fetchPhotosFromPicsum();
        }
      } else {
        photosData = await fetchPhotosFromPicsum();
      }
      
      setPhotos(photosData);
      setFilteredPhotos(photosData);
    } catch (error) {
      console.error('Erro ao carregar fotos:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPhotos = () => {
    if (searchTerm.trim() === '') {
      setFilteredPhotos(photos);
    } else {
      const filtered = photos.filter(photo =>
        photo.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPhotos(filtered);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
        <PhotoGrid 
          photos={filteredPhotos} 
          loading={loading} 
          onPhotoClick={handlePhotoClick}
        />
      </main>
      <Footer />
      
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;

import React from 'react';

// Ton tableau de vidéos avec ton lien mis à jour
const videosData = [
  {
    id: '1',
    title: 'Mon Projet Vidéo - KingMaZO',
    description: 'Montage et réalisation vidéo présentés sur mon portfolio.',
    youtubeId: 'nmlJaECTZKA', // Ton ID vidéo YouTube !
  },
  // Tu pourras ajouter d'autres objets vidéo ici plus tard
];

export default function VideoGrid() {
  return (
    <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#fff', fontSize: '2rem' }}>
        Mes Créations Vidéo
      </h2>

      {/* Grille responsive */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '25px',
      }}>
        {videosData.map((video) => (
          <div 
            key={video.id} 
            style={{
              background: '#111827',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              border: '1px solid #1f2937',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Conteneur de la vidéo YouTube (Format 16:9 responsive) */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Contenu textuel de la carte */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.25rem', color: '#fff' }}>
                {video.title}
              </h3>
              <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

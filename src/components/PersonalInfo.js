import React from 'react';
import profilFoto from '../assets/profil.jpg'; // Fotoğrafı içe aktar

function PersonalInfo() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img 
        src={profilFoto} 
        alt="Profil Fotoğrafı" 
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />
      <h2>Kişisel Bilgiler</h2>
      <p><strong>İsim:</strong> Emir Ülker</p>
      <p><strong>Email:</strong> emir.ulker@kun.edu.tr</p>
      <p><strong>Telefon:</strong> +905387428854</p>
    </div>
  );
}

export default PersonalInfo;

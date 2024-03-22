import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files); 
    setSelectedFiles(filesArray);
  };

  const handleCopyToDB = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await fetch('/api/saveFiles', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Files copied to db.json successfully!');
      } else {
        console.error('Failed to copy files to db.json:', response.statusText);
      }
    } catch (error) {
      console.error('Error copying files to db.json:', error);
    }
  };

  return (
    <div style={{ width: '90%', height: '30%', backgroundColor: 'gray' }}>
      <h2>Dashboard</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleCopyToDB}>Save</button>
    </div>
  );
};

export default Dashboard;

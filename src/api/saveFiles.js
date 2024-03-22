
export const saveFiles = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/api/saveFiles', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Files copied to db.json successfully!');
        return true;
      } else {
        console.error('Failed to copy files to db.json:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error copying files to db.json:', error);
      return false;
    }
  };
  
  export default saveFiles;
  
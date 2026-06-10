async function getCountries(searchInput) {
    try {
      // 1. Send the network request
      const response = await fetch(`https://restcountries.com/v3.1/name/${searchInput}`);
      
      // 2. Check if the HTTP status code is successful (200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // 3. Parse the stream data into a JSON object
      const data = await response.json();
      return data;
    } catch (error) {
      // Catches network errors or errors thrown above
      console.error('Fetch operation failed:', error);
      return [];
    }
}

export default getCountries;
  
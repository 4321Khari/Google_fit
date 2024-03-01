import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [fitData, setFitData] = useState(null);
  console.log(fitData)

  useEffect(() => {
    // Define the URL of your backend API
    const backendUrl = 'http://localhost:5000';

    // Make a request to fetch Google Fit data from the backend
    axios.get(`${backendUrl}/google-fit-data`, { withCredentials: true })
      .then(response => {
        console.log('Google Fit data:', response.data);
        // Set the retrieved data to the state
        setFitData(response.data);
      })
      .catch(error => {
        console.error('Error fetching Google Fit data:', error);
        // Handle errors
      });
  }, []); // Run once when the component mounts

  return (
    <div className="App">
      <h1>Google Fit Data</h1>
      {fitData ? (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(fitData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;



// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {

//   const navigate = useNavigate();

//   const getUser = async () => {
//     try {
//         const response = await axios.get("http://localhost:5000/login/sucess", { withCredentials: true });

//         console.log("response",response)
//     } catch (error) {
//       navigate("*")
//     }
// }


// useEffect(() => {
//   getUser()
// }, [])
//   return (
//     <div style={{textAlign:"center"}}>
//         <h1>Dashboard</h1>
//       </div>
//   )
// }

// export default Dashboard
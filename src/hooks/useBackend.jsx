// import { useState, useEffect } from "react";

// const tempURL = 'http://localhost:5000';

// export default function useBackend() {
//   const [data, getData] = useState();

//   useEffect(() => {
//     fetch('http://localhost:5000/api/hello')
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);      // 🔍 Now you’ll see the actual JSON
//         getData(json);          // Save to state if needed
//       })
//       .catch((err) => console.error("Fetch error:", err));
//   }, []);
//   return data;
// }

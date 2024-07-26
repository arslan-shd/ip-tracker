// const fetchAPI = async (IP) => {
//   const res = await fetch(
//     "https://geo.ipify.org/api/v2/country?apiKey=at_orKP6AZFrj6WyEgM2HFvaYBtnlNXB&ipAddress=103.226.202.38"
//   );

//   const location = await res.json();
//   console.log(location);
// };

// fetchAPI(12);

const fetchMultipleAPI = async () => {
  const res = await fetch("https://api.ipify.org?format=json");
  const { ip } = await res.json();
  const result = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_orKP6AZFrj6WyEgM2HFvaYBtnlNXB&ipAddress=${ip}`
  );
  const location = await result.json();
  return location;
};

export { fetchMultipleAPI };

// const testFunc = (a, b) => {
//   return a + b;
// };

// export { testFunc };

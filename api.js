const fetchMultipleAPI = async () => {
  const res = await fetch("https://api.ipify.org?format=json");
  const { ip } = await res.json();
  const result = await fetch(
    `https://api.ipdata.co/${ip}?api-key=0f582c76fa19606daddae604da1d10021ebd933d13fe904a32894451`
  );
  const location = await result.json();
  return location;
};

export { fetchMultipleAPI };

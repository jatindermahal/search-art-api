async function request(input) {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${input}&limit=50&fields={id,image_id,title,thumbnail}`
  );
  if (res.ok) {
    return res.json();
  }
  throw new Error("Unable to fetch data !!!");
}

export default request;

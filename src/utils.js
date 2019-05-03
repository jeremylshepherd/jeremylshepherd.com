const apiURL =
  "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=a8472a2f263f3db4996de45f259de40d&photoset_id=72157633202936546&user_id=73674095%40N03&format=json&nojsoncallback=1";

const tempURL = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1f1b0cf0200261d40ccb46c9ab730878&photoset_id=72157633202936546&user_id=73674095%40N03&format=json&nojsoncallback=1`;

const src = p =>
  `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`;
const srcLarge = p =>
  `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${
    p.secret
  }_b.jpg`;

export { apiURL, tempURL, src, srcLarge };

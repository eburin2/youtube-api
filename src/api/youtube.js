import axios from 'axios';

const KEY = 'AIzaSyBArXGGBz0ko7AT29gdkq-MuwW7LrkLk1Y';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

import axios from 'axios';

// Schiphol API kimlik bilgileri
const API_KEY = '9c1412e1fa5f7f826b558ca42e59d314';
const APP_ID = 'd99141ad';

// Axios instance oluştur
const schipholApi = axios.create({
  baseURL: 'https://api.schiphol.nl/public-flights',
  headers: {
    'ResourceVersion': 'v4', 
    'app_id': APP_ID,         
    'app_key': API_KEY        
  }
});

export default schipholApi;

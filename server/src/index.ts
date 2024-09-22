import axios from 'axios';
import express from 'express';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.get('/', async (req, res) => {
    try {
        const today = new Date();
        const fromDate = new Date(today);
        const toDate = new Date(today);
      
        // İki gün sonrası için tarihleri ayarla
        fromDate.setDate(today.getDate() +4);
        toDate.setDate(today.getDate() + 5);
      
        // YYYY-MM-DD formatına çevir
        const fromScheduleDate = fromDate.toISOString().split('T')[0];
        const toScheduleDate = toDate.toISOString().split('T')[0];
      
      
        const response = await axios.get('https://api.schiphol.nl/public-flights/flights', {
            headers: {
                'ResourceVersion': 'v4',
                'app_id': 'd99141ad',
                'app_key': '9c1412e1fa5f7f826b558ca42e59d314'
            },
            params: {
                fromScheduleDate: fromScheduleDate,
                toScheduleDate: toScheduleDate, 
            }
        });

        // Gelen veriyi döndür
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
  });
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
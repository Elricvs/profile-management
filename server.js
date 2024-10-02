import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Specify the exact origin
  methods: ['GET', 'POST'], // Add other methods as necessary
}));

// Données du customer en dur
const customer = {
  firstName: 'Elric',
  lastName: 'Van steenwinckel',
  description: 'Développeur passionné par les technologies web et les mangas.',
  email: 'elric.vs@gmail.com',
  github: 'github.com/Elricvs',
  linkedin: 'linkedin.com/in/elric-vs'
};

// Définir une route GET pour renvoyer les données du customer
app.get('/api/customer', (req, res) => {
  res.json(customer);
});

// Démarrer le serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
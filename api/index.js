import express from 'express';

const app = express();
const PORT = 8000;

app.get('/api/supplements', (req, res) => {
  const supplementsList = [
    { nazwa: 'Witamina C' },
    { nazwa: 'Witamina D3' },
    { nazwa: 'Omega-3' }
  ];
  res.json(supplementsList);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

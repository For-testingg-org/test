import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());

// Set cookie dengan atribut SameSite=None; Secure
app.get('/route', (req, res) => {
  res.cookie('cookie_name', 'value', { sameSite: 'none', secure: true });
  res.send('Cookie set!');
});

// atau set cookie dengan atribut SameSite=Strict
app.get('/other-route', (req, res) => {
  res.cookie('cookie_name', 'value', { sameSite: 'strict' });
  res.send('Cookie set!');
});

// ...routes lainnya

app.listen(3000, () => {
  console.log('Server listening on port 5173');
});

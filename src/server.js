import app from './app';

const port = 3333;
app.listen(port, () => {
  console.log();
  console.log(`Listening on: http://localhost:${port}`);
});

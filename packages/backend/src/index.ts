import server from '../packages/backend/src/app';

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

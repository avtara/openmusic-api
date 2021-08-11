require('dotenv').config();

const Hapi = require('@hapi/hapi');
const songs = require('./api/songs');
const SongService = require('./api/services/postgres/SongServices');
const SongValidator = require('./api/validator/songs');

const init = async () => {
  const songService = new SongService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: songs,
    options: {
      service: songService,
      validator: SongValidator,
    },
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();

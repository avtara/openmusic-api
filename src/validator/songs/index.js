const InvariantError = require('../../exceptions/InvariantError');
const { SongPayloadSchema } = require('./schema');

const SongValidator = {
  validateSongPayload: (payload) => {
    const validateSongPayload = SongPayloadSchema.validate(payload);
    if (validateSongPayload.error) {
      throw new InvariantError(validateSongPayload.error.message);
    }
  },
};

module.exports = SongValidator;

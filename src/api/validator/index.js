const InvariantError = require('../exceptions/InvariantError');
const { MusicPayloadSchema } = require('./schema');

const MusicValidator = {
  validateMusicPayload: (payload) => {
    const validateMusicPayload = MusicPayloadSchema.validate(payload);
    if (validateMusicPayload.error) {
      throw new InvariantError(validateMusicPayload.error.message);
    }
  },
};

module.exports = MusicValidator;

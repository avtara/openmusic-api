const InvariantError = require('../../exceptions/InvariantError');
const {
  PostPlaylistPayloadSchema,
  DeletePlaylistSongPayloadSchema,
} = require('./schema');

const AuthorizationValidator = {
  validatePostPlaylistPayload: (payload) => {
    const validationResult = PostPlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateDeletePlaylistSongPayload: (payload) => {
    const validationResult = DeletePlaylistSongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AuthorizationValidator;

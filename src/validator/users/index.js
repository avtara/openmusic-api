const InvariantError = require('../../exceptions/InvariantError');
const { UserPayloadSchema } = require('./schema');

const UsersValidator = {
  validateUserPayload: (payload) => {
    const validatationResult = UserPayloadSchema.validate(payload);

    if (validatationResult.error) {
      throw new InvariantError(validatationResult.error.message);
    }
  },
};

module.exports = UsersValidator;

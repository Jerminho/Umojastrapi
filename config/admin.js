module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "o8u6VHnutsqdzHbeKPLZHw=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "m5+it7wqik0imWyPjX11lg=="),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "G6Bd/SNQ9d3NZqSszd06fw=="),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});

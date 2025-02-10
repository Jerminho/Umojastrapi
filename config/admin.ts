export default ({ env }) => {
  console.log('API Token Salt:', env('API_TOKEN_SALT'));
  console.log('Transfer Token Salt:', env('TRANSFER_TOKEN_SALT'));

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'o8u6VHnutsqdzHbeKPLZHw=='),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT','m5+it7wqik0imWyPjX11lg=='),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT', 'G6Bd/SNQ9d3NZqSszd06fw=='),
      },
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  };
}; 
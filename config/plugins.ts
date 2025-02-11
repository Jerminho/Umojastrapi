import { config } from "process";

export default ({ env }: { env: (key: string) => string }) => ({
    upload: {
        config:{
            provider: 'cloudinary',
            providerOptions: {
              cloud_name: env('CLOUDINARY_NAME'),
              api_key: env('CLOUDINARY_API_KEY'),
              api_secret: env('CLOUDINARY_API_SECRET'),
            },
        }
    },
  });
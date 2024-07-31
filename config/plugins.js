require('dotenv').config();

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('WASABI_ACCESS_KEY_ID'),
        secretAccessKey: env('WASABI_ACCESS_SECRET'),
        region: env('WASABI_REGION'),
        baseUrl: `${env('WASABI_ENDPOINT')}/${env('WASABI_BUCKET_NAME')}`,
        s3Options: {
          params: {
            Bucket: env('WASABI_BUCKET_NAME'),
          },
          endpoint: env('WASABI_ENDPOINT'),
          s3ForcePathStyle: true, // needed for Wasabi
          signatureVersion: 'v4', // required for Wasabi
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

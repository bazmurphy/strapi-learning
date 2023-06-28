module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      breakpoints: {}, // disables automatic image size generation
    },
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      //     requestTransforms: {
      //       wrapBodyWithDataKey: true,
      //     },
      // contentTypeFilter: {
      //   mode: "allow",
      //   uids: {
      //     "api::article.article": true,
      //     "api::category.category": {
      //       GET: true,
      //     },
      //   },
      // },
      // plugins: {
      //   ids: {
      //     slugify: true,
      //   },
      // },
    },
  },
});

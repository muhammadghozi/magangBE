module.exports={public: {
    root: path.join(__dirname, "public"),
    prefix: '/', // optional: default '/'
  },
  assets :{
    root: path.join(__dirname, "public/assets"),
    prefix: '/assets', // optional: default '/'
  },forms :{
    root: path.join(__dirname, "public/forms"),
    prefix: '/forms', // optional: default '/'
    decorateReplay: false,
  },
};
 
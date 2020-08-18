export default (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597741721409_4438';

  // add your config here
  config.middleware = [
  ];

  return config;
};

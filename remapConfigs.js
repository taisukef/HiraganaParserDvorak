export const remapConfigs = (configs, key, origin) => {
  const map0 = configs.find(c => c.origins.indexOf(origin) >= 0);
  if (map0) {
    const n = map0.origins.indexOf(origin);
    map0.origins.splice(n, 1);
  }
  const map1 = configs.find(c => c.key == key);
  if (map1) {
    if (!map1.origins.find(m => m == origin)) {
      map1.origins.push(origin);
    }
  }
};

const root = {
  url: process.env.COURSECO_API,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  root,
  products: {
    all: `${root.url}/courseco_products`,
    search: `${root.url}/courseco_search`,
  },
  store: {
    nearby: `${root.url}/courseco_nearby`,
  },
};

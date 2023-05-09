const root = {
  url: process.env.COURSECO_API || "https://xc6lwruhnf.execute-api.eu-west-3.amazonaws.com/dev",
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

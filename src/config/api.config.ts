const root = {
  url: process.env.COURSECO_API || "http://localhost:1337",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  root,
  products: {
    all: `${root.url}/courseco_products`,
  },
};

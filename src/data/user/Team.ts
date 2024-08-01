type Auth = {
  POST: { participants: number[] };
  GET: { participants: number[] };
  PUT: { participants: number[] };
  DELETE: { participants: number[] };
};

export const AUTH: Auth = {
  POST: { participants: [1] },
  GET: {
    participants: [1],
  },
  PUT: {
    participants: [1],
  },
  DELETE: {
    participants: [1],
  },
};

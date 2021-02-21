export type Fact = {
  createdAt: string,
  updatedAt: string,
  deleted: boolean,
  source: string,
  status: {
    verified: boolean,
    sentCount: number
  },
  _id: string,
  text: string,
  used: false,
  user: string
};

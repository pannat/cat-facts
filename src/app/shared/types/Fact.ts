export type Fact<T> = {
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
  user: T
};

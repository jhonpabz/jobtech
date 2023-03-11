type Params = {
  params: {
    userId: string;
  };
};

const UserPage = ({ params: { userId } }: Params) => {
  return <div>UserPage</div>;
};

export default UserPage;

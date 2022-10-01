const Container = ({ children }: any) => {
  return (
    <div className="flex w-full justify-center bg-gray-50">
      <div className="container shadow h-screen bg-white">{children}</div>
    </div>
  );
};

export default Container;

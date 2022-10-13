import { Helmet, HelmetProvider } from "react-helmet-async";

type HelmetProps = {
  title: string;
};

const HelmetPageTitle = ({ title }: HelmetProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default HelmetPageTitle;

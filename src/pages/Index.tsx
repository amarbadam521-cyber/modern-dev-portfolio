import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Amar Bala Adam | Web Developer Portfolio</title>
        <meta
          name="description"
          content="Amar Bala Adam - Web Developer with 3 years of experience building modern, responsive web applications."
        />
      </Helmet>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Index;

import { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Hero } from "@components/Index/Hero";
import { About } from "@components/Index/About";
import { Services } from "@components/Index/Services";
import { Project } from "@components/Index/Project";
import { Contact } from "@components/Index/Contact";

const HomePage: NextPage = () => {
  return (
    <Layout title="FishTail Roofing Sevice">
      <Hero />
      <div className="p-8">
        <About />
        <Services />
        <Contact />
      </div>
    </Layout>
  );
};

export default HomePage;

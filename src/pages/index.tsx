/**
 * @component
 */

import TradeComponent from "@/components/TradeComponent";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Stats from "@/components/Stats";
import Graph from "@/components/Graph";
import Trending from "@/components/Trending";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Navbar */}
      <Header />

      <div className="w-full max-w-desktop">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Title */}
        <Title />

        {/* block1 */}
        <div className="flex justify-between mb-4">
          {/* Graph Placeholder */}
          <Graph />

          {/* Trade Placeholder */}
          <TradeComponent />
        </div>

        {/* block 2 */}
        <div className="flex justify-between">
          {/* Stats Placeholder */}
          <Stats />

          {/* Trending Placeholder */}
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

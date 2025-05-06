import React, { useEffect, useState, FunctionComponent } from "react";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid
} from "recharts";
import { ResponsiveContainer } from "recharts"; 
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
      y + height / 3
    } 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Statistics = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Flatten if nested
        const flatData = Array.isArray(data[0]) ? data[0] : data;
        setProductData(flatData);
      });
  }, []);

  return (
    <div>
      <div className="bg-purple-600 text-white text-center py-9 flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Statistics</h2>
        <p className="text-xs md:text-sm w-11/12 md:w-9/12 lg:w-7/12 mx-auto">
          This chart shows key metrics for products, highlighting individual Prices (purple bars) and totals for comparison.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 py-6">
        <h2 className="font-bold text-xl md:text-2xl mb-4 text-center">Price Overview</h2>
        <div className="overflow-x-auto">

        
        <div className="min-w-[700px] h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={productData}
                margin={{ top: 20, right: 30, left: 45, bottom: 80 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                dataKey="product_title"
                angle={-45}
                textAnchor="end"
                interval={0}
                height={100}
                />
                <YAxis />
                <Bar
                dataKey="price"
                shape={<TriangleBar />}
                label={{ position: "top" }}
                fill="#8884d8"
                >
                {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Statistics;

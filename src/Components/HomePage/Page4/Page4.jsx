import React, { useEffect, useState } from "react";
import "./Page4.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Page4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setData((prevData) => {
        const newValue = Math.floor(Math.random() * 100);
        const newData = [...prevData, { name: count, value: newValue }];
        return newData;
      });

      if (count >= 12) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page4">
      <div className="left1">
        <h2 className="pixelify-sans-font">Performance Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#00ffff" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis domain={[0, 100]} stroke="#fff" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ff00ff"
              strokeWidth={3}
              dot={false}
              animationDuration={500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="right1">
        <h3 className="pixelify-sans-font">Track your progress in real-time</h3>
        <p>Watch your learning curve rise as you improve with every challenge!</p>
        <p>Get the Best out of your kids with the help of our interactive tools</p>
        <p>Games and Quizzes will surely improve your child's performance!</p>
      </div>
    </div>
  );
}

export default Page4;

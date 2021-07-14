import React, { useState, useEffect } from "react";
import axios from "axios";
import CardStats from "./Cards/CardStats";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios({
        url: "https://api.tigabintangsukses.com/v1/produk/",
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        setData(res.data.data);
      } else {
        console.log(res.status);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="relative bg-admin md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-5/12 px-4">
                <CardStats
                  statSubtitle="Total Jumlah Produk"
                  statTitle={data.length}
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

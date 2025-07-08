import React from "react";
import { useState, useEffect } from "react";

function FetchGet() {
  const [facts, setfacts] = useState([]);
  const URL = "https://catfact.ninja/facts";
  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setfacts(data.data);
      });
  }, []);
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-blue-800 text-center">
          Cat Facts
        </h1>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-blue-200">
            <thead className="bg-blue-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S/N
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Length
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-200">
              {facts.map((fact, index) => (
                <tr key={index} >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {fact.fact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {fact.length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FetchGet;

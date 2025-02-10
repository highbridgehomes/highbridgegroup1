import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

const UserDashboard = () => {
  const [investmentData, setInvestmentData] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [returns, setReturns] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/investments");
        setInvestmentData(res.data.chartData);
        setTransactionHistory(res.data.transactions);
        setTotalInvestment(res.data.totalInvestment);
        setReturns(res.data.returns);
      } catch (error) {
        console.error("Error fetching investment data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Total Investment</h2>
          <p className="text-2xl font-bold">${totalInvestment}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Returns</h2>
          <p className="text-2xl font-bold">${returns}</p>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardContent>
          <h2 className="text-xl font-semibold">Investment Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={investmentData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardContent>
          <h2 className="text-xl font-semibold">Transaction History</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactionHistory.map((txn, index) => (
                <TableRow key={index}>
                  <TableCell>{txn.date}</TableCell>
                  <TableCell>${txn.amount}</TableCell>
                  <TableCell>{txn.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;

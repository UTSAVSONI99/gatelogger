"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const logs = [
  {
    id: 1,
    truckNo: "CG04-AB-1234",
    gatePass: "GP-45678",
    material: "Cement",
    quantity: "20 Tons",
    driver: "Ramesh Kumar",
    vendor: "UltraTech",
    status: "Approved",
  },
  {
    id: 2,
    truckNo: "CG04-CD-5678",
    gatePass: "GP-45679",
    material: "Bricks",
    quantity: "10 Tons",
    driver: "Suresh Yadav",
    vendor: "ACC",
    status: "Completed",
  },
  {
    id: 3,
    truckNo: "CG04-EF-9101",
    gatePass: "GP-45680",
    material: "Steel",
    quantity: "15 Tons",
    driver: "Rajesh Singh",
    vendor: "Tata Steel",
    status: "Draft",
  },
  {
    id: 4,
    truckNo: "CG04-GH-1121",
    gatePass: "GP-45681",
    material: "Sand",
    quantity: "25 Tons",
    driver: "Anil Sharma",
    vendor: "Dalmia Cement",
    status: "Todays out",
  },
];

export default function CompletedLogs() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredLogs = logs.filter((log) => {
    const matchSearch =
      log.truckNo.toLowerCase().includes(search.toLowerCase()) ||
      log.gatePass.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filter === "All" || log.status === filter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <Input
          placeholder="Truck No / Gate Pass No"
          className="w-full md:max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Dropdown Filter */}
        <div className="w-full md:w-48">
          <Select onValueChange={setFilter} defaultValue="All">
            <SelectTrigger>
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Draft">Draft</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Todays out">Today's Out</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-700">
          Allowed Logs ({filteredLogs.length} logs)
        </h2>

        {/* Log Cards */}
        {filteredLogs.map((log) => (
          <Card key={log.id} className="shadow-sm hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-md">
                Truck No: {log.truckNo} | Gate Pass: {log.gatePass}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
              <div>
                <strong>Material:</strong> {log.material}
              </div>
              <div>
                <strong>Quantity:</strong> {log.quantity}
              </div>
              <div>
                <strong>Driver:</strong> {log.driver}
              </div>
              <div>
                <strong>Vendor:</strong> {log.vendor}
              </div>
              <div>
                <strong>Status:</strong> {log.status}
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredLogs.length === 0 && (
          <div className="text-center text-gray-500 py-6">No logs found.</div>
        )}
      </div>
    </div>
  );
}

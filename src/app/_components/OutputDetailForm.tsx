"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import MultipelImageInputComp from "./MultipelImageInputComp";
import { useState } from "react";

export default function OutputDetailForm({ log }: { log: any }) {
  const [items, setItems] = useState([
    { name: "", qty: "", unit: "", remark: "" },
  ]);
  const [initialWeight, setInitialWeight] = useState("");
  const [finalWeight, setFinalWeight] = useState("");

  const netWeight =
    initialWeight && finalWeight
      ? Math.abs(Number(finalWeight) - Number(initialWeight)).toString()
      : "";

  const addItemRow = () => {
    setItems([...items, { name: "", qty: "", unit: "", remark: "" }]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 space-y-6 bg-white rounded shadow-sm gap-">
        <div className="flex items-start justify-between">
          <h1 className="text-2xl font-bold">
            Purchase / At Gate (Truck: {log.truckNo})
          </h1>
          <div className="text-sm bg-gray-100 rounded p-3 text-right">
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Time: {new Date().toLocaleTimeString()}</p>
            <p>
              GP No: <span className="font-semibold">{log.gatePass}</span>
            </p>
          </div>
        </div>

        <Section title="Truck Detail ">
          <InputBlock label="Truck No" defaultValue={log.truckNo} />
          <InputBlock label="Driver name" defaultValue={log.driver} />
          <InputBlock label="Driver Phone No" />
        </Section>

        <Section title="Voucher Details">
          <InputBlock label="Party" defaultValue={log.vendor} />
          <InputBlock label="Broker" />
          <TextareaBlock label="Item Narration / Comment" />
          <InputBlock label="Tags" />
        </Section>

        <Section title="Images">
          <MultipelImageInputComp
            name="truckImages"
            label="Upload Truck Images"
            description="You can upload multiple images of the truck."
            accept="image/*"
            maxFiles={5}
          />
        </Section>

        <Section title="Item Info">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Item</th>
                <th className="p-2 border">Qty</th>
                <th className="p-2 border">Unit</th>
                <th className="p-2 border">Remark</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td className="p-1 border">
                    <Input placeholder="Item" />
                  </td>
                  <td className="p-1 border">
                    <Input placeholder="Qty" />
                  </td>
                  <td className="p-1 border">
                    <Input placeholder="Unit" />
                  </td>
                  <td className="p-1 border">
                    <Input placeholder="Remark" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button variant="outline" onClick={addItemRow} className="mt-2">
            + Add Row
          </Button>
        </Section>

        <Section title="Weighbridge">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Initial Weight</Label>
              <Input
                type="number"
                value={initialWeight}
                onChange={(e) => setInitialWeight(e.target.value)}
                placeholder="Initial"
              />
            </div>
            <div>
              <Label>Final Weight</Label>
              <Input
                type="number"
                value={finalWeight}
                onChange={(e) => setFinalWeight(e.target.value)}
                placeholder="Final"
              />
            </div>
            <div>
              <Label>Net Weight</Label>
              <div className="border p-2 rounded bg-gray-50">
                {netWeight || "—"}
              </div>
            </div>
          </div>
        </Section>
        <div className="flex justify-center mt-6">
          <Button className="w-2xs">Submit</Button>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold border-b">{title}</h2>
      {children}
    </div>
  );
}

function InputBlock({
  label,
  defaultValue = "",
}: {
  label: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <Input placeholder={label} defaultValue={defaultValue} />
    </div>
  );
}

function TextareaBlock({ label }: { label: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <Textarea placeholder={label} />
    </div>
  );
}

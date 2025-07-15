"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MultipelImageInputComp from "./MultipelImageInputComp";

export default function TruckEntryForm() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Truck Entry - Material In (Purchase)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Right Side: Form */}
        <form className="space-y-4">
          <div className="grid gap-1">
            <Label htmlFor="truckNumber">Truck Number</Label>
            <Input id="truckNumber" placeholder="e.g., CG04-AB-1234" />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="driverName">Driver Name</Label>
            <Input id="driverName" placeholder="e.g., Ramesh Kumar" />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="driverPhone">Driver Ph. No</Label>
            <Input id="driverPhone" type="tel" placeholder="e.g., 9876543210" />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="materialType">Material Type</Label>
            <Input id="materialType" placeholder="e.g., Cement, Bricks" />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="quantity">Quantity (Tons)</Label>
            <Input id="quantity" type="number" placeholder="e.g., 20" />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="vendor">Vendor</Label>
            <Input id="vendor" placeholder="e.g., UltraTech" />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="gatePass">Gate Pass Number</Label>
            <Input id="gatePass" placeholder="e.g., GP-45678" />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="remarks">Remarks/Item narration</Label>
            <Textarea id="remarks" placeholder="Enter any remarks..." />
          </div>
          <MultipelImageInputComp
            name="truckImages"
            label="Upload Truck Images"
            description="You can upload multiple images of the truck."
            accept="image/*"
            maxFiles={5}
          />
          <Button type="submit" className="w-full mt-4">
            Submit Entry
          </Button>
        </form>
      </div>
    </div>
  );
}

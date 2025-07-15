"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MultipelImageInputComp from "./MultipelImageInputComp";

export default function TruckEntryForm({
  onSubmit,
}: {
  onSubmit: (data: FormData) => Promise<void> | void;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Truck Entry - Material In (Purchase)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Right Side: Form */}

        <form className="space-y-4" action={onSubmit}>
          <div>
            {" "}
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Truck Details
            </h2>
            <div className="grid gap-1 ">
              <Label htmlFor="truckNumber">Truck Number</Label>
              <Input
                name="truckNo"
                id="truckNumber"
                placeholder="e.g., CG04-AB-1234"
              />
            </div>
            <div className="grid gap-1 mt-2">
              <Label htmlFor="driverName">Driver Name</Label>
              <Input
                name="driverName"
                id="driverName"
                placeholder="e.g., Ramesh Kumar"
              />
            </div>
            <div className="grid gap-1 mt-2">
              <Label htmlFor="driverPhone">Driver Ph. No</Label>
              <Input
                name="driverPhone"
                id="driverPhone"
                type="tel"
                placeholder="e.g., 9876543210"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Voucher Details
            </h2>

            <div className="grid gap-1  mt-2">
              <Label htmlFor="materialType">Material Type</Label>
              <Input
                name="materialType"
                id="materialType"
                placeholder="e.g., Cement, Bricks"
              />
            </div>

            <div className="grid gap-1 mt-2">
              <Label htmlFor="quantity">Quantity (Tons)</Label>
              <Input
                name="truckQuantity"
                id="quantity"
                type="number"
                placeholder="e.g., 20"
              />
            </div>

            <div className="grid gap-1 mt-2">
              <Label htmlFor="vendor">Vendor</Label>
              <Input name="vendor" id="vendor" placeholder="e.g., UltraTech" />
            </div>

            <div className="grid gap-1 mt-2">
              <Label htmlFor="gatePass">Gate Pass Number</Label>
              <Input
                name="gatePass"
                id="gatePass"
                placeholder="e.g., GP-45678"
              />
            </div>

            <div className="grid gap-1 mt-2">
              <Label htmlFor="remarks">Remarks/Item narration</Label>
              <Textarea
                name="remarks"
                id="remarks"
                placeholder="Enter any remarks..."
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Images</h2>
            <MultipelImageInputComp
              name="truckImages"
              label="Upload Truck Images"
              description="You can upload multiple images of the truck."
              accept="image/*"
              maxFiles={5}
            />
          </div>
          <Button type="submit" className="w-full mt-4">
            Submit Entry
          </Button>
        </form>
      </div>
    </div>
  );
}

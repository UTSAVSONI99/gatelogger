"use client";

import {
  UserPlus,
  UserMinus,
  Truck,
  ScrollText,
  LogOut,
  PackagePlus,
  PackageMinus,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GuardActions() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold tracking-tight">Guard Action Panel</h1>

      {/* Visitor Section */}
      <Card>
        <CardHeader>
          <CardTitle>Visitor</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <ActionButton label="Visitor Entry" icon={<UserPlus />} />
          <ActionButton label="Visitor Exit" icon={<UserMinus />} />
        </CardContent>
      </Card>

      {/* Truck Entry Section */}
      <Card>
        <CardHeader className="flex items-center justify-between border-b">
          <CardTitle>Truck Entering</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col  ">
          <Link href={"/admin/guard-actions/truck-in"}>
            <ActionButton
              className="w-full flex justify-between border-none shadow-none flex-row-reverse"
              label="Purchase (Material In)"
              icon={<ArrowRight />}
            />
          </Link>
          <Link href={"/admin/guard-actions/truck-in"}>
            <ActionButton
              className="w-full flex justify-between border-none shadow-none flex-row-reverse"
              label="Sale (Material Out)"
              icon={<ArrowRight />}
            />
          </Link>
          <hr className="my-2" />
          <Link href={"/admin/guard-actions/truck-in"}>
            <ActionButton
              className="w-full flex justify-between border-none shadow-none flex-row-reverse"
              label="Transfer In"
              icon={<ArrowRight />}
            />
          </Link>
          <Link href={"/admin/guard-actions/truck-in"}>
            <ActionButton
              className="w-full flex justify-between border-none shadow-none flex-row-reverse"
              label="Transfer Out"
              icon={<ArrowRight />}
            />
          </Link>
          <hr className="my-2" />
          <div>
            <ActionButton
              className="w-full flex justify-between border-none shadow-none flex-row-reverse"
              label="Others"
              icon={<ArrowRight />}
            />
          </div>
        </CardContent>
      </Card>

      {/* Truck Exit Section */}
      <Card>
        <CardHeader>
          <CardTitle>Truck Exiting</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Link href={"/admin/guard-actions/final-gatepass"}>
            <ActionButton label="Finalize Gatepass" icon={<LogOut />} />
          </Link>
        </CardContent>
      </Card>

      {/* Returnables Section */}
      <Card>
        <CardHeader>
          <CardTitle>Returnable Items (In/Out)</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <ActionButton label="Goods In" icon={<PackagePlus />} />

          <ActionButton label="Goods Out" icon={<PackageMinus />} />
        </CardContent>
      </Card>
    </div>
  );
}

function ActionButton({
  label,
  icon,
  ...props
}: {
  label: string;
  icon: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 px-4 py-2"
      {...props}
    >
      {icon}
      <span>{label}</span>
    </Button>
  );
}

import { logs } from "@/lib/logs-data";
import OutputDetailForm from "@/app/_components/OutputDetailForm";
import React from "react";

export default function LogPage({ params }: { params: { id: string } }) {
  const log = logs.find((log) => log.id === Number(params.id));

  if (!log) return <div className="p-6 text-red-600">Log not found.</div>;

  return <OutputDetailForm log={log} />;
}

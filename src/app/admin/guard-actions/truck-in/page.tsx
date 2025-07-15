import React from "react";
import AllTruckInForm from "../../../_components/AllTruckInForm";
import { redirect } from "next/navigation";
export default function page() {
  return (
    <div>
      <AllTruckInForm
        onSubmit={async (data: FormData) => {
          "use server";
          console.log("");
          // const formdata = Object.fromEntries(data.entries());
          const truckno = data.get("truckno");
          console.log("Form Data:", truckno);
          // try {
          //   const response = await fetch("/api/truck-in", {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify(data),
          //   });
          //   if (!response.ok) {
          //     throw new Error("Failed to submit data");
          //   }
          //   console.log("Data submitted successfully");
          // } catch (error) {
          //   console.error("Error submitting data:", error);
          // }
          return;
          redirect("/admin/");
        }}
      />
    </div>
  );
}

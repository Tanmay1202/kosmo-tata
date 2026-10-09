import TestDriveForm from "@/components/forms/TestDriveForm";
import { use } from "react";

export default function BookTestDrivePage({
  searchParams,
}: {
  searchParams: Promise<{ model?: string }>;
}) {
  const resolvedSearchParams = use(searchParams);
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Book a Test Drive</h1>
          <p className="text-lg text-slate-600">Experience the thrill of driving a Tata Motors vehicle at Kosmo Tata. Fill out the form below to schedule your test drive.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
          <TestDriveForm preselectedModel={resolvedSearchParams.model} />
        </div>
      </div>
    </div>
  );
}

import { CheckCircle, Clock } from "lucide-react";

import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard icon={Clock} label="In Progress" numberOfItems={12} />
        <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={12}
          variant="success"
        />
      </div>
    </div>
  );
}

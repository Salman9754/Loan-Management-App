import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "./ui/card";

interface DashboardCardProps {
  heading: string;
  headingCount: number;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  subHeading1: string;
  subHeading2: string;
  subHeading2Color: string;
}

const DashboardCard = ({
  heading,
  headingCount,
  icon,
  iconColor,
  subHeading1,
  subHeading2,
  subHeading2Color,
}: DashboardCardProps) => {
  const Icon = icon;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {heading}: {headingCount}
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        {icon && <Icon className={`w-10 h-10 ${iconColor}`} />}
      </CardContent>
      <CardFooter>
        <div className="foot flex justify-between w-full text-sm">
          <p>{subHeading1}</p> <p className={subHeading2Color}>{subHeading2}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DashboardCard;

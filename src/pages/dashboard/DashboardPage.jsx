import React from "react";
import DashboardCard from "@/components/DashboardCard";
import { CreditCard, CheckCircle, Gauge, Users } from "lucide-react";
import "../../styles/dashboard.css";
import { Button } from "@/components/ui/button";
import { useClientInfo } from "@/context/supabaseClientInfo";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import LogOutBtn from "@/components/LogOutBtn";

const DashboardPage = () => {
  const { loading, clientData } = useClientInfo();
  if (loading) {
    return (
      <>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 mt-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          ))}
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 ">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          ))}
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 ">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="dashboard_cards flex flex-col gap-5">
        <div className="fullcard mt-5">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="title_container flex justify-between items-center">
                  <div>
                    {clientData
                      ? clientData.map((item, index) => {
                          return (
                            <span key={index}>
                              {item.first_name} {item.last_name}
                            </span>
                          );
                        })
                      : "No User Logged In"}
                  </div>
                  <div className="hidden lg:block md:block">
                    <LogOutBtn />
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                Thank you for using our platform here is the overview of your
                account
              </CardDescription>
              <div className="logout_for_mobile w-full flex justify-center lg:hidden md:hidden">
                <LogOutBtn />
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="cards w-full">
            <DashboardCard
              heading={"Active Loans"}
              headingCount={2}
              icon={CreditCard}
              iconColor={"text-blue-700"}
              subHeading1={"Status"}
              subHeading2={"Good Standing"}
              subHeading2Color={"text-green-500"}
            />
          </div>
          <div className="cards w-full">
            <DashboardCard
              heading={"Approved Loans"}
              headingCount={0}
              icon={CheckCircle}
              iconColor={"text-green-500"}
              subHeading1={"Total Amount"}
              subHeading2={`$${0.01}`}
              subHeading2Color={"text-black"}
            />
          </div>
          <div className="cards w-full">
            <DashboardCard
              heading={"Pending Loans"}
              headingCount={2}
              icon={Gauge}
              iconColor={"text-amber-300"}
              subHeading1={"Last Request"}
              subHeading2={"N/A"}
              subHeading2Color={"text-black"}
            />
          </div>
          <div className="cards w-full">
            <DashboardCard
              heading={"References"}
              headingCount={2}
              icon={Users}
              iconColor={"text-purple-500"}
              subHeading1={"Status"}
              subHeading2={"Not verified"}
              subHeading2Color={"text-black"}
            />
          </div>
        </div>
        <div className="fullcard_two mt-5">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                <br />
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center gap-4">
              <p>No recent activity to display</p>
              <Link to={"/dashboard/newloan"}>
                {" "}
                <Button>Apply for a new Loan</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

import React from "react";
import { User } from "lucide-react";
import { useClientInfo } from "@/context/supabaseClientInfo";
import "../../styles/dashboard.css";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
const ProfilePage = () => {
  const { loading, clientData } = useClientInfo();
  if(loading) return <div>Loading...</div>  
  return (
    <>
      <div className="space-y-6 max-w-4xl mx-auto px-4 sm:px-6 mt-5 profile_container">
  {/* Heading Card */}
  <Card className="rounded-2xl shadow-sm">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl font-semibold">
        <User className="w-6 h-6 text-primary" />
        Profile
      </CardTitle>
      <CardDescription className="text-base mt-2 text-muted-foreground">
        See your personal information below
      </CardDescription>
    </CardHeader>
  </Card>

  {/* Personal Info Card */}
  <Card className="rounded-2xl shadow-sm">
    <CardHeader>
      <CardTitle className="text-lg sm:text-xl font-semibold">
        Personal Information
      </CardTitle>
      <p className="text-sm text-muted-foreground">
        These details were provided during your registration.
      </p>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-base">
        <div className="space-y-1">
          <div className="text-muted-foreground font-medium">Full Name</div>
          <div className="text-foreground">
            {clientData[0].first_name} {clientData[0].last_name}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-muted-foreground font-medium">Email</div>
          <div className="text-foreground">{clientData[0].email}</div>
        </div>
        <div className="space-y-1">
          <div className="text-muted-foreground font-medium">Gender</div>
          <div className="text-foreground">{clientData[0].gender}</div>
        </div>
        <div className="space-y-1">
          <div className="text-muted-foreground font-medium">Date of Birth</div>
          <div className="text-foreground">{clientData[0].birth_date}</div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>

    </>
  );
};

export default ProfilePage;

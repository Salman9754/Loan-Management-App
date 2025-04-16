import React from "react";
import NewLoanForm from "@/components/NewLoanForm";
import { Card, CardTitle,CardDescription,CardHeader } from "@/components/ui/card";
import "../../styles/dashboard.css";
import { AlertCircle } from "lucide-react";

const NewLoanPage = () => {
  return (
    <>
  <div className="new_loan_container mt-5">
  <Card className='px-3 bg-blue-500 text-white '>
      <CardHeader>
      <CardTitle className='flex items-center gap-2'><AlertCircle/>  Apply for a new loan</CardTitle>
      <CardDescription className='mt-2 text-white'>
        Please fill all required information to apply for a loan
      </CardDescription>
      </CardHeader>
    </Card >
    <NewLoanForm />
  </div>
    </>
  );
};

export default NewLoanPage;

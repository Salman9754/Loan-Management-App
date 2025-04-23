import { React, useState, useEffect } from "react";
import { useClientInfo } from "@/context/supabaseClientInfo";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Wallet } from "lucide-react";
import "../../styles/dashboard.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import supabase from "@/supabase/client";

const LoanRequestPage = () => {
  const {LoanData, loading} = useClientInfo()
  if(LoanData){
    console.log(LoanData);
    
  }
  if (loading) {
    return null;
  }

  return (
    <>
      <div className="Loan_table_container mt-5">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet /> All Loan Requests
            </CardTitle>
            <CardDescription className="mt-3">
              You can see all loan requests here
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Loan Requests</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Desktop Table */}
            <div className="hidden md:block w-full overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Term (months)</TableHead>
                    <TableHead>Payment Frequency</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {LoanData.map((loan, index) => (
                    <TableRow key={index}>
                      <TableCell>{loan.request_date}</TableCell>
                      <TableCell>{loan.loan_amount}</TableCell>
                      <TableCell>{loan.loan_term_months}</TableCell>
                      <TableCell>{loan.payment_frequency}</TableCell>
                      <TableCell>{loan.status}</TableCell>
                      <TableCell>{loan.reference}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile version */}
            <div className="block md:hidden space-y-4">
              {LoanData.map((loan, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 shadow-sm bg-white dark:bg-gray-950"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Request Date:</span>
                    <span>{loan.request_date}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Amount:</span>
                    <span>{loan.loan_amount}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Term (months):</span>
                    <span>{loan.loan_term_months}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Frequency:</span>
                    <span>{loan.payment_frequency}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Status:</span>
                    <span>{loan.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Reference:</span>
                    <span>{loan.reference}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoanRequestPage;

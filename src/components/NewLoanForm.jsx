import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";

const NewLoanForm = () => {
  const form = useForm({
    defaultValues: {
      dateOfBirth: "",
      gender: "",
      socialNumber: "",
      address: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Card className="mt-5">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              {/* dob  */}
              <FormField
                control={form.control}
                name="dateOfBirth"
                rules={{ required: "Date of birth is required" }}
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-3">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        align="center"
                        className="w-auto p-0 bg-zinc-50 border border-neutral-200"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* gender  */}
              <FormField
                control={form.control}
                name="gender"
                rules={{
                  required: "Required",
                }}
                render={({ field }) => (
                  <FormItem className="space-y-3 mt-5">
                    <CardTitle>
                      {" "}
                      <FormLabel>Gender</FormLabel>
                    </CardTitle>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* social security number  */}
              <FormField
                control={form.control}
                name="socialNumber"
                rules={{
                  required: "Required",
                }}
                render={({ field }) => (
                  <FormItem className="space-y-2 mt-5">
                    <FormLabel>Social Security Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter social security number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Address  */}
              <FormField
                control={form.control}
                name="address"
                rules={{
                  required: "Required",
                }}
                render={({ field }) => (
                  <FormItem className="space-y-2 mt-5">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button className='mt-5' type='submit'>Submit Form</Button> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loan Details</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Loan Amount  */}
              <FormField
                control={form.control}
                name="loanAmount"
                rules={{
                  required: "Required",
                }}
                render={({ field }) => (
                  <FormItem className="space-y-2 mt-5">
                    <FormLabel>Loan Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter amount $"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Loan Terms  */}
              <FormField
                control={form.control}
                name="LoanTerms"
                rules={{
                  required: "Required",
                }}
                render={({ field }) => (
                  <FormItem className="space-y-2 mt-5 relative">
                    <FormLabel>Loan Terms (month)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a loan term" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent portal={false}>
                        <SelectItem value="2 months">2 months</SelectItem>
                        <SelectItem value="4 months">4 months</SelectItem>
                        <SelectItem value="6 months">6 months</SelectItem>
                        <SelectItem value="8 months">8 months</SelectItem>
                        <SelectItem value="12 months">12 months</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Loan Frequency  */}
              <FormField
                control={form.control}
                name="LoanFrequency"
                rules={{
                  required: "Required",
                }}
                render={({ field }) => (
                  <FormItem className="space-y-2 mt-5 relative">
                    <FormLabel>Loan Frequency</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a loan frequency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent portal={false}>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Reference  */}
              <FormField
                control={form.control}
                name="reference"
                rules={{
                  required: "Required",
                }}
                render={({ field }) => (
                  <FormItem className="space-y-2 mt-5">
                    <FormLabel>Reference</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Review</CardTitle>{" "}
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  Please read and agree to the following terms before submitting
                  your loan request:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You must be at least 18 years of age.</li>
                  <li>
                    Ensure all provided information is accurate and up to date.
                  </li>
                  <li>
                    Loan approval is subject to credit and background checks.
                  </li>
                  <li>
                    Incomplete or incorrect forms may result in delays or
                    rejections.
                  </li>
                </ul>
              </div>

              <FormField
                control={form.control}
                name="mobile"
                rules={{
                  required: "Required",
                }}
                render={({ field }) => (
                  <FormItem className="relative mt-5">
                    <div className="flex items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-normal">
                          I have read and agree to the above terms.
                        </FormLabel>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <div className="submit_btn mt-4 flex justify-end">
                <Button type="submit">Submit Form</Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default NewLoanForm;

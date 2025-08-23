"use client";

import React, { useEffect } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from "./ui/drawer";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "@/app/lib/schema";
import { Input } from "./ui/input";
import useFetch from "@/hooks/use-fetch";
import { createAccount } from "@/actions/dashboard";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const CreateAccountDrawer = ({ children }) => {
  // children will be rendered inside the trigger

  // useState to handle the trigger
  // useState is a hook in react that helps us manage different states
  const [open, setOpen] = useState(false);

  // register is what connects our form to react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(accountSchema), //helps us to connect to zod schema created in app/lib/schema
    defaultValues: {
      name: "",
      type: "CURRENT",
      balance: "",
      isDefault: false,
    },
  });

  // for the api call to submit the form
  // to handle the api calls, we need to handle multiple things such as
  // Loading when the api call is made to show the loader, show the error(if api call fails), store the data in some state
  // try doing it in a custom hook

  const {
    data: newAccount,
    error,
    fn: createAccountFn,
    loading: createAccountLoading,
  } = useFetch(createAccount);

  // Whenever the account is created successfully
  useEffect(() => {
    if (newAccount) {
      toast.success("Account Created Successfully");
      reset(); // reseting the form
      setOpen(false); // close the drawer
    }
  }, [reset, newAccount]);
  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to create the account");
    }
  }, [error]);

  const onSubmit = async (data) => {
    await createAccountFn(data);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create New Account</DrawerTitle>
        </DrawerHeader>
        {/* Form - using react hook form and zod, schema in app/lib/schema */}
        <div className="px-4 pb-4">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Account Name
              </label>
              {/* To connect it with react hook form ...register(it will be a name) */}
              <Input
                id="name"
                placeholder="eg., Main Checking"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium">
                Account Type
              </label>
              {/* To connect it with react hook form ...register(it will be a name) */}
              <Select
                onValueChange={(value) => {
                  setValue("type", value);
                }}
                defaultValue={watch("type")}
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CURRENT">Current</SelectItem>
                  <SelectItem value="SAVINGS">Savings</SelectItem>
                </SelectContent>
              </Select>
              {errors.type && (
                <p className="text-sm text-red-500">{errors.type.message}</p>
              )}
            </div>

            {/* Initial Balance */}
            <div className="space-y-2">
              <label htmlFor="balance" className="text-sm font-medium">
                Initial Balance
              </label>
              {/* To connect it with react hook form ...register(it will be a name) */}
              <Input
                id="balance"
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register("balance")}
              />
              {errors.balance && (
                <p className="text-sm text-red-500">{errors.balance.message}</p>
              )}
            </div>
            {/* Set as Default */}
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="space-y-0.5 ">
                <label
                  htmlFor="isDefault"
                  className="text-sm font-medium cursor-pointer"
                >
                  Set As Default
                </label>
                <p className="text-sm text-muted-foreground">
                  This account will be selected as default for transactions
                </p>
              </div>
              <Switch
                id="isDefault"
                checked={watch("isDefault")}
                onCheckedChange={(checked) => setValue("isDefault", checked)}
              />
              {/* To connect it with react hook form ...register(it will be a name) */}
            </div>
            {/* Button for cancel/creating the account */}
            <div className="flex gap-4 pt-4 ">
              <DrawerClose asChild>
                <Button type="button" variant="outline" className="flex-1">
                  Cancel
                </Button>
              </DrawerClose>
              <Button
                type="submit"
                className="flex-1"
                disabled={createAccountLoading}
              >
                {createAccountLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </div>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateAccountDrawer;

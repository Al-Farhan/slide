import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { AutomationDuoToneWhite } from "@/icons";

type Props = {};

const CreateAutomation = (props: Props) => {
  // WIP: Create the automation in the database using mutate
  return (
    <Button className="lg:px-10 py-6 bg-gradient-to-br from-[#3352CC] to-[#1C2D70] hover:opacity-80 text-white rounded-full font-medium">
        <Loader state={false}>
            <AutomationDuoToneWhite />
            <p>Create an Automation</p>
        </Loader>
    </Button>
);
};

export default CreateAutomation;

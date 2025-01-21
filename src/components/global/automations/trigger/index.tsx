"use client";
import { useQueryAutomation } from "@/hooks/use-queries";
import React from "react";
import ActiveTrigger from "./active";
import { Separator } from "@/components/ui/separator";

type Props = {
  id: string;
};

const Trigger = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);

  // if (data?.data && data.data.trigger.length > 0) {
  return (
    <div className="flex flex-col gap-y-6 items-center">
      {/* TODO: add this for the type data.data.trigger[0].type */}
      <ActiveTrigger
        type="COMMENT"
        keywords={[
          {
            id: "ajksdf",
            word: "getstarted",
            automationId: id,
          },
        ]}
      />

      {/* TODO: add this for the data.data.trigger.length */}
      {/* {data?.data?.trigger.length > 1 && <></>} */}

      <>
        <div className="relative w-6/12 mt-4">
          <p className="absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
            or
          </p>
          <Separator orientation="horizontal" className="border-muted border-[1px]" />
        </div>
      </>

      <ActiveTrigger
        type="MESSAGE"
        keywords={[
          {
            id: "ajksdfDSF",
            word: "messageme",
            automationId: id,
          },
        ]}
      />

    </div>
  );
  // }
};

export default Trigger;

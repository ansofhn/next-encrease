import { Tabs } from "antd";
import React from "react";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import { transactionRepository } from "../../repository/transaction";
import { AiFillWallet } from "react-icons/ai";
import {
  MdDomainVerification,
  MdOutlineCancelPresentation,
} from "react-icons/md";
import ToPayTabs from "../../components/transaction/ToPayTabs";
import SuccessTabs from "../../components/transaction/SuccessTabs";
import CancelledTabs from "../../components/transaction/CancelledTabs";
import LandingPageLayoutVerified from "../../layouts/LandingPageLayoutVerified";

const Transaction = () => {
  const items = [
    {
      key: "1",
      label: (
        <div className="flex flex-row items-center gap-x-3">
          <AiFillWallet /> To Pay
        </div>
      ),
      children: <ToPayTabs />,
    },
    {
      key: "2",
      label: (
        <div className="flex flex-row items-center gap-x-3">
          <MdDomainVerification /> Success
        </div>
      ),
      children: <SuccessTabs />,
    },
    {
      key: "3",
      label: (
        <div className="flex flex-row items-center gap-x-3">
          <MdOutlineCancelPresentation /> Cancelled
        </div>
      ),
      children: <CancelledTabs />,
    },
  ];

  return (
    <div className="py-32">
      <div className="max-w-screen-lg mx-auto">
        <div className="w-full" id="transaction-tab">
          <Tabs
            animated={true}
            size={"small"}
            items={items}
            type={"card"}
            defaultActiveKey="1"
            className="text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Transaction;

Transaction.getLayout = (page) => (
  <LandingPageLayoutVerified title="Encrease - Transaction" children={page} />
);

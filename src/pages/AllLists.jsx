import React from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

const AllLists = () => {
  return (
    <div>
      <PageHeader title={"All Tasks"} />
      <div>
        <Button lable={"Add Task"} />
      </div>
    </div>
  );
};

export default AllLists;

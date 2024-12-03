/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Steps } from "antd";
import { useSelector } from "react-redux";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Sumary from "./components/Sumary";

const { Step } = Steps;

const StepsForm = () => {
  const { step } = useSelector((state: any) => state.form);
  const steps = [
    {
      title: "Select BOM",
      content: <Form1 />,
    },
    {
      title: "Formik & Yup",
      content: <Form2 />,
    },
    {
      title: "Summary",
      content: <Sumary />,
    },
  ];

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Steps current={step} labelPlacement="vertical">
            {steps.map((item, index) => (
              <Step key={index} title={item.title} />
            ))}
          </Steps>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-4">{steps[step].content}</div>
      </div>
    </>
  );
};

export default StepsForm;

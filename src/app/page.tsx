"use client";
import { Steps, Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setStep, updateFormData } from "../store/features/formSlice";
const { Step } = Steps;

const StepsForm = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { step, formData } = useSelector((state: any) => state.form);
  const [form] = Form.useForm();

  const steps = [
    {
      title: "Step 1",
      content: (
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "Step 2",
      content: (
        <Form form={form} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "Summary",
      content: (
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    form.validateFields().then((values) => {
      dispatch(updateFormData(values));
      dispatch(setStep(step + 1));
      form.resetFields();
    });
  };

  const handlePrev = () => {
    dispatch(setStep(step - 1));
  };

  return (
    <div>
      <Steps current={step}>
        {steps.map((item, index) => (
          <Step key={index} title={item.title} />
        ))}
      </Steps>
      <div style={{ marginTop: 20 }}>{steps[step].content}</div>
      <div style={{ marginTop: 20 }}>
        {step > 0 && <Button onClick={handlePrev}>Previous</Button>}
        {step < steps.length - 1 && (
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
        )}
        {step === steps.length - 1 && (
          <Button type="primary" onClick={() => console.log(formData)}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepsForm;
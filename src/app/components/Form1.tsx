/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
// import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setStep, updateFormData } from "../../store/features/formSlice";

export default function Form1() {
  const dispatch = useDispatch();
  const { step } = useSelector((state: any) => state.form);
  const [form] = Form.useForm();

  const handleNext = () => {
    form.validateFields().then((values) => {
      dispatch(updateFormData(values));
      dispatch(setStep(step + 1));
    //   form.resetFields();
    });
  };

  return (
    <>
      <h3 className="text-center">Select BOM</h3>
      <Form form={form} layout="vertical">
        <Form.Item
          label="type"
          name="type"
          rules={[{ required: true, message: "Please input your type!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
      <div style={{ marginTop: 20 }}>
        <Button type="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
      {/* <Modal /> */}
    </>
  );
}

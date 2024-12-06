/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setStep, updateFormData } from "../../store/features/formSlice";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface BOMFormValues {
  type: string;
}

const initialValues: BOMFormValues = {
  type: "",
};

const validationSchema = Yup.object({
  type: Yup.string().required("กรุณาเลือกชนิด"),
});

export default function Form1() {
  const dispatch = useDispatch();
  const { step } = useSelector((state: any) => state.form);
  // const [form] = Form.useForm();

  // const handleNext = () => {
  //   form.validateFields().then((values) => {
  //     dispatch(updateFormData(values));
  //     dispatch(setStep(step + 1));
  //   //   form.resetFields();
  //   });
  // };

  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  const handleSubmit = (values: BOMFormValues) => {
    console.log("Form values:", values);
    dispatch(updateFormData(values));
    dispatch(setStep(step + 1));
  };

  return (
    <>
      <h3 className="text-center">Select BOM</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Select BOM" required>
              <Select
                defaultValue="กรุณาเลือก"
                placeholder="กรุณาเลือก"
                onChange={(value) => setFieldValue("type", value)}
                value={values.type}
                options={[
                  { value: "Jewelry", label: "Jewelry" },
                  { value: "Charmmy", label: "Charmmy" },
                  { value: "Gold", label: "Gold" },
                ]}
              />
              <ErrorMessage name="type" component="div" className="err" />
            </Form.Item>
            <Form.Item>
              <div className="col-12 text-end">
                <Button type="primary" htmlType="submit">
                  Next
                </Button>
              </div>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </>
  );
}

{
  /* <Form form={form} layout="vertical">
        <Form.Item
          label="type"
          name="type"
          rules={[{ required: true, message: "Please input your type!" }]}
        >
          <Input />
        </Form.Item>
      </Form> */
}
{
  /* // <div style={{ marginTop: 20 }}>
      //   <Button type="primary" onClick={handleNext}>
      //     Next
      //   </Button>
      // </div> */
}

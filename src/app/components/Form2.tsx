/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setStep, updateFormData } from "../../store/features/formSlice";
import * as Yup from "yup";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  role: string;
}

const initialValues: RegisterFormValues = {
  username: "",
  email: "",
  password: "",
  role: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required("กรุณากรอกชื่อผู้ใช้")
    .min(3, "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร"),
  email: Yup.string().required("กรุณากรอกอีเมล").email("รูปแบบอีเมลไม่ถูกต้อง"),
  password: Yup.string()
    .required("กรุณากรอกรหัสผ่าน")
    .min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
  role: Yup.string().required("กรุณาเลือกบทบาท"),
});

export default function Form2() {
  const dispatch = useDispatch();
  const { step } = useSelector((state: any) => state.form);
  const [form] = Form.useForm();

  // const handleNext = () => {
  //   form.validateFields().then((values) => {
  //     dispatch(updateFormData(values));
  //     dispatch(setStep(step + 1));
  //     form.resetFields();
  //   });
  // };

  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  const handlePrev = () => {
    dispatch(setStep(step - 1));
  };

  const handleSubmit = (values: RegisterFormValues) => {
    console.log("Form values:", values);
    dispatch(updateFormData(values));
    dispatch(setStep(step + 1));
  };

  return (
    <>
      <h3 className="text-center">Formik & Yup</h3>
      {/* <Form form={form} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Select"
          name="select"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Select
            defaultValue="select"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Form.Item>
      </Form> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, setFieldValue, values }) => (
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="ชื่อผู้ใช้" required>
              <Field
                name="username"
                as={Input}
                onChange={handleChange}
                value={values.username}
              />
              <ErrorMessage name="username" component="div" className="err" />
            </Form.Item>
            <Form.Item label="อีเมล" required>
              <Field
                name="email"
                as={Input}
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage name="email" component="div" className="err" />
            </Form.Item>
            <Form.Item label="รหัสผ่าน" required>
              <Field
                name="password"
                as={Input.Password}
                onChange={handleChange}
                value={values.password}
              />
              <ErrorMessage name="password" component="div" className="err" />
            </Form.Item>
            <Form.Item label="บทบาท" required>
              <Select
                defaultValue="กรุณาเลือกบทบาท"
                placeholder="กรุณาเลือกบทบาท"
                onChange={(value) => setFieldValue("role", value)}
                value={values.role}
                options={[
                  { value: "Admin", label: "Admin" },
                  { value: "User", label: "User" },
                ]}
              />

              <ErrorMessage name="role" component="div" className="err" />
            </Form.Item>
            <Form.Item>
              <div style={{ marginTop: 20 }}>
                {step > 0 && <Button onClick={handlePrev}>Previous</Button>}
                <Button className="ms-2" type="primary" htmlType="submit">
                  Next
                </Button>
              </div>
            </Form.Item>
          </Form>
        )}
      </Formik>
      {/* <Modal /> */}
    </>
  );
}

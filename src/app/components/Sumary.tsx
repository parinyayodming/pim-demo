/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
// import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../store/features/formSlice";

export default function Sumary() {
  const dispatch = useDispatch();
  const { step, formData } = useSelector((state: any) => state.form);

  const handlePrev = () => {
    dispatch(setStep(step - 1));
  };

  return (
    <>
      <h3 className="text-center">Sumary</h3>
      <div className="card shadow border-0 rounded-3 p-4 my-4">
        <p>Type: {formData.type}</p>
        <p>Name: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Role: {formData.role}</p>
      </div>
      <div className="col-12 text-center">
        {step > 0 && <Button onClick={handlePrev}>Previous</Button>}
        <Button
          className="ms-2"
          type="primary"
          onClick={() => console.log(formData, "data")}
        >
          Submit
        </Button>
      </div>
      {/* <Modal /> */}
    </>
  );
}

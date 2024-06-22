import * as Yup from "yup";
export const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  address: Yup.string().required("Address is required"),
  zip: Yup.string().required("Zip is required"),
  state: Yup.string().required("State is required"),
  language: Yup.string().required("State is required"),
  gender: Yup.string().required("State is required"),
  nationality: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  dob: Yup.string().required("Date of birth is required"),
});
export const fieldClasses =
  "border-[1.35px] px-3 py-2 self-stretch border-[#DBDADE] text-[#4B465C] outline-none rounded-lg w-full";
export const languageOptions = [
  { key: "Select Language", value: "" },
  { key: "English", value: "english" },
  { key: "Urdu", value: "urdu" },
];
export const genderOptions = [
  { key: "Select Gender", value: "" },
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
  { key: "Prefer not to say", value: "any" },
];
export const nationalityOptions = [
  { key: "Select Country", value: "" },
  { key: "USA", value: "usa" },
  { key: "England", value: "england" },
  { key: "Germany", value: "germany" },
];
export const initialValues = {
  username: "",
  phoneNumber: "",
  dob: "",
  language: "",
  gender: "",
  nationality: "",
  address: "",
  zip: "",
  state: "",
  country: "",
};

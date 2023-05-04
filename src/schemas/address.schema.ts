import * as yup from "yup";

export const updateAddressSchema = yup.object().shape({
  zipCode: yup.string(),
  street: yup.string(),
  city: yup.string(),
  state: yup.string(),
  number: yup.string(),
  complement: yup.string().notRequired(),
});

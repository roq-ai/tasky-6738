import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  list_id: yup.string().nullable().required(),
});

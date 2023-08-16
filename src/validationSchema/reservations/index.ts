import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  table_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});

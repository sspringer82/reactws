import { Formik, Form as FormikForm, Field } from 'formik';

const Form = ({ item, onSave }) => {
  return (
    <Formik
      initialValues={{
        amount: item.amount,
        unit: item.unit,
        name: item.name,
        done: item.done,
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        onSave({ ...item, ...values });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <Field type="text" name="amount" placeholder="amount" />
          <Field type="text" name="unit" placeholder="unit" />
          <Field type="text" name="name" placeholder="name" />
          <button type="submit" disabled={isSubmitting}>
            speichern
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;

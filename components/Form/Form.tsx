"use client";
import React from "react";
import css from "./Form.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookCamper, BookingRequest } from "@/lib/api/api";
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { LuCircleAlert } from "react-icons/lu";

interface FormProps {
  camperId: string;
}

const OrderFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Please enter your name.")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter your email.")
    .required("Email is required"),
});
export default function Form({ camperId }: FormProps) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: BookingRequest) => bookCamper(camperId, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["camper", camperId],
      });
    },
  });
  function FormContent() {
    const { errors, touched } = useFormikContext<{
      name: string;
      email: string;
    }>();
  }
  return (
    <div className={css.formWrapper}>
      <div className={css.formDescription}>
        <h3 className={css.formTitle}>Book your campervan now</h3>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        validationSchema={OrderFormSchema}
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values, { resetForm }) => {
          mutate(values, {
            onSuccess: () => {
              resetForm();
            },
          });
        }}
      >
        {({ errors, touched, values }) => (
          <FormikForm noValidate>
            <div className={css.formInput}>
              <div className={css.inputWrapper}>
                <label
                  className={`${css.errorLabel} ${
                    touched.name && errors.name
                      ? css.labelError
                      : values.name
                        ? css.labelHidden
                        : ""
                  }`}
                >
                  Name*
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder=""
                  className={`${css.input} ${
                    touched.name && errors.name ? css.inputError : ""
                  }`}
                />
                {touched.name && errors.name && (
                  <LuCircleAlert size={24} className={css.errorIcon} />
                )}

                <ErrorMessage
                  name="name"
                  component="span"
                  className={css.error}
                />
              </div>

              <div className={css.inputWrapper}>
                <label
                  className={`${css.errorLabel} ${
                    touched.email && errors.email
                      ? css.labelError
                      : values.email
                        ? css.labelHidden
                        : ""
                  }`}
                >
                  Email*
                </label>
                <Field
                  type="text"
                  name="email"
                  placeholder=""
                  className={`${css.input} ${
                    touched.email && errors.email ? css.inputError : ""
                  }`}
                />

                {touched.email && errors.email && (
                  <LuCircleAlert size={24} className={css.errorIcon} />
                )}

                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>
            </div>

            <div className={css.buttonWrapper}>
              <button type="submit" className={css.button} disabled={isPending}>
                {isPending ? "Sending..." : "Send"}
              </button>
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

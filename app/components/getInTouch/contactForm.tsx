"use client";
import { useState, useCallback, ChangeEvent, memo, FormEvent, FC } from "react";
import styles from "./getInTouch.module.scss";
import classNames from "classnames";
import isValidEmail from "@/app/utils/isEmailValid";
import { SpinnerIcon } from "@/app/icons";

export interface formDataType {
  email: string;
  message: string;
  name: string;
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    message: "Hello Prasanna, ",
  });
  const [isDisable, setDisable] = useState<boolean>(false);

  const [status, setStatus] = useState<string>("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        event.preventDefault();
        if (!formData?.email || !isValidEmail(formData?.email))
          return setStatus("Enter valid email!");
        setStatus("");
        setDisable(true);
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setStatus(data);
          setDisable(false);
          setFormData({ name: "", email: "", message: "" });
        } else {
          const errorMessage =
            (await response.json()) || (await response.text());
          setStatus(errorMessage);
        }
      } catch (error) {
        setDisable(false);
        console.error(error);
        setStatus("Error sending email, please after some time!");
      }
    },
    [formData],
  );
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.info}>
        <div className={styles.inputWrapper}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            autoComplete="on"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={classNames("rounded")}
            disabled={isDisable}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            autoComplete="on"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="email@example.com"
            className={classNames("rounded")}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <label>Message</label>
        <textarea
          disabled={isDisable}
          placeholder="Hello Prasanna,"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={classNames("rounded")}></textarea>
      </div>

      <button
        type="submit"
        disabled={isDisable}
        className={classNames(styles.btn, isDisable && styles.btnDisabled)}>
        {isDisable ? (
          <>
            <SpinnerIcon /> Sending
          </>
        ) : (
          "Send"
        )}
      </button>
      {status}
    </form>
  );
};

export default memo(ContactForm);

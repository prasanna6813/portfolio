"use client";
import { useState, useCallback, ChangeEvent, memo, FormEvent } from "react";
import styles from "./getInTouch.module.scss";
import classNames from "classnames";
import Image from "next/image";
import isValidEmail from "@/app/utils/isEmailValid";
import { getInTouchData } from "./dummyData";

export interface formDataType {
  email: string;
  message: string;
  name: string;
}
const GetInTouch = () => {
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    message: "Hello Prasanna,",
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
        } else {
          const errorMessage =
            (await response.json()) || (await response.text());
          setStatus(errorMessage);
        }
      } catch (error) {
        setDisable(false);
        console.error(error);
        setStatus("Error sending email");
      }
    },
    [formData],
  );

  return (
    <div className={styles.getInTouchContainer}>
      <h2 className={styles.title}>{getInTouchData.title}</h2>
      <p className={styles.text}>{getInTouchData.description}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.info}>
          <div className={styles.inputWrapper}>
            <label>Name</label>
            <input
              type="text"
              name="name"
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
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded ${
            isDisable ? "opacity-50 cursor-not-allowed" : ""
          }`}>
          Send
        </button>
        {status}
      </form>

      <hr />

      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <span>{"contact me "}</span>
          <a
            href="https://www.linkedin.com/in/prasanna-kumar-03a446105/"
            className={styles.contactInfo}>
            <Image
              src="/social/linkedin.svg"
              height="26"
              width="32"
              alt="email"
            />
          </a>
          <a
            href="mailto:prasanna6813@gmail.com"
            className={styles.contactInfo}
            title="prasanna6813@gmail.com">
            <Image src="/social/mail.svg" height="26" width="32" alt="email" />
          </a>
          <a
            href="https://www.facebook.com/prasannakumar.kamjula.5/"
            className={styles.contactInfo}
            title="prasanna6813@gmail.com">
            <Image
              src="/social/facebook.svg"
              height="26"
              width="32"
              alt="email"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(GetInTouch);

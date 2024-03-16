"use client";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import styles from "./getInTouch.module.scss";
import classNames from "classnames";
import Image from "next/image";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "Hello Prasanna,",
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    },
    [],
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className={styles.getInTouchContainer}>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.text}>
        {
          "I'm actively looking for any new opportunities, my inbox is always open. Whether you have a question or want to hire me or just want to say hello, I'll try my best to get back to you!"
        }
      </p>

      <form className={styles.form}>
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
            />
          </div>
          <div className={styles.inputWrapper}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className={classNames("rounded")}
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label>Message</label>
          <textarea
            placeholder="Hello Prasanna,"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={classNames("rounded")}></textarea>
        </div>

        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
          Send
        </button>
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

export default GetInTouch;

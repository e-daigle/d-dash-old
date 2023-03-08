import { DialogText } from "../../../types";
import React from "react";
import styles from "./ddash-dialog.module.css";

const defaultConfig: DialogText = {
  title: "Are you sure?",
  message: "This action cannot be undone! Are you sure you want to continue?",
  cancelButton: "Cancel",
  confirmButton: "Confirm",
};

type Props = {
  open: boolean;
  title?: string;
  message?: string;
  cancelButton?: string;
  confirmButton?: string;
  onConfirm: () => void;
  onDismiss: () => void;
  defaultDialogText?: DialogText;
};

const DDashDialog = ({
  open,
  title,
  message,
  cancelButton,
  confirmButton,
  defaultDialogText,
  onConfirm,
  onDismiss,
}: Props) => {
  //If user doesn't provide text values, we use the default ones
  const baseValues = defaultDialogText ? defaultDialogText : defaultConfig;

  if (!open) return null;
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path d="M124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm109.30273,65.98291a19.79613,19.79613,0,0,1-17.32617,10.00928H40.02344a19.9998,19.9998,0,0,1-17.30957-30.019L110.69043,37.981a20.00012,20.00012,0,0,1,34.61914,0l87.97656,151.99218A19.798,19.798,0,0,1,233.30273,209.98291Zm-6.94043-16.00244L138.38574,41.98828a12.00037,12.00037,0,0,0-20.77148,0L29.6377,193.98047a12.00033,12.00033,0,0,0,10.38574,18.01172H215.97656a12.00033,12.00033,0,0,0,10.38574-18.01172ZM128,172a8,8,0,1,0,8,8A7.99977,7.99977,0,0,0,128,172Z"></path>
        </svg>
        <div className={styles.inner__text}>
          <h1>{title ? title : baseValues.title}</h1>
          <p>{message ? message : baseValues.message}</p>
        </div>
        <div className={styles.inner__buttons}>
          <button className={styles.cancel} onClick={onDismiss}>
            {cancelButton ? cancelButton : baseValues.cancelButton}
          </button>
          <button className={styles.confirm} onClick={onConfirm}>
            {confirmButton ? confirmButton : baseValues.confirmButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DDashDialog;

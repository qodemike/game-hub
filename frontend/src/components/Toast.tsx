import { useEffect } from "react";

export interface ToastMessage {
  message: string;
  type: "SUCCESS" | "ERROR";
}

interface ToastProps {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = type === "SUCCESS" ? "bg-green-600" : "bg-red-600 ";

  return (
    <div
      className={
        " fixed top-4 right-4 z-50 p4 text-white max-w-md rounded-md" + styles
      }
    >
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;

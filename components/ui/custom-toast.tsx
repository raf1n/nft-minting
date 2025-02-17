import { type Toast, toast } from "react-hot-toast";
import { XIcon } from "lucide-react";

interface CustomToastProps {
  t: Toast;
  message: string;
  type: "success" | "error";
}

export const CustomToast = ({ t, message, type }: CustomToastProps) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-[#1F2937] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-white">
              {type === "error" ? "Error" : "Success"}
            </p>
            {/* Message styling: wraps long text, limits max height with scrolling */}
            <p className="mt-1 text-sm text-gray-400 break-words max-h-32 overflow-y-auto">
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-700">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-300 focus:outline-none"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export const showToast = (message: string, type: "success" | "error") => {
  toast.custom((t) => <CustomToast t={t} message={message} type={type} />, {
    duration: 5000,
    position: "top-right",
  });
};

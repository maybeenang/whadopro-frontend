import clsx from "clsx";

type CallToActionButtonProps = {
  text?: string;
  variant?: "primary" | "secondary";
  classnames?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CallToActionButton = (props: CallToActionButtonProps) => {
  return (
    <>
      <button
        className={clsx(
          props.variant === "primary" ? "bg-secondary" : "bg-primary",
          "px-6 py-2 font-semibold rounded-full text-sm text-white",
          props.classnames
        )}
        {...props}
      >
        {props.text}
      </button>
    </>
  );
};

CallToActionButton.defaultProps = {
  text: "Get Started",
  variant: "primary",
};

export default CallToActionButton;

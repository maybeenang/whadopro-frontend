type BreadCrumbsProps = {
  text: string[];
};

const BreadCrumbs = (props: BreadCrumbsProps) => {
  return (
    <div className="flex gap-2 text-white">
      {props.text?.map((item, index) => (
        <span key={index}>
          {item}
          {index !== props.text.length - 1 && <span className="ml-2">/</span>}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;

type props = {
  title: string;
};

const Title = ({ title }: props) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="hidden pr-5 text-2xl font-extrabold lg:block"
    >
      {title}
    </div>
  );
};

export default Title;

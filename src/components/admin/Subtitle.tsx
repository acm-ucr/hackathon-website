interface props {
  title: string;
}

const Subtitle = ({ title }: props) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="hidden pl-5 text-xl font-bold lg:block"
    >
      {title}
    </div>
  );
};

export default Subtitle;

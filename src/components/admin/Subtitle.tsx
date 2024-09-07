const Subtitle = ({ title }: { title: string }) => {
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

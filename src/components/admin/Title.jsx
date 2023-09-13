const Title = ({ title }) => {
  return (
    <div data-cy={`${title}-title`} className="text-2xl font-extrabold pr-[3%]">
      {title}
    </div>
  );
};

export default Title;

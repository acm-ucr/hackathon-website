const BulletPoints = ({ list }) => {
  return (
    <ul
      data-cy="bulletpoint-list-items"
      className="flex flex-col items-center justify-center mt-2"
    >
      {list.map((item, index) => (
        <li
          data-cy="bulletpoint-list-item"
          key={index}
          className="list-disc w-10/12"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BulletPoints;

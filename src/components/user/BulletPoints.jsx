const BulletPoints = ({ list }) => {
  return (
    <ul
      data-cy="bulletpoint-list-items"
      className="mt-2 flex flex-col items-center justify-center"
    >
      {list.map((item, index) => (
        <li
          data-cy="bulletpoint-list-item"
          key={index}
          className="w-10/12 list-disc"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BulletPoints;

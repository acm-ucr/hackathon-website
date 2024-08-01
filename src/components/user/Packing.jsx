const Packing = () => {
  const list = [
    "Computer and accessories (mouse, keyboard, etc.)",
    "Chargers (phone, laptop, etc.)",
    "Hardware that you might want to hack on or incorporate into your build.",
    "Sleep-related things (sleeping bags, pillow, blankets, etc.)",
    "There will be a resting area within the venue itself, but we can't provide sleeping materials to hackers.",
    "A change of clothes (including something warm such as a jacket or sweatshirt)",
    "Toiletries: toothbrush, toothpaste, soap, towels, face wash",
    "Medication (if needed)",
    "Refillable water bottle",
  ];
  return (
    <div className="my-3 rounded-lg bg-white p-3 shadow-xl">
      <div className="p-2 font-bold" data-cy="packing-title">
        🎒Packing List
      </div>

      <ul className="mb-2 list-disc pl-9 font-light" data-cy="packing-items">
        {list.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default Packing;

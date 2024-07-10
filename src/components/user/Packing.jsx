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
    <div className="bg-white rounded-lg shadow-xl p-3 my-3">
      <div className="font-bold p-2" data-cy="packing-title">
        🎒Packing List
      </div>

      <ul className="font-light list-disc pl-9 mb-2" data-cy="packing-items">
        {list.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default Packing;

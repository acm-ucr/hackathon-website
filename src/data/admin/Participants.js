export const FILTERS = {
  reject: true,
  accept: true,
  pending: true,
};

export const TAGS = [
  {
    text: "accept",
  },
  {
    text: "reject",
  },
  {
    text: "pending",
  },
];

export const HEADERS = [
  { text: "name", size: 2, icon: true, sort: "off" },
  { text: "email", size: 2, icon: true, sort: "off" },
  { text: "team", size: 2, icon: true, sort: "off" },
  { text: "major", size: 2, icon: true, sort: "off" },
  {
    text: "status",
    size: 1,
    icon: true,
    sort: "off",
    hasTag: true,
  },
  {
    text: "resume",
    size: 1,
    icon: false,
    sort: "off",
    hasTag: true,
    onClick: (object, setModal) => {
      setModal({ src: object.resume, title: object.name + "'s Resume" });
    },
  },
  {
    text: "",
    size: 1,
  },
];

const attributes = [
  "email",
  "phone",
  "age",
  "gender",
  "school",
  "major",
  "grade",
  "shirt",
  "diet",
  "restriction",
];

export const DROPDOWN = ({ object, icons }) => {
  return (
    <div className="flex flex-wrap">
      {attributes.map((attribute, index) => (
        <div
          key={index}
          className="items-center my-1 px-1 flex text-sm min-w-fit w-1/4"
        >
          {icons[attribute]}
          {Array.isArray(object[attribute])
            ? object[attribute].map((element, index) => (
                <div key={index}>{element} &#x2c;&nbsp;</div>
              ))
            : object[attribute]}
        </div>
      ))}
    </div>
  );
};

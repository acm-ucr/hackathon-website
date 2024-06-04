import Tag from "../../admin/Tag";
import { COLORS } from "@/data/Tags";
import Button from "@/components/Button.jsx";

const Status = ({ object, statuses, setState }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>
        Hello <b>{object.name}</b>, your status is currently
      </p>
      <Tag
        color={COLORS[object.roles[object.form]]}
        text={statuses[object.roles[object.form]]}
        classes="mb-2"
      />
      <p className="text-center">
        You have already filled out the form. If you wish to change any
        information, please fill out the form again. Note that your status will
        change until approved by an admin.
      </p>
      <p className="text-center">
        If you believe that your status is incorrect, please reach out to us
        immediately.
      </p>

      <Button text="Apply" onClick={() => setState(1)} color="green" />
    </div>
  );
};

jest.mock("@/components/Button.jsx", () => {
  const Button = ({ text, onClick, color }) => (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
  Button.displayName = "Button";
  return Button;
});

describe("Status Component", () => {
  const object = {
    name: "Jalen Brown",
    roles: { from: "admin" },
    form: "form",
  };
  const statuses = {
    admin: "Approved",
    user: "Pending",
  };
  const setState = jest.fn();

  beforeEach(() => {
    setState.mockClear(); // clear setState for every test
  });
  test("renders with red text color for non-admin role", () => {
    const userObject = {
      ...object,
      roles: { form: "user" },
    };

    render(
      <Status object={userObject} statuses={statuses} setState={setState} />
    );

    const helloElement = screen.getByText(/Hello/);
    expect(helloElement).toHaveTextContent(
      "Hello John Doe, your status is currently"
    );
    expect(helloElement).toHaveStyle({ color: "red" });
  });

  test("if the renders responde correctly with given props", () => {
    render(<Status object={object} statuses={statuses} setState={setState} />);

    expect(screen.getByText(/Hello/)).toHaveTextContent(
      "Hello John Doe, your status is currently"
    );
    expect(screen.getByText("Approved")).toBeInTheDocument();
    expect(
      screen.getByText(/You have already filled out the form/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/If you believe that your status is incorrect/)
    ).toBeInTheDocument();
    expect(screen.getByText("Apply")).toBeInTheDocument();
  });

  test("call setState when the button is clicked", () => {
    render(<Status object={object} statuses={statuses} setState={setState} />);

    fireEvent.click(screen.getByText("Apply"));
    expect(setState).toHaveBeenCalledWith(1);
  });
});

export default Status;

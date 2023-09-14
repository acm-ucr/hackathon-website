import { GENDERS, GRADES, MAJORS } from "@/data/forms/Information";
import { SCHOOLS } from "@/data/forms/Schools";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import Button from "../Button";

const User = ({ handleEdit, handleSave, user, setUser, edit }) => {
  return (
    <>
      <Input
        name="phone"
        type="phone"
        title="Phone Number"
        value={user.phone}
        user={user}
        setUser={setUser}
        editable={edit}
      />
      <Select
        title="School"
        options={SCHOOLS}
        field="school"
        user={user}
        setUser={setUser}
        editable={edit}
      />
      <Select
        title="Major"
        options={MAJORS}
        field="major"
        user={user}
        setUser={setUser}
        editable={edit}
      />
      <Select
        title="Grade"
        options={GRADES}
        field="grade"
        user={user}
        setUser={setUser}
        editable={edit}
      />
      <Radio
        text="Gender"
        options={GENDERS}
        field="gender"
        user={user}
        setUser={setUser}
        editable={edit}
      />
      {edit ? (
        <Button text="done" onClick={handleSave} />
      ) : (
        <Button text="edit" onClick={handleEdit} />
      )}
    </>
  );
};

export default User;

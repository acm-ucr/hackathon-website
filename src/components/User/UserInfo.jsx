import { Genders, Grades, Majors } from "@/data/Register";
import { Schools } from "@/data/Schools";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import Button from "../Forms/Button";

const UserInfo = ({ handleEdit, handleSave, user, setUser, edit }) => {
  return (
    <div>
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
        options={Schools}
        field="school"
        user={user}
        setUser={setUser}
        editable={edit}
      />
      <Select
        title="Major"
        options={Majors}
        field="major"
        user={user}
        setUser={setUser}
        editable={edit}
      />
      <Select
        title="Grade"
        options={Grades}
        field="grade"
        user={user}
        setUser={setUser}
        editable={edit}
      />
      <Radio
        text="Gender"
        options={Genders}
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
    </div>
  );
};

export default UserInfo;

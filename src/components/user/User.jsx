import { GENDERS, GRADES, MAJORS } from "@/data/forms/Information";
import { SCHOOLS } from "@/data/forms/Schools";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import Button from "../Button";

const User = ({ handleEdit, handleSave, user, setUser, editable }) => {
  return (
    <div className="bg-white rounded-lg p-4 gap-3 m-2">
      <Input
        name="phone"
        type="phone"
        title="Phone Number"
        value={user.phone}
        user={user}
        setUser={setUser}
        editable={editable}
      />
      <Select
        title="School"
        options={SCHOOLS}
        field="school"
        user={user}
        setUser={setUser}
        editable={editable}
      />
      <Select
        title="Major"
        options={MAJORS}
        field="major"
        user={user}
        setUser={setUser}
        editable={editable}
      />
      <Select
        title="Grade"
        options={GRADES}
        field="grade"
        user={user}
        setUser={setUser}
        editable={editable}
      />
      <Radio
        text="Gender"
        options={GENDERS}
        field="gender"
        user={user}
        setUser={setUser}
        editable={editable}
      />
      <div className="w-full flex justify-center">
        {editable ? (
          <Button text="done" onClick={handleSave} />
        ) : (
          <Button text="edit" onClick={handleEdit} />
        )}
      </div>
    </div>
  );
};

export default User;

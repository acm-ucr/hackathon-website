import {
  AGES,
  DIETS,
  GENDERS,
  GRADES,
  MAJORS,
  SHIRTS,
} from "@/data/forms/Information";
import { SCHOOLS } from "@/data/forms/Schools";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import Button from "../Button";
import Checkbox from "../Checkbox";
import axios from "axios";
import toast from "react-hot-toast";

const User = ({ user, setUser, edit, setEdit }) => {
  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = async () => {
    await axios.post("/api/participant", user);
    toast("✅ Successfully Update!");
    setEdit(false);
  };
  return (
    <div className="bg-white rounded-lg p-4 gap-3 m-2 overflow-scroll max-h-[70vh]">
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
        title="Major"
        options={MAJORS}
        field="major"
        user={user}
        setUser={setUser}
        editable={edit}
      />
      <Select
        title="Age"
        options={AGES}
        field="age"
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
      <Radio
        text="Shirt"
        options={SHIRTS}
        field="shirt"
        user={user}
        setUser={setUser}
        editable={edit}
      />
      <p className="mb-1 font-semibold">Diet</p>
      {edit
        ? DIETS.map((option, i) => (
            <Checkbox
              className="w-1/2"
              key={i}
              toggle={user.diet[option]}
              text={option}
              onClick={() =>
                setUser({
                  ...user,
                  diet: {
                    ...user.diet,
                    [option]: !user.diet[option],
                  },
                })
              }
              color="bg-hackathon-green-300"
            />
          ))
        : user.diet &&
          Object.keys(user.diet).map((diet, index) => (
            <p key={index}>{diet}</p>
          ))}
      <div className="w-full flex justify-center">
        {edit && <Button text="done" onClick={handleSave} />}
        {!edit && <Button text="edit" onClick={handleEdit} />}
      </div>
    </div>
  );
};

export default User;

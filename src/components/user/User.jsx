import {
  AGES,
  DIETS,
  GENDERS,
  GRADES,
  MAJORS,
  SHIRTS,
} from "@/data/form/Information";
import { SCHOOLS } from "@/data/form/Schools";
import { COUNTRIES } from "@/data/form/Country";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import Button from "../Button";
import Checkbox from "../Checkbox";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";

const User = ({ user, setUser, edit, setEdit }) => {
  const handleEdit = () => {
    setEdit(true);
  };

  const handleClick = (option, field) => {
    setUser({
      ...user,
      [field]: option,
    });
  };

  const handleSave = async () => {
    if (
      Object.values(user).some(
        (value) => typeof value === "string" && value.includes("Invalid"),
      )
    ) {
      toaster("Please complete all required fields!", "error");
      return;
    }
    api({
      method: "POST",
      url: "/api/participant",
      body: user,
    })
      .then(() => {
        toaster("Successfully Updated!", "success");
        setEdit(false);
      })
      .catch(() => {
        toaster("Internal Server Error", "error");
        setEdit(false);
      });
  };
  return (
    <div className="m-2 flex max-h-[70vh] flex-col gap-3 rounded-lg bg-white pb-4">
      <div className="m-2 flex h-[90%] flex-col gap-3 overflow-scroll bg-transparent p-4">
        <Select
          title="School"
          items={SCHOOLS}
          field="school"
          user={user}
          setUser={setUser}
          editable={edit}
        />
        <Select
          title="Country"
          items={COUNTRIES}
          field="country"
          user={user}
          setUser={setUser}
          editable={edit}
        />
        <Select
          title="Major"
          items={MAJORS}
          field="major"
          user={user}
          setUser={setUser}
          editable={edit}
        />
        <Select
          title="Grade"
          items={GRADES}
          field="grade"
          user={user}
          setUser={setUser}
          editable={edit}
        />
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
          title="Age"
          items={AGES}
          field="age"
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
          onClick={handleClick}
        />
        <Radio
          text="Shirt"
          options={SHIRTS}
          field="shirt"
          user={user}
          setUser={setUser}
          editable={edit}
          onClick={handleClick}
        />
        <div>
          <p className="mb-1 font-semibold">Diet</p>
          {edit ? (
            DIETS.map((option, index) => (
              <Checkbox
                className="w-1/2"
                key={index}
                toggle={user.diet.includes(option)}
                text={option}
                onClick={() =>
                  setUser({
                    ...user,
                    diet: user.diet.includes(option)
                      ? user.diet.filter((diet) => diet !== option)
                      : [...user.diet, option],
                  })
                }
                color="bg-hackathon-green-300"
              />
            ))
          ) : user.diet.length > 0 ? (
            user.diet.map((diet, index) => (
              <p className="mb-1 pl-3" key={index}>
                {diet}
              </p>
            ))
          ) : (
            <p className="mb-1 pl-3">No diet restrictions</p>
          )}
        </div>
      </div>
      <div className="flex w-full justify-center">
        {edit && (
          <Button color="green" size="xl" text="save" onClick={handleSave} />
        )}
        {!edit && (
          <Button color="green" size="xl" text="edit" onClick={handleEdit} />
        )}
      </div>
    </div>
  );
};

export default User;

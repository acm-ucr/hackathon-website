import Select from "@/components/Select";
import Radio from "@/components/Radio";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Button from "@/components/Button.jsx";
import Textarea from "@/components/form/form/Textarea.jsx";
import Upload from "@/components/form/form/Upload";
import toaster from "@/utils/toaster";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import data from "@/data/Config";
import Terms from "./Terms";

const Questions = ({
  fields,
  object,
  setObject,
  onSubmit,
  loading,
  setLoading,
  setState,
  packet = false,
}) => {
  const handleSubmit = () => {
    setLoading(true);

    if (
      Object.entries(fields).some(
        ([key, value]) =>
          value.required &&
          (!object[key] ||
            object[key] === "" ||
            object[key].includes("Invalid"))
      )
    ) {
      toaster("Please complete all required fields!", "error");
      setLoading(false);
      return;
    }
    if (
      fields.requirements &&
      fields.requirements.options.some(
        (requirement) => !object.requirements.includes(requirement)
      )
    ) {
      toaster("Please agree to all the terms!", "error");
      setLoading(false);
      return;
    }
    if (fields.availability && object.availability.length === 0) {
      toaster("Please select at least one available time!", "error");
      setLoading(false);
      return;
    }

    onSubmit(setLoading, setState);
  };

  const handleClick = (option, field) => {
    setObject({
      ...object,
      [field]: option,
    });
  };

  return (
    <div className="flex flex-col w-full gap-5">
      {Object.values(fields).map((field, index) => (
        <div key={index}>
          {field.input === "description" &&
            field.texts.map((description, index) => (
              <div key={index}>
                <p>{description}</p> <br />
                {index === field.texts.length - 1 && (
                  <p>
                    Fields with
                    <span className="text-red-500"> * </span>
                    are required.
                  </p>
                )}
              </div>
            ))}
          {field.input === "input" && (
            <Input
              name={field.name}
              lastName={field.lastName}
              type={field.type}
              title={field.title}
              placeholder={field.placeholder}
              value={object[field.name]}
              maxLength={field.maxLength}
              user={object}
              setUser={setObject}
              required={field.required}
              editable={field.editable}
            />
          )}
          {field.input === "select" && (
            <Select
              title={field.title}
              items={field.options}
              field={field.field}
              placeholder={field.placeholder}
              user={object}
              setUser={setObject}
              required={field.required}
              searchable={field.searchable}
            />
          )}
          {field.input === "checkboxes" && (
            <>
              <p className="mb-1 font-semibold">
                {field.text}
                {field.required && <span className="text-red-500">*</span>}
              </p>
              <div className="grid md:grid-cols-2">
                {field.options.map((option, i) => (
                  <Checkbox
                    key={i}
                    toggle={object[field.field].includes(option)}
                    text={option}
                    onClick={() =>
                      setObject({
                        ...object,
                        [field.field]: object[field.field].includes(option)
                          ? object[field.field].filter(
                              (item) => item !== option
                            )
                          : [...object[field.field], option],
                      })
                    }
                    color="bg-hackathon-green-300"
                  />
                ))}
              </div>
            </>
          )}
          {field.input === "terms" && (
            <Terms
              options={field.options}
              toggle={object[field.field].length === field.options.length}
              onClick={() => {
                setObject({
                  ...object,
                  [field.field]:
                    object[field.field].length === field.options.length
                      ? []
                      : [...field.options],
                });
              }}
            />
          )}
          {field.input === "radio" && (
            <Radio
              text={field.text}
              options={field.options}
              field={field.field}
              user={object}
              setUser={setObject}
              required={field.required}
              onClick={handleClick}
            />
          )}
          {field.input === "textarea" && (
            <Textarea
              name={field.name}
              rows={field.rows}
              title={field.title}
              placeholder={field.placeholder}
              value={object[field.name]}
              user={object}
              setUser={setObject}
              required={field.required}
            />
          )}
          {field.input === "upload" && (
            <Upload
              field={field.field}
              text={field.text}
              maxSize={field.maxSize}
              types={field.types}
              user={object}
              setUser={setObject}
              required={field.required}
            />
          )}
        </div>
      ))}
      <div>
        <p className="font-semibold mt-3">Resources</p>
        <Link
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          className="no-underline flex items-center text-hackathon-green-300 mt-1"
        >
          MLH Code of Conduct
          <FaLink className="mx-2" />
        </Link>
        <Link
          href="https://mlh.io/privacy"
          target="_blank"
          className="no-underline flex items-center text-hackathon-green-300 hover:text-opacity-65 mt-3"
        >
          MLH Privacy Policy
          <FaLink className="mx-2" />
        </Link>
        <Link
          href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
          target="_blank"
          className="no-underline flex items-center text-hackathon-green-300 hover:text-opacity-65 mt-3"
        >
          MLH Contest Terms and Conditions
          <FaLink className="mx-2" />
        </Link>
      </div>
      {packet && (
        <Link
          href={data.packet}
          target="_blank"
          rel="noreferrer noopener"
          className="no-underline flex items-center "
        >
          Sponsorship Packet
          <FaLink className="mx-2" />
        </Link>
      )}
      <div className="flex justify-center">
        <Button
          text="Submit"
          onClick={handleSubmit}
          loading={loading}
          color="green"
        />
      </div>
    </div>
  );
};

export default Questions;

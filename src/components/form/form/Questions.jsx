import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Textarea } from "@/components/ui/textarea";
import Upload from "@/components/form/form/Upload";
import toaster from "@/utils/toaster";
import Link from "next/link";
import { Link as LucideLink } from "lucide-react";
import data from "@/data/Config";
import Terms from "./Terms";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
            object[key].includes("Invalid")),
      )
    ) {
      toaster("Please complete all required fields!", "error");
      setLoading(false);
      return;
    }
    if (
      fields.requirements &&
      fields.requirements.options.some(
        (requirement) => !object.requirements.includes(requirement),
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
    <div className="flex w-full flex-col gap-5">
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
                              (item) => item !== option,
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
            <>
              <p className="mb-1 font-semibold">
                {field.text}
                {field.required && <span className="text-red-500">*</span>}
              </p>
              <RadioGroup value={object[field.field]}>
                {Object.values(field.options).map((option, index) => (
                  <label key={index}>
                    <RadioGroupItem
                      value={option}
                      onClick={() => handleClick(option, field.field)}
                    />
                    {option}
                  </label>
                ))}
              </RadioGroup>
            </>
          )}
          {field.input === "textarea" && (
            <Textarea
              data-cy={`${field.title}-textarea`}
              className="border-1 w-full resize-none border border-black pl-3 placeholder:text-hackathon-gray-200 focus:outline-none"
              maxLength={500}
              value={object[field.name]}
              onChange={(e) =>
                setObject({ ...object, [field.name]: e.target.value })
              }
              placeholder={field.placeholder}
              name={field.name}
              rows={field.rows}
              title={field.title}
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
        <p className="mt-3 font-semibold">Resources</p>
        <Link
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          className="mt-1 flex items-center text-hackathon-green-300 no-underline hover:text-opacity-65"
        >
          MLH Code of Conduct
          <LucideLink className="mx-2" />
        </Link>
        <Link
          href="https://mlh.io/privacy"
          target="_blank"
          className="mt-3 flex items-center text-hackathon-green-300 no-underline hover:text-opacity-65"
        >
          MLH Privacy Policy
          <LucideLink className="mx-2" />
        </Link>
        <Link
          href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
          target="_blank"
          className="mt-3 flex items-center text-hackathon-green-300 no-underline hover:text-opacity-65"
        >
          MLH Contest Terms and Conditions
          <LucideLink className="mx-2" />
        </Link>
      </div>
      {packet && (
        <Link
          href={data.packet}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center no-underline"
        >
          Sponsorship Packet
          <LucideLink className="mx-2" />
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

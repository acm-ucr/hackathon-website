"use client";
import Select from "@/components/dynamic/Select";
import Radio from "@/components/dynamic/Radio";
import Checkbox from "@/components/dynamic/Checkbox";
import Input from "@/components/dynamic/Input";
import Button from "@/components/dynamic/Button.jsx";
import Textarea from "@/components/dynamic/forms/Textarea.jsx";
import Upload from "@/components/dynamic/forms/Upload";
import toast from "react-hot-toast";
import { useState } from "react";

const Form = ({ object, setObject, header, fields, onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    if (
      Object.entries(fields).some(
        ([key, value]) => value.required && (!object[key] || object[key] === "")
      )
    ) {
      toast("❌ Please complete all required fields!");
      setLoading(false);
      return;
    }
    if (
      fields.requirements &&
      fields.requirements.options.some(
        (requirement) => !object.requirements.includes(requirement)
      )
    ) {
      toast("❌ Please agree to all the terms!");
      setLoading(false);
      return;
    }
    if (fields.availability && object.availability.length === 0) {
      toast("❌ Please select at least one available time!");
      setLoading(false);
      return;
    }

    onSubmit(setLoading);
  };
  return (
    <div className="w-full h-full overflow-scroll flex flex-col items-center font-poppins">
      <div className="w-10/12 md:w-1/2 xl:w-1/3 my-5">
        <p className="text-xl bg-hackathon-green-300 font-semibold px-4 py-2 rounded-t-xl m-0">
          {header}
        </p>
        <div className="rounded-b-xl bg-white p-3">
          <div className="grid grid-cols-1 gap-3">
            {Object.values(fields).map((field, index) => (
              <div key={index}>
                {field.input === "description" &&
                  field.texts.map((description, index) => (
                    <>
                      <p key={index}>{description}</p>
                      {index === field.texts.length - 1 && (
                        <p>
                          Fields with
                          <span className="text-hackathon-green-300"> * </span>
                          are required.
                        </p>
                      )}
                    </>
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
                      {field.required && (
                        <span className="text-hackathon-green-300">*</span>
                      )}
                    </p>
                    {field.options.map((option, i) => (
                      <Checkbox
                        className="w-1/2"
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
                  </>
                )}
                {field.input === "radio" && (
                  <Radio
                    text={field.text}
                    options={field.options}
                    field={field.field}
                    user={object}
                    setUser={setObject}
                    required={field.required}
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
            <div className="flex justify-center">
              <Button
                text="Submit"
                onClick={handleSubmit}
                loading={loading}
                color="green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

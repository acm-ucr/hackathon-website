"use client";
import Select from "@/components/dynamic/Select";
import Radio from "@/components/dynamic/Radio";
import Checkbox from "@/components/dynamic/Checkbox";
import Input from "@/components/dynamic/Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
        (requirement) => !object.requirements[requirement]
      )
    ) {
      toast("❌ Please agree to all the terms!");
      setLoading(false);
      return;
    }
    if (
      fields.availability &&
      !Object.values(object.availability).some((time) => time)
    ) {
      toast("❌ Please select at least one available time!");
      setLoading(false);
      return;
    }

    onSubmit(setLoading);
  };
  return (
    <div className="w-full h-full overflow-scroll flex flex-col items-center font-poppins">
      <div className="w-10/12 md:w-1/3 my-5">
        <p className="text-xl bg-hackathon-green-300 font-semibold px-4 py-2 rounded-t-xl m-0">
          {header}
        </p>
        <div className="rounded-b-xl bg-white p-3">
          <Row className="flex justify-center p-0 m-0 gap-3">
            {Object.values(fields).map((field, index) => (
              <Col key={index} md={field.width}>
                {field.input === "description" &&
                  field.texts.map((description, index) => (
                    <p key={index}>{description}</p>
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
                    options={field.options}
                    field={field.field}
                    placeholder={field.placeholder}
                    user={object}
                    setUser={setObject}
                    required={field.required}
                  />
                )}
                {field.input === "checkboxes" && (
                  <>
                    <p className="mb-1 font-semibold">{field.text}</p>
                    {field.options.map((option, i) => (
                      <Checkbox
                        className="w-1/2"
                        key={i}
                        toggle={
                          object[field.field] && object[field.field][option]
                        }
                        text={option}
                        onClick={() =>
                          setObject({
                            ...object,
                            [field.field]: {
                              ...object[field.field],
                              [option]: object[field.field]
                                ? !object[field.field][option]
                                : true,
                            },
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
              </Col>
            ))}
            <Col xl={12} className="flex justify-center">
              <Button
                text="Submit"
                onClick={handleSubmit}
                loading={loading}
                color="green"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Form;

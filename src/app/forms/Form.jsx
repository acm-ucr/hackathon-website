"use client";
import Select from "@/components/Select";
import Radio from "@/components/Radio";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@/components/Button.jsx";
import Textarea from "@/components/forms/Textarea.jsx";
import toast from "react-hot-toast";

const Form = ({ object, setObject, header, fields }) => {
  const handleSubmit = () => {
    if (Object.values(object).some((value) => value === "" || !value)) {
      toast("❌ Please complete all fields!");
      return;
    }
    if (Object.values(object.requirements).some((check) => !check)) {
      toast("❌ Please agree to all the terms!");
      return;
    }
    if (
      object.availability &&
      !Object.values(object.availability).some((time) => time)
    ) {
      toast("❌ Please select at least one available time!");
      return;
    }
    toast(`✅ Submitted successfully!`);
    console.log(object);
  };
  return (
    <div className="w-full h-full overflow-scroll flex flex-col items-center font-poppins">
      <div className="w-10/12 md:w-1/3 my-5">
        <p className="text-xl bg-hackathon-green-300 font-semibold px-4 py-2 rounded-t-xl m-0">
          {header}
        </p>
        <div className="rounded-b-xl bg-white p-3">
          <Row className="flex justify-center p-0 m-0">
            {fields.map((field, index) => (
              <Col key={index} md={field.width}>
                {field.input === "description" ? (
                  field.texts.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))
                ) : field.input === "input" ? (
                  <Input
                    name={field.name}
                    type={field.type}
                    title={field.title}
                    placeholder={field.placeholder}
                    value={object[field.name]}
                    maxLength={field.maxLength}
                    user={object}
                    setUser={setObject}
                    editable={field.editable}
                  />
                ) : field.input === "select" ? (
                  <Select
                    title={field.title}
                    options={field.options}
                    field={field.field}
                    placeholder={field.placeholder}
                    user={object}
                    setUser={setObject}
                  />
                ) : field.input === "checkboxes" ? (
                  <>
                    <p className="mb-1 mt-3">{field.text}</p>
                    {Object.entries(object[field.field]).map(
                      ([key, value], i) => (
                        <Checkbox
                          className="w-1/2"
                          key={i}
                          toggle={value}
                          text={key}
                          onClick={() =>
                            setObject({
                              ...object,
                              [field.field]: {
                                ...object[field.field],
                                [key]: !value,
                              },
                            })
                          }
                          color="bg-hackathon-green-300"
                        />
                      )
                    )}
                  </>
                ) : field.input === "radio" ? (
                  <Radio
                    text={field.text}
                    options={field.options}
                    field={field.field}
                    user={object}
                    setUser={setObject}
                  />
                ) : field.input === "textarea" ? (
                  <Textarea
                    name={field.name}
                    rows={field.rows}
                    title={field.title}
                    placeholder={field.placeholder}
                    value={object[field.name]}
                    user={object}
                    setUser={setObject}
                  />
                ) : (
                  field.input
                )}
              </Col>
            ))}
            <Col xl={12} className="flex justify-center">
              <Button text="Submit" onClick={handleSubmit} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Form;

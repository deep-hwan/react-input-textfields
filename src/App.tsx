import React, { ChangeEvent, useRef, useState } from "react";
import { ChatField, Input, Option, Select } from "react-input-textfields";

export default function App() {
  const [isValue, setIsValue] = useState("");
  const ref = useRef(null);

  return (
    <div>
      <Input label="이름" important="(필수)">
        <Input.TextField
          placeholder="이름을 입력하세요"
          type="text"
          name="name"
        />
      </Input>

      <Input label="이름" important="(필수)">
        <Input.PhoneNumberField
          placeholder="이름을 입력하세요"
          type="text"
          name="name"
          themes={{ default: { backgroundColor: "#000" } }}
        />
      </Input>

      <Select
        important="*"
        label="성별"
        options={[{ value: "남성" }, { value: "여성" }]}
        renderItem={(item: any) => (
          <Option value={item.value}>{item.value}</Option>
        )}
      />

      <ChatField
        ref={ref}
        placeholder="adasd"
        value={isValue}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setIsValue(e.target.value)
        }
      />

      {isValue}
    </div>
  );
}

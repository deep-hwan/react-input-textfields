/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, useCallback, useState } from "react";

import { useUid } from "../../hooks/useUid";
import { FieldContainer } from "./container/FieldContainer";

const TextField = forwardRef(
  (props: FieldType, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      disabled = false,
      numberType = "int",
      tab,
      value,
      error,
      edge,
      sizes,
      themes,
      ...rest
    } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = props?.id ?? useUid();

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = useCallback(() => setIsFocused(true), [isFocused]);
    const handleBlur = useCallback(() => setIsFocused(false), [isFocused]);

    //
    // numberic
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (props.type === "number") {
        let { value } = event.target;

        if (numberType === "int") {
          const newValue = value.replace(/[^0-9]/g, "");
          if (props.maxLength && newValue.length > props.maxLength)
            event.target.value = newValue.slice(0, props.maxLength);
          else event.target.value = newValue;
        } else if (numberType === "double") {
        }
      }

      props.onChange?.(event);
    };

    return (
      <FieldContainer
        edge={edge}
        tab={tab}
        sizes={sizes}
        themes={themes}
        events={{ error, disabled }}
      >
        <input
          id={id}
          ref={ref}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              if (!value || (typeof value === "string" && value.trim() === ""))
                e.preventDefault();
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          disabled={disabled}
          {...rest}
        />
      </FieldContainer>
    );
  }
);

export { TextField };

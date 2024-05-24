/** @jsxImportSource @emotion/react */
import React, {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useCallback,
  useState,
} from "react";
import { Option } from "./Option";

import { InputContainer } from "./container/InputContainer";
import { FieldContainer } from "./container/FieldContainer";
import { useUid } from "../../hooks/useUid";
import { Absolute } from "../flex/Absolute";

const SelectComponent = forwardRef(
  (props: SelectType, ref: ForwardedRef<HTMLSelectElement>) => {
    const {
      id,
      label,
      labelSize,
      labelColor,
      minWidth,
      maxWidth,
      important,
      options,
      renderItem,
      error,
      tolTip,
      disabled,
      placeholder,
      themes,
      sizes,
      ...rest
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = useCallback(() => setIsFocused(true), [isFocused]);
    const handleBlur = useCallback(() => setIsFocused(false), [isFocused]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const idValue = props?.id ?? useUid();

    return (
      <InputContainer
        id={idValue as string}
        label={label}
        labelColor={labelColor}
        labelSize={labelSize}
        maxWidth={maxWidth}
        minWidth={minWidth}
        error={error as any}
        tolTip={tolTip as any}
      >
        <FieldContainer
          sizes={sizes}
          themes={themes}
          events={{ error, disabled }}
        >
          <select
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            id={idValue}
            disabled={disabled}
            {...rest}
          >
            {!props.value && !!placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {options?.map((item, index) => renderItem(item, index)).flat()}
          </select>

          <Absolute position={{ right: 10 }}>
            <SelectIcon
              size={props?.selectIconSize ?? 11}
              fill={props?.selectIconColor ?? "#ccc"}
            />
          </Absolute>
        </FieldContainer>
      </InputContainer>
    );
  }
);

const Select = SelectComponent as ForwardRefExoticComponent<
  SelectType & RefAttributes<HTMLSelectElement>
> & {
  Option: typeof Option;
};
Select.Option = Option;

export { Select };

const SelectIcon = ({ fill, size }: { fill: string; size: number }) => {
  return (
    <div css={{ display: "flex", alignItems: "center" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.53775 7.85469C5.2579 8.19052 4.7421 8.19052 4.46225 7.85469L0.956773 3.64813C0.576833 3.1922 0.901043 2.5 1.49453 2.5L8.50547 2.5C9.09896 2.5 9.42317 3.1922 9.04323 3.64813L5.53775 7.85469Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

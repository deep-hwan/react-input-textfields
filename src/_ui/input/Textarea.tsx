/** @jsxImportSource @emotion/react */
import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { TxtSpan } from "../typography/TxtSpan";

import { FieldContainer } from "./container/FieldContainer";
import { useUid } from "../../hooks/useUid";
import { TxtTab } from "../tab/TxtTab";
import { Row } from "../flex/Row";
import { Column } from "../flex/Column";

const Textarea = forwardRef(
  (props: EditorType, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const {
      tab,
      rows = 1,
      textCountActive,
      error,
      sizes,
      themes,
      value,
      disabled,
      autoRaise,
      editorScroll,
      ...rest
    } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = props?.id ?? useUid();

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = useCallback(() => setIsFocused(true), [isFocused]);
    const handleBlur = useCallback(() => setIsFocused(false), [isFocused]);

    //
    // rasize
    useEffect(() => {
      const handleRasie = () => {
        if (value && value !== "" && ref && "current" in ref && ref.current) {
          ref.current.style.height = "auto";
          ref.current.style.height = ref.current.scrollHeight + "px";
        } else if (ref && "current" in ref && ref.current) {
          ref.current.style.height = "auto";
        }
      };

      if (autoRaise) handleRasie();
    }, [value, ref, autoRaise]);

    return (
      <Column gap={4} className="editor-ui">
        <FieldContainer
          sizes={{ ...sizes, maxHeight: 100 }}
          themes={themes}
          events={{ error, disabled }}
        >
          <Row height="100%" align="end">
            <textarea
              ref={ref}
              id={id}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={value}
              rows={rows}
              disabled={disabled}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (
                    !value ||
                    (typeof value === "string" && value.trim() === "")
                  )
                    e.preventDefault();
                }
              }}
              css={{
                minHeight: sizes?.minHeight ? sizes?.minHeight : "48px",
                maxHeight: 90,
                fontSize: sizes?.inputSize ?? 15,
                padding: sizes?.padding ?? 13,
                overflow: rows >= 2 ? "auto" : "visible",
                "::-webkit-scrollbar": {
                  display: editorScroll
                    ? "flex"
                    : rows >= 2
                    ? "flex"
                    : "none" ?? "none",
                  width: "4px",
                  height: "4px",
                },
                "::-webkit-scrollbar-track": { backgroundColor: "transparent" },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "#cccccc",
                  borderRadius: "100px",
                },
                "::-webkit-scrollbar-thumb:hover": { background: "#e2e2e2" },
                "::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment":
                  {
                    width: 0,
                    height: 0,
                    backgroundColor: "transparent",
                  },
              }}
              {...rest}
            />

            {!!tab && (
              <Column width="auto" minHeight={48} crossAlign="center">
                <TxtTab
                  onClick={() => tab.onClick && tab.onClick()}
                  css={{
                    fontSize: tab.size ?? 14,
                    color: tab.color ?? "#4788f4",
                    whiteSpace: "nowrap",
                    padding: "8px 10px 8px 2px",
                    position: "sticky",
                  }}
                  disabled={tab.disabled}
                >
                  {tab.name ?? "확인"}
                </TxtTab>
              </Column>
            )}
          </Row>
        </FieldContainer>

        {textCountActive && (
          <TxtSpan color="#aaa" size={(sizes?.edgeSize as any) ?? 12}>
            {typeof props.value === "string" ? props.value.length : 0}
            {"/" + (props.maxLength ?? "전체 길이를 전달해주세요")}
          </TxtSpan>
        )}
      </Column>
    );
  }
);

export { Textarea };

/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, useEffect } from "react";
import { TouchableOpacity } from "../tab/TouchableOpacity";
import { MQ } from "../../themes";
import { css } from "@emotion/react";
import { useUid } from "../../hooks/useUid";
import { Row } from "../flex/Row";

const ChatField = forwardRef(
  (props: ChatFieldType, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { value, disabled, fileTab, uploadTab, themes, rows, ...rest } =
      props;

    const { active: fileTabActive = true } = fileTab ?? {};

    const {
      backgroundColor = "#f8f8f8",
      borderColor = "#eee",
      txtColor = "#555",
      placeholderColor = "#c0c0c0",
    } = themes ?? {};

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = props?.id ?? useUid();

    //
    // rasize
    useEffect(() => {
      const handleRasie = () => {
        if (value !== "" && ref && "current" in ref && ref.current) {
          ref.current.style.height = "auto";
          ref.current.style.height = ref.current.scrollHeight + "px";
        } else if (ref && "current" in ref && ref.current) {
          ref.current.style.height = "auto";
        }
      };

      handleRasie();
    }, [value, ref]);

    const SendTab = () => (
      <TouchableOpacity
        as="button"
        disabled={uploadTab?.disabled}
        padding={{ all: 8 }}
        onClick={() => {
          if (uploadTab?.disabled) return;
          else uploadTab?.onClick?.();
        }}
        css={{
          opacity: !!uploadTab?.disabled ? "0.3 !important" : 1,
          backgroundColor: "transparent",
        }}
      >
        <TabIcon type="전송" iconColor={uploadTab?.iconColor} />
      </TouchableOpacity>
    );

    return (
      <>
        <Row
          height="100%"
          align="end"
          css={{
            border: `1px solid ${borderColor}`,
            backgroundColor,
            borderRadius: 18,
          }}
        >
          <textarea
            ref={ref}
            id={id}
            value={value}
            rows={rows ?? 1}
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
              maxHeight: 120,
              fontSize: 15,
              padding: 13,
              color: txtColor,

              ...(globelThemes as any),
              [MQ[3]]: { fontSize: 14, padding: "11px 13px", maxHeight: 90 },

              "::placeholder": { color: placeholderColor },
            }}
            {...rest}
          />

          <Row
            width="auto"
            align="center"
            minHeight={47}
            css={[
              {
                paddingRight: 4,
                [MQ[3]]: { minHeight: 42 },
              },
              css`
                svg,
                img {
                  width: 23px !important;
                  height: 23px !important;
                }
              `,
            ]}
          >
            {fileTabActive ? (
              <>
                {typeof value === "string" && value.trim() !== "" ? (
                  <SendTab />
                ) : (
                  <TouchableOpacity padding={{ all: 8 }} onClick={() => {}}>
                    <TabIcon type="파일" iconColor={fileTab?.iconColor} />
                    <input
                      type="file"
                      disabled={fileTab?.disabled}
                      accept={
                        fileTab?.accept ?? "image/png, image/jpeg, image/jpg"
                      }
                      css={{
                        width: "100%",
                        height: "100%",
                        zIndex: 3,
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        opacity: 0,
                        cursor: "pointer",
                      }}
                      onChange={(e) => fileTab?.onChange?.(e)}
                    />
                  </TouchableOpacity>
                )}
              </>
            ) : (
              <SendTab />
            )}
          </Row>
        </Row>
      </>
    );
  }
);

export { ChatField };

const globelThemes = {
  width: "100%",
  outline: "none",
  border: "none",
  resize: "none",
  backgroundColor: "transparent",
  WebkitBoxSizing: "border-box",
  MozBoxSizing: "border-box",
  boxSizing: "border-box",
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  backgroundRepeat: "no-repeat",
  overflow: "visible",

  "::-webkit-scrollbar": {
    display: "none",
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
};

const TabIcon = ({
  type,
  iconColor = "#939BAD",
}: {
  type: "파일" | "전송";
  iconColor?: string;
}) => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={{ cursor: "pointer" }}
  >
    {type === "전송" ? (
      <path
        d="M-4.80825e-07 11C-3.85727e-07 13.1756 0.645138 15.3023 1.85383 17.1113C3.06253 18.9202 4.78049 20.3301 6.79048 21.1627C8.80047 21.9952 11.0122 22.2131 13.146 21.7886C15.2798 21.3642 17.2398 20.3165 18.7782 18.7782C20.3166 17.2398 21.3642 15.2798 21.7886 13.146C22.2131 11.0122 21.9952 8.80046 21.1627 6.79048C20.3301 4.78049 18.9202 3.06252 17.1113 1.85383C15.3023 0.645131 13.1756 -6.29797e-06 11 -6.20287e-06C8.08262 -6.07535e-06 5.28472 1.15892 3.22182 3.22182C1.15892 5.28472 -6.08348e-07 8.08261 -4.80825e-07 11ZM11.486 5.92299L15.53 9.15299C15.6167 9.22803 15.6872 9.31993 15.7372 9.42307C15.7872 9.52622 15.8157 9.63847 15.821 9.75299C15.8213 9.86278 15.7994 9.9715 15.7568 10.0727C15.7142 10.1739 15.6517 10.2655 15.573 10.342C15.4227 10.4871 15.2231 10.5702 15.0142 10.5747C14.8053 10.5791 14.6024 10.5046 14.446 10.366L11.811 8.27799L11.811 15.467C11.8061 15.6789 11.7191 15.8806 11.5683 16.0295C11.4175 16.1785 11.2147 16.263 11.0027 16.2652C10.7908 16.2674 10.5863 16.1871 10.4324 16.0414C10.2785 15.8956 10.1873 15.6957 10.178 15.484L10.178 8.253L7.548 10.453C7.39517 10.5864 7.19858 10.659 6.99571 10.6568C6.79284 10.6545 6.59788 10.5777 6.448 10.441C6.29077 10.2995 6.19599 10.1015 6.18437 9.89029C6.17275 9.67909 6.24524 9.47188 6.386 9.314L6.431 9.27L10.386 5.91999C10.5382 5.78673 10.7337 5.71327 10.936 5.71327C11.1383 5.71327 11.3338 5.78673 11.486 5.91999"
        fill={iconColor}
      />
    ) : (
      <>
        <g clip-path="url(#clip0_953_32)">
          <path
            d="M12.4793 15.7414L9.76721 18.4534C8.13618 20.1414 5.44308 20.2931 3.62239 18.8138C2.52239 17.8655 1.95342 16.4241 2.12411 14.9828C2.25687 13.9207 2.74997 12.9345 3.52756 12.1948L6.25859 9.46379C6.65687 9.04655 6.65687 8.38276 6.25859 7.98448C6.06894 7.79483 5.80342 7.68103 5.51894 7.68103C5.23446 7.68103 4.9879 7.79483 4.77928 7.98448L2.10514 10.6586C0.929282 11.8155 0.208593 13.2948 0.0189375 14.8879C-0.303476 18.4534 2.33273 21.6397 5.89825 21.9621C7.83273 22.1517 9.71032 21.45 11.0758 20.0845L13.9207 17.2207C14.1103 17.031 14.2241 16.7655 14.2241 16.481C14.2241 16.1965 14.1103 15.931 13.9207 15.7414C13.5224 15.3431 12.8396 15.3431 12.4414 15.7414H12.4793Z"
            fill={iconColor}
          />
          <path
            d="M20.0844 1.83965C19.8948 1.65 19.6862 1.46034 19.4586 1.28965C16.8034 -0.663794 13.0482 -0.360346 10.7534 2.01034L8.0603 4.70345C7.66203 5.12069 7.66203 5.78448 8.0603 6.18276C8.45858 6.58103 9.14134 6.58103 9.53961 6.18276L12.2706 3.45172C13.162 2.54138 14.3379 2.06724 15.5327 2.06724C16.5 2.06724 17.4862 2.38965 18.3017 3.01552C20.1982 4.57069 20.4637 7.35862 18.9275 9.25517C18.8517 9.36896 18.7379 9.46379 18.6431 9.57759L15.7793 12.4414C15.381 12.8586 15.381 13.5034 15.7793 13.9207C16.1775 14.319 16.8603 14.319 17.2586 13.9207L20.1034 11.0569C22.6448 8.51552 22.6258 4.36207 20.1034 1.83965H20.0844Z"
            fill={iconColor}
          />
          <path
            d="M9.52063 13.9207L13.9396 9.48276C14.3379 9.06552 14.3379 8.40172 13.9396 8.00345C13.5413 7.60517 12.8586 7.60517 12.4603 8.00345L8.04132 12.4414C7.64305 12.8586 7.64305 13.5224 8.04132 13.9207C8.4396 14.319 9.10339 14.319 9.52063 13.9207Z"
            fill={iconColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_953_32">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </>
    )}
  </svg>
);

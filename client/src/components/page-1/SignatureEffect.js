import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingEffect = () => {
  return (
    <>
      <ReactTypingEffect
        text={[" By Adi Bar Halevi"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={
                      i
                        ? {
                            color: "#FF5252",
                            fontFamily: "Dancing Script, cursive",
                            fontSize: "45px",
                          }
                        : {}
                    }
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
};

export default TypingEffect;

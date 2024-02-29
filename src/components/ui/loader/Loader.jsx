import React from "react";

const Loader = ({isLoading }) => {
  return (
    <>
      {isLoading && (
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: 600,
            color: "red",
            marginTop: "50px",
          }}>
          Загрузка
        </div>
      )}
    </>
  );
};
export default Loader;

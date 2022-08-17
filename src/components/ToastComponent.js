import React from "react";
import { Spinner, Toast, ToastBody, ToastHeader, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const ToastComponent = (props) => {
  return (
    <Container>
      <div className="float-right">
        <Toast>
          <ToastHeader icon={<Spinner size="sm">Loading...</Spinner>}>
            <FontAwesomeIcon icon={faCoffee} /> {props.judulParam}
          </ToastHeader>
          <ToastBody>
            This is a toast with a primary icon — check it out!{" "}
          </ToastBody>
        </Toast>
      </div>
    </Container>
  );
};

export default ToastComponent;

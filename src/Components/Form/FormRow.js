import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";

const FormRow = ({ children, classes, title, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={classNames("form-row", classes)}>
      {title != "" ? <h2 className="text-2xl mb-5">{title}</h2> : ""}
      <div className="flex flex-col gap-4">
        {React.Children.map(children, (child) => {
          return child.props?.name ? (
            <div className="flex flex-col w-full">
              {React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: register,
                  key: child.props.name,
                  error: errors?.[child.props.name],
                },
              })}
            </div>
          ) : (
            child
          );
        })}
      </div>
    </div>
  );
};

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
};

FormRow.defaultProps = {
  description: null,
};

export default FormRow;

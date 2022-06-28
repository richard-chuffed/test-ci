import _ from "lodash";
import { PropTypes } from "prop-types";
import { useWatch } from "react-hook-form";

const UseWatch = ({ fieldsToWatch, control, onUpdate }) => {
  const fieldNames = _.keys(fieldsToWatch);
  const watchedFields = useWatch({
    control,
    name: fieldNames,
    defaultValue: fieldsToWatch,
  });

  onUpdate(watchedFields);
};

/* 
  add closure callback to fire on specific events per field
*/

UseWatch.propTypes = {
  fieldsToWatch: PropTypes.object.isRequired,
  control: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
};

export default UseWatch;

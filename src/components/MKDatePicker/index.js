/**
=========================================================
* e_ React - v2.1.0
=========================================================

* Product Page: 
* Copyright 2023 X1-Il (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-flatpickr components
import Flatpickr from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

// e_ React components
import MKInput from "components/MKInput";

function MKDatePicker({ input, ...rest }) {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => (
        <MKInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

// Setting default values for the props of MKDatePicker
MKDatePicker.defaultProps = {
  input: {},
};

// Typechecking props for the MKDatePicker
MKDatePicker.propTypes = {
  input: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
};

export default MKDatePicker;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withState = require('recompose/withState');

var _withState2 = _interopRequireDefault(_withState);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _transformers = require('../transformers');

var _PickerDialog = require('./PickerDialog');

var _PickerDialog2 = _interopRequireDefault(_PickerDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorPicker = function ColorPicker(_ref) {
  var defaultValue = _ref.defaultValue,
      _onChange = _ref.onChange,
      convert = _ref.convert,
      name = _ref.name,
      id = _ref.id,
      hintText = _ref.hintText,
      placeholder = _ref.placeholder,
      floatingLabelText = _ref.floatingLabelText,
      label = _ref.label,
      TextFieldProps = _ref.TextFieldProps,
      showPicker = _ref.showPicker,
      setShowPicker = _ref.setShowPicker,
      value = _ref.value,
      setValue = _ref.setValue;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TextField2.default, _extends({
      style: { marginTop: '16px', width: '100%' },
      name: name,
      id: id,
      value: value,
      label: floatingLabelText || label,
      placeholder: hintText || placeholder,
      onClick: function onClick() {
        return setShowPicker(true);
      },
      onChange: function onChange(e) {
        setValue(e.target.value);
        _onChange(e.target.value);
      },
      InputProps: { style: { color: value } }
    }, TextFieldProps)),
    showPicker && _react2.default.createElement(_PickerDialog2.default, {
      value: value,
      onClick: function onClick() {
        setShowPicker(false);
        _onChange(value);
      },
      onChange: function onChange(c) {
        var newValue = _transformers.converters[convert](c);
        setValue(newValue);
        _onChange(newValue);
      }
    })
  );
};

ColorPicker.propTypes = {
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  convert: _propTypes2.default.oneOf(Object.keys(_transformers.converters))
};

ColorPicker.defaultProps = {
  convert: _transformers.DEFAULT_CONVERTER
};

var makeColorPicker = (0, _compose2.default)((0, _withState2.default)('showPicker', 'setShowPicker', false), (0, _withState2.default)('value', 'setValue', function (_ref2) {
  var defaultValue = _ref2.defaultValue;
  return defaultValue;
}));

exports.default = makeColorPicker(ColorPicker);
module.exports = exports['default'];
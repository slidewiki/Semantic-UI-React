import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { createShorthandFactory, customPropTypes, getUnhandledProps } from '../../lib'

/**
 * A search item sub-component for Dropdown component.
 */
class DropdownSearchInput extends Component {
  static propTypes = {
    /** The ID of the selected item in the listbox */
    ariaActiveDescendant: PropTypes.string,

    /** The ID of the selected item in the listbox */
    ariaLabelledBy: PropTypes.string,

    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An input can have the auto complete. */
    autoComplete: PropTypes.string,

    /** Additional classes. */
    className: PropTypes.string,

    /** A ref handler for input. */
    inputRef: PropTypes.func,

    /** An input can receive focus. */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** The HTML input type. */
    type: PropTypes.string,

    /** Stored value. */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }

  static defaultProps = {
    autoComplete: 'off',
    type: 'text',
  }

  handleChange = (e) => {
    const value = _.get(e, 'target.value')

    _.invoke(this.props, 'onChange', e, { ...this.props, value })
  }

  handleRef = c => _.invoke(this.props, 'inputRef', c)

  render() {
    const {
      autoComplete,
      className,
      tabIndex,
      type,
      value,
      ariaActiveDescendant,
      ariaLabelledBy,
    } = this.props
    const classes = cx('search', className)
    const rest = getUnhandledProps(DropdownSearchInput, this.props)

    return (
      // eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex
      <input
        {...rest}
        aria-activedescendant={ariaActiveDescendant}
        aria-autocomplete='list'
        aria-labelledby={ariaLabelledBy}
        autoComplete={autoComplete}
        className={classes}
        onChange={this.handleChange}
        ref={this.handleRef}
        tabIndex={tabIndex}
        type={type}
        value={value}
      />
    )
  }
}

DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, type => ({ type }))

export default DropdownSearchInput

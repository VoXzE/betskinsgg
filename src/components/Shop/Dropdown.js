import React, { Component } from 'react'
import Dropdown, {
  MenuItem,
} from '@trendmicro/react-dropdown';

const styles = {
  button: {
    background: "transparent",
    border: "none",
    color: "#6D7D90",
    border: "2px solid #6D7D90",
    borderRadius: "12px",
    padding: "8px 15px",
    fontWeight: 800,
  }
}

export default class DropDown extends Component {
  render() {
    return (
      <Dropdown
        onSelect={(eventKey) => {}}>
        <Dropdown.Toggle btnStyle="flat" style={styles.button}>
          Price Descending
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <MenuItem eventKey={1}>link</MenuItem>
            <MenuItem eventKey={1}>link</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

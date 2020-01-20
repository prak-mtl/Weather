import React, { Component } from "react";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: [],
      color: "",
      category: "",
      type: "",
      hex: ""
    };
  }

  fileChangedHandler = event => {
    const { selectedFile } = this.state;
    let reader = new FileReader();
    reader.onloadend = () => {
      if (selectedFile.length !== 0) {
        var newList = selectedFile.concat(JSON.parse(reader.result));
        this.setState({
          selectedFile: newList
        });
      } else {
        this.setState({
          selectedFile: JSON.parse(reader.result)
        });
      }
    };
    reader.readAsText(event.target.files[0]);
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAdd = () => {
    const { selectedFile } = this.state;
    var newColor = {
      color: this.state.color,
      category: this.state.category,
      type: this.state.type,
      code: { hex: this.state.hex }
    };
    var newListItem = [];
    newListItem.push(newColor);
    var newList = selectedFile.concat(newListItem);
    this.setState({
      selectedFile: newList,
      color: "",
      category: "",
      type: "",
      hex: ""
    });
  };

  handleDownload = () => {
    const { selectedFile } = this.state;
    let filename = "export.json";
    let contentType = "application/json;charset=utf-8;";

    var a = document.createElement("a");
    a.download = filename;
    a.href =
      "data:" +
      contentType +
      "," +
      encodeURIComponent(JSON.stringify(selectedFile));
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  render() {
    const { selectedFile } = this.state;
    return (
      <>
        <div style={{ margin: "50px" }}>
          <input type="file" name="colors" onChange={this.fileChangedHandler} />
          <table>
            <tr>
              <th>Color name</th>
              <th>Category</th>
              <th>Type</th>
              <th>HexCode</th>
            </tr>
            {selectedFile &&
              selectedFile.map(item => (
                <tr>
                  <td>{item.color}</td>
                  <td>{item.category}</td>
                  <td>{item.type}</td>
                  <td>{item.code.hex}</td>
                </tr>
              ))}
            <tr>
              <td>
                <input
                  type="text"
                  name="color"
                  value={this.state.color}
                  onChange={this.handleInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="category"
                  value={this.state.category}
                  onChange={this.handleInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="hex"
                  value={this.state.hex}
                  onChange={this.handleInput}
                />
              </td>
            </tr>
          </table>

          <div className="d-flex jc-bet">
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={this.handleDownload}>Download</button>
          </div>
        </div>
      </>
    );
  }
}

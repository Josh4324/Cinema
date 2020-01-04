import React, { Component } from 'react';

class Add extends Component {
    componentDidMount(){
        Array.prototype.forEach.call(
            document.querySelectorAll(".file-upload__button"),
            function(button) {
              const hiddenInput = button.parentElement.querySelector(
                ".file-upload__input"
              );
              const label = button.parentElement.querySelector(".file-upload__label");
              const defaultLabelText = "No file(s) selected";
          
              // Set default text for label
              label.textContent = defaultLabelText;
              label.title = defaultLabelText;
          
              button.addEventListener("click", function() {
                hiddenInput.click();
              });
          
              hiddenInput.addEventListener("change", function() {
                const filenameList = Array.prototype.map.call(hiddenInput.files, function(
                  file
                ) {
                  return file.name;
                });
          
                label.textContent = filenameList.join(", ") || defaultLabelText;
                label.title = label.textContent;
              });
            }
          );
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="form-box">
                <h3 className="form-h3">Profile</h3>
                <form className="form">
                    <div className="form-block">
                    <label htmlFor="CinemaName">Full Name</label>
                    <input type="text" name="fullname" placeholder="Full Name" id="fullname" />
                    </div>
                    <div className="form-block">
                    <label htmlFor="FilmTitle">username</label>
                    <input type="text" name="username" placeholder="Username" id="username"/>
                    </div>

                    <div className="form-block">
                    <div class="file-upload">
                    <input class="file-upload__input" type="file" name="myFile[]" id="myFile" />
                    <button class="file-upload__button" type="button">Upload Proflie Picture</button>
                    <span class="file-upload__label"></span>
                    <progress value={this.props.progress} max="100">{this.props.progress}</progress>
                    </div>
                    </div>
                    <div className="form-block">
                        <button onClick={(evt) => this.props.addDate(evt, this.props.history)} className="button1 button">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default Add;
import React, { Component } from 'react';

class Add1 extends Component {

    

    componentDidMount() {
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
        const role = this.props.role
        return (
            <div>

              { role === "Seller" ? 
                <div className="form-box">
            
                <form className="form">

                <div className="form-block"> 

                    <div class="file-upload">
                        <input class="file-upload__input" type="file" name="myFile[]" id="myFile" accept="video/*" />
                        <button class="file-upload__button" type="button">Upload Video</button>
                        <span class="file-upload__label"></span>
                        <progress className="progress" value={this.props.progress} max="100">{this.props.progress}</progress>
                    </div>

                </div>
                    
                    <div className="form-block">
                    <label htmlFor="caption">Caption</label>
                    <input type="text" name="caption" placeholder="Write a caption" id="caption"/>
                    </div>
                    <div className="form-block">
                    <label htmlFor="title">Film Title</label>
                    <input type='text' name="title" placeholder="Film Title" id="title" />
                    </div>
                    <div className="form-block">
                    <label htmlFor="amount">Amount</label>
                    <input type='text' name="amount" placeholder="Amount" id="amount" />
                    </div>
                    <div className="form-block">
                    <label htmlFor="view">Viewing Time</label>
                    <input type='datetime-local' name="view" placeholder="Viewing Time" id="view" />
                    </div>
                    <div className="form-block">
                        <button onClick={(evt) => this.props.addDate1(evt, this.props.history)} className="button1 button">Submit</button>
                    </div>
                </form>


                </div>

                  :

                <div className="form-box">
            
                <form className="form">

                <div className="form-block"> 

                    <div class="file-upload">
                        <input class="file-upload__input" type="file" name="myFile[]" id="myFile" accept="video/*" />
                        <button class="file-upload__button" type="button">Upload Video</button>
                        <span class="file-upload__label"></span>
                        <progress className="progress" value={this.props.progress} max="100">{this.props.progress}</progress>
                    </div>

                </div>
                    
                    <div className="form-block">
                    <label htmlFor="caption">Caption</label>
                    <input type="text" name="caption" placeholder="Write a caption" id="caption"/>
                    </div>
                    
                    <div className="form-block">
                        <button onClick={(evt) => this.props.addDate1(evt, this.props.history)} className="button1 button">Submit</button>
                    </div>
                </form>


                </div>






              }


            </div>
        );
    }
}

export default Add1;

//
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, HashRouter, Switch, Link, Redirect} from 'react-router-dom';

// import './src/bower_components/css/bulma.css';
// import './src/bower_components/sass/components/_all.sass'

import './style.css';
//array of object literals
var JEANS = [
    {
      SKU: 1234,
      title: "SAINT VERNON",
      fit: "TAPER FIT",
      color: "blue",
      sizes: [ 28, 30, 32 ],
      image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/rustic-dime-saint-vernon-taper-fit-1_1024x1024-1_1024x1024.jpg?v=1492608261%22", "https://cdn.shopify.com/s/files/1/0452/6221/products/rustic-dime-saint-vernon-taper-fit-2_1024x1024.jpg?v=1492608262"],
      description: "Our Saint Vernon Taper Fit denim features distressed and tattered details. Each pair is hand cut and sanded for a unique look. 100% cotton bleached american denim. Made in Los Angeles.",
      price: "30.00",
      id: 1
    },
    {
      SKU: 4321,
      title: "VINO SHREDDED",
      fit: "BIKER DENIM",
      color: "red",
      sizes: [ 28, 30, 32 ],
      image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/105black_1024x1024.jpg?v=1492608011", "https://cdn.shopify.com/s/files/1/0452/6221/products/105black_b_1024x1024.jpg?v=1492608012","https://cdn.shopify.com/s/files/1/0452/6221/products/105black_c_1024x1024.jpg?v=1492608013"],
      description: "Our new Biker Denim features quality denim with a special knee design and hand shredding, and distressed details that are unique to each piece. 98% Cotton / 2% Spandex. Made in Los Angeles, CA.",
      price: "30.00",
      id: 2
    },
    {
      SKU: 1324,
      title: "what a blast",
      fit: "TAPER FIT",
      color: "black",
      sizes: [ 30, 32, 34 ],
      image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/rustic-dime-shredded-biker-4_1024x1024.jpg?v=1492608318"],
      description: "Get a stylish street look loaded with comfort with the new Biker Black Shredded jeans from Rustic Dime. A stylish tapered fit will have you looking your best in the black colorway that features custom knee panels and hand cut tears on the front for a shredded look and a cotton-spandex construction for a comfortable fit with plenty of stretch.",
      price: "30.00",
      id: 3
    },
    {
      SKU: 1234,
      title: "SAINT VERNON",
      fit: "TAPER FIT",
      color: "blue",
      sizes: [ 28, 30, 32 ],
      image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/rustic-dime-saint-vernon-taper-fit-1_1024x1024-1_1024x1024.jpg?v=1492608261%22", "https://cdn.shopify.com/s/files/1/0452/6221/products/rustic-dime-saint-vernon-taper-fit-2_1024x1024.jpg?v=1492608262"],
      description: "Our Saint Vernon Taper Fit denim features distressed and tattered details. Each pair is hand cut and sanded for a unique look. 100% cotton bleached american denim. Made in Los Angeles.",
      price: "30.00",
      id: 4
    },
    {
      SKU: 4321,
      title: "VINO SHREDDED",
      fit: "BIKER DENIM",
      color: "red",
      sizes: [ 28, 30, 32 ],
      image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/105black_1024x1024.jpg?v=1492608011", "https://cdn.shopify.com/s/files/1/0452/6221/products/105black_b_1024x1024.jpg?v=1492608012","https://cdn.shopify.com/s/files/1/0452/6221/products/105black_c_1024x1024.jpg?v=1492608013"],
      description: "Our new Biker Denim features quality denim with a special knee design and hand shredding, and distressed details that are unique to each piece. 98% Cotton / 2% Spandex. Made in Los Angeles, CA.",
      price: "30.00",
      id: 5
    },
    {
      SKU: 1234,
      title: "SAINT VERNON",
      fit: "TAPER FIT",
      color: "blue",
      sizes: [ 28, 30, 32 ],
      image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/rustic-dime-saint-vernon-taper-fit-1_1024x1024-1_1024x1024.jpg?v=1492608261%22", "https://cdn.shopify.com/s/files/1/0452/6221/products/rustic-dime-saint-vernon-taper-fit-2_1024x1024.jpg?v=1492608262"],
      description: "Our Saint Vernon Taper Fit denim features distressed and tattered details. Each pair is hand cut and sanded for a unique look. 100% cotton bleached american denim. Made in Los Angeles.",
      price: "30.00",
      id: 6
    },
    {
      SKU: 4321,
      title: "VINO SHREDDED",
      fit: "BIKER DENIM",
      color: "red",
      sizes: [ 28, 30, 32 ],
      image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/105black_1024x1024.jpg?v=1492608011", "https://cdn.shopify.com/s/files/1/0452/6221/products/105black_b_1024x1024.jpg?v=1492608012","https://cdn.shopify.com/s/files/1/0452/6221/products/105black_c_1024x1024.jpg?v=1492608013"],
      description: "Our new Biker Denim features quality denim with a special knee design and hand shredding, and distressed details that are unique to each piece. 98% Cotton / 2% Spandex. Made in Los Angeles, CA.",
      price: "30.00",
      id: 7
    },
    {
      SKU: 1234,
      title: "SAINT VERNON",
      fit: "TAPER FIT",
      color: "blue",
      sizes: [ 28, 30, 32 ],
      image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/rustic-dime-saint-vernon-taper-fit-1_1024x1024-1_1024x1024.jpg?v=1492608261%22", "https://cdn.shopify.com/s/files/1/0452/6221/products/rustic-dime-saint-vernon-taper-fit-2_1024x1024.jpg?v=1492608262"],
      description: "Our Saint Vernon Taper Fit denim features distressed and tattered details. Each pair is hand cut and sanded for a unique look. 100% cotton bleached american denim. Made in Los Angeles.",
      price: "30.00",
      id: 8
    },
    {
      SKU: 4321,
      title: "VINO SHREDDED",
      fit: "BIKER DENIM",
      color: "red",
      sizes: [ 28, 30, 32 ],
      image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/105black_1024x1024.jpg?v=1492608011", "https://cdn.shopify.com/s/files/1/0452/6221/products/105black_b_1024x1024.jpg?v=1492608012","https://cdn.shopify.com/s/files/1/0452/6221/products/105black_c_1024x1024.jpg?v=1492608013"],
      description: "Our new Biker Denim features quality denim with a special knee design and hand shredding, and distressed details that are unique to each piece. 98% Cotton / 2% Spandex. Made in Los Angeles, CA.",
      price: "30.00",
      id: 9
    }
];

var USERS = [
  {
    userName: "user1",
    passord: "password"
  }
]

var ADMINS = [
  {
    userName: "admin",
    password: "admin"
  }
]

// var JEANS = [
//
// ]


/**********************ImageFrame Comoponent*************************************/

function ProductFrame1(props) {
  return (
    <div className={"column is-" + props.imageWidth + ""}>
          <div className="card-image">
            <figure className="image is-2by3">
                <img src={props.image}
                     onMouseOver={props.onFlipImage}
                     onMouseOut={props.onToDefault}
                     onDragOver={function(event) {props.borderHover(event, "inset 0 1px 1px rgba(0,0,0, 0.5), 0 0 50px rgb(113,253,38)", event.target.id); event.preventDefault();}}
                     onDragLeave={function(event) {props.borderHover(event, "none");}}
                     onDrop={function(event) {props.dropZone(event); props.borderHover(event, "none");}}
                     onDragStart={function(event) {event.dataTransfer.setData("text", event.target.id); props.borderHover(event);}}
                     onClick={props.imageClick}
                     draggable="true"
                     id={props.index}/>
            </figure>
          </div>
          {props.admin ? <a className="round-button red" onClick={function() {console.log(props.index); props.deleteItem(props.index)}}><i className="fa fa-close"></i></a> : null}
        <div>
          <h1>{props.title}</h1>
          <h1>id: {props.id} index: {props.index}</h1>
        </div>
    </div>
  );
}
function ProductFrame2(props) {
  return (
    <div className={"column is-" + props.imageWidth + ""}>
          <div className="card-image">
            <figure className="image is-2by3">
                <img src={props.image}
                     onMouseOver={props.onFlipImage}
                     onMouseOut={props.onToDefault}
                     onDragOver={function(event) {props.borderHover(event, "inset 0 1px 1px rgba(0,0,0, 0.5), 0 0 50px rgb(113,253,38)", event.target.id); event.preventDefault();}}
                     onDragLeave={function(event) {props.borderHover(event, "none");}}
                     onDrop={function(event) {props.dropZone(event); props.borderHover(event, "none");}}
                     onDragStart={function(event) {event.dataTransfer.setData("text", event.target.id); props.borderHover(event);}}
                     onClick={props.imageClick}
                     draggable="true"
                     id={props.index}/>
            </figure>
          </div>
          {props.admin ? <a className="round-button red" onClick={function() {props.deleteItem(props.index);}}><i className="fa fa-close"></i></a> : null}
        <div>
          <h1>{props.title}</h1>
          <h1>id: {props.id} index: {props.index}</h1>
        </div>
    </div>
  );
}

var AddProductModal = React.createClass({
    getInitialState: function() {
      return {
        showIcon: "hidden",
        data: {},
        image: [],
        fileUpload: {
          button: "Choose a file..."
        },
      }
    },
    onFileUpload: function(id) {
      // document.getElementById('file').addEventListener('change', readURL, true);
      // console.log(document.getElementById(id));
      console.log(id)
      if(document.getElementById(id).id === "urlUpload") {
        var image = new Image();
        image.src = document.getElementById(id).value;
        this.state.image.push(document.getElementById(id).value)
        document.getElementById(id).value = '';
        image.onload = function() {
          document.getElementById('fileImage').appendChild(image);
        }

      } else if(document.getElementById(id).id === "file"){
        var files = document.getElementById(id).files;
        console.log(files);
        // loop through files
        var parent = this;
        for (var i = 0; i < files.length; i++) {
          (function(file, parent){
            var reader = new FileReader();
            reader.onloadend = function(){
              var image = new Image();
              image.src = reader.result;

              parent.state.image.push(reader.result)
              image.onload = function() {
                document.getElementById('fileImage').appendChild(image);
              }
            }
              if(file){
                  reader.readAsDataURL(file);
              }
          })(files[i], parent)
        }
      } else {
        console.error("something went terribly wrong")
      }

    },
    getInputData: function(callback) {
      var sizeValues = [];
      this.state.data.sku = document.getElementById("sku").value;
      this.state.data.title = document.getElementById("title").value;
      this.state.data.fit = document.getElementById("fit").value;
      this.state.data.color = "";
      this.state.data.size = "";
      this.state.data.image = this.state.image;

      for(var i = 0; i < document.getElementsByName("color").length; i++) {
        if(document.getElementsByName("color")[i].checked) {
          this.state.data.color = document.getElementsByName("color")[i].value;
        }
      }
      for(var i = 0; i < document.getElementsByClassName("checkbox").length; i++) {
        if(document.getElementsByClassName("checkbox")[i].checked) {
          sizeValues.push(document.getElementsByClassName("checkbox")[i].value)
          this.state.data.size = sizeValues;
        }
      }

      if(this.state.data.sku && this.state.data.title && this.state.data.fit && this.state.data.color && this.state.data.size && this.state.data.image) {
        this.props.addItem(this.state.data);
        callback("is-inactive")
      } else {
        var inputs = document.getElementsByTagName('input');
          for(var i=0; i<inputs.length; i++){
            var type = inputs[i].getAttribute("type");
            if(type === "text") {
              if(i <= 3) {
                if(inputs[i].value == '') {
                  inputs[i].parentNode.childNodes[0].childNodes[3].setAttribute("class", "visible")
                } else {
                  inputs[i].parentNode.childNodes[0].childNodes[3].setAttribute("class", "hidden")
                }
              }
            }

          }

            var loopRadio = function(j) {
              if(j < document.getElementsByName("color").length) {
                if(document.getElementsByName("color")[j].checked != true) {
                  loopRadio(j+1);
                } else {
                  document.getElementById("color").setAttribute("class", "hidden");
                }
              } else {
                  document.getElementById("color").setAttribute("class", "visible");
              }
            }
            loopRadio(0);

            var loopCheckB = function(j) {
              if(j < document.getElementsByClassName("checkbox").length){
                if(document.getElementsByClassName("checkbox")[j].checked != true) {
                  loopCheckB(j+1);
                } else {
                  document.getElementById("size").setAttribute("class", "hidden");
                }
              } else {
                  document.getElementById("size").setAttribute("class", "visible");
              }
            }
            loopCheckB(0);

          if(document.getElementById('fileImage').childNodes[0] === undefined) {
            document.getElementById("image").setAttribute("class", "visible");
          } else {
            document.getElementById("image").setAttribute("class", "hidden");
          }

          var toggleDialog = function(i) {
            if(i<document.getElementsByClassName('fa-asterisk').length - 1) {
              var redAsterik = document.getElementsByClassName('fa-asterisk')[i];
              var currentClass = redAsterik.parentNode.getAttribute("class");
              if(currentClass === "visible") {
                document.getElementById("reqDialog").setAttribute("class", "visible Red")
              } else {
                toggleDialog(i+1)
              }
            } else {
              document.getElementById("reqDialog").setAttribute("class", "hidden")
            }
          }
          toggleDialog(0)
      }
    },
    render: function() {
      return (
        <div className={"modal" + " " + this.props.toggle + " "}>
          <div className="modal-background"></div>
          <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Add Item</p>
                <button className="delete" aria-label="close" onClick={function() {this.props.onModalToggle("is-inactive")}.bind(this)}></button>
              </header>
              <section className="modal-card-body">
                <div className="field">
                  <div className="control">
                    <label className="label has-text-left">SKU<span className="hidden"><i className="fa fa-asterisk Red"></i></span></label>
                    <input id="sku" className="input" type="text" />
                  </div>
                  <div className="control">
                    <label className="label has-text-left">Title<span className="hidden"><i className="fa fa-asterisk Red"></i></span></label>
                    <input id="title" className="input" type="text" />
                  </div>
                  <div className="control">
                    <label className="label has-text-left">Fit<span className="hidden"><i className="fa fa-asterisk Red"></i></span></label>
                    <input id="fit" className="input" type="text" />
                  </div>

                  <div className="jar">
                    <label className="label has-text-left">Color<span id="color" className="hidden"><i className="fa fa-asterisk Red"></i></span></label>

                      <div className="field is-grouped">
                      <div>
                        <span className="color-box black"></span>
                      </div>
                        <div className="control">
                          <label className="label has-text-left normal">Black</label>
                          <input type="radio" name="color" value="black" />
                        </div>
                        <div>
                          <span className="color-box white"></span>
                        </div>
                        <div className="control">
                          <label className="label has-text-left normal">White</label>
                          <input type="radio" name="color" value="white" />
                        </div>
                        <div>
                          <span className="color-box blue"></span>
                        </div>
                        <div className="control">
                          <label className="label has-text-left normal">Blue</label>
                          <input type="radio" name="color" value="blue" />
                        </div>
                        <div>
                          <span className="color-box grey"></span>
                        </div>
                        <div className="control">
                          <label className="label has-text-left normal">Grey</label>
                          <input type="radio" name="color" value="grey" />
                        </div>
                        <div>
                          <span className="color-box green"></span>
                        </div>
                        <div className="control">
                          <label className="label has-text-left normal">Green</label>
                          <input type="radio" name="color" value="green" />
                        </div>
                        <div>
                          <span className="color-box red"></span>
                        </div>
                        <div className="control">
                          <label className="label has-text-left normal">Red</label>
                          <input type="radio" name="color" value="red" />
                        </div>
                        <div>
                          <span className="color-box tan"></span>
                        </div>
                        <div className="control">
                          <label className="label has-text-left normal">Tan</label>
                          <input type="radio" name="color" value="tan" />
                        </div>
                        <span>
                        <i className="fa fa-question-circle-o"></i>
                        </span>
                        <div className="control">
                          <label className="label has-text-left normal">Other</label>
                          <input className="input is-small" size="25" name="color" size="5" type="text" />
                        </div>
                      </div>
                  </div>

                  <div className="jar">
                    <label className="label has-text-left">Size(s)<span id="size" className="hidden"><i className="fa fa-asterisk Red"></i></span></label>
                    <div className="field is-grouped">
                      <div className="control">
                        <label className="label has-text-left normal">28</label>
                        <input className="checkbox" type="checkbox" value="28"/>
                      </div>
                      <div className="control">
                        <label className="label has-text-left normal">30</label>
                        <input className="checkbox" type="checkbox" value="30"/>
                      </div>
                      <div className="control">
                        <label className="label has-text-left normal">32</label>
                        <input className="checkbox" type="checkbox" value="32"/>
                      </div>
                      <div className="control">
                        <label className="label has-text-left normal">34</label>
                        <input className="checkbox" type="checkbox" value="34"/>
                      </div>
                      <div className="control">
                        <label className="label has-text-left normal">36</label>
                        <input className="checkbox" type="checkbox" value="36"/>
                      </div>
                      <div className="control">
                        <label className="label has-text-left normal">38</label>
                        <input className="checkbox" type="checkbox" value="38"/>
                      </div>
                    </div>
                  </div>

                  <div className="jar">
                    <label className="label has-text-left">Image(s)<span id="image" className="hidden"><i className="fa fa-asterisk Red"></i></span></label>

                    <div className="level">
                      <div className="field is-grouped">
                        <div className="control level-item">
                          <input type="file" name="file" id="file" className="inputfile" data-multiple-caption="{count} files selected" multiple onChange={function(event) {this.onFileUpload(event.target.id)}.bind(this)}/>
                          <label htmlFor="file"><span><i className="fa fa-upload"></i></span>{this.state.fileUpload.button}</label>
                        </div>
                        <div className="level-item">
                          <h1> -OR- </h1>
                        </div>
                        <div className="field has-addons level-item">
                          <label className="spacer"><strong>URL:</strong></label>
                          <div className="control">
                            <input className="input" type="text" id="urlUpload" placeholder="ex. https://vignette4.wikia.nocookie.net/muppet/images/1/10/Episode109_%2816%29.jpg/revision/latest?cb=20151201215848"  />
                          </div>
                          <span className="control"><a className="button is-info" htmlFor="urlUpload" onClick={function() {this.onFileUpload("urlUpload")}.bind(this)}>GO</a></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="fileImage"></div>

                  <div className="jar">
                    <label className="label has-text-left">Description</label>
                    <textarea id="textarea" className="textarea"></textarea>
                  </div>
                </div>


              </section>
              <footer className="modal-card-foot">
                <button className="button"
                  onClick={function() {this.getInputData(this.props.onModalToggle);}.bind(this)}>Add</button>
                <button className="button" onClick={function() {this.props.onModalToggle("is-inactive")}.bind(this)}>Cancel</button>
                <p id="reqDialog" className="hidden"> Required fields are marked by an asterik *</p>
              </footer>
          </div>
        </div>
      );
    }
})
function EntryModal(props) {
  return(
    <div className="modal is-active">
      <div className="modal-background"></div>
      {props.loginModal ?
        <LoginCard toggleModal={props.toggleModal} toggleOff={props.toggleOff} self={props.self} handleSubmit={props.handleSubmit}/> :
        <RegisterCard toggleModal={props.toggleModal} toggleOn={props.toggleOn} self={props.self} handleSubmit={props.handleSubmit}/>}
    </div>
  );
}

function LoginCard(props) {
  return(
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Log In</p>
      <button className="delete" aria-label="close" onClick={props.toggleModal}></button>
    </header>
    <form onSubmit={props.handleSubmit}>
    <section className="modal-card-body">

      <label className="label">Username</label>
      <p className="control">
        <input className="input" type="text" placeholder="jsmith" ref={function(input) {props.self.userName = input}} />
      </p>
      <label className="label">Password</label>
      <p className="control">
        <input className="input" type="password" placeholder="●●●●●●●" ref={function(input) {props.self.password = input}}/>
      </p>

    </section>

    <footer className="modal-card-foot">
      <button className="button is-success">Log In</button>
      <button className="button is-default">Cancel</button>

      <a onClick={props.toggleOff}>Register</a>
    </footer>
    </form>
  </div>
  )
}

function RegisterCard(props) {
  return(
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Register</p>
        <button className="delete" aria-label="close" onClick={props.toggleModal}></button>
      </header>
      <form onSubmit={props.handleSubmit}>
      <section className="modal-card-body">
        <label className="label">Name</label>
        <p className="control">
          <input className="input" type="text" placeholder="John Smith" ref={function(input) {props.self.name = input}}/>
        </p>
        <label className="label">Username</label>
        <p className="control">
          <input className="input" type="text" placeholder="jsmith" ref={function(input) {props.self.userName = input}}/>
        </p>
        <label className="label">Email</label>
        <p className="control">
          <input className="input" type="text" placeholder="jsmith@example.org" ref={function(input) {props.self.email = input}}/>
        </p>
        <hr/>
        <label className="label">Password</label>
        <p className="control">
          <input className="input" type="password" placeholder="●●●●●●●" ref={function(input) {props.self.password = input}}/>
        </p>
        <label className="label">Confirm Password</label>
        <p className="control">
          <input className="input" type="password" placeholder="●●●●●●●" ref={function(input) {props.self.confirmPassword = input}}/>
        </p>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Register</button>
        <button className="button is-default">Cancel</button>
        <a onClick={props.toggleOn}>Log In</a>
      </footer>
      </form>
    </div>
  )
}

var Navbar = React.createClass({
  getInitialState: function() {
    return {
      factor: false,
      loginModal: true,
      loggedIn: false
    }
  },
  toggleModal: function() {
      this.setState({
        factor: false
      })
  },
  onToggleCard: function() {
    this.setState({
      loginModal: true
    })
  },
  offToggleCard: function() {
    this.setState({
      loginModal: false
    })
  },
  handleSubmit: function(event) {
    event.preventDefault();
    console.log(this.userName.value);
    console.log(this.password.value);
    for(var prop in this.props.users) {
      if(this.props.users.hasOwnProperty(prop)) {
        var key = this.props.users[prop];
        for(var value in key) {
          if(key.hasOwnProperty(value)){
            if(this.password.value === key[value]) {
              var password = true;
            }
             if(this.userName.value === key[value]) {
              var userName = true;
            }
          }
        }
      }
    }

    for(var prop in this.props.admins) {
      if(this.props.admins.hasOwnProperty(prop)) {
        var key = this.props.admins[prop];
        for(var value in key) {
          if(key.hasOwnProperty(value)){

            if(this.password.value === key[value]) {
              console.log("made it here password")
              var adminPassword = true;
            }
             if(this.userName.value === key[value]) {
              console.log("usernaem")
              var adminUser = true;
            }
          }
        }
      }
    }

    if(password && userName) {
      this.setState({
        factor: false
      })
      this.props.getAuth({auth: true})
    }
     if(adminUser && adminPassword) {
       this.setState({
         factor: false
       })
      this.props.getAuth({auth: true, admin: true})
    }
  },
  render: function() {
    return (
        <nav className="navbar ">

        <div className="navbar-brand">

          <div className="navbar-item">
            <span style={{cursor: "pointer"}} onClick={this.props.openNav}>&#9776;</span>
          </div>
          <a className="navbar-item" href="#">
            <img src="src/images/mascot.png" alt="mascot" style={{boxShadow: "none"}}/>
          </a>

          <div className="navbar-burger burger" data-target="navMenuDocumentation">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {this.state.factor ? <EntryModal toggleModal={this.toggleModal} loginModal={this.state.loginModal} toggleOff={this.offToggleCard} toggleOn={this.onToggleCard} self={this} handleSubmit={this.handleSubmit}/> : null}
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <div className="control">
                {this.props.loggedIn ?
                  <Link to="/account" className="button is-black" >
                    <span className="icon">
                      <i className="fa fa-cog"></i>
                    </span>
                    <span>
                      Account
                    </span>
                  </Link>
                  :
                <a className="button" onClick={function() {this.setState({ factor: true })}.bind(this)}>
                  <span className="icon">
                    <i className="fa fa-sign-in"></i>
                  </span>
                  <span>
                    Log In
                  </span>
                </a>}

                </div>
              </div>
            </div>
            <div className="navbar-item">
              <span></span>
            </div>
          </div>
        </div>
      </nav>

    );
  }
})


var BoxDash = React.createClass({
  getInitialState: function() {
    return {
      factor: "is-inactive"
    }
  },
  modalToggle: function(factor) {
    if(Object.prototype.toString.call(factor) === "[object String]") {
      this.setState({
        factor: factor
      })
    } else {
      console.warn("modalToggle requires the passed parameter to be of type string")
    }
  },
  render: function() {
    if(this.props.factor) {
      return (
        <div className="columns is-vcentered">
          <div id="widt" className={"column is-" + this.props.imageWidth + " has-text-centered"}>
              <div id="box-dash">
                <div id="Cheight"><i className="fa fa-plus-circle fa-5x" onClick={function() {this.modalToggle("is-active")}.bind(this)}></i></div>
                {this.state.factor === "is-active" ?
                <AddProductModal
                  toggle={this.state.factor}
                  onModalToggle={function(f) {this.modalToggle(f)}.bind(this)}
                  addItem={this.props.addItem}
                  /> : null}
              </div>
              <div id="lift"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="widt" className={"column is-" + this.props.imageWidth + " has-text-centered"}>
          <div id="box-dash">
            <div id="Cheight"><i className="fa fa-plus-circle fa-5x" onClick={function() {this.modalToggle("is-active")}.bind(this)}></i></div>
            {this.state.factor === "is-active" ?
            <AddProductModal
              toggle={this.state.factor}
              onModalToggle={function(f) {this.modalToggle(f)}.bind(this)}
              addItem={this.props.addItem}
              /> : null}
          </div>
          <div id="lift"></div>
        </div>
      )
    }
  }
})

function ManageColumns(props) {
  return (
  <div className="jar">
    <div className="has-text-right">
      <button className="button red is-medium is-rounded" onClick={function() {props.onColumnManagement(-1)}}><span className="icon"><i className="fa fa-minus fa-1x"></i></span></button>
      <button className="button theme-green is-medium is-rounded" onClick={function() {props.onColumnManagement(1)}}><span className="icon"><i className="fa fa-plus fa-1x"></i></span></button>
    </div>
  </div>
  );
}

var DisplayImage = React.createClass({
  flipImage: function() {
    var loopImage = function(i) {
      if(i < this.props.image.length) {
        this.Timeout = setTimeout(function() {
          this.setState({image: this.props.image[i]})
          loopImage(i + 1);
        }.bind(this), 500)
      }
    }.bind(this);
    loopImage(1);
  },
  onImageClick: function() {
    clearTimeout(this.Timeout);
    let history = this.props.history;
    let id = this.props.id;
    //es2015 use
    // let path = '/products/${id}'
    let path = '/product/' + id + '';

    history.push(path);
  },
  toDefault: function() {
    clearTimeout(this.Timeout);
    this.setState({image: this.props.image[0]});
  },
  componentDidMount: function() {
 //    const interval = setInterval(() => {
 //      var DOMnode = document.getElementsByClassName('image')[this.props.len - 1];
 //      if(DOMnode){
 //        var node = ReactDOM.findDOMNode(DOMnode);
 //        // console.log(node);
 //        var nodeHeight = node.clientHeight;
 //        var nodeWidth = node.clientWidth;
 //        var plusIconDOM = document.getElementById('Cheight');
 //        // console.log(plusIconDOM);
 //        var icon = ReactDOM.findDOMNode(plusIconDOM);
 //        // console.log(icon);
 //        var iconHeight = icon.clientHeight;
 //
 //        var height = nodeHeight - iconHeight;
 //
 //        document.getElementById("Cheight").style.marginTop = "" + height/2 + "px";
 //        document.getElementById("Cheight").style.marginBottom = "" + height/2 + "px";
 //    //  this.setState({})
 //   }
 //
 // }, 300)
  },
  componentWillUnmount: function() {
    //clear interval

  },
  componentWillReceiveProps: function(props) {
    if(props.image) {
      var image = [...props.image];
      this.setState({
        image: image[0]
      })
    }

  },
  getInitialState: function() {
    return {
            image: this.props.image[0]
           }
  },
  render: function() {
     if (this.props.id > this.props.len - this.props.remainder) {
        return (
          <ProductFrame2
            imageClick={this.onImageClick}
            admin={this.props.admin}
            deleteItem={this.props.deleteItem}
            index={this.props.index}
            dropZone={this.props.dropZone}
            borderHover={this.props.borderHover}
            id={this.props.id}
            title={this.props.title}
            sizes={this.props.sizes}
            size={this.state.size}
            toggle={this.state.toggle}
            image={this.state.image}
            imageWidth={this.props.imageWidth}
            onFlipImage={function(len) {this.flipImage(len)}.bind(this)}
            onToDefault={function() {this.toDefault()}.bind(this)}
            onButtonDrop={function(id) {this.dropZoneButton(id)}.bind(this)}
            onSizeSelect={function(size, id) {this.sizeSelect(size, id)}.bind(this)}
            />
          );
      } else {
        return (
          <ProductFrame1
            imageClick={this.onImageClick}
            admin={this.props.admin}
            deleteItem={this.props.deleteItem}
            index={this.props.index}
            dropZone={this.props.dropZone}
            borderHover={this.props.borderHover}
            id={this.props.id}
            title={this.props.title}
            sizes={this.props.sizes}
            size={this.state.size}
            toggle={this.state.toggle}
            imageWidth={this.props.imageWidth}
            image={this.state.image}
            onFlipImage={function(len) {this.flipImage(len)}.bind(this)}
            onToDefault={function() {this.toDefault()}.bind(this)}
            onButtonDrop={function(id) {this.dropZoneButton(id)}.bind(this)}
            onSizeSelect={function(size, id) {this.sizeSelect(size, id)}.bind(this)}
            />
        );
      }
  }
})

var ExtractObjects = React.createClass({
  render: function() {
      return (
        <div className="columns is-vcentered">
        {this.props.objects.map(function(object, index){
          if(object.index == this.props.len - 1 && this.props.admin) {
            if(this.props.factor) {
              return ([
                <DisplayImage
                     history={this.props.history}
                     admin={this.props.admin}
                     deleteItem={this.props.deleteItem}
                     dropZone={this.props.dropZone}
                     borderHover={this.props.borderHover}
                     admin={this.props.admin}
                     len={this.props.len}
                     key={this.props.objects[index].id}
                     index={object.index}
                     jean={object}
                     SKU={object.SKU}
                     color={object.color}
                     description={object.description}
                     id={object.id}
                     image={object.image}
                     sizes={object.sizes}
                     title={object.title}
                     remainder={this.props.remainder}
                     imageWidth={this.props.imageWidth}
                     />,
                  <BoxDash
                      addItem={this.props.addItem}
                      imageWidth={this.props.imageWidth}/>
                 ]);
            } else {
            return (
              <DisplayImage
                  history={this.props.history}
                  admin={this.props.admin}
                  deleteItem={this.props.deleteItem}
                  dropZone={this.props.dropZone}
                  borderHover={this.props.borderHover}
                  admin={this.props.admin}
                  len={this.props.len}
                  key={this.props.objects[index].id}
                  index={object.index}
                  jean={object}
                  SKU={object.SKU}
                  color={object.color}
                  description={object.description}
                  id={object.id}
                  image={object.image}
                  sizes={object.sizes}
                  title={object.title}
                  remainder={this.props.remainder}
                  imageWidth={this.props.imageWidth}
                  />
            );
            }
          } else {
            return (
                  <DisplayImage
                      history={this.props.history}
                      admin={this.props.admin}
                      deleteItem={this.props.deleteItem}
                      dropZone={this.props.dropZone}
                      borderHover={this.props.borderHover}
                      len={this.props.len}
                      key={index}
                      index={object.index}
                      jean={object}
                      SKU={object.SKU}
                      color={object.color}
                      description={object.description}
                      id={object.id}
                      image={object.image}
                      sizes={object.sizes}
                      title={object.title}
                      remainder={this.props.remainder}
                      imageWidth={this.props.imageWidth}
                      />
              )
          }

        }.bind(this))}
        </div>
    );
  }
});

//Object literal or Class with properties and methods
//this class holds function expressions(methods)

var GridSystem = React.createClass({
  componentWillReceiveProps: function(a) {
    var len = a.initialJeans.length;
    console.log(len, "length")
    var arrOfObj = []
    var rem = len % this.state.columns;
    var rows = len / this.state.columns;
    var factor, columns

    var prevPos = 0;
    var Pos = this.state.columns;
    for(var i = 0; i < rows; i++) {
      arrOfObj.push(a.initialJeans.slice(prevPos, Pos));
      prevPos += this.state.columns;
      Pos += this.state.columns;
    }


    if(arrOfObj.length === 0) {

    }else if(arrOfObj != null) {
      if (arrOfObj[arrOfObj.length - 1].length != this.state.columns) {
          factor = false;
      } else {
          factor = true;
      }
    }

    if(a.columns) {
      columns = a.columns
    } else {
      columns = this.state.columns
    }
    
    // this.setState({
    //   array: arrOfObj,
    //   len: len,
    //   rows: rows,
    //   remainder: rem,
    //   arrLen: arrOfObj.length,
    //   factor: factor,
    //   columns: columns
    // })
  },
  getInitialState: function() {
      if(this.props.initialJeans.length != 0) {

          var len = this.props.initialJeans.length;
          var arrOfObj = [];
          var columns = this.props.columns;
          var rem = len % columns;
          // console.log("what dkfsjlkf",columns - rem)
          var rows = len / columns;

          var copy = [...this.props.initialJeans];

          var prevPos = 0;
          var Pos = columns;
          for(var i = 0; i < rows; i++) {
            arrOfObj.push(copy.slice(prevPos, Pos));
            prevPos += columns;
            Pos += columns;
          }

        return {
          array: arrOfObj,
          remainder: rem,
          len: this.props.initialJeans.length,
          columns: columns,
          rows: rows,
          imageWidth: Math.round(12/columns),
          arrLen: arrOfObj.length
        }
      } else {
        return {
          array: null,
          admin: true
        }
      }

  },
  componentDidMount: function() {
    if(this.state.array != null && this.state.arrLen) {
      if (this.state.array[this.state.arrLen - 1].length != this.state.columns) {
        this.setState({
          factor: false
        })
      } else {
        this.setState({
          factor: true
        })
      }
    }
  },
  componentDidUpdate: function() {
    if(this.state.newColumns != undefined && this.state.newColumns != this.state.columns) {
        var len = this.props.initialJeans.length;
        console.log(len, "component did up date")
        var columns = this.state.newColumns;
        var rem = len % this.state.newColumns;
        var rows = len / this.state.newColumns;
        var arrOfObj = [];
        var prevPos = 0;
        var Pos = this.state.newColumns;
        var factor;

        for(var i = 0; i < rows; i++) {
          arrOfObj.push(this.props.initialJeans.slice(prevPos, Pos));
          prevPos += this.state.newColumns;
          Pos += this.state.newColumns;
        }
        console.log(arrOfObj.length, "dkljalfjsdjfklasjfklasdfjklsjdfl;sj")
        console.log(this.props.initialJeans, "initaljeans")
        if(this.state.array != null) {
          if (arrOfObj[arrOfObj.length - 1].length != this.state.newColumns) {
              factor = false;
          } else {
              factor = true;
          }
        }

        this.props.getColumns(this.state.newColumns)

        this.setState({
          array: arrOfObj,
          columns: this.state.newColumns,
          imageWidth: Math.round(12 / this.state.newColumns),
          arrLen: arrOfObj.length,
          rows: rows,
          factor: factor
        })

    }
  },
  columnManagement: function(delta) {
    var prev = this.state.columns;
    var curr = prev + delta;
    //set max and min column values
    if(curr < 1) {
      curr = 1;
    } else if(curr > 6) {
      curr = 6;
    }
    this.state.newColumns = curr;
    this.setState({})
  },

  render: function() {
    console.log(this.props.columns, "this.props.columns")
    if(this.state.array == null || this.state.array.length === 0){
      if(this.props.admin) {
        return (

          <BoxDash
            columnWidth={this.state.columnWidth}
            addItem={this.props.addItem}/>
        );
      } else {
        return(
          <div>
            <h1> this page doesnt have content </h1>
          </div>
        )
      }
    } else {
      return (
        <div className="container">
          {this.state.array.map(function(objects, index) {
            if(this.props.admin) {
              if(this.state.arrLen - 1 === 0) {
                if(index === 0 && this.state.factor === false) {
                  return ([
                    <ManageColumns
                            onColumnManagement={this.columnManagement}/>,
                    <ExtractObjects
                            history={this.props.history}
                            deleteItem={this.props.deleteItem}
                            dropZone={this.props.dropZone}
                            borderHover={this.props.borderHover}
                            admin={this.props.admin}
                            key={index}
                            objects={objects}
                            remainder={this.state.remainder}
                            len={this.state.len}
                            columns={this.state.columns}
                            imageWidth={this.state.imageWidth}
                            rows={this.state.rows}
                            factor={true}
                            />
                          ])
                } else if(index === this.state.arrLen - 1) {
                  return ([
                    <ManageColumns
                            onColumnManagement={this.columnManagement}/>,
                    <ExtractObjects
                            history={this.props.history}
                            deleteItem={this.props.deleteItem}
                            dropZone={this.props.dropZone}
                            borderHover={this.props.borderHover}
                            admin={this.props.admin}
                            key={index}
                            objects={objects}
                            remainder={this.state.remainder}
                            len={this.state.len}
                            columns={this.state.columns}
                            imageWidth={this.state.imageWidth}
                            rows={this.state.rows}
                            />,
                    <BoxDash
                          addItem={this.props.addItem}
                          imageWidth={this.state.imageWidth}
                          factor={true}/>
                          ])
                } else {
                  return (
                    <ExtractObjects
                            history={this.props.history}
                            deleteItem={this.props.deleteItem}
                            dropZone={this.props.dropZone}
                            borderHover={this.props.borderHover}
                            admin={this.props.admin}
                            key={index}
                            objects={objects}
                            remainder={this.state.remainder}
                            len={this.state.len}
                            columns={this.state.columns}
                            imageWidth={this.state.imageWidth}
                            rows={this.state.rows}
                            />
                  );
                }
              } else if(index === 0) {
                return ([
                  <ManageColumns
                          onColumnManagement={this.columnManagement}/>,
                  <ExtractObjects
                          history={this.props.history}
                          deleteItem={this.props.deleteItem}
                          dropZone={this.props.dropZone}
                          borderHover={this.props.borderHover}
                          admin={this.props.admin}
                          key={index}
                          objects={objects}
                          remainder={this.state.remainder}
                          len={this.state.len}
                          columns={this.state.columns}
                          imageWidth={this.state.imageWidth}
                          rows={this.state.rows}
                          factor={true}
                          />
                        ])
              } else if(index === 0 && this.state.factor) {
                return ([
                  <ManageColumns
                          onColumnManagement={this.columnManagement}/>,
                  <ExtractObjects
                          history={this.props.history}
                          deleteItem={this.props.deleteItem}
                          dropZone={this.props.dropZone}
                          borderHover={this.props.borderHover}
                          admin={this.props.admin}
                          key={index}
                          objects={objects}
                          remainder={this.state.remainder}
                          len={this.state.len}
                          columns={this.state.columns}
                          imageWidth={this.state.imageWidth}
                          rows={this.state.rows}
                          />,
                  <BoxDash
                        addItem={this.props.addItem}
                        imageWidth={this.state.imageWidth}
                        factor={true}/>
                        ])
              } else if(index === 0) {
                return ([
                  <ManageColumns
                          onColumnManagement={this.columnManagement}/>,
                  <ExtractObjects
                          history={this.props.history}
                          deleteItem={this.props.deleteItem}
                          dropZone={this.props.dropZone}
                          borderHover={this.props.borderHover}
                          admin={this.props.admin}
                          key={index}
                          objects={objects}
                          remainder={this.state.remainder}
                          len={this.state.len}
                          columns={this.state.columns}
                          imageWidth={this.state.imageWidth}
                          rows={this.state.rows}
                          />
                        ])
              } else if (index === this.state.arrLen - 1 && this.state.factor) {
                return ([
                  <ExtractObjects
                        history={this.props.history}
                        deleteItem={this.props.deleteItem}
                        dropZone={this.props.dropZone}
                        borderHover={this.props.borderHover}
                        admin={this.props.admin}
                        key={index}
                        objects={objects}
                        remainder={this.state.remainder}
                        len={this.state.len}
                        columns={this.state.columns}
                        imageWidth={this.state.imageWidth}
                        rows={this.state.rows}/>,
                  <BoxDash
                        addItem={this.props.addItem}
                        imageWidth={this.state.imageWidth}
                        factor={true}/>
                   ])
              } else {
                return (
                  <ExtractObjects
                          history={this.props.history}
                          deleteItem={this.props.deleteItem}
                          addItem={this.props.addItem}
                          dropZone={this.props.dropZone}
                          borderHover={this.props.borderHover}
                          admin={this.props.admin}
                          key={index}
                          objects={objects}
                          remainder={this.state.remainder}
                          len={this.state.len}
                          columns={this.state.columns}
                          imageWidth={this.state.imageWidth}
                          rows={this.state.rows}
                          factor={true}/>
                        );
              }
            } else {
              return (
                <ExtractObjects
                        history={this.props.history}
                        admin={this.props.admin}
                        key={index}
                        objects={objects}
                        remainder={this.state.remainder}
                        len={this.state.len}
                        columns={this.state.columns}
                        imageWidth={this.state.imageWidth}
                        rows={this.state.rows}/>
                      );
            }
          }.bind(this))}
        </div>
      );
    }
  }
});



var myArr = [];
var nextID = 10;
/*
{
  SKU: 4321,
  title: "BLACK",
  fit: "SKINNY FIT",
  color: "black",
  sizes: [ 28, 30, 32 ],
  image: ["https://cdn.shopify.com/s/files/1/0452/6221/products/105black_1024x1024.jpg?v=1492608011", "https://cdn.shopify.com/s/files/1/0452/6221/products/105black_b_1024x1024.jpg?v=1492608012","https://cdn.shopify.com/s/files/1/0452/6221/products/105black_c_1024x1024.jpg?v=1492608013"],
  description: "Our signature Black Skinny Fit denim is a fan favorite. Made from a garment dyed 98% cotton 2% spandex, these jeans are perfect for everyday wear. Made in Los Angeles.",
  id: 10
}
*/
var ShowCase = React.createClass({
  onAddItem: function(data) {
    console.log(data.image);
    var nextState = [...this.state.data];
    data.id = nextID;
    nextState.push(data);

    console.log(nextState, "nextState")

    this.setState({
      data: nextState,
    })
    this.props.updateParent(nextState);
    nextID += 1;
  },
  onDeleteItem: function(data) {
    var nextState = [...this.state.data];
    nextState.splice(data, 1);

    this.setState({
      data: nextState
    })
    this.props.updateParent(nextState);
  },
  borderHover: function(e, style) {
    myArr.push(e.target.id)
      if(myArr[0] == e.target.id && e.type == "dragover") {
        e.target.style.boxShadow = "inset 0 1px 1px rgba(0,0,0, 0.5), 0 0 50px rgb(66, 134, 244)";
      } else if(e.type == "drop") {
        e.target.style.boxShadow = "none"
        console.log(myArr, "myArr")
        myArr = [];
      } else {
        e.target.style.boxShadow = style;
      }

  },
  dropZone: function(e) {
    var nextState = [...this.state.data];
    var cell = e.target;
    console.log(cell);
    var cellWidth = cell.clientWidth;
    var coordinates = cell.getBoundingClientRect();
    var x = e.pageX - coordinates.left;
    var dataID = e.dataTransfer.getData("text");

    if(dataID != e.target.id) {
      if( x < cellWidth/2) {
        nextState.splice(e.target.id, 0, nextState.splice(nextState[dataID].index, 1)[0])
      } else {
        nextState.splice(e.target.id, 0, nextState.splice(nextState[dataID].index, 1)[0])
      }
    }

    this.setState({
      data: nextState
    })
  },

  getInitialState: function() {
    var copy = [...this.props.initialJeans];
    return {
      data: copy
    }
  },

  render: function() {
    console.log(this.props, "showcase state")
    var arr = [];
    this.state.data.forEach(function(data, index) {
      data.index = index;
      arr.push(data);
    })
    return (
      <GridSystem
        history={this.props.history}
        initialJeans={arr}
        dropZone={function(e, id) {this.dropZone(e, id)}.bind(this)}
        borderHover={function(e, style, id) {this.borderHover(e, style, id)}.bind(this)}
        addItem={function(d) {this.onAddItem(d)}.bind(this)}
        deleteItem={function(data) {this.onDeleteItem(data)}.bind(this)}
        admin={this.props.admin}
        loggedIn={this.props.loggedIn}
        getColumns={this.props.getColumns}
        columns={this.props.columns}
        />
    )
  }
})


function ProductPage(props) {
  for(var index in props.initialJeans) {
    if(props.initialJeans[index].id == props.match.params.id) {
      var jean = props.initialJeans[index];
    }
  }
  return(
  <div style={{paddingTop: 70 + "px", paddingBottom: 70 + "px"}}>
  <div className="section product-header">
    <div className="container">
      <div className="columns">
        <div className="column">
          <span className="title is-3">Product Name</span>
          <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
          <span className="title is-4 has-text-muted">Category</span>
        </div>
      </div>
    </div>
  </div>

  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <div className="image is-2by2">
            <img src={jean.image[0]} />
          </div>
        </div>
        <div className="column is-5 is-offset-1">
          <div className="title is-2">{jean.title}</div>
          <p className="title is-3 has-text-muted">{jean.price}</p>
          <hr/>
          <br/>
          <p className="">
            <i className="fa fa-star title is-5"></i>
            <i className="fa fa-star title is-5"></i>
            <i className="fa fa-star title is-5"></i>
            <i className="fa fa-star title is-5"></i>
            <i className="fa fa-star title is-5"></i>
            &nbsp; &nbsp;
            <strong>41 Reviews</strong>
            &nbsp; &nbsp;
            <a href="#">show all</a>
          </p>
          <br/>
          <p>{jean.description}
          </p>
          <br/>
          <br/>
          <p className="">
            <a href="#">
              <i className="fa fa-minus cart-icon"></i>
            </a>
            &nbsp;
            <input type="text" name="" className="input has-text-centered" value="1" style={{width: 40 + "px"}} />
            &nbsp;
            <a href="#">
              <i className="fa fa-plus cart-icon"></i>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a className="button is-primary">Add to cart</a>
          </p>
          <br/>
          <table className="table">
            <tbody>
              <tr>
                <td className="has-text-right">
                  <strong>Item ID</strong>
                </td>
                <td>{jean.id}</td>
              </tr>
              <tr>
                <td className="has-text-right">
                  <strong>Seller</strong>
                </td>
                <td>jsmith</td>
              </tr>
              <tr>
                <td className="has-text-right">
                  <strong>Added</strong>
                </td>
                <td>3 days ago</td>
              </tr>
              <tr>
                <td className="has-text-right">
                  <strong>Views</strong>
                </td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


  <div className="section">
    <div className="container">
      <div className="tabs">
        <ul>
          <li><a>Reviews</a></li>
        </ul>
      </div>
      <div className="box">
        <p> </p><br/><p>

        Sed at risus enim. Nunc aliquet tellus a purus blandit lobortis. Duis condimentum sapien sed orci ornare mollis. Praesent eleifend ante magna, quis commodo risus pellentesque in. Donec eget porta leo. Sed vel dictum est. Ut dui lorem, volutpat vel risus in, dictum euismod ex. Aenean laoreet dapibus nulla, nec viverra massa feugiat vitae. Vestibulum elementum nec nisi dictum rhoncus. Nam placerat mi eu tortor tincidunt commodo. Duis posuere, sapien a laoreet dapibus, elit tortor laoreet est, eget dapibus dui justo vitae ipsum. Praesent sed augue nec leo hendrerit iaculis sit amet efficitur ante. Nunc ac maximus mauris. Sed luctus erat id elit tempor, a aliquam lacus sodales.
      </p><br/><p>

      Suspendisse sodales metus justo, ullamcorper iaculis purus interdum in. Sed ultricies enim felis, in interdum urna malesuada a. Morbi id ligula vel leo elementum dignissim quis vel purus. Donec iaculis, est ac maximus vestibulum, sapien mi lacinia urna, at laoreet felis lectus nec urna. Fusce egestas, neque vitae blandit scelerisque, leo arcu pellentesque risus, et volutpat neque nunc id massa. Aenean dapibus leo vel purus malesuada, eu ultrices nulla consequat. Duis erat orci, lobortis sed dictum id, pretium a nibh. Mauris pharetra ligula consequat gravida ornare.
    </p><br/><p>

    Sed a gravida sapien. Nam malesuada feugiat nunc, eu varius risus suscipit non. Nulla vitae odio fermentum, varius ligula et, iaculis enim. Mauris tempor in dolor non aliquet. Pellentesque ac mauris a augue tempus pharetra. Nulla facilisi. Vivamus sit amet lacus sagittis, ullamcorper nisi sit amet, consequat eros. Sed faucibus nulla vitae erat tristique ornare.
  </p><br/><p>

  Nullam sit amet magna ipsum. In tincidunt tincidunt tellus. Duis maximus vulputate elit sit amet auctor. Vestibulum a nunc consectetur, accumsan arcu eu, dapibus est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vitae massa eget nulla gravida porta eu et sem. Sed in lorem id lectus auctor lobortis sed vel libero. Nam dapibus risus eu sodales consectetur. Fusce luctus sollicitudin ante et sodales. Curabitur eget justo turpis. Vestibulum vel nunc tellus. Morbi accumsan urna nibh, at malesuada odio faucibus accumsan.
</p>

</div>
</div>
</div>

</div>
  );

}

function SideNav(props) {
  window.addEventListener('mouseup', function(event){
    var sidenav = document.getElementById('mySidenav');
    if (event.target != sidenav && event.target.parentNode != sidenav){
          props.closeNav();
      }

  });
  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={props.closeNav}>&times;</a>
      <Link to="/">Shop</Link>
    </div>
  );
}


var MainApp = React.createClass({
  update: function(nextState) {
    this.setState({
      jeans: nextState
    })
  },
  getColumns: function(columns) {
    this.setState({
      columns: columns
    })
  },
  getAuth: function(authData) {
    if(authData.auth && authData.admin) {
      this.setState({
        loggedIn: true,
        admin: true
      })
    } else if(authData.auth) {
        this.setState({
          loggedIn: true
        })
    }

  },
  getInitialState: function() {
    return {
      jeans: this.props.initialJeans,
      columns: 4
    }
  },
  openNav: function() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
 },
 closeNav: function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  },
  render: function() {
    console.log(this.state, "main app state")
    return (
      <HashRouter>
        <div id="main">
          <Navbar openNav={this.openNav} users={this.props.initialUsers} admins={this.props.initialAdmins} getAuth={function(a) {this.getAuth(a)}.bind(this)} loggedIn={this.state.loggedIn} admin={this.state.admin}/>

          <SideNav
            closeNav={this.closeNav}
            openNav={this.openNav}
            />

            <div className="jar">
              <Route exact path="/" render={function({history}) {return (<ShowCase initialJeans={this.state.jeans} updateParent={function(n) {this.update(n)}.bind(this)} history={history} loggedIn={this.state.loggedIn} columns={this.state.columns} admin={this.state.admin} getColumns={function(c) {this.getColumns(c)}.bind(this)} />)}.bind(this)} />
              <Route path="/product/:id" render={function({match}) {return (<ProductPage initialJeans={this.state.jeans} match={match}/>)}.bind(this)} />
              <Route path="/cart" component={cart} />
            </div>

        </div>
      </HashRouter>

    )
  }
})

function cart() {
  return(
    <div>
      <h1>this is cart</h1>
    </div>
  )
}
// <ShowCase initialJeans={this.props.initialJeans} />
ReactDOM.render(<MainApp initialJeans={JEANS} initialUsers={USERS} initialAdmins={ADMINS}/>, document.getElementById("root"));
/***********************************************************/
// propTypes: {
//   initialJeans: React.PropTypes.arrayOf(React.PropTypes.shape({
//     SKU: React.PropTypes.number.isRequired,
//     title: React.PropTypes.string.isRequired,
//     fit: React.PropTypes.string.isRequired,
//     color: React.PropTypes.string.isRequired,
//     size: React.PropTypes.arrayOf(React.PropTypes.number.isRequired),
//     image: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
//     description: React.PropTypes.string.isRequired,
//     id: React.PropTypes.number.isRequired,
//   })).isRequired
// },

// var rotate = function(i, j) {
//   if(this.state.array[i+1]) {
//     if(i === 0) {
//       this.state.array[i].push(this.state.array[i+1].splice(0,1)[0]);
//       rotate(i + 1, 0);
//     } else if(j <= i) {
//       var object = this.state.array[i+1].splice(0,1)[0];
//       if(object == undefined) {
//         console.log("nope")
//       } else {
//         this.state.array[i].push(object);
//         rotate(i, j + 1);
//       }
//     } else {
//       rotate(i + 1, 0)
//     }
//   }
// }.bind(this);
// rotate(0, 0);


/**********************************************************************************/
// <div className="column">
//     <div className="card">
//       <div className="card-image">
//         <figure className="image is-2by3">
//             <img src={this.state.image} onMouseOver={ function() {
//               var len = this.state.image.length;
//               this.flipImage(len);
//             }.bind(this) } onMouseOut={function() {this.toDefault();}.bind(this)} />
//         </figure>
//       </div>
//     </div>
//     <div>
//       {this.props.title}
//       <ButtonDrop
//           toggle={this.state.toggle}
//           sizes={this.props.size}
//           index={this.props.index}
//           size={this.state.size}
//           onSizeSelect={function(size, index) { this.sizeSelect(size, index)}.bind(this)}
//           onButtonDrop={function(index) { this.dropButton(index)}.bind(this)}/>
//     </div>
// </div>



// {this.state.jean.map(function(jean, index) {
//   this.state.image = jean.image;
//   return <ImageFrame
//       index={index}
//       id={jean.id}
//       length={this.props.length}
//       remainder={this.props.remainder}
//       image={this.state.image}
//       key={jean.id}
//       length={this.props.length}
//       columns={this.props.columns}
//       rows={this.props.rows}
//       toggle={this.state.toggle}
//       sizes={jean.size}
//       index={this.props.index}
//       size={this.state.size}
//       onSizeSelect={function(size, index) { this.sizeSelect(size, index)}.bind(this)}
//       onButtonDrop={function(index) { this.dropButton(index)}.bind(this)}
//       onFlipImage={function(length) { this.flipImage(length)}.bind(this)}
//       onToDefault={function() { this.toDefault()}.bind(this)}
//       />
// }.bind(this))}

// <ButtonDrop
//     id={props.id}
//     toggle={props.toggle}
//     sizes={props.sizes}
//     index={props.index}
//     size={props.size}
//     onSizeSelect={props.onSizeSelect }
//     onButtonDrop={props.onButtonDrop } />
/******************************************************/
/***************DispalyImage component******************************************/
// sizeSelect: function(size, id) {
//   this.setState({ size: size})
//   document.getElementById(id).style.display = "none";
// },
// dropButton: function(id) {
//   var element = document.getElementById(id);
//   var tone = element.className.split(" ")[2];
//   if(tone === "hide") {
//     element.style.display = "none";
//     this.setState({ toggle: "show" })
//   }
//   if(tone === "show")
//   {
//     element.style.display = "block";
//     this.setState({toggle: "hide"})
//   }
// },
// componentDidMount: function() {
//   document.getElementById(this.props.id).style.display = "none";
// },


// function ButtonList(props) {
//   return (
//       <li onClick={function() {props.onSize(props.size, props.id);}}><a>{props.size}</a></li>
//   );
// }
// function ButtonDrop(props) {
//   return (
//     <div className="has-dropdown">
//     <button className="button is-medium" onClick={function() {props.onButtonDrop(props.id); console.log("drop");}}>{props.size}</button>
//       <div className={"dropdown box " + props.toggle + ""} id={props.id}>
//         <ul >
//         {
//           props.sizes.map(function(size, index) {
//             return <ButtonList
//                       key={index}
//                       size={size}
//                       onSize={props.onSizeSelect}
//                       id={props.id}
//                       />
//           })
//         }
//         </ul>
//       </div>
//     </div>
//   );
// }

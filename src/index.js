
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
      price: "$30.00",
      reviews: [
        {
          user: "Cole Logan",
          review: "Great jeans, not the quality I expected but it's a nice addition to my wardrobe",
          stars: 4
        },
        {
          user: "George Hennon",
          review: "Hate them! :(",
          stars: 1
        },
        {
          user: "Abraham Lincoln",
          review: "I love these jeans! Great quality and style. I love dem",
          stars: 5
        },
        {
          user: "21 Savage",
          review: "issa nice piece of denim",
          stars: 5
        },
        {
          user: "Post Malone",
          review: "I wanna flex with these",
          stars: 4
        },
        {
          user: "Steve Jobs",
          review: "could be better, you need to see the vision",
          stars: 2
        }
      ],
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
      price: "$30.00",
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
      price: "$30.00",
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
      price: "$30.00",
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
      price: "$30.00",
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
      price: "$30.00",
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
      price: "$30.00",
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
      price: "$30.00",
      id: 8
    }
];


var SHIRTS = [
  {
    SKU: 2354,
    title: "BLUE BUTTON UP",
    color: "blue",
    sizes: ["small", "medium", "large"],
    image: ["http://oldnavy.gap.com/webcontent/0013/692/910/cn13692910.jpg"],
    description: "blue button up short sleeve shirt casual wear",
    price: "$20.00",
    id: 1
  },
  {
    SKU: 2354,
    title: "PLAID BUTTON UP",
    color: "blue",
    sizes: ["small", "medium", "large"],
    image: ["http://oldnavy.gap.com/webcontent/0013/996/066/cn13996066.jpg"],
    description: "plaid button up short sleeve shirt casual wear",
    price: "$20.00",
    id: 2
  },
  {
    SKU: 2354,
    title: "DOTTED BUTTON UP",
    color: "red",
    sizes: ["small", "medium", "large"],
    image: ["http://oldnavy.gap.com/webcontent/0013/648/384/cn13648384.jpg"],
    description: "red button up short sleeve shirt casual wear",
    price: "$20.00",
    id: 3
  }
]
var USERS = [
  {
    name: "John Doe",
    userName: "user1",
    email: "colelogan19@yahoo.com",
    address: "123 sesame street",
    passord: "password",
    id: 1
  }
]

var ADMINS = [
  {
    name: "Santa Clause",
    userName: "admin1",
    email: "admin@gmail.com",
    address: null,
    password: "admin",
    id: 1
  }
]

// var JEANS = [
//
// ]


/**********************ImageFrame Comoponent*************************************/

function ProductFrame1(props) {
  return (
    <div className={"column is-" + props.imageWidth + ""}>
    {props.admin ? <a className="round-button red" onClick={function() {props.deleteItem(props.index,  props.router.match.path)}}><i className="fa fa-close"></i></a> : null}
      <div className="card">
          <div className="card-image">
            <figure className="image is-2by3">
            {props.admin ?
                <img src={props.image}
                     onMouseOver={props.onFlipImage}
                     onMouseOut={props.onToDefault}
                     onDragOver={function(event) {props.borderHover(event, "inset 0 1px 1px rgba(0,0,0, 0.5), 0 0 50px rgb(113,253,38)", event.target.id); event.preventDefault();}}
                     onDragLeave={function(event) {props.borderHover(event, "none");}}
                     onDrop={function(event) {props.dropZone(event, props.router.match.path); props.borderHover(event, "none");}}
                     onDragStart={function(event) {event.dataTransfer.setData("text", event.target.id); props.borderHover(event);}}
                     onClick={props.imageClick}
                     draggable="true"
                     id={props.index}/>
                   :
                   <img src={props.image}
                        onMouseOver={props.onFlipImage}
                        onMouseOut={props.onToDefault}
                        onClick={props.imageClick}
                        draggable="false"
                        id={props.index}/>
                 }
            </figure>
          </div>

          <div className="card-cardi has-text-centered">
            <p>{props.title}</p>
          </div>
        </div>
    </div>
  );
}
function ProductFrame2(props) {
  return (
    <div className={"column is-" + props.imageWidth + ""}>
    {props.admin ? <a className="round-button red" onClick={function() {props.deleteItem(props.index,  props.router.match.path)}}><i className="fa fa-close"></i></a> : null}
      <div className="card">
          <div className="card-image">
            <figure className="image is-2by3">
            {props.admin ?
                <img src={props.image}
                     onMouseOver={props.onFlipImage}
                     onMouseOut={props.onToDefault}
                     onDragOver={function(event) {props.borderHover(event, "inset 0 1px 1px rgba(0,0,0, 0.5), 0 0 50px rgb(113,253,38)", event.target.id); event.preventDefault();}}
                     onDragLeave={function(event) {props.borderHover(event, "none");}}
                     onDrop={function(event) {props.dropZone(event, props.router.match.path); props.borderHover(event, "none");}}
                     onDragStart={function(event) {event.dataTransfer.setData("text", event.target.id); props.borderHover(event);}}
                     onClick={props.imageClick}
                     draggable="true"
                     id={props.index}/>
                   :
                   <img src={props.image}
                        onMouseOver={props.onFlipImage}
                        onMouseOut={props.onToDefault}
                        onClick={props.imageClick}
                        draggable="false"
                        id={props.index}/>
                 }
            </figure>
          </div>

          <div className="card-cardi has-text-centered">
            <p>{props.title}</p>
          </div>
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
      }

    },
    getInputData: function(callback) {
      var sizeValues = [];
      this.state.data.sku = document.getElementById("sku").value;
      this.state.data.title = document.getElementById("title").value;
      this.state.data.fit = document.getElementById("fit").value;
      this.state.data.color = "";
      this.state.data.sizes = "";
      this.state.data.image = this.state.image;
      this.state.data.description = document.getElementById("textarea").value

      for(var i = 0; i < document.getElementsByName("color").length; i++) {
        if(document.getElementsByName("color")[i].checked) {
          this.state.data.color = document.getElementsByName("color")[i].value;
        }
      }
      for(var i = 0; i < document.getElementsByClassName("checkbox").length; i++) {
        if(document.getElementsByClassName("checkbox")[i].checked) {
          sizeValues.push(document.getElementsByClassName("checkbox")[i].value)
          this.state.data.sizes = sizeValues;
        }
      }

      if(this.state.data.sku && this.state.data.title && this.state.data.fit && this.state.data.color && this.state.data.sizes && this.state.data.image && this.state.data.description) {
        this.props.addItem(this.state.data, this.props.router.match.path);
        callback("is-inactive")
      } else {
        if(document.getElementById("textarea").value == '') {
          document.getElementById("description").setAttribute("class", "visible");
        } else {
          document.getElementById("description").setAttribute("class", "hidden");
        }

        var inputs = document.getElementsByTagName('input');
          for(var i=0; i<inputs.length; i++){
            var type = inputs[i].getAttribute("type");
            if(type === "text") {
              if(i <= 4) {
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
                  <div className="control">
                    <label className="label has-text-left">Price<span className="hidden"><i className="fa fa-asterisk Red"></i></span></label>
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
                    <label className="label has-text-left">Description<span id="description" className="hidden"><i className="fa fa-asterisk Red"></i></span></label>
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
        <LoginCard toggleModal={props.toggleModal} error={props.error} clearError={props.clearError} toggleOff={props.toggleOff} self={props.self} handleSubmit={props.handleSubmit}/> :
        <RegisterCard toggleModal={props.toggleModal} registerError={props.registerError} toggleOn={props.toggleOn} self={props.self} handleSubmit={props.handleSubmit} registerUser={props.registerUser}/>}
    </div>
  );
}

function LoginCard(props) {
  return(
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Log In</p>
      <button className="delete" aria-label="close" onClick={function() {props.toggleModal(); props.clearError();}}></button>
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
      &nbsp; &nbsp;
      <p className="Red">{props.error}</p>
    </footer>
    </form>
  </div>
  )
}
var userrID = 2;
function RegisterCard(props) {
  return(
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Register</p>
        <button className="delete" aria-label="close" onClick={props.toggleModal}></button>
      </header>
      <form onSubmit={props.registerUser}>
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
        <label className="label">Address</label>
        <p className="control">
          <input className="input" type="text" placeholder="123 Sesame Street" ref={function(input) {props.self.address = input}}/>
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
        <button className="button is-success" onClick={props.registerUser}>Register</button>
        <button className="button is-default">Cancel</button>
        <a onClick={props.toggleOn}>Log In</a>
        &nbsp; &nbsp;
        <p className="Red">{props.registerError}</p>
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
  validateEmail: function(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  },
  registerUser: function() {

    if(!this.validateEmail(this.email.value)) {
      return this.setState({
        registerError: "* Email is not an email"
      })
    }

    if(this.password.value != this.confirmPassword.value) {
      return this.setState({
        registerError: "* Passwords do not match"
      })
    }


    var user = {
      name: this.name.value,
      userName: this.userName.value,
      email: this.email.value,
      address: this.address.value,
      passord: this.password.value,
      id: userrID
    }

    this.props.addUser(user);
    this.signIn(this.password.value, this.userName.value);
    userrID += 1;

  },
  signIn: function(password, userName) {
    for(var prop in this.props.users) {
      if(this.props.users.hasOwnProperty(prop)) {
        var key = this.props.users[prop];
        for(var value in key) {
          if(key.hasOwnProperty(value)){
            if(password === key[value]) {
              var password = key[value];
            }
             if(userName === key[value]) {
              var userName = key[value];
            }
            if(userName && password) {
              var id = key.id;
            }
          }
        }
      }
    }

    if(password && userName) {
      this.props.getAuth({id: id})
       this.setState({
         factor: false,
         error: null
       })
    }
  },
  clearError: function() {
    this.setState({
      error: null
    })
  },
  handleSubmit: function(event) {
    event.preventDefault();
    for(var prop in this.props.users) {
      if(this.props.users.hasOwnProperty(prop)) {
        var key = this.props.users[prop];
        for(var value in key) {
          if(key.hasOwnProperty(value)){
            if(this.password.value === key[value]) {
              var password = key[value];
            }
             if(this.userName.value === key[value]) {
              var userName = key[value];
            }
            if(userName && password) {
              var id = key.id;
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
              var adminPassword = key[value];
            }
             if(this.userName.value === key[value]) {
              var adminUser = key[value];
            }
            if(adminUser && adminPassword) {
              var id = key.id;
            }
          }
        }
      }
    }
    if(password && userName) {
      this.setState({
        factor: false,
        error: null
      })
      this.props.getAuth({id: id})
    } else if(adminUser && adminPassword) {
       this.setState({
         factor: false,
         error: null
       })
      this.props.getAuth({id: id, admin: true})
    } else {
      this.setState({
        error: "* The username or password is incorrect!"
      })
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


        <div className="navbar-end">
        {this.props.cart ?
          this.props.cart.length > 0 ?
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link  is-active">
            <i className="fa fa-shopping-cart fa-2x is-turqoise"></i>
          </a>
          <div className="navbar-dropdown">
          {this.props.cart.map(function(item, index) {
            return (

                <a key={index} style={{cursor: "default"}}  className="navbar-item">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong className="content is-small">{item.title}</strong>
                          <br/>
                          <small>{item.quantity}</small>
                        </p>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <span className="spacer">
                          <img src={item.image[0]}/>
                        </span>
                      </div>
                      <div className="level-item">
                        <p style={{cursor: "pointer"}} onClick={function() {this.props.removeCart(index)}.bind(this)}>X</p>
                      </div>
                    </div>
                  </div>
                </a>

            );
          }.bind(this))}
          </div>
        </div>
        :
        <div className="navbar-item">
          <i className="fa fa-shopping-cart fa-2x is-turqoise"></i>
        </div>
        :
        <div className="navbar-item">
          <i className="fa fa-shopping-cart fa-2x is-turqoise"></i>
        </div>
        }
        {this.state.factor ? <EntryModal toggleModal={this.toggleModal} registerError={this.state.registerError} clearError={this.clearError} loginModal={this.state.loginModal} error={this.state.error} toggleOff={this.offToggleCard} toggleOn={this.onToggleCard} self={this} handleSubmit={this.handleSubmit} registerUser={this.registerUser}/> : null}
        <div className="navbar-menu">
                {this.props.loggedIn && this.props.admin ?
                  ([
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <div className="control">
                        <Link to={"/admin/" + this.props.accountID + ""} className="button is-black" >
                          <span className="icon">
                            <i className="fa fa-cog"></i>
                          </span>
                          <span>
                            Account
                          </span>
                        </Link>
                        </div>
                      </div>
                    </div>,
                    <div className="navbar-item">
                      <div className="field is-grouped">
                        <div className="control">
                          <a className="button is-info" onClick={this.props.logout}>
                            <span className="icon">
                              <i className="fa fa-sign-out"></i>
                            </span>
                            <span>
                              Logout
                            </span>
                          </a>
                          </div>
                        </div>
                      </div>
                  ])
                  : this.props.loggedIn ?
                  ([
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <div className="control">
                        <Link to={"/account/" + this.props.accountID + ""} className="button is-black" >
                          <span className="icon">
                            <i className="fa fa-cog"></i>
                          </span>
                          <span>
                            Account
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>,
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <div className="control">
                        <a className="button is-info" onClick={this.props.logout}>
                          <span className="icon">
                            <i className="fa fa-sign-out"></i>
                          </span>
                          <span>
                            Logout
                          </span>
                        </a>
                        </div>
                      </div>
                    </div>
                  ])
                  :
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <div className="control">
                      <a className="button" onClick={function() {this.setState({ factor: true })}.bind(this)}>
                        <span className="icon">
                          <i className="fa fa-sign-in"></i>
                        </span>
                        <span>
                          Log In
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

              }
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
    }
  },
  render: function() {
    if(this.props.factor) {
      return (
        <div className="columns is-vcentered">
          <div className="widt" className={"column is-" + this.props.imageWidth + " has-text-centered"}>
              <div className="box-dash">
                <div className="box-height"><i className="fa fa-plus-circle fa-5x" onClick={function() {this.modalToggle("is-active")}.bind(this)}></i></div>
                {this.state.factor === "is-active" ?
                <AddProductModal
                  router={this.props.router}
                  toggle={this.state.factor}
                  onModalToggle={function(f) {this.modalToggle(f)}.bind(this)}
                  addItem={this.props.addItem}
                  /> : null}
              </div>
              <div className="lift"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="widt" className={"column is-" + this.props.imageWidth + " has-text-centered"}>
          <div className="box-dash">
            <div className="box-height"><i className="fa fa-plus-circle fa-5x" onClick={function() {this.modalToggle("is-active")}.bind(this)}></i></div>
            {this.state.factor === "is-active" ?
            <AddProductModal
              router={this.props.router}
              toggle={this.state.factor}
              onModalToggle={function(f) {this.modalToggle(f)}.bind(this)}
              addItem={this.props.addItem}
              /> : null}
          </div>
          <div className="lift"></div>
        </div>
      )
    }
  }
})

function ManageColumns(props) {
  return (
  <div style={{paddingBottom: 20 + "px"}}>
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
    let id = this.props.id;
    let path = "" + this.props.router.match.path + "/" + id + "";

    //es2015 use
    // let path = '/products/${id}'
    // let path = '/jeans/' + id + '';

    this.props.router.history.push(path);
  },
  toDefault: function() {
    clearTimeout(this.Timeout);
    this.setState({image: this.props.image[0]});
  },
  componentDidMount: function() {
    if(this.props.admin) {
      this.interval = setInterval(() => {
        var DOMnode = document.getElementsByClassName('image')[this.props.len - 1];
        if(DOMnode){
          var node = ReactDOM.findDOMNode(DOMnode);
          var nodeHeight = node.clientHeight;
          var nodeWidth = node.clientWidth;
          var plusIconDOM = document.getElementsByClassName('box-height')[0];
          var icon = ReactDOM.findDOMNode(plusIconDOM);
          // console.log(icon);
          var iconHeight = icon.clientHeight;

          var height = nodeHeight - iconHeight;

          document.getElementsByClassName("box-height")[0].style.marginTop = "" + height/2 + "px";
          document.getElementsByClassName("box-height")[0].style.marginBottom = "" + height/2 + "px";
     }

   }, 300)
    }
  },
  componentWillUnmount: function() {
    //clear interval
    clearInterval(this.interval);
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
            router={this.props.router}
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
            router={this.props.router}
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
                     router={this.props.router}
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
                      router={this.props.router}
                      addItem={this.props.addItem}
                      imageWidth={this.props.imageWidth}/>
                 ]);
            } else {
            return (
              <DisplayImage
                  router={this.props.router}
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
                      router={this.props.router}
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
    var arrOfObj = []
    var rem = len % a.columns;
    var rows = len / a.columns;
    var factor, columns

    var prevPos = 0;
    var Pos = a.columns;

      for(var i = 0; i < rows; i++) {
        arrOfObj.push(a.initialJeans.slice(prevPos, Pos));
        prevPos += a.columns;
        Pos += a.columns;
      }

    if(arrOfObj.length != 0) {
      if(arrOfObj != null) {
        if (arrOfObj[arrOfObj.length - 1].length != a.columns) {
            factor = false;
        } else {
            factor = true;
        }
      }
    }

    if(a.columns) {
      columns = a.columns
    } else {
      columns = this.state.columns
    }

    this.setState({
      array: arrOfObj,
      columns: columns,
      factor: factor,
      len: len,
      arrLen: arrOfObj.length
    })
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
    if(this.state.array == null || this.state.array.length === 0){
      if(this.props.admin) {
        return (

          <BoxDash
            columnWidth={this.state.columnWidth}
            addItem={this.props.addItem}/>
        );
      } else {
        return(
          <div className="container">
           <div className="column">
            <h1> This page does not contain products, please contact the site admin</h1>
            </div>
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
                            router={this.props.router}
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
                            addItem={this.props.addItem}
                            factor={true}
                            />
                          ])
                } else if(index === this.state.arrLen - 1) {
                  return ([
                    <ManageColumns
                            onColumnManagement={this.columnManagement}/>,
                    <ExtractObjects
                            router={this.props.router}
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
                          router={this.props.router}
                          addItem={this.props.addItem}
                          imageWidth={this.state.imageWidth}
                          factor={true}/>
                          ])
                } else {
                  return (
                    <ExtractObjects
                            router={this.props.router}
                            addItem={this.props.addItem}
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
                          router={this.props.router}
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
                          router={this.props.router}
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
                        router={this.props.router}
                        addItem={this.props.addItem}
                        imageWidth={this.state.imageWidth}
                        factor={true}/>
                        ])
              } else if (index === 0) {
                return ([
                  <ManageColumns
                          onColumnManagement={this.columnManagement}/>,
                  <ExtractObjects
                          router={this.props.router}
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
                        router={this.props.router}
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
                        router={this.props.router}
                        addItem={this.props.addItem}
                        imageWidth={this.state.imageWidth}
                        factor={true}/>
                   ])
              } else {
                return (
                  <ExtractObjects
                          router={this.props.router}
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
                        router={this.props.router}
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
function ListItems(props) {
  return (
      <li className="nav-item" onClick={function() {props.selectSize(props.size); props.toggleDropdown("is-closed")}}><a>{props.size}</a></li>
  );
}


var ProductPage = React.createClass({
  getInitialState: function() {
    return {
      size: "Size(s)",
      quantity: 1,
      toggle: "is-closed",
      user: "unknown"
    }
  },
  selectSize: function(num) {
    this.setState({
      size: num
    })
  },
  selectQuantity: function(num) {
    var prev = this.state.quantity;
    var curr = prev + num;
    if(curr < 1) {
      curr = 1;
    } else if(curr > 6) {
      curr = 6;
    }
     this.setState({
      quantity: curr
     })
  },
  toggleDropdown: function(toggle) {
    this.setState({
      toggle: toggle
    })
  },
  handleSubmit: function() {
    event.preventDefault();
    var review;

  },

  render: function() {

    // console.log(this.props.admin.userName)
    for(var index in this.props.initialJeans) {
      if(this.props.initialJeans[index].id == this.props.match.params.id) {
        var jean = this.props.initialJeans[index];
      }
    }
    if(jean.reviews) {
      var starReviews = 0;
      jean.reviews.forEach(function(item, index) {
        starReviews = starReviews + item.stars;
      })

      var avg = Math.ceil((starReviews / jean.reviews.length));
      var s = [];

      for(var i = 1; i < avg; i++) {
        s.push(i);
      }
      var recursion = function(num) {
        if(s.length< num) {
          s.push(0);
          recursion(num);
        }
      }
      recursion(5);
    }
    return (
    <div style={{paddingTop: 70 + "px", paddingBottom: 70 + "px"}}>


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
              {jean.reviews ? s.map(function(star, index) {
                if(star == 0) {
                  return <i key={index} className="fa fa-star-o"></i>
                } else {
                  return <i key={index} className="fa fa-star"></i>
                }
              }) : null}
              &nbsp; &nbsp;
              <strong>{jean.reviews ? jean.reviews.length : 0} Reviews</strong>
              &nbsp; &nbsp;

            </p>
            <br/>
            <p>{jean.description}</p>
            <br/>
            <br/>

            <div className="level">
              <div className="field is-grouped">
               <div className="control level-item">
                 <a className="button" type="button" onClick={function() {this.state.toggle === "is-open" ? this.toggleDropdown("is-closed") : this.toggleDropdown("is-open")}.bind(this)}>
                   {this.state.size}
                 </a>

                 <div className={"dropdown " + this.state.toggle + ""}>
                   <ul>
                   {jean.sizes.map(function(size, index) {
                     return <ListItems size={size} key={index} selectSize={function(n) {this.selectSize(n)}.bind(this)} toggleDropdown={function(t) {this.toggleDropdown(t)}.bind(this)}/>
                   }.bind(this))}
                   </ul>
                 </div>
               </div>
                <div className="control level-item">
                    <a onClick={function() {this.selectQuantity(-1)}.bind(this)}>
                      <i className="fa fa-minus cart-icon"></i>
                    </a>
                  &nbsp;
                </div>
                <div className="control level-item">
                <input type="text" name="" className="input has-text-centered" value={this.state.quantity} onChange={this.selectQuantity} style={{width: 40 + "px"}} />
                &nbsp;
                </div>
                <div className="level-item">
                <a onClick={function() {this.selectQuantity(1)}.bind(this)}>
                  <i className="fa fa-plus cart-icon"></i>
                </a>
                &nbsp; &nbsp; &nbsp;
                </div>
                <a className="button is-primary" onClick={function() {this.state.size === "Size(s)" ? alert("Choose a size") : this.props.addCart({quantity: this.state.quantity, price: jean.price, image: jean.image, title: jean.title, size: this.state.size, id: jean.id})}.bind(this)}>Add to cart</a>


                </div>
            </div>

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
                    <strong>Color</strong>
                  </td>
                  <td>{jean.color}</td>
                </tr>
                <tr>
                  <td className="has-text-right">
                    <strong>Fit</strong>
                  </td>
                  <td>{jean.fit}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div ref="reviews" className="section">
      <div className="container">
      {jean.reviews ?
        <div className="tabs">
          <ul>
            <li><a>Reviews</a></li>
          </ul>
        </div>
        : null}
        {this.props.loggedIn || this.props.cart?
        <div className="box">
          <div className="level">
            <div className="field is-grouped">
              <div className="control level-item">
                <p className="level-item">{this.props.userName}</p>
              </div>
              <div className="verticalLine">
              </div>
              <div className="control level-item">
              <input className="input level-item" placeholder="stars" type="number" name="stars" min="0" max="5" ref={function(input) {this.stars = input;}.bind(this)}/>
              </div>
            </div>
          </div>
          <form onSubmit={function() {
              event.preventDefault();
              this.props.addReview(jean, {
                    user: this.props.userName,
                    review: this.review.value,
                    stars: this.stars.value
                  }, this.props.match.path)
                  this.review.value = '';
                }.bind(this)}>
            <input className="input" type="text" placeholder="write a review..." ref={function(input) {this.review = input;}.bind(this)}/>
          </form>
        </div>
        : null}
        {jean.reviews ? jean.reviews.map(function(reviews, index) {
          var stars = [];
          for(var i = 0; i < reviews.stars; i++) {
            stars.push(i);
          }
          return (
            <div key={index} className="box">
              <div className="level">
                <div className="field is-grouped">
                  <div className="control level-item">
                    <p className="level-item">{reviews.user}</p>
                  </div>
                  <div className="verticalLine">
                  </div>
                  <div className="control level-item">
                  <p className="level-item"> {stars.map(function(star, index) {
                    return <i key={index} className="fa fa-star"></i>
                  })}</p>
                  </div>
                </div>
              </div>
              <p>{reviews.review}</p>
            </div>
          )
        }) : null}
        </div>
      </div>

  </div>
  )}
})



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
      <Link to="/home">Home</Link>
      <Link to="/jeans">Jeans</Link>
      <Link to="/shirts">Shirts</Link>
    </div>
  );
}
var ShowCase = React.createClass({
  onAddItem: function(data, path) {
    var nextState = [...this.state.data];
    data.id = nextID;
    data.index = 8;
    nextState.push(data);

    var arr = [];
    nextState.forEach(function(data, index) {
      data.index = index;
      arr.push(data);
    });
    this.props.updateParent(nextState, path);
    this.setState({
      data: arr,
    })

    nextID += 1;
  },
  onDeleteItem: function(data, path) {
    var nextState = [...this.state.data];
    nextState.splice(data, 1);

    this.setState({
      data: nextState
    })
    this.props.updateParent(nextState, path);
  },
  borderHover: function(e, style) {
    myArr.push(e.target.id)
      if(myArr[0] == e.target.id && e.type == "dragover") {
        e.target.style.boxShadow = "inset 0 1px 1px rgba(0,0,0, 0.5), 0 0 50px rgb(66, 134, 244)";
      } else if(e.type == "drop") {
        e.target.style.boxShadow = "none"
        myArr = [];
      } else {
        e.target.style.boxShadow = style;
      }

  },
  dropZone: function(e, path) {
    var nextState = [...this.state.data];
    var cell = e.target;
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

    this.props.updateParent(nextState, path);
    this.setState({
      data: nextState
    })
  },
  getInitialState: function() {
    return {
      data: [...this.props.initialJeans]
    }
  },
  render: function() {
    var arr = [];
    this.state.data.forEach(function(data, index) {
      data.index = index;
      arr.push(data);
    });
    return (
      <GridSystem
        router={this.props.router}
        initialJeans={arr}
        dropZone={function(e, p) {this.dropZone(e, p)}.bind(this)}
        borderHover={function(e, style, id) {this.borderHover(e, style, id)}.bind(this)}
        addItem={function(d, p) {this.onAddItem(d, p)}.bind(this)}
        deleteItem={function(d, p) {this.onDeleteItem(d, p)}.bind(this)}
        admin={this.props.admin}
        loggedIn={this.props.loggedIn}
        getColumns={this.props.getColumns}
        columns={this.props.columns}
        />
    )
  }
})

var cartID = 1;

var MainApp = React.createClass({
  update: function(nextState, path) {
    var start_pos = path.indexOf("/") + 1;
    var end_pos = path.length;
    var prop = path.substring(start_pos, end_pos);
    if(prop === "jeans") {
      this.setState({
        products: {
          [prop]: nextState,
          shirts: this.state.products.shirts
        }
      })
    }
    if(prop === "shirts") {
      this.setState({
        products: {
          [prop]: nextState,
          jeans: this.state.products.jeans
        }
      })
    }

  },
  addReview: function(data, review, route) {
    if(route === "/jeans/:id") {
      for(var index in this.state.products.jeans) {
        if(this.state.products.jeans[index].id == data.id) {

          var jean = this.state.products.jeans[index];
          if(this.state.products.jeans[index].reviews == undefined) {
            jean.reviews = [];
            jean.reviews.push(review);
          } else {
            var cReviews = [...jean.reviews];
            cReviews.push(review)
            jean.reviews = cReviews;
          }

          var cState = [...this.state.products.jeans];
          cState.splice(index, 1, jean);

          this.setState({
            products: {
              jeans: cState,
              shirts: this.state.products.shirts
              }
          })
        }
      }
    } else {
      for(var index in this.state.products.shirts) {
        if(this.state.products.shirts[index].id == data.id) {

          var shirt = this.state.products.shirts[index];
          if(this.state.products.shirts[index].reviews == undefined) {
            shirt.reviews = [];
            shirt.reviews.push(review);
          } else {
            var cReviews = [...shirt.reviews];
            cReviews.push(review)
            shirt.reviews = cReviews;
          }

          var cState = [...this.state.products.shirts];
          cState.splice(index, 1, shirt);

          this.setState({
            products: {
              jeans: this.state.products.jeans,
              shirts: cState
              }
          })
        }
      }
    }

  },
  getColumns: function(columns) {
    this.setState({
      columns: columns
    })
  },
  getAuth: function(authData) {
    if(authData.admin) {
      for(var prop in this.props.initialAdmins) {
        if(this.props.initialAdmins[prop].id === authData.id) {
           this.admin = this.props.initialAdmins[prop];
           if(this.admin.cart) {
             var cart = [...this.admin.cart];
           } else {
             var cart = [];
           }
           this.setState({
             admin: true,
             authID: this.props.initialAdmins[prop].id,
             userName: this.props.initialAdmins[prop].userName,
             loggedIn: true,
             cart: cart
           })
        }
      }
    } else {
      for(var prop in this.state.users) {
        if(this.state.users[prop].id === authData.id) {
           this.user = this.state.users[prop];
           if(this.user.cart) {
             var cart = [...this.user.cart];
           } else {
             var cart = [];
           }
             this.setState({
               authID: this.state.users[prop].id,
               userName: this.state.users[prop].userName,
               loggedIn: true,
               cart: cart
             })
        }
      }
    }


  },
  addCart: function(item) {
    if(this.admin) {
      if(this.admin.cart) {
        var cart = [...this.admin.cart];
      } else {
        var cart = [...this.state.cart];
      }
      cart.push(item);
      this.admin.cart = cart;
      this.setState({
        cart: cart,
        id: cartID
      })
      cartID += 1;
    } else {
      if(this.state.cart) {
        var cart = [...this.state.cart];
      } else {
        var cart = [];
      }

      cart.push(item);
      this.setState({
        cart: cart,
        id: cartID
      })
      cartID += 1;
    }



   if(this.user) {
      if(this.user.cart) {
        var cart = [...this.user.cart];
      } else {
        var cart = [...this.state.cart];
      }
      cart.push(item);
      this.user.cart = cart;
      this.setState({
        cart: cart,
        id: cartID
      })
      cartID += 1;
    } else {
      if(this.state.cart) {
        var cart = [...this.state.cart];
      } else {
        var cart = [];
      }

      cart.push(item);
      this.setState({
        cart: cart,
        id: cartID
      })
      cartID += 1;
    }

  },
  removeCart: function(index) {
    if(this.admin) {
      var cart = [...this.admin.cart];
      cart.splice(index, 1);
      this.admin.cart = cart;
      this.setState({
        cart: cart
      })
    } else {
      var cart = [...this.state.cart];
      cart.splice(index, 1);
      this.setState({
        cart: cart
      })
    }

    if(this.user) {
      var cart = [...this.user.cart];
      cart.splice(index, 1);
      this.user.cart = cart;
      this.setState({
        cart: vart
      })
    } else {
      var cart = [...this.state.cart];
      cart.splice(index, 1);
      this.setState({
        cart: cart
      })
    }

  },
  onLogout: function() {
    this.setState({
      loggedIn: false,
      admin: null,
      authID: null,
      cart: null
    })
  },
  addUser: function(user) {
    var users = [...this.state.users];
    users.push(user);
    this.setState({
      users: users
    })
  },
  getInitialState: function() {
    return {
      users: this.props.initialUsers,
      admins: this.props.initialAdmins,
      columns: 4,
      products: {
        shirts: this.props.initialShirts,
        jeans: this.props.initialJeans
      },
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
    var hostName = window.location;
    var routes = ["shirts", "jeans"];
    return (
      <HashRouter>
        <div id="main">
          <Navbar addUser={function(user) {this.addUser(user)}.bind(this)} openNav={this.openNav} users={this.state.users} logout={this.onLogout} accountID={this.state.authID} admins={this.state.admins} removeCart={function(i) {this.removeCart(i)}.bind(this)} getAuth={function(a) {this.getAuth(a)}.bind(this)} loggedIn={this.state.loggedIn} admin={this.state.admin} cart={this.state.cart}/>

          <SideNav
            closeNav={this.closeNav}
            openNav={this.openNav}
            />
            <div style={{padding: 50 + "px"}}>
              <Switch>
              {routes.map(function(data, index) {
                return ([
                  <Route exact path={"/" + data + ""} key={index} render={function(router) {return (<ShowCase initialJeans={this.state.products[data]} updateParent={function(n,p) {this.update(n,p)}.bind(this)} router={router} loggedIn={this.state.loggedIn} columns={this.state.columns} admin={this.state.admin} getColumns={function(c) {this.getColumns(c)}.bind(this)} />)}.bind(this)} />,
                  <Route path={"/" + data + "/:id"} render={function({match}) {return (<ProductPage initialJeans={this.state.products[data]} addReview={function(d, r, p) {this.addReview(d, r, p)}.bind(this)} addCart={function(i) {this.addCart(i)}.bind(this)} loggedIn={this.state.loggedIn} admin={this.state.admin} userName={this.state.userName} match={match}/>)}.bind(this)} />
                ])
              }.bind(this))}

                <Route exact path="/" render={function() {return (<Redirect to="/home" />)}} />
                <Route path="/home" component={Home} />
                <Route path="/account/:id" render={function({match}) {return(<Account hostName={hostName} accountID={this.state.authID} users={this.state.users} match={match}/>)}.bind(this)}/>
                <Route path="/admin/:id" render={function({match}) {return(<Account hostName={hostName} accountID={this.state.authID} users={this.state.admins} match={match}/>)}.bind(this)}/>

                <Route path="/cart" render={function({match}) {return(<Cart accountID={this.state.authID} users={this.state.admins} match={match}/>)}.bind(this)} />
                <Route component={NotFound} />
              </Switch>
            </div>

        </div>
      </HashRouter>

    )
  }
})

                //
                // <Route exact path='/jeans' render={function(router) {return (<ShowCase initialJeans={this.state.products.jeans} updateParent={function(n) {this.update(n)}.bind(this)} router={router} loggedIn={this.state.loggedIn} columns={this.state.columns} admin={this.state.admin} getColumns={function(c) {this.getColumns(c)}.bind(this)} />)}.bind(this)} />
                // <Route path="/jeans/:id" render={function({match}) {return (<ProductPage initialJeans={this.state.products.jeans} match={match}/>)}.bind(this)} />
                //
                // <Route exact path='/shirts' render={function(router) {return (<ShowCase initialJeans={this.state.products.shirts} updateParent={function(n) {this.update(n)}.bind(this)} router={router} loggedIn={this.state.loggedIn} columns={this.state.columns} admin={this.state.admin} getColumns={function(c) {this.getColumns(c)}.bind(this)} />)}.bind(this)} />
                // <Route path="/shirts/:id" render={function({match}) {return (<ProductPage initialJeans={this.state.products.shirts} match={match}/>)}.bind(this)} />



function NotFound() {
  return(
    <div className="columns">
      <div className="column is-vcentered has-text-centered">
      <div style={{marginTop: 20 + "%"}}>
        <i className="fa fa-exclamation-triangle fa-5x"></i>
        <h1>404 Not Found</h1>
      </div>
      </div>
    </div>
  )
}
function Account(props) {
    if(props.accountID != undefined) {
      if(props.accountID == props.match.params.id) {
        for(var index in props.users) {
          if(props.users[index].id == props.accountID) {
            var user = props.users[index];
          }
        }
      }
    }
    try {
      var user = user.id
    } catch(e) {
      alert("Error: 301 permission denied");
      window.location = props.hostName.origin;
    }
  return(
    <div className="column is-6 is-offset-3">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title"> Account Info </div>
        </div>
        <div className="card-content">
          <div className="content">
            <table>
              <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>email</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            </table>
            <br/>
          </div>
        </div>
    </div>
  </div>
  )
}


function Cart() {
  return(
    <div>
      <h1>this is cart</h1>
    </div>
  )
}

function Home() {
  return (

      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>Here are the log in credentials for <strong><u>Admin</u></strong></p>
            <p className="content is-small"><strong><u>username:</u></strong> admin</p>
            <p className="content is-small"><strong><u>password:</u></strong> admin</p>
          </div>
          <div className="content">
            <p>Here are the log in credentials for <strong><u>User</u></strong></p>
            <p className="content is-small"><strong><u>username:</u></strong> user1</p>
            <p className="content is-small"><strong><u>password:</u></strong> password</p>
          </div>
        </div>
        <div className="card-footer">
          <p className="card-footer-item">If you have any questions or comments regarding this project. You can contact me <acronym title="colelogan19@yahoo.com"> here </acronym></p>
        </div>
      </div>
  )
}


// <ShowCase initialJeans={this.props.initialJeans} />
ReactDOM.render(<MainApp initialJeans={JEANS} initialUsers={USERS} initialAdmins={ADMINS} initialShirts={SHIRTS}/>, document.getElementById("root"));
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

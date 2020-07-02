/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      correo: "",
      celular: "",
    };
  }

  componentDidMount(){
    //An array of assets
    let scripts = [
        { src: "assets/js/scripts.js" },
    ]
    //Append the script element on each iteration
    // eslint-disable-next-line array-callback-return
    scripts.map(item => {
        const script = document.createElement("script")
        script.src = item.src
        script.async = true
        document.body.appendChild(script)
    })
 }

  handleName = (event) => {
    this.setState({
      nombre: event.target.value,
    });
  };

  handleEmail = (event) => {
    this.setState({
      correo: event.target.value,
    });
  };

  handlePhone = (event) => {
    this.setState({
      celular: event.target.value,
    });
  };

  handleSubmit = async(event) => {
    console.log("nombre-->",this.state.nombre);
    console.log("correo-->",this.state.correo);
    console.log("celular-->",this.state.celular);
    //clear all session
    localStorage.clear();
    axios
    .post("https://bambut.herokuapp.com/register",{
      nombre: this.state.nombre,
      correo: this.state.correo,
      celular: this.state.celular,
    })
    .then(response =>{
      console.log(response);
      //alert("se registro correctamente")
      toast.success('Usuario registrado')
      localStorage.setItem('mydata', this.state.correo)
      this.props.history.push("/inicio");
      //window.location='/inicio';
    })
    .catch(error => {
      console.log(error);
      //alert("correo o numero incorrectos")
      toast.error('usuario invalido')
      this.setState({
        nombre:"",
        correo:"",
        celular:""
      });
      //this.props.history.Push(`/inicio: ${ this.state.name }`);
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="top-content">
      {/*used toast alert */}
      <div className="form-group">
          <ToastContainer />
      </div>
        {/*<div className="">*/}
          <div className="container">
              <div className="text">
                <h1>
                  <strong>Bambut</strong> Formulario de registro
                </h1>
              </div>
            <div className="row">
              <div className="col-sm-6 phone">
                <img src="assets/img/iphone.png" alt="" />
              </div>
              <div className="col-sm-5 form-box">
                <div className="form-top">
                  <div className="form-top-left">
                    <h3>Registrate con nosotros</h3>
                    <p>llena este pequeño formulario</p>
                  </div>
                  <div className="form-top-right">
                    <i className="fa fa-pencil"></i>
                  </div>
                </div>
                
                <div className="form-bottom">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-first-name">
                        Name
                      </label>
                      <input
                        type="text"
                        name="form-first-name"
                        placeholder="Nombres..."
                        className="form-first-name form-control"
                        id="form-first-name"
                        value={this.state.nombre}
                        onChange={this.handleName}
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-last-name">
                        correo
                      </label>
                      <input
                        type="text"
                        name="form-last-name"
                        placeholder="Correo..."
                        className="form-last-name form-control"
                        id="form-last-name"
                        value={this.state.correo}
                        onChange={this.handleEmail}
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-email">
                        celular
                      </label>
                      <input
                        type="text"
                        name="form-email"
                        placeholder="Celular..."
                        className="form-email form-control"
                        id="form-email"
                        value={this.state.celular}
                        onChange={this.handlePhone}
                      />
                    </div>
                    <button type="submit" className="btn">
                      ¡Registrate!
                    </button>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        {/*</div>*/}
      </div>
    );
  }
}

export default Landing;

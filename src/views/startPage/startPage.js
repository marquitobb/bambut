/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const sectionStyle = {
  width: "100%",
  height: "100%",
  //backgroundImage:"url(https://disruptivo.tv/wp-content/uploads/2020/06/Landing-page-background.jpg)",
  //backgroundImage:"url(https://i.pinimg.com/736x/9c/76/1e/9c761ebc55f028a04b41a68fcd6ae1c7.jpg)",
  backgroundImage:"url(https://image.freepik.com/foto-gratis/fondo-textura-papel-arrugado-blanco_49683-4063.jpg)",
};

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      correo: localStorage.getItem('mydata'),
      celular: "",
    };
    if (!localStorage.getItem('mydata')) {
      window.location="/"
    }
  }

  async componentDidMount(){
    await this.fetchAPI()
  }

  fetchAPI = async() =>{
    const url = `https://bambut.herokuapp.com/find?correo=${this.state.correo}`
    let res = await fetch(url)
    const data = await res.json()

    const nom = data.nombre
    const cel = data.celular
    console.log(nom);
    console.log(cel);

    await this.setState({
      nombre: nom,
      celular: cel
    })
  }

  render() {
    return (
      <div>
        <div className="container" style={sectionStyle}>
          <h1 className="text">Bienvenido</h1>
          <h3>
            Gracias <strong>{this.state.nombre}</strong>, nos pondremos en
            contacto contigo al número <strong>{this.state.celular}</strong> o a
            través de tu correo <strong>{this.state.correo}</strong>
          </h3>
        </div>
        <img src="https://miro.medium.com/max/3840/1*NLjyYpS3qqBK7lNrJUSCKg.jpeg" />
      </div>
    );
  }
}

export default StartPage;

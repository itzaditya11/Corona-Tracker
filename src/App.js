import React from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api/index";
import image from "./image/image.png";
import Footer from "./components/Footer/Footer";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <>
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;

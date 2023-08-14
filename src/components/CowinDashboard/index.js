import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

class CowinDashboard extends Component {
  state = {
    vaccinCoverage: '',
    vaccinByAge: '',
    vaccinByGender: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const vaccinationCoverage = data.last_7_days_vaccination
    const vaccinationByAge = data.vaccination_by_age
    const vaccinationByGender = data.vaccination_by_gender

    this.setState({
      vaccinCoverage: vaccinationCoverage,
      vaccinByAge: vaccinationByAge,
      vaccinByGender: vaccinationByGender,
      isLoading: false,
    })
  }

  render() {
    const {vaccinByAge, vaccinByGender, vaccinCoverage, isLoading} = this.state
    return (
      <div className="bg">
        <div className="fkljads">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />

          <p>Co-Win</p>
        </div>
        <h1>Cowin Vaccination in india</h1>
        <p className="p">Vaccination Coverage</p>
        {isLoading ? (
          <div className="loader">
            <Loader type="ThreeDots" />
          </div>
        ) : (
          <div>
            <VaccinationCoverage vaccinData={vaccinCoverage} />
            <VaccinationByAge ageData={vaccinByAge} />
            <VaccinationByGender genderData={vaccinByGender} />
          </div>
        )}
      </div>
    )
  }
}

export default CowinDashboard

import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

const status = {
  inProgress: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}
class CowinDashboard extends Component {
  state = {
    vaccinCoverage: '',
    vaccinByAge: '',
    vaccinByGender: '',
    apiStatus: status.inProgress,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const options = {
      method: 'GET',
    }

    const response = await fetch(vaccinationDataApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const vaccinationCoverage = data.last_7_days_vaccination
      const vaccinationByAge = data.vaccination_by_age
      const vaccinationByGender = data.vaccination_by_gender
      this.setState({
        vaccinCoverage: vaccinationCoverage,
        vaccinByAge: vaccinationByAge,
        vaccinByGender: vaccinationByGender,
        apiStatus: status.success,
      })
    } else {
      this.setState({apiStatus: status.failure})
    }
  }

  loadingView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" />
    </div>
  )

  successView = () => {
    const {vaccinCoverage, vaccinByGender, vaccinByAge} = this.state
    return (
      <div>
        <VaccinationCoverage vaccinData={vaccinCoverage} />
        <VaccinationByGender genderData={vaccinByGender} />
        <VaccinationByAge ageData={vaccinByAge} />
      </div>
    )
  }

  failureView = () => (
    <div className="failure">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  getResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case status.success:
        return this.successView()
      case status.failure:
        return this.failureView()
      case status.inProgress:
        return this.loadingView()
      default:
        return null
    }
  }

  render() {
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
        {this.getResults()}
      </div>
    )
  }
}

export default CowinDashboard

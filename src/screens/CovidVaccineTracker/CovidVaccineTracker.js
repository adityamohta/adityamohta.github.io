// External Imports
import React from "react";
import moment from "moment";
import Notification from "react-web-notification"
// My Imports
import './styles.sass';


class CovidVaccineTracker extends React.Component {

  state = {
    title: '',
    notificationSound: false,
    districts: [],
    states: [],
    availableCenters: [],
    district_id: 140,
    state_id: 9,
    age: 18,
  }

  async componentDidMount() {
    this.interval = setInterval(this.handleCheckVaccineAvailability, 20 * 1000); // every 20 seconds
    await this.getStates();
    await this.getDistricts(this.state.state_id)
    this.handleSelectDistrict(140)

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getStates = async () => {
    const url = 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
    const response = await fetch(url)
    const result = await response.json()
    this.setState({states: result.states})
  }

  getDistricts = async (state_id) => {
    const url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`
    const response = await fetch(url)
    const result = await response.json()
    this.setState({districts: result.districts})
  }

  handleSelectState = (state_id) => {
    this.setState({state_id});
    this.getDistricts(state_id);
  }

  handleSelectDistrict = (district_id) => {
    this.setState({district_id: district_id}, () => {
      this.handleCheckVaccineAvailability();
    });
  }

  handleCheckVaccineAvailability = async () => {
    const {district_id, age} = this.state;
    let availableCenters = [];

    if (district_id) {
      console.warn('District ID: ', district_id)
      const today = moment().format('DD-MM-YYYY')
      const query = `?district_id=${district_id}&date=${today}`
      const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict${query}`
      console.warn('Request URL: ', url)

      const response = await fetch(url)
      if (response.status === 200) {
        const result = await response.json()
        const centers = result.centers || []
        centers.map(
          center => {
            (center.sessions || []).map(
              session => {
                availableCenters.push({
                  'session_id': session.session_id,
                  'name': center['name'],
                  'address': center['address'],
                  'state_name': center['state_name'],
                  'district_name': center['district_name'],
                  'pincode': center['pincode'],
                  'from': center['from'],
                  'to': center['to'],
                  'fee_type': center['fee_type'],
                  'vaccine': session['vaccine'],
                  'date': session['date'],
                  'min_age_limit': session['min_age_limit'],
                  'available_capacity': session['available_capacity'],
                  'slots': session['slots'].join(', ')
                })
              }
            )
          }
        )
      }
    }

    for (let i in availableCenters) {
      let availableCenter = availableCenters[i];
      if (availableCenter.min_age_limit <= age && availableCenter.available_capacity > 0) {
        this.handleNotification(availableCenter.district_name, age);
        break;
      }
    }

    this.setState({availableCenters});
  }

  handleNotificationOnShow = (e, tag) => {
    this.playSound();
    console.log(e, 'Notification shown tag:' + tag);
  }

  handleNotificationOnClick = (e, tag) => {
    console.log(e, 'Notification clicked tag:' + tag);
  }

  playSound = () => {
    if (this.state.notificationSound) {
      let audio = new Audio('/assets/mp3/ring.mp3');
      audio.play();
    }
  }

  handleNotification = (districtName, age) =>  {
    if(this.state.ignore) {
      return;
    }
    const now = Date.now();
    const title = `Vaccine available!`;
    const body = `Vaccine for ${age} is available at ${districtName}`;
    const tag = now;
    const icon = '/assets/img/favicon.ico?v=2';
    const options = {
      tag: tag,
      body: body,
      icon: icon,
      lang: 'en',
      dir: 'ltr',
      sound: './sound.mp3'  // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
    }
    this.setState({
      title: title,
      options: options
    });
  }

  render() {
    let {state_id, district_id, states, districts, age, availableCenters, notificationSound} = this.state;

    availableCenters = availableCenters.filter(availableCenter => availableCenter.min_age_limit <= age)
    availableCenters.sort((a,b) => b.available_capacity - a.available_capacity)

    return (
      <div className="text-center">
        <h2 className="pt-5">Covid Vaccine Tracker</h2>
        <div>
          <div>
            <label htmlFor="sound">Notification Sound</label>
            <input id="sound" type="checkbox" checked={notificationSound}
                   onChange={() => this.setState({notificationSound: !notificationSound})}/>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={age} onChange={e => this.setState({age: e.target.value})}/>
          </div>
          <div>
            <label htmlFor="state">State</label>
            <select name="state" onChange={e => this.handleSelectState(e.target.value)}
                    value={state_id}>
              <option value={undefined}>Please select a state</option>
              {
                !!states &&
                states.map(
                  (state, index) => (
                    <option value={state.state_id} key={index}>{state.state_name}</option>
                  )
                )
              }
            </select>
          </div>

          {
            !!state_id &&
            <div>
              <label htmlFor="district">District</label>
              <select name="district" id="" onChange={e => this.handleSelectDistrict(e.target.value)}
                      value={district_id}>
                <option value={undefined}>Please select a district</option>
                {
                  !!districts &&
                  districts.map(
                    (district, index) => (
                      <option value={district.district_id} key={index}>{district.district_name}</option>
                    )
                  )
                }
              </select>
            </div>
          }
        </div>

        <table width="100%" border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>State</th>
              <th>District</th>
              <th>Pincode</th>
              <th>From</th>
              <th>To</th>
              <th>Fee Type</th>
              <th>Vaccine</th>
              <th>Date</th>
              <th>Age Limit</th>
              <th>Available Capacity</th>
              <th>Slots</th>
            </tr>
          </thead>
          <tbody>
          {
            !!availableCenters &&
            availableCenters.filter(availableCenter => availableCenter.min_age_limit <= age).map(availableCenter => {
              return (
                <tr style={{fontSize: 13, backgroundColor: availableCenter.available_capacity > 0 ? '#0fff00': '#fa9292'}}
                    key={availableCenter.session_id}>
                  <td>{availableCenter.name}</td>
                  <td style={{fontSize: 13}}>{availableCenter.address}</td>
                  <td>{availableCenter.state_name}</td>
                  <td>{availableCenter.district_name}</td>
                  <td>{availableCenter.pincode}</td>
                  <td>{availableCenter.from}</td>
                  <td>{availableCenter.to}</td>
                  <td>{availableCenter.fee_type}</td>
                  <td>{availableCenter.vaccine}</td>
                  <td style={{fontSize: 13}}>{availableCenter.date}</td>
                  <td>{availableCenter.min_age_limit}</td>
                  <td>{availableCenter.available_capacity}</td>
                  <td style={{fontSize: 10}}>{availableCenter.slots}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
        <div>
          <Notification
            ignore={this.state.ignore && this.state.title !== ''}
            onShow={this.handleNotificationOnShow}
            onClick={this.handleNotificationOnClick}
            timeout={5000}
            title={this.state.title}
            options={this.state.options}
            swRegistration={this.props.swRegistration}
          />
        </div>
      </div>
    );
  }
}

export default CovidVaccineTracker;

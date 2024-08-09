import {Component} from 'react'

import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsArray: [],
    showPassword: false,
    searchValue: '',
    isPasswordAdded: false,
  }

  onDelete = id => {
    const {passwordsArray} = this.state
    const filteredArray = passwordsArray.filter(each => each.id !== id)
    this.setState({
      passwordsArray: filteredArray,
    })
  }

  handleSearch = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  onChangeCheckbox = event => {
    this.setState({
      showPassword: event.target.checked,
    })
  }

  onAddNewPassword = event => {
    event.preventDefault()
    const {website, username, password, passwordsArray} = this.state
    const newPassword = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState({
      passwordsArray: [...passwordsArray, newPassword],
      website: '',
      username: '',
      password: '',
      isPasswordAdded: true,
    })
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    const {
      website,
      username,
      password,
      passwordsArray,
      showPassword,
      searchValue,
      isPasswordAdded,
    } = this.state

    const searchResults = passwordsArray.filter(each =>
      each.website.toLowerCase().includes(searchValue.toLowerCase()),
    )

    console.log(isPasswordAdded)
    return (
      <div className="bg-password-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="input-container">
          <div className="image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
              alt="password manager"
              className="password-manager"
            />
          </div>
          <div className="form">
            <form style={{width: '100%'}} onSubmit={this.onAddNewPassword}>
              <h1 className="add-password-heading">Add New Password</h1>
              <div className="input-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  alt="website"
                  className="icon"
                />
                <hr />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                  className="icon"
                />
                <hr />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="input-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                  className="icon"
                />
                <hr />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>

              <div style={{textAlign: 'center'}}>
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-top-container">
            <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
              <h1 className="password-heading">Your Passwords</h1>
              <p className="count ">{passwordsArray.length}</p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '6px',
                width: '50%',
              }}
            >
              <img
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="icon"
              />
              <hr />
              <input
                type="search"
                placeholder="Search..."
                className="input input-1"
                value={searchValue}
                onChange={this.handleSearch}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div style={{textAlign: 'right'}}>
            <input
              type="checkbox"
              id="checkbox"
              value={showPassword}
              onChange={this.onChangeCheckbox}
            />
            <label htmlFor="checkbox" style={{color: 'white'}}>
              Show Passwords
            </label>
          </div>
          {searchResults.length === 0 ? (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="password-manager"
              />
              <p style={{textAlign: 'center'}}>No Passwords</p>
            </>
          ) : (
            <ul className="password-item-container">
              {searchResults.map(each => (
                <PasswordItem
                  onDelete={this.onDelete}
                  showPassword={showPassword}
                  key={each.id}
                  data={each}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager

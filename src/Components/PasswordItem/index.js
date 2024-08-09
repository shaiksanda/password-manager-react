import './index.css'

const PasswordItem = props => {
  const {data, showPassword, onDelete} = props
  const {id, website, username, password} = data

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <li className="item">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <p className="website-initial">{website[0]}</p>
          <div>
            <p>{website}</p>
            <p>{username}</p>
            <p>
              {showPassword ? (
                password
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                  alt="stars"
                  className="stars-image"
                />
              )}
            </p>
          </div>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={handleDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem

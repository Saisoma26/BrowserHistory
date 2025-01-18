import './index.css'

const HistoryItem = props => {
  const {itemDetails, deletefunc} = props
  const {timeAccessed, logoUrl, id, title, domainUrl} = itemDetails

  const deletelistitem = () => {
    deletefunc(id)
  }

  return (
    <li className="listitem">
      <p className="time">{timeAccessed}</p>
      <div className="name-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainurl">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="b"
        data-testid="delete"
        onClick={deletelistitem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="deleteicon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem

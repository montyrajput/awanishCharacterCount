import './index.css'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <li className="user-input-container">
      <p className="description">
        {userEnteredText} : {textLength}
      </p>
    </li>
  )
}

export default UserInput

import './ButtonFolder.css'

const ButtonFolder = props => {
  const {onUpdateData, data, languageID} = props
  const {id, imageUrl, buttonText, imageAltText} = data
  const isCheckLanguage = id === languageID
  const highlight = isCheckLanguage && 'highlight'
  const onUpdateChanges = () => {
    onUpdateData(id, imageUrl, imageAltText, buttonText)
  }

  return (
    <li className="list-el" key={id}>
      <button
        className={`lang-btns ${highlight}`}
        type="button"
        onClick={onUpdateChanges}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonFolder

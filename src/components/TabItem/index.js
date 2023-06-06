import './index.css'

const TabItem = props => {
  const {tabDetails, upDatedTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClassNameChanges = isActive ? 'active-tab-btn' : ''

  const onclickTabItems = () => {
    upDatedTabItem(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${onClassNameChanges}`}
        onClick={onclickTabItems}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

// Write your code here
import {useState} from 'react'

import unlockStyle from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(false)

  const toggleLock = () => {
    setIsLocked(!isLocked)
  }
  const getImg = () => {
    return isLocked
      ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
      : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  }

  return (
    <div>
      <img src={getImg()} alt={isLocked ? 'unlock' : 'lock'} />
      <p>{isLocked ? 'Your Device is Unlocked' : 'Your Device is Locked'}</p>
      <button onClick={toggleLock}>{isLocked ? 'Lock' : 'Unlock'}</button>
    </div>
  )
}

export default Unlock

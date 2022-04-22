import './SwitchToggleButton.css';

function SwitchToggleButton() {
  return (
    <div>
        <label className='switch'>
              <input type="checkbox" />
              <span className='slider'></span>
        </label>
    </div>
  )
}

export default SwitchToggleButton
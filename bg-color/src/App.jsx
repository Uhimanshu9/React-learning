import { useState } from 'react'
import './App.css'

const colorList = ["red", "blue", "green", "yellow", "black"]

function App() {
  const [color, setColor] = useState("white")

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor)
  }

  return (
    <div className="mains" style={{ backgroundColor: color, height: "100vh", padding: 0, margin: 0 }}>
      <div className="bottom-bar">
        {colorList.map((col) => (
          <button
            key={col}
            className={`color-button `}
            onClick={() => handleColorChange(col)}
          >
            {col}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App

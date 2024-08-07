import React from 'react'

import './name-of-theme.css'

const NameOfTheme = ({ text, isChecked, onClick  }) => {
    return (
        <div className="checked-theme-container">
            {/*Добавлено: обработка нажатия на кнопку*/}
          <button type="button" className="checked-theme-button button" onClick={onClick}>
            <svg viewBox="0 0 1024 1024" className="checked-theme-icon">
              <path d={isChecked ? "M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z" :
              "M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531z"
                }></path>
            </svg>
            <span className="checked-theme-text">{text}</span>
          </button>
        </div>
  )
}

export default NameOfTheme

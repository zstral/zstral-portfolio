'use client';
import React from 'react';
import styled from 'styled-components';

const Switch = ({ className='' }) => {
  return (
    <StyledWrapper className={`${className}`}>
      <div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" className="checkbox"/>
          <span className="slider"/>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 60px;
    height: 30px;
    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 30px; /* Reducido de 50px */
    background-color: var(--dark);
    border-radius: 15px; /* Reducido de 25px */
    cursor: pointer;
    border: 2px solid var(--dark); /* Reducido de 3px para proporción */
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px; /* Reducido de 25px */
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    box-shadow: inset 7px -2px 0px 0px var(--light);
    background-color: var(--dark);
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    transform: translateX(30px); /* Ajustado de 50px */
    background-color: var(--dark);
    box-shadow: none;
  }
`;
export default Switch;

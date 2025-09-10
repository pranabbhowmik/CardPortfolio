import React, { useRef } from "react";
import styled from "styled-components";

const Switch = () => {
  const labelRef = useRef(null);

  const handleAnimationEnd = (e) => {
    if (e.animationName === "installed") {
      // Trigger resume download after animation ends
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // ✅ put your resume path here
      link.download = "Pranab_Bhowmik_Resume.pdf"; // ✅ rename file if you want
      link.click();
    }
  };

  return (
    <StyledWrapper>
      <div className="container">
        <label
          className="label"
          ref={labelRef}
          onAnimationEnd={handleAnimationEnd}
        >
          <input type="checkbox" className="input" />
          <span className="circle">
            <svg
              className="icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              />
            </svg>
            <div className="square" />
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    background-color: transparent;
    border: 2px solid #ffdb70;
    display: flex;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.4s ease;
    padding: 5px;
    position: relative;
  }

  .label::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ##ffdb70;
    width: 8px;
    height: 8px;
    transition: all 0.4s ease;
    border-radius: 100%;
    margin: auto;
    opacity: 0;
    visibility: hidden;
  }

  .label .input {
    display: none;
  }

  .label .circle {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #d98e04;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    position: relative;
    box-shadow: 0 0 0 0 rgb(255, 255, 255);
    overflow: hidden;
  }

  .label .circle .icon {
    color: #fff;
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  .label .circle .square {
    aspect-ratio: 1;
    width: 15px;
    border-radius: 2px;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  .label .circle::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #4b1a00;
    width: 100%;
    height: 0;
    transition: all 0.4s ease;
  }

  .label:has(.input:checked) {
    width: 52px;
    animation: installed 0.4s ease 3.5s forwards;
  }

  .label:has(.input:checked)::before {
    animation: rotate 3s ease-in-out 0.4s forwards;
  }

  .label .input:checked + .circle {
    animation: pulse 1s forwards, circleDelete 0.2s ease 3.5s forwards;
    rotate: 180deg;
  }

  .label .input:checked + .circle::before {
    animation: installing 3s ease-in-out forwards;
  }

  .label .input:checked + .circle .icon {
    opacity: 0;
    visibility: hidden;
  }

  .label .input:checked ~ .circle .square {
    opacity: 1;
    visibility: visible;
  }

  @keyframes pulse {
    0% {
      scale: 0.95;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    70% {
      scale: 1;
      box-shadow: 0 0 0 16px rgba(255, 255, 255, 0);
    }
    100% {
      scale: 0.95;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  @keyframes installing {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(-90deg) translate(27px) rotate(0);
      opacity: 1;
      visibility: visible;
    }
    99% {
      transform: rotate(270deg) translate(27px) rotate(270deg);
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes installed {
    100% {
      border-color: rgb(35, 174, 35);
    }
  }

  @keyframes circleDelete {
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export default Switch;

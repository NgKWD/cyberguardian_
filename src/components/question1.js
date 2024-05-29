import React from 'react'

import PropTypes from 'prop-types'

import './question1.css'

const Question1 = (props) => {
  return (
    <div className="question1-container">
      <span className="question1-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question1.defaultProps = {
  question:
    'Use Multi-Factor Authentication (MFA) for all critical systems and services. MFA adds an extra layer of security by requiring multiple forms of verification. This reduces the risk of unauthorized access even if credentials are compromised.',
  answer:
    'NIST Special Publication 800-63B on Digital Authentication Guidelines',
}

Question1.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default Question1

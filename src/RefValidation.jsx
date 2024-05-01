import { useState, useRef } from "react"

export function RefValidation() {
  const [emailError, setEmailError] = useState([])
  const [passError, setPassError] = useState([])
  const [isSubmitedFirstTime, setIsSubmitedFirstTime] = useState(true)

  const emailRef = useRef()
  const passRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitedFirstTime(false)

    const emailErrors = generateEmailErrors(emailRef.current.value)
    const passErrors = generatePassErrors(passRef.current.value)

    setEmailError(emailErrors)
    setPassError(passErrors)

    if (emailErrors.length === 0 && passErrors.length === 0) {
      alert("Success")
    }
  }

  function generateEmailErrors(email) {
    const emailErrors = []
    if (email.length === 0) {
      emailErrors.push("Required")
    }

    if (!email.endsWith("@webdevsimplified.com")) {
      emailErrors.push("Must end in '@webdevsimplified.com'")
    }

    return emailErrors
  }

  function generatePassErrors(pass) {
    const passErrors = []

    if (pass.length === 0) {
      passErrors.push("Required")
    }

    if (pass.length < 10) {
      passErrors.push("Must Be 10 characters or longer")
    }

    if (!pass.match(/[a-z]/)) {
      passErrors.push("Must include at least 1 lowercase letter")
    }

    if (!pass.match(/[A-Z]/)) {
      passErrors.push("Must include at least 1 uppercase letter")
    }

    if (!pass.match(/[0-9]/)) {
      passErrors.push("Must include at least 1 number")
    }

    return passErrors
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className={`form-group ${emailError.length > 0 && "error"}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          ref={emailRef}
          onChange={
            !isSubmitedFirstTime
              ? (e) => setEmailError(generateEmailErrors(e.target.value))
              : undefined
          }
        />
        {emailError.length > 0 && (
          <div className="msg">{emailError.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passError.length > 0 && "error"}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          ref={passRef}
          onChange={
            !isSubmitedFirstTime
              ? (e) => setPassError(generatePassErrors(e.target.value))
              : undefined
          }
        />
        {passError.length > 0 && (
          <div className="msg">{passError.join(", ")}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

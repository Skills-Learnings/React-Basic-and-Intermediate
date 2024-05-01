import { useEffect, useMemo, useState } from "react"

export function StateValidation() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [isSubmitedFirstTime, setIsSubmitedFirstTime] = useState(true)

  const emailErrors = useMemo(() => {
    return !isSubmitedFirstTime ? generateEmailErrors(email) : []
  }, [isSubmitedFirstTime, email])

  const passErrors = useMemo(() => {
    return !isSubmitedFirstTime ? generatePassErrors(pass) : []
  }, [isSubmitedFirstTime, pass])

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitedFirstTime(false)

    const emailValidation = generateEmailErrors(email)
    const passValidation = generatePassErrors(pass)

    if (emailValidation.length === 0 && passValidation.length === 0) {
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
      <div className={`form-group ${emailErrors.length > 0 && "error"}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passErrors.length > 0 && "error"}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
        />
        {passErrors.length > 0 && (
          <div className="msg">{passErrors.join(", ")}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

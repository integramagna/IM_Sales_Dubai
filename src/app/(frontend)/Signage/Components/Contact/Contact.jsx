'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Contact.module.css'
import { useCountryDialCode } from '../../../../../hooks/useCountryDialCode'

const JOB_KEYWORDS = /\b(job|jobs|recruiting|resume|interview|cover\s+letter|vacancy|vacancies)\b/i

const Contact = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const dialCode = useCountryDialCode()

  useEffect(() => {
    if (dialCode) {
      setFormData((prev) => ({ ...prev, phone: prev.phone || dialCode }))
    }
  }, [dialCode])

  const isJobRelated = JOB_KEYWORDS.test(formData.message)

  const validateField = (name, value) => {
    if (name === 'fullName') {
      if (!value.trim()) return 'Full name is required.'
      if (value.trim().length > 50) return 'Name must be 50 characters or fewer.'
    }
    if (name === 'company') {
      if (!value.trim()) return 'Company name is required.'
      if (value.trim().length > 60) return 'Company name must be 60 characters or fewer.'
    }
    if (name === 'email') {
      if (!value.trim()) return 'Work email is required.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.'
    }
    if (name === 'phone') {
      if (!value.trim()) return 'Phone number is required.'
      if (!/^\+[1-9][\d\s]{6,18}$/.test(value.trim()))
        return 'Please include your country code (e.g. +971 50 123 4567).'
    }
    if (name === 'message') {
      if (value.trim().length > 500) return 'Message must be 500 characters or fewer.'
    }
    return undefined
  }

  const validate = () => {
    const fields = ['fullName', 'company', 'email', 'phone', 'message']
    const newErrors = {}
    fields.forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    return newErrors
  }
  const getOrCreateSessionId = () => {
    let id = localStorage.getItem('signage_partial_session')
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem('signage_partial_session', id)
    }
    return id
  }

  const handleBlur = (e) => {
    const { name, value } = e.target

    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))

    if (value.trim()) {
      fetch('/api/signage-partial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: getOrCreateSessionId(),
          field: name,
          value,
          allFields: { ...formData, [name]: value },
        }),
      }).catch(() => {})
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'fullName') {
      if (/[0-9]/.test(value)) return
      if (value.length > 50) return
    }
    if (name === 'company') {
      if (value.length > 60) return
    }
    if (name === 'phone') {
      if (!/^[+\d\s]*$/.test(value)) return
      if (value.length > 20) return
    }
    if (name === 'message') {
      if (value.length > 500) return
    }
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isJobRelated) {
      setSubmitError('This form is for signage and project inquiries only.')
      return
    }
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/signage-forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      localStorage.removeItem('signage_partial_session')
      router.push('/Signage/thank-you')
    } catch {
      setSubmitError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.left}>
            <div className={styles.leftOne}>
              <div className={styles.leftOneTop}>
                <h3>
                  Ready to
                  <span className={styles.actually}> stand apart?</span>
                </h3>
              </div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <svg
                    className={styles.checkIcon}
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_5658_16541_1"
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="1"
                      width="26"
                      height="26"
                    >
                      <path
                        d="M14.0026 25.6693C15.535 25.6712 17.0526 25.3703 18.4683 24.7838C19.884 24.1974 21.1699 23.337 22.2521 22.2521C23.337 21.1699 24.1974 19.884 24.7838 18.4683C25.3703 17.0526 25.6712 15.535 25.6693 14.0026C25.6712 12.4702 25.3703 10.9526 24.7838 9.5369C24.1974 8.12118 23.337 6.8353 22.2521 5.75311C21.1699 4.66821 19.884 3.80782 18.4683 3.2214C17.0526 2.63497 15.535 2.33406 14.0026 2.33595C12.4702 2.33406 10.9526 2.63497 9.5369 3.2214C8.12118 3.80782 6.8353 4.66821 5.75311 5.75311C4.66821 6.8353 3.80782 8.12118 3.2214 9.5369C2.63497 10.9526 2.33406 12.4702 2.33595 14.0026C2.33406 15.535 2.63497 17.0526 3.2214 18.4683C3.80782 19.884 4.66821 21.1699 5.75311 22.2521C6.8353 23.337 8.12118 24.1974 9.5369 24.7838C10.9526 25.3703 12.4702 25.6712 14.0026 25.6693Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="1.75"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.33594 14L12.8359 17.5L19.8359 10.5"
                        stroke="black"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </mask>
                    <g mask="url(#mask0_5658_16541_1)">
                      <path d="M0 0H28V28H0V0Z" fill="white" />
                    </g>
                  </svg>

                  <p>Strategy-led signage, not just decoration</p>
                </div>
                <div className={styles.item}>
                  <svg
                    className={styles.checkIcon}
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_5658_16541_2"
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="1"
                      width="26"
                      height="26"
                    >
                      <path
                        d="M14.0026 25.6693C15.535 25.6712 17.0526 25.3703 18.4683 24.7838C19.884 24.1974 21.1699 23.337 22.2521 22.2521C23.337 21.1699 24.1974 19.884 24.7838 18.4683C25.3703 17.0526 25.6712 15.535 25.6693 14.0026C25.6712 12.4702 25.3703 10.9526 24.7838 9.5369C24.1974 8.12118 23.337 6.8353 22.2521 5.75311C21.1699 4.66821 19.884 3.80782 18.4683 3.2214C17.0526 2.63497 15.535 2.33406 14.0026 2.33595C12.4702 2.33406 10.9526 2.63497 9.5369 3.2214C8.12118 3.80782 6.8353 4.66821 5.75311 5.75311C4.66821 6.8353 3.80782 8.12118 3.2214 9.5369C2.63497 10.9526 2.33406 12.4702 2.33595 14.0026C2.33406 15.535 2.63497 17.0526 3.2214 18.4683C3.80782 19.884 4.66821 21.1699 5.75311 22.2521C6.8353 23.337 8.12118 24.1974 9.5369 24.7838C10.9526 25.3703 12.4702 25.6712 14.0026 25.6693Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="1.75"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.33594 14L12.8359 17.5L19.8359 10.5"
                        stroke="black"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </mask>
                    <g mask="url(#mask0_5658_16541_2)">
                      <path d="M0 0H28V28H0V0Z" fill="white" />
                    </g>
                  </svg>

                  <p>Installed on schedule, every time</p>
                </div>
                <div className={styles.item}>
                  <svg
                    className={styles.checkIcon}
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_5658_16541_3"
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="1"
                      width="26"
                      height="26"
                    >
                      <path
                        d="M14.0026 25.6693C15.535 25.6712 17.0526 25.3703 18.4683 24.7838C19.884 24.1974 21.1699 23.337 22.2521 22.2521C23.337 21.1699 24.1974 19.884 24.7838 18.4683C25.3703 17.0526 25.6712 15.535 25.6693 14.0026C25.6712 12.4702 25.3703 10.9526 24.7838 9.5369C24.1974 8.12118 23.337 6.8353 22.2521 5.75311C21.1699 4.66821 19.884 3.80782 18.4683 3.2214C17.0526 2.63497 15.535 2.33406 14.0026 2.33595C12.4702 2.33406 10.9526 2.63497 9.5369 3.2214C8.12118 3.80782 6.8353 4.66821 5.75311 5.75311C4.66821 6.8353 3.80782 8.12118 3.2214 9.5369C2.63497 10.9526 2.33406 12.4702 2.33595 14.0026C2.33406 15.535 2.63497 17.0526 3.2214 18.4683C3.80782 19.884 4.66821 21.1699 5.75311 22.2521C6.8353 23.337 8.12118 24.1974 9.5369 24.7838C10.9526 25.3703 12.4702 25.6712 14.0026 25.6693Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="1.75"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.33594 14L12.8359 17.5L19.8359 10.5"
                        stroke="black"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </mask>
                    <g mask="url(#mask0_5658_16541_3)">
                      <path d="M0 0H28V28H0V0Z" fill="white" />
                    </g>
                  </svg>
                  <p>
                    One team for design, fabrication, permits, and installation no handoff chaos
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightWrapper}>
            <div className={styles.formHeadingMobile}>
              <h2 className={styles.formTitle}>
                Tell us what you’re building, <br />{' '}
                <span className={styles.formSubtitle}> we’ll take it further.</span>
              </h2>
             
            </div>

            <div className={styles.rightContainer}>
              <div className={styles.formHeadingDesktop}>
                <h2 className={styles.formTitle}>
                  Tell us what you’re building,
                  <br />
                  <span className={styles.formSubtitle}> we’ll take it further.</span>
                </h2>
              
              </div>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.fieldWrap}>
                    <input
                      className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                      type="text"
                      name="fullName"
                      placeholder="Full Name*"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.fullName && <span className={styles.errorMsg}>{errors.fullName}</span>}
                  </div>
                  <div className={styles.fieldWrap}>
                    <input
                      className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                      type="text"
                      name="company"
                      placeholder="Company/ Organization"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.company && <span className={styles.errorMsg}>{errors.company}</span>}
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.fieldWrap}>
                    <input
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      type="email"
                      name="email"
                      placeholder="Work Email*"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>
                  <div className={styles.fieldWrap}>
                    <input
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      type="tel"
                      name="phone"
                      placeholder="Contact no."
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                  </div>
                </div>
                <div className={styles.fieldWrap}>
                  <textarea
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    name="message"
                    placeholder="What are you building?"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className={styles.charCount}>{formData.message.length}/500</div>
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>
                {submitError && <span className={styles.errorMsg}>{submitError}</span>}
                <div className={styles.ctaRow}>
                  <button
                    type="submit"
                    className={`${styles.cta} ${!formData.fullName.trim() || !formData.email.trim() || isJobRelated ? styles.ctaMuted : ''}`}
                    disabled={submitting}
                  >
                    <span className={styles.ctaText}>
                      {submitting ? 'Sending…' : 'Request a Quote'}
                    </span>
                    <span className={styles.ctaArrow}>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

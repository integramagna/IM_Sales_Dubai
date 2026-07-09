'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './ReserveCopy.module.css'
import { useCountryDialCode } from '../../../../../../hooks/useCountryDialCode'
import Image from 'next/image'
import Misbah from './founder.png'
import Logo1 from './1.png'
import Logo2 from './2.png'
import Logo3 from './3.png'
import Logo4 from './4.png'

const logos = [
    { src: Logo1, alt: 'Brand Logo 1' },
    { src: Logo2, alt: 'Brand Logo 2' },
    { src: Logo3, alt: 'Brand Logo 3' },
    { src: Logo4, alt: 'Brand Logo 4' },
]

const JOB_KEYWORDS = /\b(job|jobs|recruiting|resume|interview|cover\s+letter|vacancy|vacancies)\b/i

const Reserve = () => {
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
            if (!/^\+[1-9][\d\s]{6,18}$/.test(value.trim())) return 'Please include your country code (e.g. +971 50 123 4567).'
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
        let id = localStorage.getItem('pkg_partial_session')
        if (!id) {
            id = crypto.randomUUID()
            localStorage.setItem('pkg_partial_session', id)
        }
        return id
    }

    const handleBlur = (e) => {
        const { name, value } = e.target

        const error = validateField(name, value)
        setErrors((prev) => ({ ...prev, [name]: error }))

        if (value.trim()) {
            fetch('/api/ui-partial', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionId: getOrCreateSessionId(),
                    field: name,
                    value,
                    allFields: { ...formData, [name]: value },
                }),
            }).catch(() => { })
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
            setSubmitError('This form is for brand and project inquiries only.')
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
            const res = await fetch('/api/ui-forms', {
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
            localStorage.removeItem('pkg_partial_session')
            router.push('/uiux/thank-you')
        } catch {
            setSubmitError('Something went wrong. Please try again.')
            setSubmitting(false)
        }
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.pageTop}>
                    <p className={styles.topLabel}>THE UAE'S TRUSTED PARTNER FOR UI/UX DESIGN</p>
                    <h1 className={styles.reserveTitleMobile}>Reserve Your Spot</h1>
                </div>
                <div className={styles.MainContainer}>
                    <div className={styles.left}>
                        <div className={styles.leftOne}>
                            <div className={styles.leftOneTop}>
                                <h1 className={styles.reserveTitleDesktop}>Reserve Your Spot</h1>
                            </div>
                            <div className={styles.list}>
                                <div className={styles.item}>
                                    <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_r" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
                                            <path d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                            <path d="M8 12L11 15L17 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </mask>
                                        <g mask="url(#mask0_r)"><path d="M0 0H24V24H0V0Z" fill="#101820" /></g>
                                    </svg>
                                    <p>Strategy-led design, not just visual appeal</p>
                                </div>
                                <div className={styles.item}>
                                    <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask1_r" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
                                            <path d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                            <path d="M8 12L11 15L17 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </mask>
                                        <g mask="url(#mask1_r)"><path d="M0 0H24V24H0V0Z" fill="#101820" /></g>
                                    </svg>
                                    <p>Delivered on schedule, every time</p>
                                </div>
                                <div className={styles.item}>
                                    <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask2_r" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
                                            <path d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                            <path d="M8 12L11 15L17 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </mask>
                                        <g mask="url(#mask2_r)"><path d="M0 0H24V24H0V0Z" fill="#101820" /></g>
                                    </svg>
                                    <p>One team for design, development, and brand - no handoff chaos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightWrapper}>
                        <div className={styles.formHeadingMobile}>
                            <h2 className={styles.formTitle}>
                                Tell us what you're building, <br /> <span className={styles.formSubtitle}> we'll take it further.</span>
                            </h2>
                            <p>No pitch. No agency jargon. Just honest brand advice.</p>
                        </div>

                        <div className={styles.rightContainer}>
                            <div className={styles.formHeadingDesktop}>
                                <h2 className={styles.formTitle}>
                                    Tell us what you're building,<br />
                                    <span className={styles.formSubtitle}> we'll take it further.</span>
                                </h2>
                                <p>No pitch. No agency jargon. Just honest brand advice.</p>
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
                                            placeholder="Company/ Organization*"
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
                                            placeholder="Contact no.*"
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
                                        placeholder="Tell us about the project"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div className={styles.charCount}>
                                        {formData.message.length}/500
                                    </div>
                                    {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                                </div>
                                {submitError && <span className={styles.errorMsg}>{submitError}</span>}
                                <div className={styles.ctaRow}>
                                    <button type="submit" className={`${styles.cta} ${!formData.fullName.trim() || !formData.email.trim() || isJobRelated ? styles.ctaMuted : ''}`} disabled={submitting}>
                                        <span className={styles.ctaText}>{submitting ? 'Sending…' : 'Request a Quote '}</span>
                                        <span className={styles.ctaArrow}>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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

export default Reserve

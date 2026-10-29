'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Camera, Check, Sparkles } from 'lucide-react'
import { FaInstagram } from "react-icons/fa";


const instagramUrl = 'https://instagram.com/nolabelfashion.in'

export default function Page() {
  const [view, setView] = useState<'waitlist' | 'manifesto'>('waitlist')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <main className="no-label-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="wave-field" aria-hidden="true">
        <span className="fabric-wave wave-a" />
        <span className="fabric-wave wave-b" />
        <span className="fabric-wave wave-c" />
        <span className="fabric-wave wave-d" />
      </div>
      <div className="grain" aria-hidden="true" />

      <section className="content-wrap" aria-label="No Label opening soon">
        <nav className="view-switcher" aria-label="Page sections">
          <button className={view === 'waitlist' ? 'active' : ''} onClick={() => setView('waitlist')}>
            Waitlist
          </button>
          <button className={view === 'manifesto' ? 'active' : ''} onClick={() => setView('manifesto')}>
            Manifesto
          </button>
        </nav>

        <article className={`glass-card ${view === 'manifesto' ? 'manifesto-card' : ''}`}>
          <div className="card-content">
            <div className="brand-mark" aria-label="No Label">
              <img src="/logo.png" alt="No Label Clothing, Footwear, Men, Women, Kids" />
            </div>

            {view === 'waitlist' ? (
              <div className="waitlist-content">
                <div className="eyebrow"><Sparkles size={14} /> Opening soon</div>
                <h1>Clothes with<br /><em>no label.</em></h1>
                <p className="intro">A new point of view on everyday dressing. Thoughtful pieces, quiet confidence, and a wardrobe that feels entirely your own.</p>
                {!submitted ? (
                  <form className="email-form" onSubmit={handleSubmit}>
                    <label className="sr-only" htmlFor="email">Email address</label>
                    <input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" autoComplete="email" />
                    <button type="submit">Join the waitlist <ArrowUpRight size={16} /></button>
                  </form>
                ) : (
                  <div className="success-message" role="status"><span><Check size={16} /></span><div><strong>You&apos;re on the list.</strong><small>We&apos;ll let you know when No Label arrives.</small></div></div>
                )}
                <p className="fine-print">Be the first to know about our launch, early access, and first drop.</p>
              </div>
            ) : (
              <div className="manifesto-content">
                <div className="eyebrow">Our point of view</div>
                <h1>Wear what<br /><em>feels like you.</em></h1>
                <p>We believe getting dressed should feel less like following rules and more like finding your rhythm. No Label is for the in-between moments, the repeat wears, and the pieces that become part of your story.</p>
                <p>Designed with intention. Made to move with you. A considered wardrobe for people who never needed a label to know who they are.</p>
                <div className="signature">
                  <img
                    className="h-18 w-auto"
                    src="/signature.png"
                    alt="Signature"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(55%) sepia(20%) saturate(900%) hue-rotate(5deg) brightness(88%) contrast(85%)",
                      transform: "rotate(-12deg)",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <footer className="card-footer">
            <span>Follow No Label</span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram"
            >
              <FaInstagram size={15} />
              Instagram
              {/* <ArrowUpRight size={13} /> */}
            </a>
          </footer>
        </article>
      </section>

      <a className="corner-badge" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Follow No Label on Instagram"><FaInstagram size={17} /></a>
    </main>
  )
}

'use client'

import { useState, type FormEvent } from 'react'
import { CircleCheck, LoaderCircle } from 'lucide-react'

// Web3Forms access key (public by design: it can only send messages to Anna's inbox).
// Get it at https://web3forms.com using anna.pauseiro@gmail.com.
const WEB3FORMS_ACCESS_KEY = '07cc4cec-c82f-48fd-91f8-895637d2afab'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass =
  'h-13 w-full rounded-lg border-[1.5px] border-[#e9cbc6] bg-white px-4 text-base text-ink placeholder:text-ink/45 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))

    setStatus('sending')
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New website message from ${data.name}`,
          from_name: 'annapauseiro website',
          ...data,
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error(result.message || 'Something went wrong.')
      form.reset()
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-xl border-[1.5px] border-[#e9cbc6] bg-white p-8"
      >
        <CircleCheck className="size-10 text-brand" aria-hidden="true" />
        <h2 className="font-serif text-2xl font-bold text-ink">Thank you, your message has been sent!</h2>
        <p className="text-lg leading-relaxed text-ink/80">I will get back to you shortly.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="font-bold text-brand underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Spam trap: hidden from people, filled in by bots */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-[15px] font-bold text-ink">
          Name *
          <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2 text-[15px] font-bold text-ink">
          Email *
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-[15px] font-bold text-ink">
        Message *
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me a little about your project…"
          className={`${fieldClass} h-auto resize-y py-3.5`}
        />
      </label>

      {status === 'error' && (
        <p role="alert" className="rounded-lg bg-brand/10 px-4 py-3 text-ink">
          Sorry, your message couldn&apos;t be sent ({error}). Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 flex h-14 items-center justify-center gap-2 rounded-lg bg-brand font-bold tracking-[0.12em] text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        {status === 'sending' && <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />}
        {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}
      </button>
    </form>
  )
}

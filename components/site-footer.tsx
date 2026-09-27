export function SiteFooter() {
  return (
    <footer className="bg-ink text-brand-foreground/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Anna Pauseiro. All rights reserved.</p>
        <ul className="flex gap-6">
          <li>Terms &amp; Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  )
}

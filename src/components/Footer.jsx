export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="logo">odium<span>22</span></span>
        <p>© <span>{new Date().getFullYear()}</span> · QA Engineer · Developer</p>
        <a href="#top" className="to-top">наверх ↑</a>
      </div>
    </footer>
  )
}

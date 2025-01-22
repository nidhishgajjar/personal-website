const YEAR = new Date().getFullYear()
export default {
  footer: (
    <footer>
      <div className="socials">
        <a href="https://twitter.com/artmarryscience">𝕏</a>
        <a href="https://instagram.com/artmarryscience">insta</a>
        <a href="https://github.com/nidhishgajjar">github</a>
        <a href="https://www.linkedin.com/in/artmarryscience">linkedin</a>
        <a href="https://cal.com/nidhish/30min">chat</a>
      </div>
      <small>
        <time>{YEAR}</time> © imaginator &nbsp;&nbsp; 
        based on <a href="https://en.m.wikipedia.org/wiki/Whole_Earth_Catalog">earth</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        .socials {
          margin-bottom: 1rem;
          display: flex;
          gap: 2rem;
          justify-content: center;
        }
        .socials a {
          color: inherit;
          text-decoration: none;
        }
        .socials a:hover {
          text-decoration: underline;
        }
        small {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          align-items: center;
        }
        small a {
          color: inherit;
        }
      `}</style>
    </footer>
  ),
}

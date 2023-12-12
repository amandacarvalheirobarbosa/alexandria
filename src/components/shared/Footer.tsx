export function Footer() {
  const data = new Date();
  const ano = data.getFullYear();

  return (
    <footer className="footer w-screen footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © {ano} - All right reserved by <a className="link link-accent" href="https://portifolioamandabarbosa.vercel.app">Amanda Carvalheiro Barbosa</a></p>
      </div>
    </footer>
  );
}

import Logo from './Logo.tsx';

export default function Footer() {
  return (
    <footer className="page-footer">
      <Logo additionalClass={'logo__link--light'} />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

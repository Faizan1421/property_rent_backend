const Footer = () => {
  return (
    <footer className="footer footer-center bg-blue-100 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

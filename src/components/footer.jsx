const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-300 text-neutral-content p-4 fixed bottom-0">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            DevWorld
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

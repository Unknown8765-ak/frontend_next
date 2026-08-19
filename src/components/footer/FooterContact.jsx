const FooterContact = () => {
  return (
    <div>
      <h2 className="mb-5 text-xl font-semibold">
        Contact Us
      </h2>

      <div className="space-y-3 text-gray-300">
        <p>
          <a
            href="tel:+919696142030"
            className="transition hover:text-yellow-400"
          >
            +91 96961 42030
          </a>
        </p>

        <p>
          <a
            href="tel:+918173843164"
            className="transition hover:text-yellow-400"
          >
            +91 81738 43164
          </a>
        </p>

        <p>
          <a
            href="mailto:info@sunandshadow.in"
            className="transition hover:text-yellow-400"
          >
            info@sunandshadow.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterContact;
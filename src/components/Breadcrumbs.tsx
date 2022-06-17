const Breadcrumbs = ({}) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex gap-2 items-center my-6 desktop:mb-8">
        <li>All Assets</li>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          className="shrink-0"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Chevron</title>
          <path d="M1 1L8 8L1 15" strokeLinecap="round" />
        </svg>{" "}
        <li>Bitcoin</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

export default function MegaMenu({ categories, title }) {
  if (!categories || typeof categories !== "object") return null;
  return (
    <div className="downdown-container">
      <div className="dropdown-main-container">
        {Object.entries(categories).map(([categoryTitle, subItems]) => (
          <div className="dropdown-column" key={categoryTitle}>
            <h4>{categoryTitle}</h4>
            <ul>
              {subItems.length > 0 ? (
                subItems.map((sub) => (
                  <li key={sub}>
                    <a className="none" href="">
                      {sub}
                    </a>
                  </li>
                ))
              ) : (
                <li>No items</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

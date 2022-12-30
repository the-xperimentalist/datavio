

// Price, Health Listing Score, Reviews, BSR, Brand, Rating, Country Of Origin
// Unique apis for this. Task and otherwise
function Summary (props) {
    return (
        <div id="summary">
          <h1>summary stuff</h1>
          {[0, 1, 2, 3, 4].map((item) => {
            return (
              <p key={item}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            );
          })}
        </div>)
}

export default Summary



// Keyword analysis for the given url
// Currently simply a locked type info
function KeywordAnalysis (props) {
    return (
        <div id="keyword">
          <h1>Keyword Analysis</h1>
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

export default KeywordAnalysis

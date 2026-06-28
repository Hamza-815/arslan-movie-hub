import { FaSearch, FaUserCircle } from "react-icons/fa";

function App() {
  const movies = [
    "Action Hero",
    "Dark Night",
    "The Horror House",
    "Fast Racer",
    "Future World",
    "Love Story"
  ];

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 25px",
          background: "#111"
        }}
      >
        <h2 style={{ color: "red" }}>Arslan Movie Hub</h2>

        <div style={{ display: "flex", gap: "15px" }}>
          <FaSearch />
          <FaUserCircle size={22} />
        </div>
      </nav>

      {/* Hero Banner */}
      <section
        style={{
          height: "300px",
          background:
            "linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.3))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "30px"
        }}
      >
        <h1 style={{ fontSize: "40px", color: "red" }}>
          Welcome to Arslan Movie Hub
        </h1>

        <p>Watch and Download Unlimited Movies</p>

        <button
          style={{
            width: "140px",
            padding: "10px",
            background: "red",
            border: "none",
            color: "#fff",
            marginTop: "15px",
            cursor: "pointer"
          }}
        >
          Watch Now
        </button>
      </section>

      {/* Trending Movies */}
      <div style={{ padding: "20px" }}>
        <h2>Trending Movies</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
            gap: "15px"
          }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              style={{
                background: "#111",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center"
              }}
            >
              <img
                src={`https://picsum.photos/300/400?random=${index}`}
                alt={movie}
                style={{
                  width: "100%",
                  borderRadius: "8px"
                }}
              />

              <h3>{movie}</h3>

              <button
                style={{
                  background: "red",
                  border: "none",
                  color: "#fff",
                  padding: "8px 12px",
                  cursor: "pointer"
                }}
              >
                Watch
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

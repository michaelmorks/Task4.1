import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const articles = [
    {
      id: 1,
      title: "React OR Vue?",
      image: "https://picsum.photos/200?random=1",
      summary: "Which one suits your project?",
      author: "dev_guru",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Hooks 101",
      image: "https://picsum.photos/200?random=2",
      summary: "Understanding React Hooks",
      author: "frontend_fan",
      rating: 4.7,
    },
  ];

  const tutorials = [
    {
      id: 1,
      title: "React Router",
      image: "https://picsum.photos/200?random=3",
      summary: "Dynamic routing made simple",
      username: "nav_master",
      rating: 5.0,
    },
    {
      id: 2,
      title: "Express Basics",
      image: "https://picsum.photos/200?random=4",
      summary: "Server-side essentials",
      username: "api_builder",
      rating: 4.9,
    },
  ];

  const Header = () => (
    <header
      style={{
        background: "#282c34",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>DEV@Deakin</h1>
      <div>
        <button style={{ marginRight: "10px" }}>Post</button>
        <button>Login</button>
      </div>
    </header>
  );

  const Banner = () => (
    <section
      style={{
        background: "#ddd",
        padding: "60px",
        textAlign: "center",
      }}
    >
      <h2>Welcome Explore Our Latest Tech Articles</h2>
    </section>
  );

  const ArticleCard = ({ article }) => (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={article.image} alt={article.title} style={{ width: "100%" }} />
      <h4>{article.title}</h4>
      <p>{article.summary}</p>
      <p>
        ⭐ {article.rating} <br /> 🧑 {article.author}
      </p>
    </div>
  );

  const TutorialCard = ({ tutorial }) => (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={tutorial.image} alt={tutorial.title} style={{ width: "100%" }} />
      <h4>{tutorial.title}</h4>
      <p>{tutorial.summary}</p>
      <p>
        ⭐ {tutorial.rating} <br /> 👤 {tutorial.username}
      </p>
    </div>
  );

  const FeaturedSection = ({ title, data, type }) => (
    <section style={{ padding: "20px" }}>
      <h3>{title}</h3>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {data.map((item) =>
          type === "article" ? (
            <ArticleCard key={item.id} article={item} />
          ) : (
            <TutorialCard key={item.id} tutorial={item} />
          )
        )}
      </div>
      <button style={{ marginTop: "10px" }}>
        See all {type === "article" ? "articles" : "tutorials"}
      </button>
    </section>
  );

  const Newsletter = () => (
    <section
      style={{
        padding: "20px",
        background: "#eee",
        textAlign: "center",
      }}
    >
      <h4>SIGN UP FOR OUR DAILY INSIDER</h4>
      <input
        type="email"
        placeholder="Enter your email"
        style={{ padding: "8px", width: "200px" }}
      />
      <button style={{ marginLeft: "10px" }}>Subscribe</button>
    </section>
  );

  const Footer = () => (
    <footer
      style={{
        background: "#0097a7",
        color: "white",
        padding: "30px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h5>Explore</h5>
        <p>Home</p>
        <p>Questions</p>
        <p>Articles</p>
        <p>Tutorials</p>
      </div>
      <div>
        <h5>Support</h5>
        <p>FAQs</p>
        <p>Help</p>
        <p>Contact Us</p>
      </div>
      <div>
        <h5>Stay Connected</h5>
        <p> Instagram Twitter Youtube</p>
      </div>
      <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
        <p>DEV@Deakin 2025</p>
        <p>Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </footer>
  );

  return (
    <div>
      <Header />
      <Banner />
      <FeaturedSection
        title="Featured Articles"
        data={articles}
        type="article"
      />
      <FeaturedSection
        title="Featured Tutorials"
        data={tutorials}
        type="tutorial"
      />
      <Newsletter />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

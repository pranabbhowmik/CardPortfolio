import React, { useEffect, useState } from "react";
import axios from "axios";

const GithubContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const query = `
          query {
            user(login: "pranabbhowmik") {
              contributionsCollection {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `;

        const res = await axios.post(
          "https://api.github.com/graphql",
          { query },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`, // <-- or import.meta.env.VITE_GITHUB_TOKEN for Vite
              "Content-Type": "application/json",
            },
          }
        );

        const weeks =
          res.data.data.user.contributionsCollection.contributionCalendar.weeks;
        const days = weeks.flatMap((week) => week.contributionDays);
        setContributions(days);
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err);
      }
    };

    fetchContributions();
  }, []);

  // 🔥 Map contribution count -> theme colors
  const getThemeColor = (count) => {
    if (count === 0) return "var(--jet)"; // dark gray
    if (count <= 3) return "var(--vegas-gold)"; // muted gold
    if (count <= 6) return "var(--orange-yellow-crayola)"; // bright yellow
    return "var(--white-2)"; // highlight
  };

  return (
    <div className="github-section">
      <h2 className="h2 article-title">GitHub Contributions</h2>
      <div className="github-grid">
        {contributions.map((day, idx) => (
          <div
            key={idx}
            className="github-day"
            style={{ backgroundColor: getThemeColor(day.contributionCount) }}
            title={`${day.date}: ${day.contributionCount} contributions`}
          />
        ))}
      </div>
    </div>
  );
};

export default GithubContributions;

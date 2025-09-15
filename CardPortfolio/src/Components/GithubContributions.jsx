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
              Authorization:
                "Bearer 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",
              "Content-Type": "application/json",
              Accept: "application/json",
              "X-GitHub-Api-Version": "2022-11-28",
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

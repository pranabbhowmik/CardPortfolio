import React, { useEffect, useState } from "react";
import axios from "axios";

const GithubContributions = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [contributions, setContributions] = useState([]);
  const [months, setMonths] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const from = `${year}-01-01T00:00:00Z`;
        const to = `${year}-12-31T23:59:59Z`;

        const query = `
          query {
            user(login: "pranabbhowmik") {
              contributionsCollection(from: "${from}", to: "${to}") {
                contributionCalendar {
                  months {
                    name
                    firstDay
                    totalWeeks
                  }
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

        const calendar =
          res.data.data.user.contributionsCollection.contributionCalendar;
        const weeks = calendar.weeks;
        const days = weeks.flatMap((week) => week.contributionDays);

        setContributions(days);
        setMonths(calendar.months);
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err);
      }
    };

    fetchContributions();
  }, [year]);

  // Map contribution count -> theme colors
  const getThemeColor = (count) => {
    if (count === 0) return "var(--jet)";
    if (count <= 3) return "var(--vegas-gold)";
    if (count <= 6) return "var(--orange-yellow-crayola)";
    return "hsl(45, 100%, 50%)"; // deep yellow
  };

  return (
    <div className="github-section">
      <div className="github-header">
        <h2 className="github-title">GitHub Contributions</h2>
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="github-year-select"
        >
          {[currentYear, currentYear - 1, currentYear - 2].map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      {/* 🔥 Shared scroll wrapper */}
      <div className="github-calendar-wrapper">
        <div className="github-months">
          {months.map((m, i) => (
            <span
              key={i}
              className="github-month-label"
              style={{ gridColumn: `span ${m.totalWeeks}` }}
            >
              {m.name}
            </span>
          ))}
        </div>

        <div className="github-calendar">
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
    </div>
  );
};

export default GithubContributions;

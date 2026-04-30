import { useState, useEffect } from "react";

const GITHUB_USERNAME = "abhisheknair0925-beep";
const CACHE_KEY_DYNAMIC = "github_dynamic_projects";
const CACHE_EXPIRY = 1000 * 60 * 60; // 1 hour

// Simple markdown stripper
const stripMarkdown = (md) => {
  if (!md) return "";
  return md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Links
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // Bold
    .replace(/(\*|_)(.*?)\1/g, "$2") // Italic
    .replace(/#+\s+(.*)/g, "$1") // Headers
    .replace(/`{1,3}([^`]+)`{1,3}/g, "$1") // Code blocks
    .replace(/<[^>]*>/g, "") // HTML tags
    .replace(/!\[.*?\]\(.*?\)/g, "") // Images
    .replace(/\s+/g, " ") // Extra whitespace
    .trim();
};

export const useDynamicProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);

        const cachedData = localStorage.getItem(CACHE_KEY_DYNAMIC);
        const cacheTime = localStorage.getItem(`${CACHE_KEY_DYNAMIC}_time`);

        if (cachedData && cacheTime && Date.now() - parseInt(cacheTime) < CACHE_EXPIRY) {
          if (isMounted) {
            setProjects(JSON.parse(cachedData));
            setLoading(false);
          }
          return;
        }

        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        if (!reposRes.ok) throw new Error("Failed to fetch repos.");

        const reposData = await reposRes.json();

        // Filter: Top 5 by stars OR topics (portfolio, featured)
        const filteredRepos = reposData
          .filter(repo => !repo.fork)
          .sort((a, b) => {
            const aHasTopic = a.topics?.some(t => t === 'portfolio' || t === 'featured');
            const bHasTopic = b.topics?.some(t => t === 'portfolio' || t === 'featured');
            if (aHasTopic && !bHasTopic) return -1;
            if (!aHasTopic && bHasTopic) return 1;
            return b.stargazers_count - a.stargazers_count;
          })
          .slice(0, 5);

        // Fetch READMEs
        const projectsWithReadme = await Promise.all(
          filteredRepos.map(async (repo) => {
            try {
              const readmeRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`);
              if (!readmeRes.ok) throw new Error("No README");
              
              const readmeData = await readmeRes.json();
              // Decode base64
              // Note: GitHub API sometimes splits base64 with newlines
              const decoded = decodeURIComponent(escape(atob(readmeData.content.replace(/\n/g, ""))));
              let cleanDesc = stripMarkdown(decoded).substring(0, 180);
              if (cleanDesc.length >= 180) cleanDesc += "...";

              return { ...repo, clean_description: cleanDesc || repo.description };
            } catch {
              return { ...repo, clean_description: repo.description };
            }
          })
        );

        if (isMounted) {
          setProjects(projectsWithReadme);
          localStorage.setItem(CACHE_KEY_DYNAMIC, JSON.stringify(projectsWithReadme));
          localStorage.setItem(`${CACHE_KEY_DYNAMIC}_time`, Date.now().toString());
        }

      } catch (err) {
        if (isMounted) {
          setError(err.message);
          const cachedData = localStorage.getItem(CACHE_KEY_DYNAMIC);
          if (cachedData) setProjects(JSON.parse(cachedData));
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, loading, error };
};

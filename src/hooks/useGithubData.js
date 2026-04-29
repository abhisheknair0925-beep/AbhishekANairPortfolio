import { useState, useEffect } from "react";

const GITHUB_USERNAME = "abhisheknair0925-beep";
const CACHE_KEY_PROFILE = "github_profile_data";
const CACHE_KEY_REPOS = "github_repos_data";
const CACHE_EXPIRY = 1000 * 60 * 60; // 1 hour

export const useGithubData = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchGithubData = async () => {
      try {
        setLoading(true);

        // Check Cache first
        const cachedProfile = localStorage.getItem(CACHE_KEY_PROFILE);
        const cachedRepos = localStorage.getItem(CACHE_KEY_REPOS);
        const cacheTime = localStorage.getItem("github_cache_time");

        if (cachedProfile && cachedRepos && cacheTime && Date.now() - parseInt(cacheTime) < CACHE_EXPIRY) {
          if (isMounted) {
            setProfile(JSON.parse(cachedProfile));
            setRepos(JSON.parse(cachedRepos));
            setLoading(false);
          }
          return;
        }

        // Fetch Live Data
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error("Failed to fetch GitHub data. Rate limit might be exceeded.");
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        // Sort repos by stars (descending) as primary criteria, then push to cache
        const sortedRepos = reposData.sort((a, b) => b.stargazers_count - a.stargazers_count);

        if (isMounted) {
          setProfile(profileData);
          setRepos(sortedRepos);
          
          // Save to Cache
          localStorage.setItem(CACHE_KEY_PROFILE, JSON.stringify(profileData));
          localStorage.setItem(CACHE_KEY_REPOS, JSON.stringify(sortedRepos));
          localStorage.setItem("github_cache_time", Date.now().toString());
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          // Attempt to load from cache even if expired if fetch fails
          const cachedProfile = localStorage.getItem(CACHE_KEY_PROFILE);
          const cachedRepos = localStorage.getItem(CACHE_KEY_REPOS);
          if (cachedProfile && cachedRepos) {
             setProfile(JSON.parse(cachedProfile));
             setRepos(JSON.parse(cachedRepos));
          }
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { profile, repos, loading, error };
};

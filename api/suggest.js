export default async function suggestionHandler(req, res) {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "query is required" });
    }

    const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(q)}`;

    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("Suggestion error:", error);
    return res.status(500).json({ error: "Failed to fetch suggestions" });
  }
}

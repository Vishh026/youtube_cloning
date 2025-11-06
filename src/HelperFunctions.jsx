export const getTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;
  const days = diff / (1000 * 60 * 60 * 24);
  if (days < 1) return "Today";
  if (days < 7) return `${Math.floor(days)} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
};

export function generateRandomUsername() {
  const adjectives = ["happy", "clever", "brave", "swift", "mystic", "golden"];
  const nouns = ["fox", "dragon", "tree", "river", "star", "knight"];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumber = Math.floor(Math.random() * 1000); // Generates a number between 0 and 999

  return `${randomAdjective}${randomNoun}${randomNumber}`;
}
;
export function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
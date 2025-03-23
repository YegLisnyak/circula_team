import fs from 'fs';

export function getAuthData() {
  const filePath = "login_data.json"
  const rawData = fs.readFileSync(filePath);
  const jsonData = JSON.parse(rawData.toString());

  return {
    email: String(jsonData.email),
    password: String(jsonData.password),
    firstname: String(jsonData.firstname),
  }
}
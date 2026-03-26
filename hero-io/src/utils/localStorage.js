const STORAGE_KEY = 'hero-io-installed-apps';

export const getInstalledApps = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveInstalledApp = (app) => {
  const apps = getInstalledApps();
  if (!apps.find((a) => a.id === app.id)) {
    apps.push(app);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  }
};

export const removeInstalledApp = (id) => {
  const apps = getInstalledApps().filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
};

export const isAppInstalled = (id) => {
  return getInstalledApps().some((a) => a.id === id);
};

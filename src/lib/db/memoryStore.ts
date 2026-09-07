// In-memory & local fallback store for subscribers & contact tickets

export interface StoredSubscriber {
  id: string;
  name: string;
  email: string;
  source: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// Global in-memory cache preserved across requests in server instance
const globalForSubscribers = globalThis as unknown as {
  subscribersMemoryStore?: StoredSubscriber[];
};

if (!globalForSubscribers.subscribersMemoryStore) {
  globalForSubscribers.subscribersMemoryStore = [
    {
      id: "sub-1",
      name: "Abu Saeed Sayem",
      email: "VibePress.Studio@Proton.me",
      source: "Studio Lab Pre-Launch",
      status: "ACTIVE",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

export const subscribersStore = globalForSubscribers.subscribersMemoryStore;

export function addSubscriberToMemory(name: string, email: string, source: string): StoredSubscriber {
  const existingIdx = subscribersStore.findIndex(
    (s) => s.email.toLowerCase() === email.toLowerCase()
  );

  const now = new Date().toISOString();
  if (existingIdx >= 0) {
    subscribersStore[existingIdx].name = name || subscribersStore[existingIdx].name;
    subscribersStore[existingIdx].source = source;
    subscribersStore[existingIdx].updatedAt = now;
    return subscribersStore[existingIdx];
  }

  const newSub: StoredSubscriber = {
    id: `sub-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    name: name || "Launch Subscriber",
    email: email.toLowerCase().trim(),
    source: source || "Studio Lab",
    status: "ACTIVE",
    createdAt: now,
    updatedAt: now,
  };

  subscribersStore.unshift(newSub);
  return newSub;
}

export function getMemorySubscribers(): StoredSubscriber[] {
  return subscribersStore;
}

export function deleteMemorySubscriber(id: string): boolean {
  const idx = subscribersStore.findIndex((s) => s.id === id);
  if (idx >= 0) {
    subscribersStore.splice(idx, 1);
    return true;
  }
  return false;
}

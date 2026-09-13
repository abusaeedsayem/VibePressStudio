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

export interface StoredSupportTicket {
  id: string;
  name: string;
  email: string;
  product: string;
  category: string;
  license?: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// Global in-memory cache preserved across requests in server instance
const globalForStore = globalThis as unknown as {
  subscribersMemoryStore?: StoredSubscriber[];
  ticketsMemoryStore?: StoredSupportTicket[];
};

if (!globalForStore.subscribersMemoryStore) {
  globalForStore.subscribersMemoryStore = [
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

if (!globalForStore.ticketsMemoryStore) {
  globalForStore.ticketsMemoryStore = [
    {
      id: "ticket-1",
      name: "Enterprise Publisher Lead",
      email: "publisher@mediahouse.io",
      product: "vibepress-affiliate-link-cloaker",
      category: "technical-support",
      license: "VP-PRELAUNCH-PRO-789",
      message: "Hello VibePress team, we are testing the 307 temporary redirect engine and Amazon ToS uncloaking across our 50k monthly affiliate pageviews. Wanted to inquire about custom rewrite prefix configuration under high concurrency.",
      status: "OPEN",
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
  ];
}

export const subscribersStore = globalForStore.subscribersMemoryStore;
export const ticketsStore = globalForStore.ticketsMemoryStore;

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

// ── Support Tickets Operations ──

export function addSupportTicketToMemory(ticketData: {
  name: string;
  email: string;
  product?: string;
  category?: string;
  license?: string;
  message: string;
}): StoredSupportTicket {
  const now = new Date().toISOString();
  const newTicket: StoredSupportTicket = {
    id: `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    name: ticketData.name?.trim() || "Support Requester",
    email: ticketData.email.toLowerCase().trim(),
    product: ticketData.product || "vibepress-affiliate-link-cloaker",
    category: ticketData.category || "general-inquiry",
    license: ticketData.license?.trim() || "N/A",
    message: ticketData.message.trim(),
    status: "OPEN",
    createdAt: now,
    updatedAt: now,
  };

  ticketsStore.unshift(newTicket);
  return newTicket;
}

export function getMemorySupportTickets(): StoredSupportTicket[] {
  return ticketsStore;
}

export function updateMemorySupportTicketStatus(id: string, status: string): StoredSupportTicket | null {
  const ticket = ticketsStore.find((t) => t.id === id);
  if (ticket) {
    ticket.status = status;
    ticket.updatedAt = new Date().toISOString();
    return ticket;
  }
  return null;
}

export function deleteMemorySupportTicket(id: string): boolean {
  const idx = ticketsStore.findIndex((t) => t.id === id);
  if (idx >= 0) {
    ticketsStore.splice(idx, 1);
    return true;
  }
  return false;
}

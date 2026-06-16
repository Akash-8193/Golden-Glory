const url = "https://zhadrsjviyeotrexhigr.supabase.co/rest/v1/gallery_items";
const anonKey = "sb_publishable_k_V43I-s6C2DAA4II99DMg_t9hyLTna"; // Extracted from .env.local

const missingItems = [
  { type: 'image', title: 'Basement Workspace', url: '/images/gallery/basement.png', order_index: 8 },
  { type: 'image', title: 'Dedicated Desk 2', url: '/images/gallery/dedcated%20desk%202.png', order_index: 9 },
  { type: 'image', title: 'Dedicated Desk', url: '/images/gallery/dedicated%20desk.png', order_index: 10 },
  { type: 'image', title: 'Meeting Room', url: '/images/gallery/meeting%20room.png', order_index: 11 },
  { type: 'image', title: 'Private Cabins', url: '/images/gallery/private%20cabins.png', order_index: 12 }
];

async function insertItems() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "apikey": anonKey,
        "Authorization": `Bearer ${anonKey}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(missingItems)
    });
    
    if (!response.ok) {
      const err = await response.text();
      console.error("Failed to insert:", response.status, err);
      process.exit(1);
    }
    
    console.log("Successfully inserted missing items!");
  } catch (error) {
    console.error("Error:", error);
  }
}

insertItems();

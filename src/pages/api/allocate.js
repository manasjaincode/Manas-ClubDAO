// /pages/api/allocate.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const { task } = req.body;
  
    // Predefined executives with their expertise
    const executives = [
      { name: "Alice", expertise: ["UI Design", "Frontend Development"] },
      { name: "Bob", expertise: ["Backend Development", "API Integration"] },
      { name: "Charlie", expertise: ["Machine Learning", "Data Science"] },
      { name: "Dave", expertise: ["Project Management", "Client Communication"] },
      { name: "Eve", expertise: ["Video Editing", "Content Creation"] },
      { name: "Frank", expertise: ["Anchoring", "Event Management"] },
      { name: "Grace", expertise: ["Technical Writing", "Software Documentation"] },
    ];
  
    // Hardcoded task allocation logic based on expertise
    let assignedTo = "";
    let reason = "";
  
    switch (task) {
      case "Anchor":
        assignedTo = "Frank";
        reason = "Frank has experience in Event Management and Anchoring.";
        break;
      case "Technical Person":
        assignedTo = "Bob";
        reason = "Bob has expertise in Backend Development and API Integration.";
        break;
      case "Video Editing":
        assignedTo = "Eve";
        reason = "Eve has experience in Video Editing and Content Creation.";
        break;
      case "Event Operations":
        assignedTo = "Dave";
        reason = "Dave has experience in Project Management and Client Communication.";
        break;
      default:
        assignedTo = "Alice";
        reason = "Alice can handle tasks related to UI and Frontend Development.";
        break;
    }
  
    res.status(200).json({ assignedTo, reason });
  }
  
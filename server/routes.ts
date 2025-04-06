import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for Replit
  app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "FiLot server is running" });
  });

  // API routes
  app.get("/api/status", (req, res) => {
    res.status(200).json({ 
      status: "online", 
      name: "FiLot API",
      version: "1.0.0"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}

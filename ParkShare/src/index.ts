import { v4 as uuidv4 } from "uuid";
import { StableBTreeMap } from "azle";
import express from "express";
import { time } from "azle";

/**
 * Model data ParkSpot.
 * Represents a parking spot available in the ParkShare platform.
 */
class ParkSpot {
  id: string;
  location: string;
  owner: string;
  status: "available" | "occupied";
  createdAt: Date;
  updatedAt: Date | null;
}

const parkStorage = StableBTreeMap<string, ParkSpot>(0);

const app = express();
app.use(express.json());

/**
 * Create a new parking spot.
 */
app.post("/parkspots", (req, res) => {
  const parkSpot: ParkSpot = {
    id: uuidv4(),
    location: req.body.location,
    owner: req.body.owner,
    status: "available",
    createdAt: getCurrentDate(),
    updatedAt: null,
  };

  parkStorage.insert(parkSpot.id, parkSpot);
  res.json(parkSpot);
});

/**
 * Get all parking spots.
 */
app.get("/parkspots", (req, res) => {
  res.json(parkStorage.values());
});

/**
 * Get a parking spot by ID.
 */
app.get("/parkspots/:id", (req, res) => {
  const parkId = req.params.id;
  const parkOpt = parkStorage.get(parkId);

  if (!parkOpt) {
    res.status(404).send(`Parking spot with id=${parkId} not found`);
  } else {
    res.json(parkOpt);
  }
});

/**
 * Update parking spot status.
 */
app.put("/parkspots/:id", (req, res) => {
  const parkId = req.params.id;
  const parkOpt = parkStorage.get(parkId);

  if (!parkOpt) {
    res.status(400).send(`Parking spot with id=${parkId} not found`);
  } else {
    const updatedSpot = {
      ...parkOpt,
      ...req.body,
      updatedAt: getCurrentDate(),
    };

    parkStorage.insert(parkId, updatedSpot);
    res.json(updatedSpot);
  }
});

/**
 * Delete a parking spot.
 */
app.delete("/parkspots/:id", (req, res) => {
  const parkId = req.params.id;
  const deletedSpot = parkStorage.remove(parkId);

  if (!deletedSpot) {
    res.status(400).send(`Parking spot with id=${parkId} not found`);
  } else {
    res.json(deletedSpot);
  }
});

/**
 * Helper function to get the current date.
 */
function getCurrentDate() {
  const timestamp = new Number(time());
  return new Date(timestamp.valueOf() / 1000_000);
}

app.listen();

import mongoose from "mongoose";
import config from "config";
import logger from './logger'

const  connect = async()=> {
  const DB_URI = config.get<string>("dbUri");
  try {
      await mongoose.connect(DB_URI);
      logger.info("Connected to DB");
  } catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1);
  }
}

export default connect;

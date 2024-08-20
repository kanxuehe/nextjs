import mongoose from 'mongoose';

const connections = {};
async function connect() {
  if (connections.isConnected) return;
  // mongoose.set('strictQuery', false);
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connections.isConnected = db.connections[0].readyState;
    console.log('[Mongo Connected]: ');
  } catch (error) {
    console.error('[Failed to connect to MongoDB]:', error.message);
  }
}

async function disconnect() {
  if (connections.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connections.isConnected = false;
    } else {
      // await mongoose.disconnect();
      // connections.isConnected = false;
      console.log('not disconnected');
    }
  }
}

export const db = { connect, disconnect };

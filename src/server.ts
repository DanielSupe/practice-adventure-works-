import app from "./app";
import { sequelize } from "./config/db.config";
import { env } from "./config/env";
import { db } from "./models";
const port = env.server.port || 3000;

(async () => {
  try {
    await sequelize.sync({alter:true});
    console.log('\x1b[44m\x1b[97m🧠 DB running:\x1b[0m', Object.keys(db));

    app.listen(port, () => {
    console.log('\x1b[42m\x1b[30m✔ Server running on port %s\x1b[0m', port);
    });
  } catch (err) {
    console.error('\x1b[41m\x1b[37m\x1b[1m❌ Error starting server:\x1b[0m', err);
  }
})();
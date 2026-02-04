import {env} from "./lib/env.ts";
import app from "./app.ts";




const PORT = process.env.PORT || 10000;

app.listen(env.PORT, '0.0.0.0', () => {
    console.log(`Server running on ${PORT}`);
})
